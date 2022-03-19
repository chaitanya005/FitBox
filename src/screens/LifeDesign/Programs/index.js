import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Programs.module.sass";
import Slider from "react-slick";
import Icon from "../../../components/Icon";
import ScrollParallax from "../../../components/ScrollParallax";

const items = [
  {
    title: "Quarterly sports Events",
    url: "/class02-details",
    image: "/images/content/polygon-color-4.png",
    alt: "user",
    content:
      "A 7-days training program designed to boost your strength & endurance over the course of a week.",
  },
  {
    title: "Quarterly strength mania",
    url: "/class02-details",
    image: "/images/content/polygon-color-1.png",
    alt: "medal",
    content:
      "A 7-days training program designed to boost your strength & endurance over the course of a week.",
  },
  {
    title: "Quarterly treks",
    url: "/class02-details",
    image: "/images/content/polygon-color-2.png",
    alt: "lightning",
    content:
      "A 7-days training program designed to boost your strength & endurance over the course of a week.",
  },
  {
    title: "Quarterly Events",
    url: "/class02-details",
    image: "/images/content/polygon-color-1.png",
    alt: "user",
    content:
      "A 7-days training program designed to boost your strength & endurance over the course of a week.",
  },
  {
    title: "Monthly BMI",
    url: "/class02-details",
    image: "/images/content/polygon-color-2.png",
    alt: "medal",
    content:
      "A 7-days training program designed to boost your strength & endurance over the course of a week.",
  },
  {
    title: "Social Charity Events",
    url: "/class02-details",
    image: "/images/content/polygon-color-4.png",
    alt: "lightning",
    content:
      "A 7-days training program designed to boost your strength & endurance over the course of a week.",
  },
  {
    title: "Weekly event Nights",
    url: "/class02-details",
    image: "/images/content/polygon-color-4.png",
    alt: "user",
    content:
      "A 7-days training program designed to boost your strength & endurance over the course of a week.",
  },
  {
    title: "Seminars & Workshops",
    url: "/class02-details",
    image: "/images/content/polygon-color-2.png",
    alt: "medal",
    content:
      "A 7-days training program designed to boost your strength & endurance over the course of a week.",
  },
  {
    title: "Awards and Rewards.",
    url: "/class02-details",
    image: "/images/content/polygon-color-1.png",
    alt: "lightning",
    content:
      "A 7-days training program designed to boost your strength & endurance over the course of a week.",
  },
];

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const Programs = ({ classNameTitle, title, classNameSection, scrollToRef }) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
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
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.top}>
          <div className={cn(styles.title, classNameTitle)}>{title}</div>
        </div>
        <div className={styles.list} style={{ display: "flex" }}>
          {items.map((x, index) => (
            <ScrollParallax key={index} className={styles.definedCard}>
              <div className={cn("programs-item", styles.item)}>
                <div
                  className={styles.icon}
                  style={{ backgroundColor: x.color }}
                >
                  <img src={x.image} alt={x.alt} />
                </div>
                <div className={styles.subtitle}>{x.title}</div>
                <div className={styles.content}>{x.content}</div>
              </div>
            </ScrollParallax>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;
