import React from "react";
import styles from "./OutOfSoldLabel.module.css";

const OutOfSoldLabel = () => {
  return (
    <div>
      <label className={`${styles.label}`}>ناموجود</label>
    </div>
  );
};

export default OutOfSoldLabel;
