"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Heading from "../../components/Heading";
import Container from "../../components/Container";
import FeatureCard from "../../components/PageComponents/FeatureCard";
import Consultation from "../../components/Consultation/Consultation";
import { features_sales, keyAttributesSales } from "../../const/index";
import SecondNav from "../../components/PageComponents/SecondNav";
import workflow from "../../assets/Sales Master WorkFlow.png"

const page = () => {


  const [ref_parent, inView_parent] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const animationVariants_parent = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  const [ref_box, inView_box] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const animationVariants_box = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  const [ref_image, inView_image] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const animationVariants_image = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="overflow-x-hidden">
      <Container>
        <div className="mb-section-gap pt-[100px]">
          <Heading
            title="SalesMaster"
            subtitle="Your Comprehensive Sales Management Solution"
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
            className="max-w-4xl text-center mx-auto"
          >
            -Our innovative sales management solution is designed to optimize
            your sales processes and drive business growth. With SalesMaster,
            you gain full control over your sales pipeline, empowering your
            sales teams with advanced tools for lead tracking, opportunity
            management, and performance analytics.
          </p>
        </div>
        <div className="mb-section-gap">
          <Heading title="Key Features" />
          <motion.div
              ref={ref_box}
              initial="hidden"
              animate={inView_box ? "visible" : "hidden"}
              variants={animationVariants_box}
              transition={{ duration: 1 }}
              >
          <div className="flex flex-wrap justify-center">
            {features_sales.map((feature, index) => (
              <FeatureCard
                key={index}
                feature={feature}
                data={features_sales}
              />
            ))}
          </div>
          </motion.div>

        </div>

        <div className="mb-section-gap max-w-7xl mx-auto">
          <h2
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              fontFamily: "Roboto",
              marginBottom: "10px",
            }}
          >
            By leveraging these insights, organizations can:{" "}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4"></div>
          <div className="mt-4">
            <div className="mt-4">
              {keyAttributesSales.map(({ title, description, id }, index) => (
                 <motion.div
                 ref={ref_parent}
                 key={index}
                 initial="hidden"
                 animate={inView_parent ? "visible" : "hidden"}
                 variants={animationVariants_parent}
                 transition={{ duration: 0.35, delay: index * 0.5 }}
               >
                  <p
                    key={id}
                    style={{
                      fontSize: "16px",
                      fontFamily: "Arial",
                      lineHeight: "26px",
                      fontWeight: "300",
                      color: "#85868c",
                    }}
                  >
                    <span className="font-bold">{title} </span>
                    {description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-4">
            <motion.div
                  ref={ref_image}
                  initial="hidden"
                  animate={inView_image ? "visible" : "hidden"}
                  variants={animationVariants_image}
                  transition={{ duration: 0.8 }}
                  >
              <Heading title="Work Flow" />
              <Image src={workflow} alt="workflow" className="mx-auto" />
            </motion.div>   
        </div>

      </Container>
          <Consultation />
    </div>
  );
};

export default page;
