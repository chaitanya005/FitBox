import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Hero.module.sass";
import Image from "../../../components/Image";
import ScrollButton from "../../../components/ScrollButton";
import ScrollParallax from "../../../components/ScrollParallax";

const Hero = ({ scrollToRef }) => {
  return (
    <div className={styles.hero}>
      <div className={cn("container", styles.container)}>
        <ScrollParallax className={styles.wrap}>
          <h1 className={cn("h1", styles.title)}>
            Simple fitness experience for everyone.
          </h1>
          <div className={styles.btns}>
            <Link className={cn("button", styles.button)} to="/">
              Play
            </Link>
          </div>
          <ScrollButton
            onScroll={() =>
              scrollToRef.current.scrollIntoView({ behavior: "smooth" })
            }
            className={styles.scroll}
          />
        </ScrollParallax>
        <div className={styles.gallery}>
          <ScrollParallax className={styles.preview} animateIn="fadeInUp">
            <Image
              srcSet="/images/content/watch@2x.png 2x"
              srcSetDark="/images/content/watch-dark@2x.png 2x"
              src="/images/content/watch.png"
              srcDark="/images/content/watch-dark.png"
              alt="Watch"
            />
          </ScrollParallax>
          <ScrollParallax
            className={styles.preview}
            animateIn="fadeInUp"
            delay={900}
          >
            <img
              srcSet="/images/content/basketball-color2.png 2x"
              src="/images/content/basketball-color.png"
              alt="Ball"
            />
          </ScrollParallax>
          <ScrollParallax
            className={styles.preview}
            animateIn="fadeInUp"
            delay={600}
          >
            <img
              srcSet="/images/content/bottle-color2x.png 2x"
              src="/images/content/bottle-color.png"
              alt="Bottle"
            />
          </ScrollParallax>
          <ScrollParallax
            className={styles.preview}
            animateIn="fadeInUp"
            delay={1200}
          >
            <img
              srcSet="/images/content/ball-yellow2x.png 2x"
              src="/images/content/ball-yellow.png"
              alt="Ball black"
            />
          </ScrollParallax>
        </div>
      </div>
    </div>
  );
};

export default Hero;
