import React, { useRef } from "react";
import ValueProps from "../../components/ValueProps";
import Workouts from "../../components/Workouts";
import About from "../Features/About";
import HomeAbout from "../Home/About";
import Hero from "../Features/Hero";
import Lifestyle from "../Features/Lifestyle";
import Program from "../Features/Program";
import Quality from "../Home/Quality";
import Steps from "../Home/Steps";
import Coaches from "./Coaches";
import Plan from "../Pricing/Plan";
import Offer from "../../components/Offer";
import Faq from "../Pricing/Faq";
import Testimonials from "../../components/Testimonials";
import Curriculum from "./Curriculum";
import Programs from "./Programs";
import Info from "./Info";
import Cohort from "./Cohort";
import Mantra from "./Mantra";
import Explore from "./Explore";
import Match from "./Match";
import ProgramIncludes from "./ProgramIncludes";
import ProgramIncludesTwo from "./ProgramIncludesTwo";

const items = [
  {
    title: "screening and profiling candidates and measuring brand fitment. ",
    content:
      "With bite sized goals and selfpaced learning we make sure, that the program is suited for your current lifestyle",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#23262f"  fill-rule="evenodd" xmlns:v="https://vecta.io/nano"><path d="M24 44c7.732 0 14-6.268 14-14s-6.268-14-14-14-14 6.268-14 14 6.268 14 14 14zm0 4c9.941 0 18-8.059 18-18s-8.059-18-18-18S6 20.059 6 30s8.059 18 18 18z"/><path d="M17.708 6c-2.974 0-4.908 3.129-3.578 5.789l1.658 3.317a2 2 0 0 1-3.578 1.789l-1.658-3.317C7.893 8.259 11.761 2 17.708 2h12.584c5.947 0 9.815 6.259 7.155 11.578l-1.658 3.317a2 2 0 0 1-3.578-1.789l1.658-3.317C35.199 9.129 33.265 6 30.292 6H17.708z"/></svg>',
  },
  {
    title: "Smart Goal Setting",
    content:
      "With a laser-sharp focus on sustainable steps that ensure optimal growth, the program ensures unique adaptability for every user.",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#23262f"  xmlns:v="https://vecta.io/nano"><path fill-rule="evenodd" d="M24 40c8.837 0 16-7.163 16-16S32.837 8 24 8 8 15.163 8 24s7.163 16 16 16zm0 4c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20z"/><path d="M12 40.002c4.858-3.649 8-9.458 8-16.001S16.858 11.648 12 8a20.12 20.12 0 0 0-2.999 2.771C13.226 13.65 16 18.501 16 24s-2.774 10.35-6.999 13.23c.902 1.022 1.907 1.951 2.999 2.771zM36 7.999c-4.858 3.649-8 9.458-8 16.001a19.97 19.97 0 0 0 8 16.002 20.12 20.12 0 0 0 2.999-2.771C34.774 34.35 32 29.499 32 24s2.774-10.35 6.999-13.23A20.12 20.12 0 0 0 36 7.999z"/></svg>',
  },
  {
    title: "Personalized structure program",
    content:
      "Our program and coaches focus on user’s experience and feedback to adapt and tweak the program to fit exactly your needs.",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#23262f"  xmlns:v="https://vecta.io/nano"><path fill-rule="evenodd" d="M24 42c7.732 0 14-6.268 14-14s-6.268-14-14-14-14 6.268-14 14 6.268 14 14 14zm0 4c9.941 0 18-8.059 18-18s-8.059-18-18-18S6 18.059 6 28s8.059 18 18 18z"/><path d="M22 20a2 2 0 1 1 4 0v8a2 2 0 1 1-4 0v-8zM20 2a2 2 0 1 0 0 4h8a2 2 0 1 0 0-4h-8zm21.414 6.586a2 2 0 0 0-2.828 2.828l2 2a2 2 0 0 0 2.828-2.828l-2-2z"/></svg>',
  },
  {
    title: "LMS - learn at your own pace.",
    content:
      "Life Design identifies and capitalizes on your motivators, challenging destructive core beliefs and implanting constructive ones.",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#23262f"  xmlns:v="https://vecta.io/nano"><path fill-rule="evenodd" d="M24 40c8.837 0 16-7.163 16-16S32.837 8 24 8 8 15.163 8 24s7.163 16 16 16zm0 4c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20z"/><path d="M12 40.002c4.858-3.649 8-9.458 8-16.001S16.858 11.648 12 8a20.12 20.12 0 0 0-2.999 2.771C13.226 13.65 16 18.501 16 24s-2.774 10.35-6.999 13.23c.902 1.022 1.907 1.951 2.999 2.771zM36 7.999c-4.858 3.649-8 9.458-8 16.001a19.97 19.97 0 0 0 8 16.002 20.12 20.12 0 0 0 2.999-2.771C34.774 34.35 32 29.499 32 24s2.774-10.35 6.999-13.23A20.12 20.12 0 0 0 36 7.999z"/></svg>',
  },
];

const homeAboutItems = [
  {
    title: "Exclusive Community Access",
    content:
      "Stacks is a production-ready library of stackable content blocks built in React Native.",
  },
  {
    title: "Support Groups",
    content:
      "Stacks is a production-ready library of stackable content blocks built in React Native.",
  },
  {
    title: "Peer to peer accountability",
    content:
      "Stacks is a production-ready library of stackable content blocks built in React Native.",
  },
  {
    title: "Life Design System",
    content:
      "Stacks is a production-ready library of stackable content blocks built in React Native.",
  },
];

const fitboxItems = [
  {
    title: "students",
    content:
      "Life Design identifies and capitalizes on your motivators, challenging destructive core beliefs and implanting constructive ones.",
    img: "/images/content/student-ball-color.png",
  },
  {
    title: "working professional",
    content:
      "Life Design identifies and capitalizes on your motivators, challenging destructive core beliefs and implanting constructive ones.",
    img: "/images/content/foam-roller-color.png",
  },
  {
    title: "business leaders",
    content:
      "Life Design identifies and capitalizes on your motivators, challenging destructive core beliefs and implanting constructive ones.",
    img: "/images/content/tennis-ball.png",
  },
  {
    title: "housewives",
    content:
      "Life Design identifies and capitalizes on your motivators, challenging destructive core beliefs and implanting constructive ones.",
    img: "/images/content/dumbbells-color.png",
  },
];

const infoOne =
  "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> <br />  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p> <br /> <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> <br />  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p> <br /> <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p> <br /> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> <br />  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p> <br /> <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>";

const LifeDesgin = () => {
  const scrollToRef = useRef(null);
  return (
    <>
      <Hero scrollToRef={scrollToRef} />
      <Quality />
      <Steps scrollToRef={scrollToRef} />
      <ValueProps
        className="section-pb"
        items={items}
        title={"A NEW FITNESS EXPERIANCE FOR EVERYONE"}
      />
      <Program />
      <Lifestyle />
      <HomeAbout
        items={homeAboutItems}
        title={"RNT PRO MEMBERSHIP"}
        bgRequired={false}
        imgUrl={"images/content/rnt-membership.png"}
      />
      <ProgramIncludes imgUrl={"/images/content/shot-1.png"} />
      <ProgramIncludesTwo imgUrl={"/images/content/shot-2.png"} />
      <ProgramIncludes imgUrl={"/images/content/shot-3.png"} />
      <ProgramIncludesTwo imgUrl={"/images/content/shot-4.png"} />
      <Curriculum />
      <Explore />
      <ValueProps
        className="section-pb"
        items={fitboxItems}
        title={"IS FITBOX RIGHT FOR YOU?"}
      />
      <Match title={"Are You a Match For Fitbox?"} classNameTitle="h2" />
      <Mantra />
      <Coaches />
      <Cohort />
      <Info
        className="section-border-top"
        title={"Why I Created this program"}
        text={infoOne}
        imgUrl="/images/content/symbol-color.png"
      />
      <Programs title={"What's Included"} classNameTitle="h2" />
      <Info
        className="section-border-top"
        title={"Why I Created this program"}
        text={infoOne}
        imgUrl="/images/content/symbol-color.png"
      />
      <Plan />
      <Offer
        className="section-border-top"
        title={
          "Start feeling, looking and performing better in your first 30 days, or get your money back."
        }
        text={
          "<p>Join RNT Pro, and if after 30 days, you have completed 100% of the exercises and action points and not achieved any of the results, you get all your money back. We are that confident in what we do, and this is our Transformation Guarantee.</p> <br /> <p>This journey is hard, yet simple. We only want to work with you if you're ready to commit to real life-long change. This isn't a quick fix or magic solution. If you don't put in the work, you'll get poor results</p> "
        }
        imgUrl="/images/content/guarantee-badge.png"
        btnText={"Join The Waitlist"}
      />
      <Faq />
      <Testimonials />
      <Offer
        className="section-border-top"
        title={"Anywhere you want. Anytime you want"}
        text={
          "<p>Get Stared with two weeks of unlimited yoga, fitness, and meditation classes. Cancel anytime.</p> "
        }
        btnText={"Take a Test"}
      />
    </>
  );
};

export default LifeDesgin;
