import React, { useEffect, useRef } from "react";
import { useRouter } from "next/router";

import styles from "./Cursor1.module.scss";
import cursorStore from "@/zustand/cursor.store";
import { checkMobile } from "@/general.helpers";
//
const lerp = (s, e, t) => (1 - t) * s + t * e;
//
const lineToPointDistance = (x, y, x1, y1, x2, y2) => {
  var A = x - x1;
  var B = y - y1;
  var C = x2 - x1;
  var D = y2 - y1;

  var dot = A * C + B * D;
  var len_sq = C * C + D * D;
  var param = -1;
  if (len_sq != 0)
    //in case of 0 length line
    param = dot / len_sq;

  var xx, yy;

  if (param < 0) {
    xx = x1;
    yy = y1;
  } else if (param > 1) {
    xx = x2;
    yy = y2;
  } else {
    xx = x1 + param * C;
    yy = y1 + param * D;
  }

  var dx = x - xx;
  var dy = y - yy;
  return Math.sqrt(dx * dx + dy * dy);
};

// * Is Point inside the Suqre ? and the distance of the point to the square
const isPointInsideSquare = (
  point = { x: 0, y: 0 },
  squre = { x: 0, y: 0, width: 0, height: 0 }
) => {
  const mx = point.x;
  const my = point.y;
  let hover = false;

  // * Is Point inside the Suqre ?
  if (
    mx > squre.x &&
    mx < squre.x + squre.width &&
    my > squre.y &&
    my < squre.y + squre.height
  )
    hover = true;
  //
  // * the distance of the point to the square
  let distance = lineToPointDistance(
    mx,
    my,
    squre.x,
    squre.y,
    squre.x + squre.width,
    squre.y
  );
  distance = Math.min(
    distance,
    lineToPointDistance(
      mx,
      my,
      squre.x,
      squre.y,
      squre.x,
      squre.y + squre.height
    )
  );
  distance = Math.min(
    distance,
    lineToPointDistance(
      mx,
      my,
      squre.x + squre.width,
      squre.y,
      squre.x + squre.width,
      squre.y + squre.height
    )
  );
  distance = Math.min(
    distance,
    lineToPointDistance(
      mx,
      my,
      squre.x,
      squre.y + squre.height,
      squre.x + squre.width,
      squre.y + squre.height
    )
  );
  //
  return { hover, distance };
};

const Cursor1 = (props) => {
  const { squresRefs } = cursorStore();

  //
  const cursorPositionRef = useRef({ x: 0, y: 0 });
  const cursorRef = useRef(null);
  const oldMousePoint = useRef({ x: 0, y: 0 });
  const skwishRef = useRef(0);
  //
  const router = useRouter();

  useEffect(() => {
    const render = () => {
      cursorPositionRef.current.x = lerp(
        cursorPositionRef.current.x,
        oldMousePoint.current.x,
        0.06
      );
      cursorPositionRef.current.y = lerp(
        cursorPositionRef.current.y,
        oldMousePoint.current.y,
        0.07
      );
      const normalX = Math.min(
        Math.floor(
          (Math.abs(oldMousePoint.current.x - cursorPositionRef.current.x) /
            cursorPositionRef.current.x) *
            1000
        ) / 1000,
        1
      );
      const normalY = Math.min(
        Math.floor(
          (Math.abs(oldMousePoint.current.y - cursorPositionRef.current.y) /
            cursorPositionRef.current.y) *
            1000
        ) / 1000,
        1
      );
      const normal = normalX * 0.7 + normalY * 0.6; // check
      let skwish = normal * 0.7; // check
      skwish = skwish ? skwish : 0;
      skwishRef.current = skwish;

      // * Cursoe fallback
      if (!cursorRef.current) {
        requestAnimationFrame(render);
        return;
      }
      // * Cursor hover
      let hover = 0;
      let inDistance = 80;
      if (squresRefs[router.pathname]) {
        for (let i = 0; i < squresRefs[router.pathname].length; i++) {
          const parentsqureRefs = squresRefs[router.pathname][i]?.wrapper;
          let parentHover = true;
          if (parentsqureRefs?.length) {
            for (let j = 0; j < parentsqureRefs.length; j++) {
              const parentsqureRef = parentsqureRefs[j];
              const parentsqure = parentsqureRef?.getBoundingClientRect();
              if (parentsqure) {
                const { hover: h } = isPointInsideSquare(
                  oldMousePoint.current,
                  parentsqure
                );
                if (!h) parentHover = false;
              }
            }
          }
          if (!parentHover) continue;
          for (
            let j = 0;
            j < squresRefs[router.pathname][i]?.elements.length;
            j++
          ) {
            const squre =
              squresRefs[router.pathname][i]?.elements[
                j
              ]?.getBoundingClientRect();
            if (!squre) continue;
            const { hover: h, distance } = isPointInsideSquare(
              oldMousePoint.current,
              squre
            );
            if (h) {
              hover = 1;
              inDistance = Math.min(distance, inDistance);
              break;
            }
          }
          if (hover) break;
        }
      }

      // * Cursor scale
      let scale = 0;
      if (hover) scale = inDistance / 80;
      //
      // * This calculates the Scale of the cursor
      scale = Math.min(
        1 -
          (skwishRef.current > 0.01 ? Math.min(skwishRef.current, 0.4) * 5 : 0),
        scale
      );
      if (scale < 0) scale = 0;
      // const lScale = lerp(scale.current.old, scale.current.now, 0.15);

      // * Update cursor position and scale
      cursorRef.current.style.transform = `translate3d(${cursorPositionRef.current.x}px, ${cursorPositionRef.current.y}px, 0) scale(${scale})`;

      requestAnimationFrame(render);
    };

    const onMosueMove = (e) => {
      oldMousePoint.current.x = e.clientX;
      oldMousePoint.current.y = e.clientY;
    };

    document.addEventListener("mousemove", onMosueMove);
    if (!checkMobile()) requestAnimationFrame(render);
    else cursorRef.current.style.display = "none";
    return () => {
      document.removeEventListener("mousemove", onMosueMove);
      cancelAnimationFrame(render);
    };
  }, [squresRefs, router.pathname]);
  return (
    <div className={styles.Cursor1} ref={cursorRef} {...props}>
      <p>{props.text || "EXPLORE"}</p>
    </div>
  );
};

export default Cursor1;
