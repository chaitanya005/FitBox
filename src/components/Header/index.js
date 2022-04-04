import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import cn from "classnames";
import styles from "./Header.module.sass";
import DropdownMenu from "./DropdownMenu";
import Icon from "../Icon";
import Image from "../Image";
import Dropdown from "./Dropdown";

const navLinks = [
  {
    title: "Product",
    dropdown: [
      {
        title: "Life Design",
        // icon: "user",
        url: "/life-design",
      },
      {
        title: "Future Design",
        // icon: "user",
        url: "/life-design",
      },
      {
        title: "Community Design",
        // icon: "user",
        url: "/life-design",
      },
      {
        title: "Conscience Design",
        // icon: "user",
        url: "/life-design",
      },
    ],
  },
  {
    title: "SERVICES",
    dropdown: [
      {
        title: "Find a Life Design Coach",
        url: "/",
      },
      {
        title: "Find a Life Design Trainer",
        url: "/",
      },
      {
        title: "Online Workout Training",
        url: "/",
      },
    ],
  },
  {
    title: "Shop",
    dropdown: [
      {
        title: "Accessories",
        url: "/",
      },
      {
        title: "Supplements",
        url: "/",
      },
      {
        title: "Merchandise",
        url: "/",
      },
    ],
  },
  {
    title: "RESOURCES",
    dropdown: [
      {
        title: "Customer Stoties",
        url: "/customer-stories",
      },
      {
        title: "Coach Stories",
        url: "/coach-stories",
      },
      {
        title: "Events",
        url: "/events",
      },
      {
        title: "Institutional Stories",
        url: "/instituitional-stories",
      },
      {
        title: "Press",
        url: "/press",
      },
      {
        title: "Reports",
        url: "/reports",
      },
      {
        title: "Fit Mafia",
        url: "/fit-mafia",
      },
    ],
  },
  {
    title: "ABOUT",
    url: "/about",
  },
];

const socials = [
  {
    title: "youtube",
    size: "16",
    url: "#",
  },
  {
    title: "facebook",
    size: "16",
    url: "#",
  },
  {
    title: "twitter",
    size: "18",
    url: "#",
  },
  {
    title: "instagram",
    size: "16",
    url: "#",
  },
];

const contact = [
  {
    title: "Montanachester",
    content: "06787 Block Estates",
  },
  {
    title: "Lake Gene",
    content: "167 Emard River",
  },
  {
    title: "North Hassiefort",
    content: "032 Leonora Spurs",
  },
];

const Headers = () => {
  const [visibleNav, setVisibleNav] = useState(false);

  return (
    <header className={styles.header}>
      <div className={cn("container", styles.container)}>
        <Link
          className={styles.logo}
          to="/"
          onClick={() => setVisibleNav(false)}
        >
          <Image
            className={styles.pic}
            src="/images/content/logo_updated.png"
            srcDark="/images/content/logo_updated.png"
            alt="Fitness Pro"
          />
        </Link>
        <div className={cn(styles.wrap, { [styles.active]: visibleNav })}>
          <nav className={styles.nav}>
            {navLinks.map((x, index) =>
              x.dropdown ? (
                <Dropdown
                  className={styles.dropdown}
                  item={x}
                  key={index}
                  setValue={setVisibleNav}
                />
              ) : (
                <NavLink
                  className={styles.link}
                  activeClassName={styles.active}
                  to={x.url}
                  key={index}
                  onClick={() => setVisibleNav(false)}
                >
                  {x.title}
                </NavLink>
              )
            )}
          </nav>
          <div className={styles.details}>
            <div className={styles.contact}>
              {contact.map((x, index) => (
                <div className={styles.element} key={index}>
                  <div className={styles.category}>{x.title}</div>
                  <div className={styles.text}>{x.content}</div>
                </div>
              ))}
            </div>
            <div className={styles.socials}>
              {socials.map((x, index) => (
                <a
                  className={styles.social}
                  href={x.url}
                  // target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                >
                  <Icon name={x.title} size={x.size} />
                </a>
              ))}
            </div>
            {/* <Link
              className={cn("button-stroke button-small", styles.button)}
              to="/"
            >
              Login
            </Link> */}
          </div>
        </div>
        {/* <Link
          className={cn("button-stroke button-small", styles.button)}
          to="/"
        >
          Login
        </Link> */}
        <button
          className={cn(styles.burger, { [styles.active]: visibleNav })}
          onClick={() => setVisibleNav(!visibleNav)}
        ></button>
      </div>
    </header>
  );
};

export default Headers;
