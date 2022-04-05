import React, { useRef } from "react";
import AboutHero from "../Home/Hero";
import Hero from "../Download/Hero";
import Programs from "../../components/Programs";
import Steps from "../Home/Steps";
import Book from "../Home/Book";
import Program from "../Features/Program";
import Quality from "../Home/Quality";
import Offer from "../../components/Offer";
import Platform from "../Download/Platform";
import Coaches from "../LifeDesign/Coaches";
import Team from "../Home/Team";
import Community from "../../components/Community";
import Video from "./Video";

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

const About = () => {
  const scrollToRef = useRef(null);
  return (
    <>
      {/* <AboutHero /> */}
      <Video imgUrl={"/images/content/landing.png"} />
      <Hero scrollToRef={scrollToRef} />
      <Programs
        scrollToRef={scrollToRef}
        classNameTitle="h4"
        title="A special 1-on-1 workout program that gives you complete control
          over the volume for a perfect physique"
      />
      <Steps scrollToRef={scrollToRef} />
      <Book btnHide={true} items={whatYouGetItems} />
      <br />
      <br />
      <Program />
      <Quality title={"Our Goals"} />
      <Offer
        className="section-border-top"
        title={"Our Vision"}
        text={
          "<p>Our Vision is to see a world transformed. We belive that a world that prioritises health and fitness is a better world for everyone.</p> <br /> <p>We aim to achieve our bold vision with our unique and proven coaching, community, education and accountability systems, by transforming one life at a time.</p> <br /> With each transformation, we create the opportunity of a domino effect in their friendship groups, family, community, society, country and world."
        }
        btnText={"Take a Test"}
      />
      <Platform />
      <Team />
      <Coaches />
      <Video
        imgUrl={"/images/content/video-bg.jpg"}
        title={"A Beginner’s Guide to Trading View"}
      />
      <Community />
      <Offer
        className="section-border-top"
        title={"Any where you want. Anytime you want."}
        text={
          "<p>Get Started with two free weeks of unlimited yoga, fitness, and meditation classes. Cancel anytime.</p>"
        }
        btnText={"Take a Test"}
      />
    </>
  );
};

export default About;
