"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Image4 from "../../assets/NPL PAGE Banner.jpg";
import Container from "../../components/Container";
import { keyAttributesNLP } from "../../const";
import SecondNav from "../../components/PageComponents/SecondNav";
import Consultation from "../../components/Consultation/Consultation";
import Heading from "../../components/Heading";
import { findMaxDescriptionLength } from "../../utils/index";
import Workflow from "../../assets/NPL WORK FLOW .png";

const page = () => {
  const [maxDescriptionLength, setMaxDescriptionLength] = useState(0);

  const [ref_parent, inView_parent] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const animationVariants_parent = {
    hidden: { opacity: 0, y: 300 },
    visible: { opacity: 1, y: 0 },
  };

  const [ref_img, inView_img] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const animationVariants_img = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const [ref_work, inView_work] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const animationVariants_work = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  useEffect(() => {
    setMaxDescriptionLength(findMaxDescriptionLength(keyAttributesNLP));
  }, []);

  return (
    <>
      <Container>
        <motion.div
          initial="hidden"
          animate={inView_img ? "visible" : "hidden"}
          variants={animationVariants_img}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-section-gap pt-[100px]">
            <Image
              ref={ref_img}
              src={Image4}
              alt="OOH Monitoring"
              className="obejct-cover mx-auto mb-3"
            />
          </div>
        </motion.div>

        <div className="mb-section-gap">
          <motion.div
            ref={ref_parent}
            initial="hidden"
            animate={inView_parent ? "visible" : "hidden"}
            variants={animationVariants_parent}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-section-gap">
              <Heading title="Key Features" />
              <div
                // style={{
                //   height: `${(maxDescriptionLength / 50) * 26}px`,
                // }}
                className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4"
              >
                {keyAttributesNLP.map(({ id, icon, title, description }) => (
                  <div
                    key={id}
                    className="bg-white rounded-lg shadow-lg text-center py-8 px-4"
                  >
                    <Image
                      src={icon}
                      alt={title}
                      height={80}
                      width={80}
                      className="mx-auto mb-2"
                    />
                    <div>
                      <h2
                        style={{
                          fontFamily: "Roboto",
                        }}
                        className="text-xl font-semibold mb-4"
                      >
                        {title}
                      </h2>
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
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          ref={ref_work}
          initial="hidden"
          animate={inView_work ? "visible" : "hidden"}
          variants={animationVariants_work}
          transition={{ duration: 0.5 }}
        >
          <Heading title="Work Flow" />
          <Image
            src={Workflow}
            alt="Workflow"
            className="object-cover mx-auto "
          />
        </motion.div>
      </Container>
    </>
  );
};

export default page;
