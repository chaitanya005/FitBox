import React from "react";
import cn from "classnames";
import styles from "./Video.module.sass";
import Icon from "../../../components/Icon";
// import Play from "../../../components/Play";

const Video = ({ imgUrl, title }) => {
  return (
    <div className={cn("section", styles.main)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <h1 className={cn("h1", styles.title)}>{title}</h1>
          {/* <div className={styles.info}>A Beginner’s Guide to Trading View</div> */}
        </div>
        <div className={styles.video}>
          <img src={imgUrl} alt="Preview" />
          <button className={cn("play", styles.play)}>
            <Icon name="play" size="21" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Video;
