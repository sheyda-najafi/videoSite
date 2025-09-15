import React from "react";

import styles from "./styles.module.scss";

const Loader = ({ className = "", containerclassname = "" }) => {
  return (
    <div className={`${styles.wrapper} ${containerclassname}`}>
      <span className={` ${styles.loader} ${className}`}></span>
    </div>
  );
};

export default Loader;
