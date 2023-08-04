import Heading from "../Heading";
import JobCard from "./JobCard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Career = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  const animationVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <section className="lg:pb-36 bg-gray-100 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="max-w-xl text-center mx-auto mb-16 pt-8">
          <Heading title="Job Opportunity" />
          <div className="text-center mt-4">
            <p className="text-xl text-gray-600 tracking-tight">
              Join us as we embark on the next exciting chapter of our journey
              at Hawkeyes. Together, we&apos;ll soar to new heights and achieve
              remarkable success!
            </p>
          </div>
        </div>
        <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={animationVariants}
              transition={{ duration: 0.5 }}
            >
        <div className="max-w-3xl mx-auto mb-section-gap">
          <div className="grid grid-cols-1 -m-1">
            <JobCard role="Software Engineer" jobType="Full Time / Remote" />
            <JobCard role="Product Designer" jobType="Remote" />
            <JobCard role="VP of Marketing" jobType="Full Time / London, UK" />
            <JobCard
              role="Graphic Designer"
              jobType="Full Time / Melbourne, Australia"
            />
          </div>
        </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Career;
