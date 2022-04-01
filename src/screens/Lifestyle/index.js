import React from "react";
import styles from "./Lifestyle.module.sass";
import Hero from "./Hero";
import Community from "../../components/Community";

const Lifestyle = ({ title }) => {
  return (
    <>
      <Hero title={title} />
    </>
  );
};

export default Lifestyle;
