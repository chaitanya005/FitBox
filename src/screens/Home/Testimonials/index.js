import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Testimonails.module.sass";
import Slider from "react-slick";
import Icon from "../../../components/Icon";
import ScrollParallax from "../../../components/ScrollParallax";
// import { coachesList } from "../../../mocks/trainers";
import Item from "./Item";

const items = [
  {
    title: "Beginners",
    url: "/class02-details",
    color: "#45B26B",
    image: "/images/content/user.svg",
    alt: "user",
    name: "Baron Toy",
    userImg: "/images/content/avatar-1.png",
    position: "Yoga Master",
    content:
      "Fitbox is a powerful app that can connect a lot of services I'm using, it is very flexible.",
  },
  {
    title: "Advanced",
    url: "/class02-details",
    color: "#9757D7",
    image: "/images/content/medal-1.svg",
    alt: "medal",
    name: "Kacie Kiehn",
    userImg: "/images/content/avatar-2.png",
    position: "Yoga Master",
    content:
      "Fitbox is a powerful app that can connect a lot of services I'm using, it is very flexible.",
  },
  {
    title: "Premium",
    url: "/class02-details",
    color: "#3772FF",
    image: "/images/content/lightning.svg",
    alt: "lightning",
    name: "Marcelino Hettinger",
    userImg: "/images/content/avatar-3.png",
    position: "Yoga Master",
    content:
      "Fitbox is a powerful app that can connect a lot of services I'm using, it is very flexible.",
  },
];

const courses = [
  {
    name: "Baron Toy",
    image: "/images/content/avatar-1.png",
    position: "Yoga Master",
  },
  {
    name: "Kacie Kiehn",
    image: "/images/content/avatar-2.png",
    position: "Yoga Master",
  },
  {
    name: "Marcelino Hettinger",
    image: "/images/content/avatar-3.png",
    position: "Yoga Master",
  },
  {
    name: "Rosemarie Hintz",
    image: "/images/content/avatar-4.png",
    position: "Yoga Master",
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

  // console.log(courses);

  return (
    <div className={cn(classNameSection, styles.section)}>
      <div className={styles.anchor} ref={scrollToRef}></div>
      <div className={cn("container", styles.container)}>
        <div className={styles.top}>
          <div className={cn(styles.title, "h2")}>
            {"Celebrity influencer opinion"}
          </div>
        </div>
        <div className={styles.wrap}>
          <Slider className="programs-slider" {...settings}>
            {items.map((x, index) => (
              <>
                <ScrollParallax className={styles.slide} key={index}>
                  <div className={cn(styles.programsItem, styles.item)}>
                    <div className={styles.content}>
                      {x.content}
                      <br />
                      <div style={{ marginTop: "2%" }}>
                        <div className={styles.clipStar}></div>
                        <div className={styles.clipStar}></div>
                        <div className={styles.clipStar}></div>
                        <div className={styles.clipStar}></div>
                        <div className={styles.clipStar}></div>
                      </div>
                    </div>
                  </div>
                  <Item className={styles.item} item={x} />
                </ScrollParallax>
              </>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Programs;
