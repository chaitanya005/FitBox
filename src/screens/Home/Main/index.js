import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Main.module.sass";
import FlipNumbers from "react-flip-numbers";

const Main = ({ className, title, text, imgUrl, btnText }) => {
  return (
    <div className={cn(className, styles.section)}>
      <div className={cn("container", styles.container)}>
        <div style={{ width: "100%" }}>
          <h2
            className={cn("h3", styles.title)}
            dangerouslySetInnerHTML={{ __html: title }}
          ></h2>
          <div
            className={styles.text}
            dangerouslySetInnerHTML={{ __html: text }}
          ></div>
          {/*  <h2>
            <div className={styles.tWrap}>
              <div className={styles.tbg}>
                <span>A</span>
              </div>
              <div className={styles.tup}>
                <div className={styles.tFront}>
                  <span>A</span>
                </div>
                <div className={styles.tBack}>
                  <span>A</span>
                </div>
                <div className={styles.tDown}>
                  <span>A</span>
                </div>
              </div>
            </div>
          </h2> */}
          <img
            src="/images/content/Revolution.png"
            alt=""
            style={{ width: "100%", marginBottom: "5%" }}
          />

          <Link className={cn("button", styles.button)} to="#">
            {btnText}
          </Link>

          <div className={styles.arrow}>
            <div className={styles.line}></div>
            <div className={styles.point}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
