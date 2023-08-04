/* eslint-disable react-hooks/rules-of-hooks */

'use client'

import React from "react";
import Heading from "../../components/Heading";
import Container from "../../components/Container";
import FeatureCard from "../../components/PageComponents/FeatureCard";
import Image from "next/image";
import Image1 from "../../assets/Picture1.png";
import Consultation from "../../components/Consultation/Consultation";
import { features_kyc, uniqueDatas_kyc } from "../../const/index";
import SecondNav from "../../components/PageComponents/SecondNav";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import UniquenessCard from '../../components/PageComponents/UniquenessCard';

const page = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const animationVariants = {
    hidden: { x: -100 },
    visible: { x: 0 },
  };

  const [ref_feature_kyc, inView_feature_kyc] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const animationVariants_feature_kyc = {
    hidden: { opacity: 0, y: -200 },
    visible: { opacity: 1, y: 0, transition: { ease: "easeOut" }},
  };

  const [ref_unique_list, inView_unique_list] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const animationVariants_unique_list = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <Container>
        <div className="mb-section-gap pt-[100px]">
          <Heading
            title="Digital KYC"
            subtitle="The Cutting-Edge AI-Powered OCR Platform"
          />
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={animationVariants}
              transition={{ duration: 0.8 }}
            >
          <p
            style={{
              fontSize: "16px",
              fontFamily: "Arial",
              lineHeight: "26px",
              fontWeight: "300",
              textAlign: "justify",
              color: "#85868c",
            }}
            className="max-w-4xl text-center mx-auto"
          >
            Customer registration is a critical process for any business entity,
            but it often becomes a cumbersome and time-consuming task. To
            address this challenge, our state-of-the-art Optical Character
            Recognition (OCR) based platform, enhanced with AI-powered facial
            recognition and real-time national database verification, has
            emerged.With lightning-fast data collection, real-time verification,
            and high accuracy, customers can be on-boarded within 15 seconds,
            drastically improving operational efficiency and enhancing customer
            satisfaction.
          </p>
          </motion.div>
        </div>
        <div className="mb-section-gap">
          <Heading title="Key Features" />
          <motion.div
              ref={ref_feature_kyc}
              initial="hidden"
              animate={inView_feature_kyc ? "visible" : "hidden"}
              variants={animationVariants_feature_kyc}
              transition={{ duration: 1 }}
            >
          <div className="flex flex-wrap justify-center">
            {features_kyc.map((feature, index) => (
              <FeatureCard key={index} feature={feature} data={features_kyc} />
            ))}
          </div>
          </motion.div>
        </div>

        <div>
        <Heading title="A glimpse of our uniqueness" />
        <p
              style={{
                fontSize: "16px",
                fontFamily: "Arial",
                lineHeight: "26px",
                fontWeight: "300",
                textAlign: "justify",
                color: "#85868c",
              }}
              className="max-w-4xl text-center mx-auto mb-8"
            >
By adopting this cutting-edge solution, business entities can not only stay ahead of the competition but also build trust and credibility with their clientele, making it a must-have tool for any forward-thinking organization.            </p>
        </div>
        <div className="mb-section-gap grid grid-cols-1 lg:grid-cols-2">
        {
                uniqueDatas_kyc .map((data, index) => (
                  <motion.div
                  ref={ref_unique_list}
                  key={index}
                  initial="hidden"
                  animate={inView_unique_list ? "visible" : "hidden"}
                  variants={animationVariants_unique_list}
                  transition={{ duration: 0.5, delay: index * 0.5 }}
                >
                  <UniquenessCard key={data.id} data={data} />
                  </motion.div>
                ))
              }
        </div>
      </Container>
    </>
  );
};

export default page;
