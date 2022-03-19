import React, { useRef } from "react";
// import styles from "./Home.module.sass";
import Hero from "./Hero";
import Clients from "../../components/Clients";
import Steps from "./Steps";
import Intro from "../../components/Intro";
import Book from "./Book";
import ValueProps from "../../components/ValueProps";
import About from "./About";
import Team from "./Team";
import Review from "../../components/Review";
import Quality from "./Quality";
import Advantages from "../../components/Advantages";
import Workouts from "../../components/Workouts";
import Offer from "../../components/Offer";
import Cards from "./Hero/Cards";

const items = [
  {
    title: "Interaction Design",
    content:
      "With bite sized goals and selfpaced learning we make sure, that the program is suited for your current lifestyle",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#23262f"  fill-rule="evenodd" xmlns:v="https://vecta.io/nano"><path d="M24 44c7.732 0 14-6.268 14-14s-6.268-14-14-14-14 6.268-14 14 6.268 14 14 14zm0 4c9.941 0 18-8.059 18-18s-8.059-18-18-18S6 20.059 6 30s8.059 18 18 18z"/><path d="M17.708 6c-2.974 0-4.908 3.129-3.578 5.789l1.658 3.317a2 2 0 0 1-3.578 1.789l-1.658-3.317C7.893 8.259 11.761 2 17.708 2h12.584c5.947 0 9.815 6.259 7.155 11.578l-1.658 3.317a2 2 0 0 1-3.578-1.789l1.658-3.317C35.199 9.129 33.265 6 30.292 6H17.708z"/></svg>',
  },
  {
    title: "Service Design",
    content:
      "With a laser-sharp focus on sustainable steps that ensure optimal growth, the program ensures unique adaptability for every user.",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#23262f"  xmlns:v="https://vecta.io/nano"><path fill-rule="evenodd" d="M24 40c8.837 0 16-7.163 16-16S32.837 8 24 8 8 15.163 8 24s7.163 16 16 16zm0 4c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20z"/><path d="M12 40.002c4.858-3.649 8-9.458 8-16.001S16.858 11.648 12 8a20.12 20.12 0 0 0-2.999 2.771C13.226 13.65 16 18.501 16 24s-2.774 10.35-6.999 13.23c.902 1.022 1.907 1.951 2.999 2.771zM36 7.999c-4.858 3.649-8 9.458-8 16.001a19.97 19.97 0 0 0 8 16.002 20.12 20.12 0 0 0 2.999-2.771C34.774 34.35 32 29.499 32 24s2.774-10.35 6.999-13.23A20.12 20.12 0 0 0 36 7.999z"/></svg>',
  },
  {
    title: "Experience Design",
    content:
      "Our program and coaches focus on user’s experience and feedback to adapt and tweak the program to fit exactly your needs.",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#23262f"  xmlns:v="https://vecta.io/nano"><path fill-rule="evenodd" d="M24 42c7.732 0 14-6.268 14-14s-6.268-14-14-14-14 6.268-14 14 6.268 14 14 14zm0 4c9.941 0 18-8.059 18-18s-8.059-18-18-18S6 18.059 6 28s8.059 18 18 18z"/><path d="M22 20a2 2 0 1 1 4 0v8a2 2 0 1 1-4 0v-8zM20 2a2 2 0 1 0 0 4h8a2 2 0 1 0 0-4h-8zm21.414 6.586a2 2 0 0 0-2.828 2.828l2 2a2 2 0 0 0 2.828-2.828l-2-2z"/></svg>',
  },
  {
    title: "Behaviour Design",
    content:
      "Life Design identifies and capitalizes on your motivators, challenging destructive core beliefs and implanting constructive ones.",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#23262f"  xmlns:v="https://vecta.io/nano"><path fill-rule="evenodd" d="M24 40c8.837 0 16-7.163 16-16S32.837 8 24 8 8 15.163 8 24s7.163 16 16 16zm0 4c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20z"/><path d="M12 40.002c4.858-3.649 8-9.458 8-16.001S16.858 11.648 12 8a20.12 20.12 0 0 0-2.999 2.771C13.226 13.65 16 18.501 16 24s-2.774 10.35-6.999 13.23c.902 1.022 1.907 1.951 2.999 2.771zM36 7.999c-4.858 3.649-8 9.458-8 16.001a19.97 19.97 0 0 0 8 16.002 20.12 20.12 0 0 0 2.999-2.771C34.774 34.35 32 29.499 32 24s2.774-10.35 6.999-13.23A20.12 20.12 0 0 0 36 7.999z"/></svg>',
  },
];

const aboutItems = [
  {
    title: "Intuitive and clean design",
    content:
      "Track your workouts, get better results, and be the best version of you.",
    color: "#9757D7",
  },
  {
    title: "An exercise in simplicity",
    content:
      "Track your workouts, get better results, and be the best version of you.",
    color: "#EF466F",
  },
  {
    title: "The most popular workouts",
    content:
      "Track your workouts, get better results, and be the best version of you.",
    color: "#45B26B",
  },
  {
    title: "An exercise in simplicity",
    content:
      "Track your workouts, get better results, and be the best version of you.",
    color: "#3772FF",
  },
];

const Home = () => {
  const scrollToRef = useRef(null);

  return (
    <>
      <Hero scrollToRef={scrollToRef} />
      <Cards />
      <Clients />
      <Steps scrollToRef={scrollToRef} />
      <Intro />
      <Book />
      <ValueProps
        className="section"
        items={items}
        title={"A NEW FITNESS EXPERIANCE FOR EVERYONE"}
      />
      <About
        items={aboutItems}
        title={"Simple, powerful, easy-to-use"}
        bgRequired={true}
        imgUrl={"images/content/img-container.png"}
      />
      <Team />
      <Review className="section" />
      <Quality />
      <Advantages />
      <Workouts />
      <Offer
        className="section-border-top"
        title={
          "If you do not talk about your dreams, they will never become your goals."
        }
        text={
          "Get started with two free weeks of unlimited yoga, fitness, and meditation classes. Cancel anytime."
        }
        btnText={"Take a Test"}
      />
    </>
  );
};

export default Home;
