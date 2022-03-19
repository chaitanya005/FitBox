import React from "react";
import cn from "classnames";
import styles from "./Explore.module.sass";
import Icon from "../../../components/Icon";
import ScrollParallax from "../../../components/ScrollParallax";

const items = [
  {
    description:
      "Stacks is a prodcution-ready library of stackable content blocks built in React Native.",
  },
  {
    description:
      "Stacks is a prodcution-ready library of stackable content blocks built in React Native.",
  },
  {
    description:
      "Stacks is a prodcution-ready library of stackable content blocks built in React Native.",
  },
  {
    description:
      "Stacks is a prodcution-ready library of stackable content blocks built in React Native.",
  },
  {
    description:
      "Stacks is a prodcution-ready library of stackable content blocks built in React Native.",
  },
  {
    description:
      "Stacks is a prodcution-ready library of stackable content blocks built in React Native.",
  },
  {
    description:
      "Stacks is a prodcution-ready library of stackable content blocks built in React Native.",
  },
  {
    description:
      "Stacks is a prodcution-ready library of stackable content blocks built in React Native.",
  },
];

const Explore = () => {
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <h2 className={cn("h2", styles.title)}>Explore Fitness Program</h2>
        <div className={styles.list}>
          {items.map((x, index) => (
            <ScrollParallax className={styles.item} key={index}>
              <div
                className={styles.details}
                style={{ display: "flex", alignItems: "center" }}
              >
                <img
                  src="/images/content/rect-color.png"
                  alt=""
                  style={{ height: "100%", marginRight: "5%" }}
                />
                <div
                  className={styles.description}
                  dangerouslySetInnerHTML={{ __html: x.description }}
                ></div>
              </div>
            </ScrollParallax>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
