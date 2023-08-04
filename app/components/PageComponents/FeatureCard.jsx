"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

import { findMaxDescriptionLength, findMaxTitleLength  } from "../../utils/index";

const FeatureCard = ({ feature, data, optional = '' }) => {
  const [maxTitleLength, setMaxTitleLength] = useState(0);
  const [maxDescriptionLength, setMaxDescriptionLength] = useState(0);
  const { icon, title, description } = feature;

  useEffect(() => {
    setMaxDescriptionLength(findMaxDescriptionLength(data));
  }, [data]);


  useEffect(() => {
    setMaxTitleLength(findMaxTitleLength(data));
  }, []);

  return (
    <div className="p-3 w-full md:w-2/4 lg:w-1/3">
      <div className="bg-white rounded-lg shadow-lg text-center py-8 px-4">
        <Image
          src={icon}
          alt={title}
          height={80}
          width={80}
          className="mx-auto mb-2"
        />
        <div>
          <h2
            style={{
              fontFamily: "Roboto",
              height: `${(maxTitleLength / 30) * 26}px`
            }}
            className="text-xl font-semibold mb-4"
          >
            {title}
          </h2>
          <p
            style={{
              height: `${(maxDescriptionLength / 50) * 26}px`,
              fontSize: "16px",
              fontFamily: "Arial",
              lineHeight: "26px",
              fontWeight: "300",
              textAlign: "justify",
              color: "#85868c",
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
