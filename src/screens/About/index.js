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

const About = () => {
  const scrollToRef = useRef(null);
  return (
    <>
      <AboutHero />
      <Video imgUrl={"/images/content/landing.png"} />
      <Hero scrollToRef={scrollToRef} />
      <Programs
        scrollToRef={scrollToRef}
        classNameTitle="h4"
        title="A special 1-on-1 workout program that gives you complete control
          over the volume for a perfect physique"
      />
      <Steps scrollToRef={scrollToRef} />
      <Book />
      <br />
      <br />
      <Program />
      <Quality />
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
