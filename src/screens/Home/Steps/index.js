import React from "react";
import cn from "classnames";
import styles from "./Steps.module.sass";
import ScrollParallax from "../../../components/ScrollParallax";

const items = [
  {
    title: "Dream",
    color: "#3772FF",
    images: "/images/content/steps/1.png",
    content:
      "It all starts with a dream, an imagination. We help you dream, Imagine and visualize an enriched and fulfilling life with our evalution test.",
  },
  {
    title: "Design",
    color: "#9757D7",
    images: "/images/content/steps/2.png",
    content:
      "Design your goals and your ideal life with the help of our mental, nutritional and physical coaches",
  },
  {
    title: "Plan",
    color: "#EF466F",
    images: "/images/content/steps/3.png",
    content:
      "Get a custom routine, program and diet that balances all the aspects of fitness based on your specific goals.",
  },
  {
    title: "Execute",
    color: "#45B26B",
    images: "/images/content/steps/4.png",
    content:
      "Consistently work towards your goals with complete accountability from your coaches and perfect your life design.",
  },
];

const Steps = ({ scrollToRef }) => {
  return (
    <div className={cn("section", styles.section)} ref={scrollToRef}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <h2 className={cn("h2", styles.title)}>How it work</h2>
          <div className={styles.info}>
            Help us design your life for greatness!
          </div>
        </div>
        <div className={styles.list}>
          {items.map((x, index) => (
            <ScrollParallax className={styles.item} key={index}>
              <div
                className={styles.preview}
                // style={{ backgroundColor: x.color }}
              >
                <img src={x.images} alt={`Step ${index}`} />
              </div>
              <div className={styles.number} style={{ color: x.color }}>
                Step {index + 1}
              </div>
              <div className={styles.subtitle}>{x.title}</div>
              <div className={styles.content}>{x.content}</div>
            </ScrollParallax>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Steps;
