import React from "react";
import cn from "classnames";
import Slider from "react-slick";
import Icon from "../Icon";
import styles from "./Review.module.sass";

const items = [
  {
    author: "Dorthy Runolfsdottir",
    position: "Lead Visual Designer at UI8",
    logo: "./images/content/velocity9.svg",
    comment:
      "This is the single greatest thing to happen in Fitness, after the advent of dumbells",
    image: "/images/content/avatar-1.png",
  },
  {
    author: "Dorthy Runolfsdottir",
    position: "Lead Visual Designer at UI8",
    logo: "./images/content/travelers.svg",
    comment:
      "If you have not tried the Life Design program, believe me, you are living in a cocoon",
    image: "/images/content/avatar-2.png",
  },
  {
    author: "Dorthy Runolfsdottir",
    position: "Lead Visual Designer at UI8",
    logo: "./images/content/goldlines.svg",
    comment:
      "Life Design has shown me the unbelievable impact of Life Choices on my mind, body and soul.",
    image: "/images/content/avatar-2.png",
  },
];

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const Review = ({ className }) => {
  const settings = {
    infinite: false,
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
  };

  return (
    <div className={cn(className, styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrap}>
          <Slider className="review-slider" {...settings}>
            {items.map((x, index) => (
              <div className={styles.slide} key={index}>
                <div className={cn("review-item", styles.item, styles.flex)}>
                  <div className={styles.avatar}>
                    <img src={x.image} alt="Avatar" />
                  </div>
                  <div className={styles.title}>{x.comment}</div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Review;
