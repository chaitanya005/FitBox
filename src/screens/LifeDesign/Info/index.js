import React from "react";
import cn from "classnames";
import styles from "./Info.module.sass";

const Info = ({ className, title, text, imgUrl, btnText }) => {
  return (
    <div className={cn(className, styles.section)}>
      <div className={cn("container", styles.container)}>
        <img src={imgUrl} alt="" />
        <br />
        <br />
        <h2 className={cn("h2", styles.title)}>{title}</h2>
        <div
          className={styles.text}
          dangerouslySetInnerHTML={{ __html: text }}
        ></div>
      </div>
    </div>
  );
};

export default Info;
