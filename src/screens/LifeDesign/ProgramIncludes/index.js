import React from "react";
import cn from "classnames";
import styles from "./ProgramIncludes.module.sass";
import Image from "../../../components/Image";

const items = [
  {
    title: "For the beginners",
    color: "#45B26B",
    images: "/images/content/user.svg",
    alt: "user",
    content: "You never workout before, it’s now a good start",
  },
  {
    title: "Advanced classes",
    color: "#9757D7",
    images: "/images/content/medal-1.svg",
    alt: "medal",
    content: "You never workout before, it’s now a good start",
  },
  {
    title: "Premium (limited)",
    color: "#3772FF",
    images: "/images/content/lightning.svg",
    alt: "lightning",
    content: "You never workout before, it’s now a good start",
  },
];

let content =
  "<p>Customized nutrition plan to suit your needs and preferneces</p> <br /> <p> Training programme designed for all levels and equipment (including home workous!) </p> <br /> <p>Utilize our unique and proven five phase methodology to get you in shape fast, then give you all the tools to stay there for life.</p>";

const ProgramIncludes = ({ imgUrl }) => {
  return (
    <div className={cn("", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.gallery}>
          <div className={styles.preview}>
            <Image
              srcSet={`${imgUrl} 2x`}
              srcSetDark={`${imgUrl} 2x`}
              src={imgUrl}
              srcDark={imgUrl}
              alt="Program Includes"
            />
          </div>
        </div>
        <div className={styles.wrap}>
          <div className={styles.list}>
            <div className={styles.item}>
              <div className={styles.details}>
                <div className={styles.number}>0{1}</div>
                <div className={cn("h4", styles.title)}>
                  Personalized Transformation Programme
                </div>
                <div
                  className={styles.content}
                  dangerouslySetInnerHTML={{ __html: content }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramIncludes;
