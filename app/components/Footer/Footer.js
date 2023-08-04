import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import browserIcon from "../../assets/chrome.svg";
import clockIcon from "../../assets/clock.svg";
import phoneIcon from "../../assets/contact.svg";
import facebookIcon from "../../assets/facebook.svg";
import linkedinIcon from "../../assets/linkedin.svg";
import locationIcon from "../../assets/map.svg";
import messageIcon from "../../assets/message.svg";
import Image from "next/image";

function Footer() {
  // const mainService = [
  //     {
  //         image: call,
  //         title: 'CALL US TODAY',
  //         about: '+880 1711081888'
  //     },
  //     {
  //         image: mapIcon,
  //         title: 'Dhaka, Bangladesh',
  //         about: 'Dhaka 1230'
  //     },
  //     {
  //         image: serviceIcon,
  //         title: 'Best Service',
  //         about: 'We Provide Our Best'
  //     }
  // ]

  const serviceList = [
    "AI BASED",
    "PROCESS AUTOMATION",
    "OCR/ ICR BASED",
    "ANALYTICS & DASHBOARD",
  ];
  const contactInfo = [
    {
      contact: "4th floor, House-5, Road-3, Sector-3, Uttara",
      icon: locationIcon,
      hr: true,
    },
    {
      contact: "+880 1321119222",
      icon: phoneIcon,
      hr: true,
    },
    {
      contact: "info@hedigital.tech",
      icon: messageIcon,
      hr: true,
    },
    {
      contact: "Sat-Thu: 10.00 am - 06.00 pm",
      icon: clockIcon,
      hr: true,
    },
    {
      contact: "Friday: closed",
      icon: clockIcon,
      hr: false,
    },
  ];

  const contactInfoIndia = [
    {
      contact:
        "I.T. Tower, Second Floor Nukleus Co-working Plot No 29, Sector 142 Noida, Uttar Pradesh 201301",
      icon: locationIcon,
      hr: true,
    },
    {
      contact: "+91 9811911791",
      icon: phoneIcon,
      hr: true,
    },
    {
      contact: "contactus@appilary.com",
      link: true,
      icon: messageIcon,
      email: true,
      hr: true,
    },
    {
      contact: "www.appilary.com",
      icon: browserIcon,
      link: true,
      hr: true,
    },
  ];

  return (
    <footer>
      <main className="footer-main-container mx-auto">
        <Container>
          <Row style={{ margin: "0", justifyContent: "center" }}>
            <Col xs={12} md={6} lg={2} xl={2} className="mb-3">
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.79466819322!2d90.39605561448593!3d23.86142399044394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1ca8cdb0293%3A0xfb1f57ffe44bb014!2sHawkEyes%20Digital%20Monitoring%20Ltd.!5e0!3m2!1sen!2sbd!4v1629047328913!5m2!1sen!2sbd"
                  width="100%"
                  height="250"
                  style={{ border: "3px solid orange", borderRadius: "5px" }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </Col>
            <Col xs={12} md={6} lg={3} xl={3} className="mb-3">
              <h6 className="footer-features">OUR SOLUTIONS</h6>
              <ul className="service-items">
                {serviceList.map((data, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <li key={index}>
                    <a style={{ textDecoration: "none" }} href="#solutions">
                      {data}
                    </a>
                  </li>
                ))}
              </ul>
            </Col>
            <Col xs={12} md={6} lg={3} xl={3} className="mb-3">
              <h6 className="footer-features">BANGLADESH OFFICE</h6>
              {contactInfo.map((data, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <div className="contact-item-container" key={index}>
                  <div className="d-flex" style={{ color: "#fff" }}>
                    <Image src={data.icon} alt="HawkEyes Contact" width="20" />
                    &nbsp;&nbsp;&nbsp;
                    <p>{data.contact}</p>
                  </div>
                  {data.hr ? <hr className="contact-hr" /> : null}
                </div>
              ))}
            </Col>
            <Col xs={12} md={6} lg={3} xl={3} className="mb-3">
              <h6 className="footer-features">INDIA OFFICE</h6>
              {contactInfoIndia.map((data, index) => (
                <div className="contact-item-container" key={index}>
                  <div
                    className="d-flex contactInfo-item"
                    style={{ color: "#fff" }}
                  >
                    <Image src={data.icon} alt="HawkEyes Contact" width="20" />
                    &nbsp;&nbsp;&nbsp;
                    {data.link ? (
                      data.email ? (
                        <a href={`mailto:${data.contact}`}>{data.contact}</a>
                      ) : (
                        <a
                          href="http://www.appilary.com/appilary/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {data.contact}
                        </a>
                      )
                    ) : (
                      <p>{data.contact}</p>
                    )}
                  </div>
                  {data.hr ? <hr className="contact-hr" /> : null}
                </div>
              ))}
            </Col>
          </Row>
          <section className="copyright-container">
            <div className="d-flex justify-content-center pt-2 pb-2">
              <a
                href="https://www.facebook.com/hedigital.tech/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="social-btn" style={{ marginRight: "15px" }}>
                  <Image
                    src={facebookIcon}
                    alt="HawkEyes Facebook"
                    width="30"
                  />
                </button>
              </a>
              <a
                href="https://www.linkedin.com/company/hedigital-tech"
                target="_blank"
                rel="noreferrer"
              >
                <button className="social-btn">
                  <Image
                    src={linkedinIcon}
                    alt="HawkEyes Linkedin"
                    width="30"
                  />
                </button>
              </a>
              {/* <button className="social-btn"><FontAwesomeIcon icon={faTwitter} /></button> */}
            </div>
            <div style={{ color: "#fff", textAlign: "center" }}>
              <span>
                &copy;HawkEyes Digital Monitoring Limited{" "}
                {new Date().getFullYear()}
              </span>
            </div>
          </section>
        </Container>
      </main>
    </footer>
  );
}

export default Footer;
