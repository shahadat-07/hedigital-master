"use client";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import logo from "../assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Vision from "../components/About/Vision"
import Mission from "../components/About/Mission"
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SecondNav from "../components/PageComponents/SecondNav";

function MoreAbout() {

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const [ref_team, inView_team] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const animationVariants_team = {
    hidden: { opacity: 0, x: -500 },
    visible: { opacity: 1, x: 0 },
  };


  const managementTeam = [
    {
      image: "https://i.ibb.co/7nvKy3y/mirza1.png",
      name: "Mirza Ferdous Ohid",
      position: "Managing Director & CEO",
    },
    {
      image: "https://i.ibb.co/gy9R4B0/sharif.png",
      name: "MD Sharif Bin Mohiuddin",
      position: "Chairman",
    },
    {
      image: "https://i.ibb.co/r5ZQzm9/jitu.png",
      name: "Ehsanul Haque Jitu",
      position: "Director",
    },
    {
      image: "https://i.ibb.co/f0Twvbn/avinesh.png",
      name: "Avnish Kumar",
      position: "Chief Technology Officer",
    },
  ];
  return (
    <>
      <Head>
        <title>About HawkEyes</title>
      </Head>
      <div>
        <div className="main-container pt-[50px]">
          <Container>
            <div className="more-about-main-container">
              <div className="more-about-content">
                <div className="about-main-text">
                  <div
                    className="about-title-container"
                    style={{ padding: "20px 0 40px 0" }}
                  >
                    <h1
                      style={{
                        fontSize: "40px",
                        fontWeight: "bold",
                        fontFamily: "Roboto",
                      }}
                    >
                      COMPANY OVERVIEW
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
                  <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={animationVariants}
                    transition={{ duration: 0.8 }}
                  >
                  <p>
                    HawkEyes, founded in August 2015, has been at the forefront
                    of digital Out-of-Home (OOH) monitoring in Bangladesh. Over
                    the years, we have proudly served leading multinational
                    corporations (MNCs) in the country, providing them with
                    cutting-edge automation solutions. Our team comprises highly
                    skilled technical and management experts who prioritize
                    understanding our client&apos;s businesses. By
                    incorporating automation, we address practical limitations
                    and deliver tangible impacts on their business growth.
                  </p>
                  <p>
                    Our unique offering includes Marketing Process Automation
                    alongside Nationwide Digital OOH Monitoring, providing
                    complete digital management, monitoring, and control over
                    marketing and sales operations for retail distribution-based
                    businesses.
                  </p>
                  <p>
                    As our expertise grew, we expanded our portfolio and
                    ventured into customizing automation solutions to cater to
                    our client&apos;s specific needs. We take pride in being one of
                    the pioneers in Bangladesh, offering end-to-end AI-based
                    automation solutions that significantly benefit our clients.
                    Additionally, we have developed in-house software features,
                    such as Optical Character Recognition (OCR) in multiple
                    languages, ensuring 99% accuracy for our eKYC platform,
                    optimizing efficiency.
                  </p>
                  <p>
                    At HawkEyes, we remain committed to delivering innovative
                    automation solutions that drive real value for our clients,
                    while continuously advancing our capabilities and expertise
                    to meet the dynamic demands of the market.
                  </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <Container>
          <Row
            xs={1}
            sm={1}
            md={2}
            lg={2}
            xl={2}
            style={{ paddingTop: "100px" }}
          >
            <Vision />
            <Mission />
          </Row>
        </Container>

        <Container>
          <div className="management-content">
            <div
              className="about-title-container"
              style={{ padding: "50px 0 20px 0" }}
            >
              <h1
                style={{
                  fontSize: "40px",
                  fontWeight: "bold",
                  fontFamily: "Roboto",
                }}
              >
                MANAGEMENT TEAM
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
            </div>
            <p
              className="about-description-text"
              style={{
                maxWidth: "780px",
                textAlign: "center",
                margin: "0 auto",
                paddingBottom: "10px",
              }}
            >
              Leaders who lead the way by showing how to. The hunger for
              perfection & effectivity is at the core of our management team.
            </p>
          </div>
          <motion.div
              ref={ref_team}
              initial="hidden"
              animate={inView_team ? "visible" : "hidden"}
              variants={animationVariants_team}
              transition={{ duration: 0.8 }}
            >
          <Row>
            {managementTeam.map((doc, i) => (
              <Col key={i} md={6} lg={3} xl={3} sm={12} xs={12}>
                <div style={{ textAlign: "center", marginTop: "20px" }}>
                  <div className="management-img-container">
                    <Image
                      loading="lazy"
                      width={800}
                      height={500}
                      className="img-fluid"
                      src={doc.image}
                      alt=""
                    />
                  </div>
                  <h6 className="management-name">{doc.name}</h6>
                  <p>{doc.position}</p>
                </div>
              </Col>
            ))}
          </Row>
          </motion.div>
          <div className="backToHomeBtn">
            <Link href="/">Back To Home</Link>
          </div>
          <div style={{ paddingBottom: "100px" }} />
        </Container>
      </div>
    </>
  );
}

export default MoreAbout;
