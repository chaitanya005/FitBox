import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Intro.module.sass";
import ScrollParallax from "../ScrollParallax";

const Intro = ({ scrollToRef }) => {
  return (
    <div className={styles.section} ref={scrollToRef}>
      <div className={cn("container", styles.container)}>
        <div className={styles.gallery}>
          <ScrollParallax className={styles.preview} animateIn="fadeInUp">
            <img
              srcSet="/images/content/bag-color2.png 2x"
              src="/images/content/bag-color.png"
              alt="Bag"
            />
          </ScrollParallax>
          <ScrollParallax className={styles.preview} animateIn="fadeInUp">
            <img
              srcSet="/images/content/boxing-gloves2.png 2x"
              src="/images/content/boxing-gloves.png"
              alt="Gloves"
            />
          </ScrollParallax>
          <ScrollParallax className={styles.preview} animateIn="fadeInUp">
            <img
              srcSet="/images/content/bottle-color-1@2.png 2x"
              src="/images/content/bottle-color-1.png"
              alt="Bottle"
            />
          </ScrollParallax>
        </div>
        <div className={styles.wrap}>
          <h2 className={cn("h1", styles.title)}>
            Train smarter, get stronger.
          </h2>
          <div className={styles.text}>
            Fitness Pro helps track your workouts, get better results, and be
            the best version of you. Less thinking, more lifting 🔥🏀
          </div>
          <Link className={cn("button", styles.button)} to="/">
            Take a test
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Intro;
