import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Offer.module.sass";

const Offer = ({ className, title, text, imgUrl, btnText }) => {
  return (
    <div className={cn(className, styles.section)}>
      <div className={cn("container", styles.container)}>
        <img src={imgUrl} alt="" />
        <h2 className={cn("h3", styles.title)}>{title}</h2>
        <div
          className={styles.text}
          dangerouslySetInnerHTML={{ __html: text }}
        ></div>
        <Link className={cn("button", styles.button)} to="#">
          {btnText}
        </Link>
      </div>
    </div>
  );
};

export default Offer;
