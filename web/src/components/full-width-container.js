import React from "react";

import styles from "./full-width-container.module.css";

const FullWidthContainer = ({ children }) => {
  return <div className={styles.rootFullWidth}>{children}</div>;
};

export default FullWidthContainer;
