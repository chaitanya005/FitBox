import React from "react";
import cn from "classnames";
import styles from "./About.module.sass";
import Icon from "../../../components/Icon";
import ScrollParallax from "../../../components/ScrollParallax";

const About = ({ items, title, imgUrl, bgRequired }) => {
  return (
    <div className={cn("section-border-top", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <h2 className={cn("h2", styles.title)}>{title}</h2>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.list}>
              {items.map((x, index) => (
                <ScrollParallax className={styles.item} key={index}>
                  {x.color && (
                    <div className={styles.number} style={{ color: x.color }}>
                      0{index + 1}
                    </div>
                  )}
                  <div className={styles.subtitle}>{x.title}</div>
                  <div className={styles.content}>{x.content}</div>
                </ScrollParallax>
              ))}
            </div>
          </div>
          <div className={styles.col}>
            {bgRequired ? (
              <div className={styles.bg}>
                <img
                  srcSet="/images/content/img-container.png 2x"
                  src={imgUrl}
                  alt="About pic"
                />
                <button className={cn("play", styles.play)}>
                  <Icon name="play" size="21" />
                </button>
              </div>
            ) : (
              <img
                style={{ marginLeft: "7%" }}
                src={imgUrl}
                alt="RNT Membership"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
