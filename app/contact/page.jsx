"use client";

import React, { useState } from "react";
import Container from "../components/Container";
import Heading from "../components/Heading";
import Input from "../components/Inputs/Input";
import SecondNav from "../components/PageComponents/SecondNav";
import { Spinner } from "react-bootstrap";
import ContactLeftColumn from "../components/Contact/ContactLeftColumn"
import Consultation from "../components/Consultation/Consultation"
import ContactRightColumn from "../components/Contact/ContactRightColumn"
const page = () => {
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const submitForm = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch("https://protected-caverns-91943.herokuapp.com/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...userInfo,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        setLoading(false);
        console.log(result);
        setUserInfo({
          name: "",
          email: "",
          mobile: "",
          message: "",
        });
        alert(`${result.message}`);
      });
  };
  return (
    <>
      <Container>
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
                <ContactLeftColumn />
                <ContactRightColumn />
              </div>
            </div>
          </div>
        </section>
      </div>
      </Container>
    </>
  );
};

export default page;
