"use client"
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { motion } from "framer-motion";
import Image2 from "../../assets/OOH Page Banner.jpg";
import Container from "../../components/Container";
import Heading from "../../components/Heading";
import { keyAttributes } from "../../const/index";
import Consultation from "../../components/Consultation/Consultation";
import SecondNav from "../../components/PageComponents/SecondNav";
import { findMaxDescriptionLength, findMaxTitleLength } from "../../utils/index";
import FeatureCard from "../../components/PageComponents/FeatureCard";

const page = () => {
  const [maxDescriptionLength, setMaxDescriptionLength] = useState(0);

  useEffect(() => {
    setMaxDescriptionLength(findMaxDescriptionLength(keyAttributes));
  }, []);

  const [maxTitleLength, setMaxTitleLength] = useState(0);

  useEffect(() => {
    setMaxTitleLength(findMaxTitleLength(keyAttributes));
  }, []);

  const [ref_parent, inView_parent] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const animationVariants_parent = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const [ref_image, inView_image] = useInView({
    triggerOnce: false,
    threshold: 0.8,
  });

  const animationVariants_image = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <Container>
      <div className="pt-[100px]">
      <Heading title="OOH Monitoring"/>
    </div>
        <div className="mb-section-gap ">
        <motion.div
          ref={ref_image}
            initial="hidden"
            animate={inView_image ? "visible" : "hidden"}
            variants={animationVariants_image}
            transition={{ duration: 0.5 }}
          >
          <Image
            src={Image2}
            alt="OOH Monitoring"
            className="obejct-cover mx-auto mb-3"
          />
          </motion.div>
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
            Introducing our comprehensive single platform for digital
            monitoring, equipped with a centralized dashboard system that
            efficiently manages all your Out-of-Home (OOH) assets spread across
            the country.
          </p>
        </div>
        <motion.div
          ref={ref_parent}
          initial="hidden"
          animate={inView_parent ? "visible" : "hidden"}
          variants={animationVariants_parent}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-section-gap">
            <Heading title="Key Features" />
            <div className="flex flex-wrap justify-center">
              {keyAttributes.map((feature, index) => (
                <FeatureCard key={index} feature={feature} data={keyAttributes} />
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </>
  );
};

export default page;
