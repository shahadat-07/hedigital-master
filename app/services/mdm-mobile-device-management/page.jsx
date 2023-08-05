/* eslint-disable react-hooks/rules-of-hooks */

"use client"
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import SecondNav from "../../components/PageComponents/SecondNav";
import MobileFeatureCard from "../../components/PageComponents/MobileFeatureCard";
import Container from "../../components/Container";
import MDM from "../../assets/mdm.png";
import Heading from "../../components/Heading";
import AppImg from "../../assets/application.png";
import ContentImg from "../../assets/content.png";
import AdminImg from "../../assets/admins.png";
import simplified from "../../assets/simplified.png";
import location from "../../assets/location.png";
import reports from "../../assets/reports.png";
import secure from "../../assets/secure.png";
import device from "../../assets/device.png";
import remote from "../../assets/remote.png";
import security from "../../assets/device.png";
import Consultation from "../../components/Consultation/Consultation";

const page = () => {

  const [ref_image, inView_image] = useInView({
    triggerOnce: false,
    threshold: 0.8,
  });

  const animationVariants_image = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };

  const [ref_div, inView_div] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const animationVariants_div = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0 },
  };

  return <>
  <Container >
    <div className="pt-[100px]">
      <Heading title="MDM-Mobile Device Management Solution"/>
    </div>
          <motion.div
          ref={ref_image}
            initial="hidden"
            animate={inView_image ? "visible" : "hidden"}
            variants={animationVariants_image}
            transition={{ duration: 0.5 }}
          >
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4 mb-section-gap">
          <div className="md:order-2">
            <Image
              src={MDM}
              alt="Computer"
              width={400}
              height="auto"
              className="obejct-cover h-full mx-auto mb-3"
            />
          </div>
          <div className="md:order-1">
            <p
              style={{
                fontSize: "16px",
                fontFamily: "Arial",
                lineHeight: "26px",
                fontWeight: "300",
                color: "#85868c",
              }}
            >
              <span className="font-bold">
                100% Accurate Monthly Monitoring Report (with GPS Tracking){" "}
              </span>
              Our platform offers precise tracking through GPS technology,
              ensuring flawless monitoring of your OOH assets. Receive monthly
              reports that are 100% accurate, giving you real-time insights
              into the performance of your campaigns.
            </p>
          </div>
      </div>
            </motion.div>

      <Heading title="Key Features" />


       <motion.div
          ref={ref_div}
            initial="hidden"
            animate={inView_div ? "visible" : "hidden"}
            variants={animationVariants_div}
            transition={{ duration: 1.5 }}
          >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-section-gap max-w-6xl mx-auto">  
        <div className="flex flex-col gap-4 items-center justify-center">
          <MobileFeatureCard icon={AppImg} title="Application Management " description="Enables admins to push business apps on managed devices without end-user intervention, features include silent app installation, remote app updates, app configuration " />
          <MobileFeatureCard icon={ContentImg} title="Content Management " description="Feature allow to send broad-cast message, training materials remotely any device or group" />
          <MobileFeatureCard icon={AdminImg} title="Admins & Roles " description="Create custom roles and configure as many administrators as needed! Each device group can have its own administrator or any administrator can manage any device group" />
        </div>
        <div className="flex flex-col gap-4">
          <MobileFeatureCard icon={simplified} title="Simplified Enrollmen" description="Allows you to quickly enroll and configure devices easily" />
          <MobileFeatureCard icon={location} title="Location Tracking" description="Allow to determine where devices are and where they have been, all in real-time!" />
          <MobileFeatureCard icon={reports} title="REPORTS & ALERTS" description="Admin can access details reports including data usage, real time location history,Geo-fence, Account activity and many more" />
          <MobileFeatureCard icon={secure} title="Secure Browsing" description="kiosk browser lockdown features create a safe and secure browsing environment that your business need" />
        </div>
        <div className="flex flex-col gap-4 items-center justify-center gap-">
          <MobileFeatureCard icon={device} title="Device Management Policies " description="Based on requirement will able to  create a profile/configuration that will automatically install the applications, web shortcuts," />

          <MobileFeatureCard icon={remote} title="Remote cast & control"
          description="Remotely access to the registered devices and troubleshoot any issues with the devices." />

          <MobileFeatureCard icon={security} title="
Security " description="Admin can  see and catch attempts to factory reset, unlock, Performing a SIM swap or bypassing Geo-fence  " />
        </div>
      </div>
      </motion.div>
  </Container>
  </>;
};

export default page;
