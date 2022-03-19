import React, { useState } from "react";
import cn from "classnames";
import styles from "./Trainers.module.sass";
import Item from "./Item";
import Dropdown from "../../../components/Dropdown";
import ScrollParallax from "../../../components/ScrollParallax";

// data
import { coachesList } from "../../../mocks/trainers";

const Coaches = () => {
  const options = [];
  coachesList.map((x) => options.push(x.title));

  const [direction, setDirection] = useState(options[0]);

  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <h2 className={cn("h2", styles.title)}>POPULAR CLASSES</h2>
        <div className={styles.info}>
          Stacks is a production-ready library of stackable content blocks built
          in React Native.
        </div>
        <div className={styles.list}>
          {coachesList
            .find((x) => x.title === direction)
            .courses.map((x, index) => (
              <ScrollParallax key={index} className={styles.box}>
                <Item className={styles.item} item={x} />
              </ScrollParallax>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Coaches;
