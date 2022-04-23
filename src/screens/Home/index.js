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
import Testimonials from "./Testimonials";
import Programs from "../../components/Programs";
import Main from "./Main";

const items = [
  {
    title: "Interaction Design",
    content:
      "Our program and coaches focus on user’s experience and feedback to adapt and tweak the program to fit exactly your needs.",
    img: "/images/content/home_8/1.png",
    // icon: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#23262f"  fill-rule="evenodd" xmlns:v="https://vecta.io/nano"><path d="M24 44c7.732 0 14-6.268 14-14s-6.268-14-14-14-14 6.268-14 14 6.268 14 14 14zm0 4c9.941 0 18-8.059 18-18s-8.059-18-18-18S6 20.059 6 30s8.059 18 18 18z"/><path d="M17.708 6c-2.974 0-4.908 3.129-3.578 5.789l1.658 3.317a2 2 0 0 1-3.578 1.789l-1.658-3.317C7.893 8.259 11.761 2 17.708 2h12.584c5.947 0 9.815 6.259 7.155 11.578l-1.658 3.317a2 2 0 0 1-3.578-1.789l1.658-3.317C35.199 9.129 33.265 6 30.292 6H17.708z"/></svg>',
  },
  {
    title: "Service Design",
    content:
      "Our program and coaches focus on user’s experience and feedback to adapt and tweak the program to fit exactly your needs.",
    img: "/images/content/home_8/2.png",
    // icon: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#23262f"  xmlns:v="https://vecta.io/nano"><path fill-rule="evenodd" d="M24 40c8.837 0 16-7.163 16-16S32.837 8 24 8 8 15.163 8 24s7.163 16 16 16zm0 4c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20z"/><path d="M12 40.002c4.858-3.649 8-9.458 8-16.001S16.858 11.648 12 8a20.12 20.12 0 0 0-2.999 2.771C13.226 13.65 16 18.501 16 24s-2.774 10.35-6.999 13.23c.902 1.022 1.907 1.951 2.999 2.771zM36 7.999c-4.858 3.649-8 9.458-8 16.001a19.97 19.97 0 0 0 8 16.002 20.12 20.12 0 0 0 2.999-2.771C34.774 34.35 32 29.499 32 24s2.774-10.35 6.999-13.23A20.12 20.12 0 0 0 36 7.999z"/></svg>',
  },
  {
    title: "Experience Design",
    content:
      "Our program and coaches focus on user’s experience and feedback to adapt and tweak the program to fit exactly your needs.",
    img: "/images/content/home_8/3.png",
    // icon: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#23262f"  xmlns:v="https://vecta.io/nano"><path fill-rule="evenodd" d="M24 42c7.732 0 14-6.268 14-14s-6.268-14-14-14-14 6.268-14 14 6.268 14 14 14zm0 4c9.941 0 18-8.059 18-18s-8.059-18-18-18S6 18.059 6 28s8.059 18 18 18z"/><path d="M22 20a2 2 0 1 1 4 0v8a2 2 0 1 1-4 0v-8zM20 2a2 2 0 1 0 0 4h8a2 2 0 1 0 0-4h-8zm21.414 6.586a2 2 0 0 0-2.828 2.828l2 2a2 2 0 0 0 2.828-2.828l-2-2z"/></svg>',
  },
  {
    title: "Behaviour Design",
    content:
      "Our program and coaches focus on user’s experience and feedback to adapt and tweak the program to fit exactly your needs.",
    img: "/images/content/home_8/4.png",
    // icon: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#23262f"  xmlns:v="https://vecta.io/nano"><path fill-rule="evenodd" d="M24 40c8.837 0 16-7.163 16-16S32.837 8 24 8 8 15.163 8 24s7.163 16 16 16zm0 4c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20z"/><path d="M12 40.002c4.858-3.649 8-9.458 8-16.001S16.858 11.648 12 8a20.12 20.12 0 0 0-2.999 2.771C13.226 13.65 16 18.501 16 24s-2.774 10.35-6.999 13.23c.902 1.022 1.907 1.951 2.999 2.771zM36 7.999c-4.858 3.649-8 9.458-8 16.001a19.97 19.97 0 0 0 8 16.002 20.12 20.12 0 0 0 2.999-2.771C34.774 34.35 32 29.499 32 24s2.774-10.35 6.999-13.23A20.12 20.12 0 0 0 36 7.999z"/></svg>',
  },
];

const whyUsItems = [
  {
    title: "FIRST PRINCIPLES THINKING",
    content:
      "Using the proven framework of design thinking we understand, explore and materialize your life design Trash.",
    color: "#ff8c37",
  },
  {
    title: "HUMAN-CENTRIC APPROACH",
    content:
      "We plan and develop custom routines and plans based on your specific needs, desires, and abilities that puts you in the centre of all the action, always.",
    color: "#3cff37",
  },
  {
    title: "DATA-DRIVEN ACTION",
    content:
      "With micro and macro tracking systems and accountability partners, we use data to adapt routines based on data analysis and interpretation.",
    color: "#ff3737",
  },
  {
    title: "AN EXERCISE IN SIMPLICITY",
    content:
      "Track your workouts, get better results, and be the best version of you.",
    color: "#3772FF",
  },
];

const affiliatorsListOne = [
  {
    title: "Forbes",
    url: "/",
  },
  {
    title: "Yourstory",
    url: "/images/content/rotashow.svg",
  },
  {
    title: "Outlook",
    url: "/images/content/rotashow.svg",
  },
  {
    title: "velocity9",
    url: "/images/content/velocity9.svg",
  },
  {
    title: "Fortune",
    url: "/images/content/travelers.svg",
  },
  {
    title: "Harvard Business Review ",
    url: "/images/content/travelers.svg",
  },
];

const affiliatorsListTwo = [
  {
    title: "Yourstory",
    url: "/images/content/rotashow.svg",
  },

  {
    title: "Fortune",
    url: "/images/content/travelers.svg",
  },
  {
    title: "Forbes",
    url: "/images/content/waves.svg",
  },
  {
    title: "Outlook",
    url: "/images/content/rotashow.svg",
  },
  {
    title: "Harvard Business Review ",
    url: "/images/content/goldlines.svg",
  },
  {
    title: "velocity9",
    url: "/images/content/velocity9.svg",
  },
];

const whatYouGetItems = [
  {
    title: "Revolutionary Experaince",
    color: "#45B26B",
    images: "/images/content/home_7/1.png",
    alt: "user",
    content:
      "A fitness experience like no other. With custom goals, personal coaches, holistic fitness approach that transforms mind-body and soul.",
  },
  {
    title: "INNOVATIVE TRACKING SYSTEM",
    color: "#9757D7",
    images: "/images/content/home_7/2.png",
    alt: "medal",
    content:
      "Easy to use tracking system that will help you map progress and tweak your program",
  },
  {
    title: "TRANSFORMATIVE ACCOUNTABILITY",
    color: "#3772FF",
    images: "/images/content/home_7/3.png",
    alt: "lightning",
    content:
      "Life coaches and trainers as your accountability partners keeping you on track and committed to the program",
  },
  {
    title: "DISRUPTIVE RESULTS",
    color: "#9757D7",
    images: "/images/content/home_7/4.png",
    alt: "lightning",
    content:
      "Results that impact your life, relationships, fitness, and persona growth, This is more than chasing cosmetic changes.",
  },
];

const Home = () => {
  const scrollToRef = useRef(null);

  return (
    <>
      <Main
        className="section-border-top"
        title={"You Don't Need <br /> Another Fitness Brand <br /> You Need"}
        btnText={"Watch"}
      />
      <Hero scrollToRef={scrollToRef} />
      <Cards />
      <br />
      <br />
      <Clients title="Everyone is Talking About us" />
      <Steps scrollToRef={scrollToRef} />
      <Intro />
      <Book title={"What do you get?"} items={whatYouGetItems} />
      <ValueProps
        className="section"
        items={items}
        title={"A LIFE DESIGN SYSTEM LIKE NO OTHER!"}
      />
      <About
        items={whyUsItems}
        title={"Why Us?"}
        bgRequired={true}
        imgUrl={"images/content/img-container.png"}
      />
      <Team title={"What our customers have to say?"} />
      <Review className="section" />
      <Quality />
      <Clients
        title="A Corporate Afffiliators"
        listOne={affiliatorsListOne}
        listTwo={affiliatorsListTwo}
      />
      <br />
      <br />
      <br />
      <Testimonials />
      {/* <Advantages /> */}
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
