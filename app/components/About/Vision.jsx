import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


const Vision = () => {
  const [ref_vision, inView_vision] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const animationVariants_vision = {
    hidden: { opacity: 0, x: -500 },
    visible: { opacity: 1, x: 0 },
  };
    return (

        <Col>
        <div className="vision-content">
          <div>
            <p className="vision-title">VISION</p>
            <div className="vision-hr" />
          </div>
          <motion.div
              ref={ref_vision}
              initial="hidden"
              animate={inView_vision ? "visible" : "hidden"}
              variants={animationVariants_vision}
              transition={{ duration: 0.8 }}
            >
          <p style={{ paddingTop: "25px" }}>
          To lead as the ultimate diversified solution provider, driven by our unwavering commitment to innovative concepts, exceptional design, and cutting-edge technology, all while delivering an unparalleled value proposition to our esteemed clients.
          </p>
          <p style={{ paddingBottom: "50px" }}>
          We aspire to make a groundbreaking impact in the business industry through our visionary solutions, pushing the boundaries of what has ever been accomplished before. Our ultimate objective is to cement our brand as the embodiment of distinction and excellence, offering premium automation solutions that set a new standard nationally and globally.
          </p>
      </motion.div>
        </div>
      </Col>
    );
};

export default Vision;