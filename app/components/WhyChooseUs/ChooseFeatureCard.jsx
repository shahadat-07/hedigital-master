"use client";

import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

const ChooseFeatureCard = ({ item }) => {
  return (
    <div className="flex">
      <div
        className="choose-items-big flex items-center justify-center"
      
      >
        <Image
          style={{
            maxWidth: "80px",
            border: "2px solid #E9D70F",
            padding: "10px",
            marginRight: "15px",
          }}
          src={item.icon}
          alt="HawkEyes Happy man"
          height="auto"
        />
      </div>
      <div>
        <div
          className="choose-items-small"
          style={{
            marginRight: "15px",
          }}
        >
          <Image src={item.icon} alt="HawkEyes Happy man" />
        </div>
        <h2 className="item-title">{item.title}</h2>
        <p className="item-description">{item.description}</p>
      </div>
    </div>
  );
};

export default ChooseFeatureCard;
