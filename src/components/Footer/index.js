import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import cn from "classnames";
import styles from "./Footer.module.sass";
import Subscription from "../Subscription";
import Theme from "../Theme";
import Icon from "../Icon";
import Image from "../Image";

const menu = [
  {
    title: "Life Design",
    url: "/life-design",
  },
  {
    title: "Community Desgin",
    url: "/community-design",
  },
  {
    title: "Future Desgin",
    url: "/future-design",
  },
  {
    title: "About Us",
    url: "/about",
  },
  {
    title: "Stories",
    url: "/stories",
  },
];

const subMenu = [
  {
    title: "Become a Affiliate",
    url: "/",
  },
  {
    title: "Become a Sponsor",
    url: "/",
  },
  {
    title: "Hire us to speak",
    url: "/",
  },
  {
    title: "Private Coaching",
    url: "/",
  },
  {
    title: "Log In / Sign Up",
    url: "/",
  },
];

const subMenuTwo = [
  {
    title: "Corportate",
    url: "/",
  },
  {
    title: "Franchisee",
    url: "/",
  },
  {
    title: "Advertise with us",
    url: "/",
  },
  {
    title: "Report a bug",
    url: "/",
  },
];

const socials = [
  {
    title: "facebook",
    size: "16",
    url: "https://www.facebook.com/ui8.net/",
  },
  {
    title: "twitter",
    size: "18",
    url: "https://twitter.com/ui8",
  },
  {
    title: "instagram",
    size: "16",
    url: "https://www.instagram.com/ui8net/",
  },
  {
    title: "dribbble",
    size: "16",
    url: "https://dribbble.com/ui8",
  },
  {
    title: "behance",
    size: "20",
    url: "https://www.behance.net/ui8",
  },
];

const Footer = () => {
  const [visible, setVisible] = useState(true);

  return (
    <footer className={styles.footer}>
      <div className={styles.body}>
        <div className={cn("container", styles.container)}>
          <div className={styles.col}>
            <div className={styles.box}>
              <Link className={styles.logo} to="/">
                <Image
                  className={styles.pic}
                  src="/images/content/logo_updated.png"
                  srcDark="/images/content/logo_updated.png"
                  alt="Fitness Pro"
                />
              </Link>
              <Theme className={styles.theme} />
            </div>
            <div className={cn(styles.item, { [styles.active]: visible })}>
              <div
                className={styles.category}
                onClick={() => setVisible(!visible)}
              >
                footer nav
                <Icon name="arrow-bottom" size="9" />
              </div>
              <div className={styles.menu}>
                {menu.map((x, index) => (
                  <NavLink
                    className={styles.link}
                    activeClassName={styles.active}
                    to={x.url}
                    key={index}
                  >
                    {x.title}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.col}>
            <div className={cn(styles.item, { [styles.active]: visible })}>
              <div className={styles.menu}>
                {subMenu.map((x, index) => (
                  <NavLink
                    className={styles.link}
                    activeClassName={styles.active}
                    to={x.url}
                    key={index}
                  >
                    {x.title}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.col}>
            <div className={cn(styles.item, { [styles.active]: visible })}>
              <div className={styles.menu}>
                {subMenuTwo.map((x, index) => (
                  <NavLink
                    className={styles.link}
                    activeClassName={styles.active}
                    to={x.url}
                    key={index}
                  >
                    {x.title}
                  </NavLink>
                ))}
              </div>
            </div>
            {/* <div className={styles.category}>newsletter</div>
            <div className={styles.info}>
              Subscribe our newsletter to get more free design course and
              resource.
            </div>
            <Subscription
              className={styles.subscription}
              placeholder="Enter your email"
            /> */}
          </div>
        </div>
        <div className={cn("container", styles.container)}>
          <div className={styles.footerSub}>
            <div className={styles.fitBox}>FIXBOX LIFE DESGIN</div>
            <div className={styles.info}>
              Download our Fitbox Life Desgin brochure to get more information
            </div>
            <Subscription
              className={styles.subscription}
              placeholder="Enter your email"
            />
          </div>
        </div>
      </div>
      <div className={styles.foot}>
        <div
          className={cn("container", styles.container, styles.copycontainer)}
        >
          <div className={styles.copyright}>
            Copyright © 2022 FITBOX All rights reserved
          </div>
          <div className={styles.socials}>
            {socials.map((x, index) => (
              <a
                className={styles.social}
                href={x.url}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
              >
                <Icon name={x.title} size={x.size} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
