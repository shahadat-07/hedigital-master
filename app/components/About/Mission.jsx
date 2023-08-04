import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useState, useEffect } from "react";


const Mission = () => {

  const [ref_mission, inView_mission] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const animationVariants_mission = {
    hidden: { opacity: 0, x: 500 },
    visible: { opacity: 1, x: 0 },
  };

    return (
        <Col>
        <div className="mission-content">
          <div>
            <p className="mission-title">MISSION</p>
            <div className="mission-hr" />
          </div>
          <motion.div
              ref={ref_mission}
              initial="hidden"
              animate={inView_mission ? "visible" : "hidden"}
              variants={animationVariants_mission}
              transition={{ duration: 0.8 }}
            >
        <div className="text-start">
        <p style={{ paddingTop: "25px" }}>
          Our mission is to achieve our target and bring our vision to life by focusing on four key pillars: a strong team, effective solutions, unparalleled service, and unwavering quality in every aspect.
          </p>
          <p>
          To fulfill this mission, we are dedicated to:
          </p>
          <p>
            - Building a strong, smart, and efficient team that will propel the company forward and contribute to its sustainable growth.
          </p>
          <p>
          - Applying the best analysis techniques to understand our customer&apos;s businesses and needs, enabling us to design unique and tailored solutions.
          </p>
          <p>
          - Developing innovative, dynamic, and effective world-class solutions that drive efficiency and deliver exceptional results.
          </p>
          <p>
          - -Ensuring the highest standards in every aspect of our business, with a particular emphasis on delivering outstanding customer service.
          </p>
          <p style={{ paddingBottom: "50px" }}>
          - Through these principles, we aim to make a lasting impact in the industry, exceed client expectations, and establish ourselves as a trusted and reliable partner for all their needs.
          </p>
        </div>
          </motion.div>
        </div>
      </Col>
    );
};

export default Mission;