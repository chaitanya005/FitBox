import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Program.module.sass";
import Icon from "../../../components/Icon";
import ScrollParallax from "../../../components/ScrollParallax";

const items = [
  {
    title: "Mental",
    url: "/",
    color: "#45B26B",
    images: "/images/content/lightning.svg",
    alt: "lightning",
  },
  {
    title: "Emotional",
    url: "/",
    color: "#9757D7",
    images: "/images/content/lightning.svg",
    alt: "lightning",
  },
  {
    title: "Physical",
    url: "/",
    color: "#3772FF",
    images: "/images/content/lightning.svg",
    alt: "lightning",
  },
  {
    title: "Spiritual",
    url: "/",
    color: "#FECC00",
    images: "/images/content/lightning.svg",
    alt: "lightning",
  },
];

const Program = () => {
  return (
    <div
      className={cn("section-pb", styles.book)}
      style={{ paddingBottom: "20px" }}
    >
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <div className={cn("h2", styles.title)}>
            Explore fitness pro program
          </div>
        </div>
        <div className={styles.wrap}>
          <div className={styles.col}>
            <div className={styles.list}>
              {items.map((x, index) => (
                <ScrollParallax className={styles.item} key={index}>
                  <Link className={styles.link} to={x.url}>
                    <div
                      className={styles.icon}
                      style={{ backgroundColor: x.color }}
                    >
                      <img src={x.images} alt={x.alt} />
                    </div>
                    <div className={styles.subtitle}>{x.title}</div>
                    <div className={styles.arrow}>
                      <Icon name="arrow-right-empty" size="14" />
                    </div>
                  </Link>
                </ScrollParallax>
              ))}
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.preview}>
              <img
                srcSet="/images/content/bottle-color-2-2.png 2x"
                src="/images/content/bottle-color-2.png"
                alt="Bottle"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;
