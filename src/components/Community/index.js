import React from "react";
import cn from "classnames";
import styles from "./Community.module.sass";
import Subscription from "../Subscription";
import Image from "../Image";
import Icon from "../Icon";

const Community = () => {
  return (
    <div className={cn("section-pb", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.preview}>
          <Image
            srcSet="/images/content/illustration.png 2x"
            srcSetDark="/images/content/illustration.png 2x"
            src="/images/content/illustration.png"
            srcDark="/images/content/illustration.png"
            alt="Dumbbell"
          />
          <div className={cn("stage-small", styles.stage)}></div>
          <h2 className={cn("h2", styles.title)}></h2>
          <div className={styles.text}></div>
          <Subscription
            className={styles.subscription}
            placeholder="Enter your email"
          />
          <div className={styles.note}>
            By click sign in you, you agree with Stacks <a href="/#">terms</a>{" "}
            and <a href="/#">policy</a>
          </div>
        </div>
        <div className={styles.bg}>
          <img
            srcSet="/images/content/about-pic@2x.png 2x"
            src="/images/content/img-container.png"
            alt="About pic"
          />
          <button className={cn("play", styles.play)}>
            <Icon name="play" size="21" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Community;
