/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { features_ai, uniqueDatas } from "../../const/index";
import Image from "next/image";
import Heading from "../../components/Heading";
import Container from "../../components/Container";
import FeatureCard from "../../components/PageComponents/FeatureCard";
import Consultation from "../../components/Consultation/Consultation";
import SecondNav from "../../components/PageComponents/SecondNav";
import AiImg from "../../assets/AI Based Trade Mercahndising.png";
import UniquenessCard from "../../components/PageComponents/UniquenessCard";


const page = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  const animationVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  const [ref_feature_ai, inView_feature_ai] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const animationVariants_feature_ai = {
    hidden: { opacity: 0, x: -1000 },
    visible: { opacity: 1, x: 0 },
  };

  const [ref_workflow, inView_workflow] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const animationVariants_workflow = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  const [ref_unique, inView_unique] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const animationVariants_unique = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <>
      <Container>
        <div className="mb-section-gap pt-[100px]">
          <Heading
            title="AI-Based Trade Merchandizer"
            subtitle="End to End Complete Merchandising Solution"
          />
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={animationVariants}
            transition={{ duration: 0.5 }}
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
              Presenting our flagship product, a cutting-edge solution designed
              to revolutionize Trade Merchandising (TM) practices. This
              comprehensive platform grants you the ability to seamlessly access
              all TM aspects through a single, user-friendly Dashboard. From
              efficient inventory management to meticulous TM execution, every
              step of the process can now be digitally recorded, analyzed, and
              reported from a centralized hub.
            </p>
          </motion.div>
        </div>
        <motion.div
          ref={ref_feature_ai}
          initial="hidden"
          animate={inView_feature_ai ? "visible" : "hidden"}
          variants={animationVariants_feature_ai}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-section-gap">
            <Heading title="Key Features" />
            <div className="flex flex-wrap justify-center">
              {features_ai.map((feature, index) => (
                <FeatureCard key={index} feature={feature} data={features_ai} />
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mb-section-gap">
          <Heading title="Solution Workflow" />
          <motion.div
              ref={ref_workflow}
              initial="hidden"
              animate={inView_workflow ? "visible" : "hidden"}
              variants={animationVariants_workflow}
              transition={{ duration: 0.8 }}
            >
          <div className="flex flex-col xl:flex-row justify-center items-center gap-8">
            <Image
              width="auto"
              height="auto"
              src={AiImg}
              alt="Workflow"
              className="w-2/3 mx-auto"
            />
              <p
                style={{
                  fontSize: "16px",
                  fontFamily: "Arial",
                  lineHeight: "26px",
                  fontWeight: "300",
                  textAlign: "justify",
                  color: "#85868c",
                }}
              >
                With the incorporation of state-of-the-art AI technology, our
                platform ensures the utmost quality in TM operations and
                real-time execution. Automated feedback is provided to planners,
                executors, and supervisors, streamlining the entire process and
                fostering a deeper understanding of market dynamics without the
                need for physical market visits.
              </p>
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
              Embrace the power of our solution to gain complete market visibility and elevate your Trade Merchandising practices to unprecedented levels of efficiency and effectiveness.
            </p>
        </div>
        <div className="mb-section-gap grid grid-cols-1 lg:grid-cols-2">
             {
                uniqueDatas .map((data, index) => (
                  <motion.div
                  ref={ref_unique}
                  key={index}
                  initial="hidden"
                  animate={inView_unique ? "visible" : "hidden"}
                  variants={animationVariants_unique}
                  transition={{ duration: 0.5, delay: index * 0.5 }}
                >
                  <UniquenessCard key={data.id} data={data} />
                  </motion.div>
                ))
              }
        </div>
      </Container>{" "}
    </>
  );
};

export default page;
