import React from "react";

function Consultation() {
  return (
    <div className="consultation-container">
      <div>
        <div style={{ padding: "20px 0", textAlign: "center" }}>
          <h1
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              fontFamily: "Roboto",
              color: "#fff",
            }}
          >
            GET YOUR FREE CONSULTATION
          </h1>
          <div className="about-title-hr">
            <div className="title-hr" style={{ borderColor: "#fff" }} />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              style={{ color: "orange", fontWeight: "900", padding: "" }}
            >
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <div className="title-hr" style={{ borderColor: "#fff" }} />
          </div>
        </div>

        <div style={{ textAlign: "center", padding: "40px 0" }}>
          <a href="#contact" className="consultation-btn">
            Schedule An Appointment
          </a>
        </div>
      </div>
    </div>
  );
}

export default Consultation;
