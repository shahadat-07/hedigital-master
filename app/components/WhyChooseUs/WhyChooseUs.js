import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Col, Container, Row } from "react-bootstrap";
import ChooseFeatureCard from "./ChooseFeatureCard";
import Image from "next/image";
import { motion } from "framer-motion";
import team from "../../assets/group.svg";
import happyImg from "../../assets/happy-man.png";
import ideaImg from "../../assets/idea.png";
import exclusivity from "../../assets/individual.svg";
import tailoredSolutions from "../../assets/tailored-solutions.svg";

function WhyChooseUs() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const animationVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };

  const [ref_parent, inView_parent] = useInView({
    triggerOnce: true,
    threshold: 0.8,
  });

  const animationVariants_parent = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

    
const items = [
  {
    icon: tailoredSolutions,
    title: "Tailored Solutions",
    description:
      "All our solutions are fully tailored to the specific business needs of our customers so that they get the most value out of every solution",
  },
  {
    icon: team,
    title: "Dedicated Team",
    description:
      "Our experienced team consisting of engineers, designers, marketeers and project managers provide efficient custom solutions for our client's needs.",
  },
  {
    icon: exclusivity,
    title: "Exclusivity",
    description:
      "Our custom automation solutions can be made exclusive to our clients to give them a competitive edge in their industry",
  },
  {
    icon: ideaImg,
    title: "Modern Tech",
    description:
      "We use the latest technologies such as OCR, ICR, AI, Machine Learning etc to create the most efficient end to end automation solutions in the market.",
  },
  {
    icon: happyImg,
    title: "User Friendly solutions",
    description:
      "A good user experience is one of our key priorities when designing our automation solutions so that the different users can operated the system with minimal friction",
  },
];

  return (
    <Row
      md={1}
      lg={2}
      sm={1}
      xs={1}
      className="bg-[#F7F7F7] m-0"
      id="whyChooseUs"
    >
      <Col>
        <Container>
            <div ref={ref_parent} className="about-title-container">
              <h1
                style={{
                  fontSize: "40px",
                  fontWeight: "bold",
                  fontFamily: "Roboto",
                }}
              >
                WHY CHOOSE US
              </h1>
              <div className="about-title-hr">
                <div className="title-hr" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  style={{ color: "orange", fontWeight: "900", padding: "" }}
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="title-hr" />
              </div>
              <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={animationVariants}
                transition={{ duration: 0.8 }}
              >
                <div className="mt-10">
                  <p className="about-description-text">
                    HawkEyes unique offering of Marketing process automation
                    with Nationwide Digital OOH monitoring platform and further
                    included complete digital management, monitoring, and
                    control over the marketing & sales operation for any company
                    operating in retail distribution-based businesses. With time
                    our portfolio and solution domain expanded, and we have
                    capitalized our expertise to introduce customized automation
                    solutions for our clientele addressing their unique
                    requirements.
                  </p>
                </div>
                </motion.div>
              </div>

              <div>
                {items.map((item, index) => (
                  <motion.div
                  key={index}
                  initial="hidden"
                  animate={inView_parent ? "visible" : "hidden"}
                  variants={animationVariants_parent}
                  transition={{ duration: 1, delay: index * 0.5 }}
                >
                  <ChooseFeatureCard key={index} item={item} />
                </motion.div>
                ))}
              </div>  
        </Container>
      </Col>
      <Col style={{ margin: "0", padding: "0" }}>

        <Image
          loading="lazy"
          width={1600}
          height={800}
          src="https://i.ibb.co/dKgmt4m/why-choose-us.jpg"
          alt="hawkEyes Digital Monitoring Ltd."
          className="img-fluid"
          style={{ objectFit: "cover", height: "100%", width: "100%" }}
        />
      </Col>
    </Row>
  );
}

export default WhyChooseUs;


