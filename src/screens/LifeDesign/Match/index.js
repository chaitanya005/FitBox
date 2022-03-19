import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Match.module.sass";
import Slider from "react-slick";
import Icon from "../../../components/Icon";
import ScrollParallax from "../../../components/ScrollParallax";

const items = [
  {
    title: "You are a Self Starter",
    url: "/class02-details",
    image: "",
    alt: "user",
    item1: "Customised nutrition plan to suit your needs and preferences.",
    item2: "Training programme designed for all levels",
    item3: "Customised nutrition plan to suit your needs.",
  },
  {
    title: "You Belive in self Mastery",
    url: "/class02-details",
    image: "/images/content/polygon-color-1.png",
    alt: "medal",
    item1: "Customised nutrition plan to suit your needs and preferences.",
    item2: "Training programme designed for all levels",
    item3: "Customised nutrition plan to suit your needs.",
  },
  {
    title: "Not For You",
    url: "/class02-details",
    image: "/images/content/polygon-color-2.png",
    alt: "lightning",
    item1: "Customised nutrition plan to suit your needs and preferences.",
    item2: "Training programme designed for all levels",
    item3: "Customised nutrition plan to suit your needs.",
  },
];

const Match = ({ classNameTitle, title }) => {
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.top}>
          <div className={cn(styles.title, classNameTitle)}>{title}</div>
        </div>
        <div className={styles.list} style={{ display: "flex" }}>
          {items.map((x, index) => (
            <ScrollParallax key={index} className={styles.definedCard}>
              <div
                className={cn("programs-item", styles.item)}
                style={{ listStyleType: "none" }}
              >
                <div className={styles.subtitle}>{x.title}</div>
                <div className={styles.content}>
                  <div className={styles.flexItems}>
                    <img
                      className={styles.tickIcon}
                      src="/images/content/tick-icon.png"
                      alt=""
                    />
                    <li> {x.item1}</li>
                  </div>
                  <div className={styles.flexItems}>
                    <img
                      className={styles.tickIcon}
                      src="/images/content/tick-icon.png"
                      alt=""
                    />
                    <li> {x.item2}</li>
                  </div>
                  <div className={styles.flexItems}>
                    <img
                      className={styles.tickIcon}
                      src="/images/content/tick-icon.png"
                      alt=""
                    />
                    <li> {x.item3}</li>
                  </div>
                </div>
              </div>
            </ScrollParallax>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Match;
