import React from "react";
import cn from "classnames";
import styles from "./Clients.module.sass";
import ScrollParallax from "../ScrollParallax";

const list = [
  {
    url: "/images/content/home_4/1.png",
  },
  {
    url: "/images/content/home_4/2.png",
  },
  {
    url: "/images/content/home_4/3.png",
  },
  {
    url: "/images/content/home_4/4.png",
  },
  {
    url: "/images/content/home_4/5.png",
  },
  {
    url: "/images/content/home_4/6.png",
  },
  {
    url: "/images/content/home_4/7.png",
  },
  {
    url: "/images/content/home_4/8.png",
  },
  {
    url: "/images/content/home_4/9.png",
  },
  {
    url: "/images/content/home_4/10.png",
  },
  {
    url: "/images/content/home_4/11.png",
  },
  {
    url: "/images/content/home_4/12.png",
  },
  {
    url: "#",
  },
  {
    url: "/images/content/home_4/13.png",
  },
  {
    url: "/images/content/home_4/14.png",
  },
  {
    url: "/images/content/home_4/15.png",
  },
  {
    url: "/images/content/home_4/16.png",
  },
  {
    url: "#",
  },
];

const Clients = ({ title, listOne, listTwo }) => {
  return (
    <div className={styles.clients}>
      <div className={cn("container", styles.container)}>
        <ScrollParallax className={cn("h2", styles.title)}>
          {title}
        </ScrollParallax>
        <div className={styles.list}>
          {list.map((x, index) => (
            <div className={cn(styles.column, styles.logo)} key={index}>
              <img src={x.url} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
