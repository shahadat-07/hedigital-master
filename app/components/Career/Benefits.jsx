import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import benefits from "../../assets/Career Page.png"
import BenefitBox from "./BenefitBox";
import Heading from "../Heading";

const Benefits = () => {
 
    return (
        <div>
          <Heading title="Our Benefits" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {/* <Image src={benefits} alt="Benefits" className="object-cover mx-auto" /> */}
            <BenefitBox title="Be part of a dynamic and innovative software company" number="1" color="bg-rose-500" />
            <BenefitBox title="Competitive salary and benefits package" number="2" color="bg-cyan-500"  />
            <BenefitBox title="Exciting opportunities for career advancement and professional growth" number="3" color="bg-orange-500" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 mt-3 gap-3">
          <BenefitBox title="Collaborate with a talented team of professionals dedicated to delivering exceptional software solutions" number="4" color="bg-green-500" />
            <BenefitBox title="Work in a supportive and inclusive work environment that values teamwork and collaboration" number="5" color="bg-indigo-600" /></div>
        </div>
    );
}

export default Benefits;