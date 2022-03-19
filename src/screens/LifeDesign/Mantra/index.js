import React from "react";
import cn from "classnames";
import styles from "./Mantra.module.sass";
import Icon from "../../../components/Icon";
import ScrollParallax from "../../../components/ScrollParallax";

const items = [
  {
    title: "Driving Results",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    color: "#FF592C",
    image: "/images/content/apple.svg",
    status: "black",
    statusContent: "updated",
  },
  {
    title: "Accountability",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    color: "#45B26B",
    image: "/images/content/windows.svg",
    status: "green",
    statusContent: "coming soon",
  },
];

const Mantra = () => {
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <h2 className={cn("h2", styles.title)}>Fit Mantra</h2>
        <div className={styles.list}>
          {items.map((x, index) => (
            <ScrollParallax className={styles.item} key={index}>
              <div
                className={styles.preview}
                style={{ backgroundColor: x.color }}
              >
                <img src={x.image} alt="Logo" />
              </div>
              <div className={styles.details}>
                <div className={styles.subtitle}>{x.title}</div>
                <div className={styles.description}>{x.description}</div>
              </div>
            </ScrollParallax>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mantra;
