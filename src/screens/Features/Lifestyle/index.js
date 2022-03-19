import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import styles from "./Lifestyle.module.sass";
import Icon from "../../../components/Icon";
import ScrollParallax from "../../../components/ScrollParallax";

const items = [
  {
    title: "Quality of life analysis ",
    image: "/images/content/lifestyle-pic-1.png",
    image2x: "/images/content/lifestyle-pic-1@2x.png",
    content:
      "Whether you’re a complete beginner or you want to step up your routine, get the full studio experience at home with thousands of classes for body, mind.",
    color: "#9757D7",
  },
  {
    title: "Regular performance mapping with physical tests",
    image: "/images/content/lifestyle-pic-2.png",
    image2x: "/images/content/lifestyle-pic-2@2x.png",
    content:
      "Whether you’re a complete beginner or you want to step up your routine, get the full studio experience at home with thousands of classes for body, mind.",
    color: "#EF466F",
  },
  {
    title: " Gratitude Interrogation",
    image: "/images/content/lifestyle-pic-3.png",
    image2x: "/images/content/lifestyle-pic-3@2x.png",
    content:
      "Whether you’re a complete beginner or you want to step up your routine, get the full studio experience at home with thousands of classes for body, mind.",
    color: "#45B26B",
  },
  {
    title: "Daily To-Do’s",
    image: "/images/content/lifestyle-pic-2.png",
    image2x: "/images/content/lifestyle-pic-2@2x.png",
    content:
      "Whether you’re a complete beginner or you want to step up your routine, get the full studio experience at home with thousands of classes for body, mind.",
    color: "#3772FF",
  },
];

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const Lifestyle = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: (
      <SlickArrow>
        <Icon name="arrow-next" size="14" />
      </SlickArrow>
    ),
    prevArrow: (
      <SlickArrow>
        <Icon name="arrow-prev" size="14" />
      </SlickArrow>
    ),
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 100000,
        settings: "unslick",
      },
    ],
  };

  return (
    <div className={cn("section-pb", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <h2 className={cn("h2", styles.title)}>Fit for your life style</h2>
          <div className={styles.info}>
            Get started with two free weeks of unlimited yoga, fitness, and
            meditation classes.{" "}
          </div>
        </div>
        <div className={styles.wrap}>
          <Slider
            className={cn("lifestyle-slider", styles.slider)}
            {...settings}
          >
            {items.map((x, index) => (
              <ScrollParallax className={styles.item} key={index}>
                <div className={styles.row}>
                  <div className={styles.col}>
                    <div className={styles.details}>
                      <div className={styles.number} style={{ color: x.color }}>
                        0{index + 1}.
                      </div>
                      <div className={styles.category}>{x.title}</div>
                      <div className={styles.content}>{x.content}</div>
                    </div>
                  </div>
                  <div className={styles.col}>
                    <img
                      srcSet={`${x.image2x} 2x`}
                      src={x.image}
                      alt="Lifestyle"
                    />
                  </div>
                </div>
              </ScrollParallax>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Lifestyle;
