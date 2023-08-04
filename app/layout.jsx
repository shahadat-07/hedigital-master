"use client";

import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/NavBar/nav.css";
import "./components/Home/home.css";
import "swiper/css";
import "./components/About/about.css";
import "./components/WhyChooseUs/choose.css";
import "./components/Consultation/consultation.css";
import "./components/Client/client.css";
import "./components/Footer/footer.css";
import Consultation from "./components/Consultation/Consultation";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/NavBar/Navbar";
import Head from "next/head";

// const metadata = {
//   title: "HawkEyes Digital Monitoring Ltd.",
//   description: "HawEyes",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
        <Head>
          <title>HawkEyes Digital Monitoring Ltd.</title>
          <meta
            name="copyright"
            content="Copyright © HawkEyes Digital Monitoring Ltd."
          />
          <meta name="author" content="Mirza Ferdous Ohid"></meta>
          <meta name="owner" content="hedigital.tech"></meta>
          <meta
            name="description"
            content="HawkEyes Digital Monitoring Ltd is quintessentially a software solution provider. The company's core objective is to provide tailored solution & service to clients creating a unique edge for them in the market and ensure a tangible business gain. HawkEyes initiated with a unique offering for process automation to companies since 2015. Till date we have served several large MNCs with our innovative solution. We are based out of Dhaka, Bangladesh but have affiliated presence in India."
          ></meta>
          <meta
            name="keywords"
            content="HawkEyes HDML HawkEyes Digital Monitoring Ltd. ai solution bangladesh bd monitoring software software company software solution company AI-Trade Merchandizer bd Digital KYC bd An OCR based, AI enabled customer registration system. OOH Monitoring automation software solution automation solution automation bd automation bangladesh orc bangladesh ekyc bangladesh solution software hawkEyes Hdml"
          ></meta>
      </Head>
    <body suppressHydrationWarning={true}>
      <Navbar />
      <div className="">{children}</div>
      <Consultation />
      <Footer />
    </body>
  </html>
  );
}
