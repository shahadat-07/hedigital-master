import React from "react";
import { Col, Row } from "react-bootstrap";
import { Autoplay, Keyboard, Pagination } from "swiper";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import group from "../../assets/group.svg";
import message from "../../assets/message.svg";
import networking from "../../assets/networking.svg";
import rocket from "../../assets/rocket.svg";
import trophy from "../../assets/trophy.svg";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function About() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [ref_one, inView_one] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const animationVariants = {
    hidden: { opacity: 0, x: 1000 },
    visible: { opacity: 1, x: 0 },
  };

  const animationVariants_one = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { ease: "easeOut" }},
  };

  const aboutData = [
    {
      id: 1,
      icon: trophy,
      title: "Premium Quality",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse delectus, saepe dolor sapiente sunt odit illum unde molestias! Cum dolor deleniti officiis ipsum, aut laborum facere fuga perferendis qui",
    },
    {
      id: 2,
      icon: rocket,
      title: "Innovative Solutions",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse delectus, saepe dolor sapiente sunt odit illum unde molestias! Cum dolor deleniti officiis ipsum, aut laborum facere fuga perferendis qui",
    },
    {
      id: 3,
      icon: message,
      title: "Free Consultations",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse delectus, saepe dolor sapiente sunt odit illum unde molestias! Cum dolor deleniti officiis ipsum, aut laborum facere fuga perferendis qui",
    },
    {
      id: 4,
      icon: networking,
      title: "Multiple Strategies",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse delectus, saepe dolor sapiente sunt odit illum unde molestias! Cum dolor deleniti officiis ipsum, aut laborum facere fuga perferendis qui",
    },
    {
      id: 5,
      icon: group,
      title: "Experienced Team",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse delectus, saepe dolor sapiente sunt odit illum unde molestias! Cum dolor deleniti officiis ipsum, aut laborum facere fuga perferendis qui",
    },
  ];

  return (
    <div className="bg-white">
      <div className="container mx-auto" id="about">
        <div className="about-title-container">
          <h1
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              fontFamily: "Roboto",
            }}
          >
            ABOUT US
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={animationVariants}
            transition={{ duration: 0.7 }}
          >
            <div className="about-description">
              <h2 className="text-2xl font-bold text-center p-3 text-[#333333]">
                ABOUT HAWKEYES
              </h2>
              <p className="about-description-text">
                HawkEyes Digital Monitoring Ltd is quintessentially a{" "}
                <span className="font-bold">software solution provider.</span>{" "}
                The company&apos;s core objective is to provide tailored
                solution & service to clients creating a unique edge for them in
                the market and ensure a tangible business gain. HawkEyes
                initiated with a unique offering for process automation to
                companies <span className="font-bold">since 2015.</span> Till
                date we have served several large MNCs with our innovative
                solution. We are based out of Dhaka, <span>Bangladesh</span> but
                have affiliated presence in{" "}
                <span className="font-bold">India.</span>
              </p>
              <div className="flex justify-center mt-8">
                <Link href="/about" className="about-btn mr-5">
                  More About Us
                </Link>
                <a href="/client" className="about-btn">
                  Our Clients
                </a>
              </div>
            </div>
          </motion.div>

          <div className="world-map-container">
            <Image
              width={600}
              height={600}
              src="https://i.ibb.co/pbGPPVL/about.png"
              alt="HawkEyes Digital Monitoring Ltd."
            />
          </div>
        </div>

        <div className="mt-20">
        <motion.div
            ref={ref_one}
            initial="hidden"
            animate={inView_one ? "visible" : "hidden"}
            variants={animationVariants_one}
            transition={{ duration: 0.8 }}
          >
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            keyboard={{
              enabled: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation
            modules={[Keyboard, Autoplay, Pagination]}
            loop
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >
            {aboutData.map((doc) => (
              <SwiperSlide key={doc.title}>
                <div>
                  <Row>
                    <Col sm={12} md={12} lg={12} xl={12} xs={12}>
                      <div className="slider-image-container">
                        <Image
                          src={doc.icon}
                          alt={doc.title}
                          className="about-slider-image"
                        />
                      </div>
                      <h2 className="about-slider-title">{doc.title}</h2>
                    </Col>
                  </Row>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;
