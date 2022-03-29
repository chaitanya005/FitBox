import React from "react";
import cn from "classnames";
import styles from "./Quality.module.sass";
import ScrollParallax from "../../../components/ScrollParallax";
import CountUp, { useCountUp } from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const items = [
  {
    title: "Culturally-Driven",
    counter: 10,
    unit: "K",
    images: "/images/content/user-green.svg",
    alt: "user",
    content:
      "Stacks is a production-ready library of stackable content blocks built in React Native.",
  },
  {
    title: "Close-Knit Community",
    counter: 1,
    unit: "M",
    images: "/images/content/electrical-plug.svg",
    alt: "electrical-plus",
    content:
      "Stacks is a production-ready library of stackable content blocks built in React Native.",
  },
  {
    title: "Story Telling Traditions",
    counter: 50,
    unit: "K+",
    images: "/images/content/flag.svg",
    alt: "flag",
    content:
      "Stacks is a production-ready library of stackable content blocks built in React Native.",
  },
  {
    title: "Inclusive and engaged peer to peer circles",
    counter: 30,
    unit: "K+",
    images: "/images/content/facebook.svg",
    alt: "facebook",
    content:
      "Stacks is a production-ready library of stackable content blocks built in React Native.",
  },
];

const Quality = () => {
  return (
    <div className={cn("section-pb", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.list}>
          {items.map((x, index) => (
            <ScrollParallax className={styles.item} key={index}>
              <div className={styles.preview}>
                <img src={x.images} alt={x.alt} />
              </div>
              <div style={{ display: "flex" }}>
                <CountUp end={x.counter} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span className={styles.counter} ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
                <div className={styles.counter}>{x.unit}</div>
              </div>
              <div className={styles.title}>{x.title}</div>
              <div className={styles.content}>{x.content}</div>
            </ScrollParallax>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quality;
