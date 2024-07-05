import React, { useEffect, useState } from "react";
import styles from "./Accordion.module.scss";
import cx from "classnames";
import { DropDownArrow } from "@/icons";

const Accordion = ({ handleChange, selected, title, description, visible }) => {
  return (
    <div
      className={cx(styles.Accordion, { [styles.closeAccordion]: !selected })}
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

export default Accordion;
