import React from "react";
import About from "../About/About";
import Client from "../Client/Client";
import Contact from "../Contact/Contact";
import Service from "../Service/Service";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import "./home.css";
import Slider from "./Slider";

function Main() {
  return (
    <>
      <Slider />
      <About />
      <WhyChooseUs />
      <Client />
      <Service />
      <Contact />
    </>
  );
}

export default Main;
