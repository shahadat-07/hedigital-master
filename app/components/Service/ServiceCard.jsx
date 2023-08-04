import React from "react";

import Image from "next/image";
import Link from "next/link";

const ServiceCard = ({ service, index }) => {
  const { id, icon, title, desc } = service;

  const squareStyles = { border: "3px solid #FFC61B" };

  const readMoreStyle = {
    border: "2px solid #FFC61B",
    fontSize: "18px",
    padding: "5px 10px",
    borderRadius: "5px",
    fontWeight: "500",
    fontFamily: "Roboto",
    transition: "all 0.3s ease in out",
  };

  const encodedTitle = encodeURIComponent(title.toLowerCase());
  const dynamicHref = `/services/${encodedTitle
    .replace(/%20/g, "-")
    .replace(/%26/g, "")}`;

  return (
    <React.Fragment>
      {index % 3 === 0 ? <div className="w-100" /> : null}
      <div
        className={`col-md my-2 ${(index + 1) % 3 === 0 ? "" : "me-3"} ${
          (index + 1) % 2 === 0 ? "bg-white border-0" : ""
        }`}
        style={squareStyles}
      >
        <div className="p-4">
          <div
            style={{ width: 75, ...squareStyles }}
            className="p-3 d-flex justify-content-center align-items-center mx-auto"
          >
            <div>
              <Image src={icon} width={36} height="auto" alt="Service Icon" />
            </div>
          </div>
          <h3
            className={`text-center my-4 ${
              (index + 1) % 2 === 0 ? "text-black" : "text-white"
            }`}
            style={{
              fontSize: "25px",
              fontFamily: "Roboto",
              fontWeight: "700",
              color: "#333333",
            }}
          >
            {title}
          </h3>
          <p
            className={`text-center my-4 ${
              (index + 1) % 2 === 0 ? "text-black-50" : "text-white"
            }`}
            style={{
              fontSize: "16px",
              lineHeight: "25px",
              fontFamily: "Roboto",
              fontWeight: "400",
            }}
          >
            {desc}
          </p>

          <div style={{ textAlign: "center" }}>
            <Link href={dynamicHref} target="_blank" >
              <button
                type="button"
                style={readMoreStyle}
                className={`text-center my-4 read-more ${
                  (index + 1) % 2 === 0 ? "text-black-50" : "text-white"
                }`}
              >
                Read more
              </button>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ServiceCard;
