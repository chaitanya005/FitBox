import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Book.module.sass";
import Icon from "../../../components/Icon";
import Image from "../../../components/Image";
import ScrollParallax from "../../../components/ScrollParallax";

const Book = ({ btnHide, title, items }) => {
  return (
    <div className={cn("", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.gallery}>
          <div className={styles.preview}>
            <Image
              srcSet="/images/content/book-pic@2x.png 2x"
              srcSetDark="/images/content/book-pic-dark@2x.png 2x"
              src="/images/content/book-pic.png"
              srcDark="/images/content/book-pic-dark.png"
              alt="Book pic"
            />
          </div>
          <ScrollParallax
            className={styles.preview}
            animateIn="fadeInUp"
            offset={300}
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
            offset={300}
          >
            <img
              srcSet="/images/content/ball-green@2x.png 2x"
              src="/images/content/ball-yellow.png"
              alt="Ball"
            />
          </ScrollParallax>
          <ScrollParallax
            className={styles.preview}
            animateIn="fadeInUp"
            offset={300}
          >
            <img
              srcSet="/images/content/dumbbells@2x.png 2x"
              src="/images/content/dumbbells.png"
              alt="Dumbbells"
            />
          </ScrollParallax>
        </div>
        <div className={styles.wrap}>
          <h2 className={cn("h2", styles.title)}>{title}</h2>
          <div className={styles.list}>
            {items.map((x, index) => (
              <div className={styles.item} key={index}>
                <div
                  className={styles.icon}
                  // style={{ backgroundColor: x.color }}
                >
                  <img src={x.images} alt={x.alt} />
                </div>
                <div className={styles.details}>
                  <div className={styles.subtitle}>{x.title}</div>
                  <div className={styles.content}>{x.content}</div>
                </div>
              </div>
            ))}
          </div>
          {!btnHide ? (
            <div className={styles.btns}>
              <Link className={cn("button", styles.button)} to="/">
                <span>Book a Class</span>
              </Link>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Book;
