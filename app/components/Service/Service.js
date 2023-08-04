import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import ai from "../../assets/ai.svg";
import monitoring from "../../assets/monitoring.svg";
import multiPhone from "../../assets/multiPhone.svg";
import power from "../../assets/power.svg";
import sales from "../../assets/sales.svg";
import target from "../../assets/target.svg";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const serviceSectionBackgroundImageStyle = {
  backgroundColor: "#000000",
  backgroundImage: "linear-gradient(219deg, #FFCD30  0%,#000000 40%)",
};

const serviceSectionBackgroundColorStyle = {
  backgroundColor: "rgb(26 0 33 / 80%)",
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: -1,
};

const services = [
  {
    id: 1,
    icon: ai,
    title: "AI-Based Trade Merchandizer",
    desc: "An AI based trade merchandizing system, this is our flagship product.",
  },
  {
    id: 2,
    icon: multiPhone,
    title: "Digital KYC",
    desc: "An OCR based, AI enabled customer registration system.",
  },
  {
    id: 3,
    icon: monitoring,
    title: "OOH Monitoring",
    desc: "A single platform for nationwide OOH asset monitoring system.",
  },
  {
    id: 4,
    icon: target,
    title: "MDM-Mobile Device Management",
    desc: "An efficient field force management system.",
  },
  {
    id: 5,
    icon: target,
    title: "NLP- Natural Language Processing",
    desc: "An efficient field force management system.",
  },
  {
    id: 6,
    icon: target,
    title: "SalesMaster: Your Comprehensive Sales Management Solution",
    desc: "An efficient field force management system.",
  },
];

export default function Service() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  const animationVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <div
        style={serviceSectionBackgroundImageStyle}
        className="py-5"
        id="solutions"
      >
        <div style={serviceSectionBackgroundColorStyle} />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="d-flex justify-content-center align-items-center mb-5">
                <div className="mx-2">
                  <div className="about-title-container">
                    <h1
                      style={{
                        fontSize: "40px",
                        fontWeight: "bold",
                        fontFamily: "Roboto",
                        color: "#fff",
                      }}
                    >
                      OUR SOLUTIONS
                    </h1>
                    <div className="about-title-hr">
                      <div className="title-hr" />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        style={{
                          color: "orange",
                          fontWeight: "900",
                          padding: "",
                        }}
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div className="title-hr" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={animationVariants}
              transition={{ duration: 1 }}
            >
              <div className="col-md-12">
                <div className="row">
                  {services.map((service, index) => (
                    <ServiceCard key={index} service={service} index={index} />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
