import React from "react";
import cx from "classnames";

import styles from "./DropDown.module.scss";
import { DropDownArrow } from "@/icons";

const DropDown = ({ handleChange, selected, title, description, visible }) => {
  return (
    <div
      className={cx(styles.DropDown, { [styles.closeAccordion]: !selected })}
      onClick={handleChange}
    >
      <div className={styles.detailsContainer}>
        <div className={styles.title}>
          <p className={styles.titleText}> {title}</p>

          <div className={styles.downArrow}>
            <DropDownArrow />
          </div>
        </div>
        {selected && <p className={styles.desc}>{description}</p>}
      </div>
    </div>
  );
};

export default DropDown;
