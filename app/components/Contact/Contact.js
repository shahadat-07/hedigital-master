"use client";

import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import Heading from "../Heading";
import ContactRightColumn from "./ContactRightColumn";
import ContactLeftColumn from "./ContactLeftColumn";

export default function Contact() {
  return (
    <>
      <div className="">
        <section className="mb-32">
          <div className="relative h-[400px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-[url('https://images.unsplash.com/photo-1617957771979-a91027b58dd0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80')] flex items-center justify-center">
            <Heading
              title="Get In Touch"
              subtitle="Feel free to drop us a note at any time you please using below contact form."
            />
          </div>
          <div className="container px-6 md:px-12">
            <div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
              <div className="flex flex-wrap">
                <ContactLeftColumn modify />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
