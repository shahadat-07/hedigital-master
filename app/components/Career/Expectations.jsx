import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import IconBox from "./IconBox";
import icon from "../../assets/settings.png"
import Heading from "../Heading";
import Good from "../../assets/good-review_1713221.png"
import Creative from "../../assets/creative.png"
import Depend from "../../assets/depend.png"
import Desire from "../../assets/desire.png"
import Selfie from "../../assets/selfie_9387539.png"
import Discipline from "../../assets/discipline.png"


const Expectations = () => {

    return (
      <div>
        <Heading title="Our Expectations"  />
        <p
              style={{
                fontSize: "16px",
                fontFamily: "Arial",
                lineHeight: "26px",
                fontWeight: "300",
                textAlign: "justify",
                color: "#85868c",
              }}
              className="max-w-6xl text-center mx-auto"
            >
              At HawkEyes, we don&apos;t just expect you to work for us;
              <br />
              we want you to work with us, side by side, as valued team members
            </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <IconBox icon={Good} title="Positive Attiture"/>
            <IconBox icon={Creative} title="Creative Thinker"/>
            <IconBox icon={Depend} title="Be Dependable"/>
            <IconBox icon={Desire} title="Desire to Grow"/>
            <IconBox icon={Selfie} title="Be Self-Motivated"/>
            <IconBox icon={Discipline} title="Be Disciplined"/>
          </div>
      </div>
    );
}

export default Expectations;