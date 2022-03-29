import React, { useState } from "react";
import cn from "classnames";
import styles from "./Item.module.sass";

const Item = ({ className, item }) => {
  return (
    <>
      <div className={cn(styles.item, className)}>
        <div className={styles.avatar}>
          <img src={item.userImg} alt="Avatar" />
        </div>
        <div className={styles.man}>{item.name}</div>
        <div className={styles.position}>{item.position}</div>
      </div>
    </>
  );
};

export default Item;
