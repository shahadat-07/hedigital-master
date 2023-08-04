import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Autoplay, Keyboard, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
// import 'swiper/css/navigation';
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image5 from "../../assets/Picture5.png";

function Client() {
  const aboutData = [
    {
      icon: "https://i.ibb.co/7YzRCTy/bat.png",
      title: "BAT",
      description:
        "British American Tobacco Bangladesh is one of the largest multinational corporations, operated by British American Tobacco in Bangladesh. They are listed on the stock index of the Dhaka Stock Exchange and Chittagong Stock Exchange.",
    },
    {
      icon: "https://i.ibb.co/bvrcdB1/banglalink.png",
      title: "Banglalink",
      description:
        "Banglalink Digital Communications Ltd. is a telecommunication service provider in Bangladesh. It's the third-largest cellular service provider in Bangladesh.",
    },
    {
      icon: "https://i.ibb.co/SRhgz9y/bkash.png",
      title: "Bkash",
      description:
        "bKash is a mobile money service in Bangladesh. This mobile money system started as a joint venture between BRAC Bank and Money in Motion LLC, U.S. of America.",
    },
    {
      icon: "https://i.ibb.co/bR2q08C/grameenphone.png",
      title: "Grameenphone",
      description:
        "Grameenphone, widely abbreviated as GP, is the leading telecommunications service provider in Bangladesh, with 83.18 million subscribers. It is a joint venture between Telenor and Grameen Telecom Corporation",
    },
    {
      icon: "https://i.ibb.co/BzWvmHc/itc.png",
      title: "ITC Limited",
      description:
        "The company has 13 businesses in 5 segments. It exports its products in 90 countries. ITC has a diversified presence across industries such as FMCG, hotels, software, packaging and agribusiness.",
    },
    {
      icon: "https://i.ibb.co/FhzsM87/unilever.png",
      title: "Unilever",
      description:
        "Unilever was founded by the merger of Lever Brothers and Margarine Unie in 1929. It was founded as a maker of oils and fats, but has since diversified into consumer goods.",
    },
    {
      icon: "https://i.ibb.co/5jPhd7y/huawei.png",
      title: "Huawei",
      description:
        "Huawei Technologies Co., Ltd. is a Chinese multinational technology corporation headquartered in Shenzhen, Guangdong, China. It designs, develops and sells telecommunications equipment, consumer electronics and various smart devices.",
    },
    {
      icon: "https://i.ibb.co/vJ1tg4R/nestle.png",
      title: "Nestle",
      description:
        "It is the largest food company in the world, measured by revenue and other metrics, since 2014. Nestlé is a Swiss multinational food and drink processing conglomerate corporation headquartered in Vevey, Vaud, Switzerland.",
    },
    {
      icon: "https://i.ibb.co/BVgqWvv/sinicare.png",
      title: "Sinicare",
      description:
        "Sinicare Bangladesh is a Franchise concern of Sini Australia Pty Ltd And It’s an official authorised company to sell, distribute and promote brands and products owned and supplied by Sini Australia Pty Ltd.",
    },
  ];

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div id="client" className="bg-white">
      <Container>
        <div className="about-title-container">
          <h1
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              fontFamily: "Roboto",
            }}
          >
            OUR CLIENTELE
          </h1>
          <div className="about-title-hr">
            <div className="title-hr" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              style={{ color: "orange", fontWeight: "900", padding: "" }}
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <div className="title-hr" />
          </div>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={animationVariants}
            transition={{ duration: 1.5 }}
          >
          <div style={{ marginTop: "60px" }}>
            <Swiper
              spaceBetween={50}
              slidesPerView={3}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              keyboard={{
                enabled: true,
              }}
              pagination={{
                clickable: true,
              }}
              navigation
              modules={[Keyboard, Autoplay, Pagination]}
              loop
              breakpoints={{
                "@0.00": {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                "@0.75": {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                "@1.00": {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                "@1.50": {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
            >
              {aboutData.map((doc) => (
                <SwiperSlide key={doc.title}>
                  <div>
                    <Row>
                      <Col sm={12} md={12} lg={12} xl={12} xs={12}>
                        <div className="client-logo-container">
                          <Image
                            width={500}
                            height={300}
                            loading="lazy"
                            src={doc.icon}
                            alt={doc.title}
                            className="img-fluid w-75 mx-auto"
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}

export default Client;
