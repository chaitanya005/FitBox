import React from "react";
import cn from "classnames";
import styles from "./ValueProps.module.sass";
import ScrollParallax from "../ScrollParallax";
import { Link } from "react-router-dom";

const ValueProps = ({ className, items, title }) => {
  return (
    <div className={cn(className, styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <div className={cn("stage-small", styles.stage)}></div>
          <div className={cn("h2", styles.title)}>{title}</div>
        </div>
        <div className={styles.list}>
          {items.map((x, index) => (
            <ScrollParallax className={styles.item} key={index}>
              {x.icon && (
                <div
                  className={styles.icon}
                  dangerouslySetInnerHTML={{ __html: x.icon }}
                ></div>
              )}
              {x.img && <img className={styles.icon} src={x.img} alt="" />}
              <div className={styles.category}>{x.title}</div>
              <div className={styles.content}>{x.content}</div>
            </ScrollParallax>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ValueProps;
