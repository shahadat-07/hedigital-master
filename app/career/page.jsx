'use client'

import React from "react";
import Container from "../components/Container";
import SecondNav from "../components/PageComponents/SecondNav";
import Career from "../components/Career/Career";
import ClientOnly from "../components/ClientOnly";
import Expectations from "../components/Career/Expectations";
import Consultation from "../components/Consultation/Consultation";
import Benefits from "../components/Career/Benefits";
import { motion } from "framer-motion";

const page = () => {
 
  return (
    <>
      <Container>
        <div className="grid grid-cols-1 mb-section-gap gap-5 pt-[100px]">
          <Expectations />
          <Benefits />
        </div>
    
        <ClientOnly>
          <Career />
        </ClientOnly>
      </Container>
    </>
  );
};

export default page;
