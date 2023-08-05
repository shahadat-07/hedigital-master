/* eslint-disable react-hooks/rules-of-hooks */

'use client'
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Container from "../components/Container";
import SecondNav from "../components/PageComponents/SecondNav";
import Heading from "../components/Heading";
import Image from "next/image";
import WhyImg from "../assets/why_choose.png"
import ChooseFeatureCard from "../components/WhyChooseUs/ChooseFeatureCard";
import Consultation from "../components/Consultation/Consultation";
import team from "../assets/group.svg";
import happyImg from "../assets/happy-man.png";
import ideaImg from "../assets/idea.png";
import exclusivity from "../assets/individual.svg";
import tailoredSolutions from "../assets/tailored-solutions.svg";

const page = () => {

    const [ref_parent, inView_parent] = useInView({
        triggerOnce: true,
        threshold: 0.00000001,
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
        <>
        <Container>
            <div ref={ref_parent} className="pt-[100px] mb-section-gap">
                <Heading title="Why Choose Us"/>
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
                    HawkEyes unique offering of Marketing process automation with Nationwide Digital OOH monitoring platform and further included complete digital management, monitoring, and control over the marketing & sales operation for any company operating in retail distribution-based businesses. With time our portfolio and solution domain expanded, and we have capitalized our expertise to introduce customized automation solutions for our clientele addressing their unique requirement 
                </p>
            </div>
            <Heading title="Key Features" />

            <div className="flex flex-col lg:flex-row max-w-6xl mx-auto mb-section-gap">
                <div className="flex-1 order-last">
                    {/* <ChooseFeatureCard /> */}
                    <div>
                {items.map((item, index) => (
                  <motion.div
                  key={index}
                  initial="hidden"
                  animate={inView_parent ? "visible" : "hidden"}
                  variants={animationVariants_parent}
                  transition={{ duration: 0.5, delay: index * 0.5 }}
                >
                  <ChooseFeatureCard key={index} item={item} />
                </motion.div>
                ))}
              </div>  
                </div>
                <div className="flex-1 flex items-center lg:order-last">
                <motion.div
                    ref={ref_image}
                        initial="hidden"
                        animate={inView_image ? "visible" : "hidden"}
                        variants={animationVariants_image}
                        transition={{ duration: 0.5 }}
                    >
                   <Image
                    src={WhyImg}
                    alt="Why Choose Us Image"
                    width={800}
                    height={800}
                    className="obejct-cover mx-auto mt-6"/>
                    </motion.div>
                </div>
            </div>
        </Container>
        </>
    );
}

export default page;