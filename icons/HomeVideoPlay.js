import * as React from "react";
const HomeVideoPlay = ({ props, fill, circleFill }) => (
  <svg
    width={51}
    height={52}
    viewBox="0 0 51 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={25.5} cy={25.8164} r={25.5} fill={circleFill || "white"} />
    <path
      d="M21 33.3164V19.3164L32 26.3164L21 33.3164Z"
      fill={fill || "#3C3C3C"}
    />
    <path
      d="M21 33.3164V19.3164L32 26.3164L21 33.3164Z"
      fill={fill || "white"}
    />
  </svg>
);
export default HomeVideoPlay;
