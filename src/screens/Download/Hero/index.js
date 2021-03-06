import React from "react";
import cn from "classnames";
import styles from "./Hero.module.sass";
import Subscription from "../../../components/Subscription";
import Image from "../../../components/Image";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={cn("container", styles.container)}>
        <div className={styles.col}>
          <div className={styles.preview}>
            <Image
              srcSet="/images/content/about-color.png 2x"
              srcSetDark="/images/content/about-color.png 2x"
              src="/images/content/about-color.png"
              srcDark="/images/content/about-color.png"
              alt="Download bg"
            />
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.wrap}>
            <div className={cn("stage", styles.stage)}></div>
            <h1 className={cn("h1", styles.title)}>
              Fitness Pro for any device.
            </h1>
            <div className={styles.text}>
              Track your workouts, get better results, and be the best version
              of you. Less thinking, more lifting.
            </div>
            {/* <Subscription
              className={styles.subscription}
              placeholder="Enter your email"
            /> */}
            <Link to="/" className={cn("button", styles.button)}>
              Click Here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
