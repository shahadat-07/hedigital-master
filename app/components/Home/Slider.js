import { useInView } from "react-intersection-observer";
import Particles from "react-tsparticles";
import logo from "../../assets/logo.svg";
import downArrow from "../../assets/scroll-dwon.gif";
import { optionsObj } from "./sliderObj";
import Image from "next/image";
import { motion } from "framer-motion";

function Slider() {

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const animationVariants = {
    hidden: { opacity: 0, x: -300 },
    visible: { opacity: 1, x: 0 },
  };


  return (
    <div className="home-container">
      <Particles id="tsparticles" options={optionsObj} />
      <div className="home-content">
        <div>
          <Image
            src={logo}
            alt="HawkEyes Digital Monitoring Ltd."
            className="home-image"
          />
              <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={animationVariants}
                transition={{ duration: 0.5 }}
              >
            <h1 className="pt-3 pb-3 home-title">
              Leveraging Technology To Increase <br />
              The Efficiency of Your Business
            </h1>
            <h5 className="home-f-title">Innovate - Automate - Simplify</h5>
          </motion.div>

          <div style={{ paddingTop: "60px" }}>
            <a href="#about">
              <Image
                src={downArrow}
                alt="HawkEyes About"
                style={{ width: "60px", height: "auto", margin: "0 auto" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
