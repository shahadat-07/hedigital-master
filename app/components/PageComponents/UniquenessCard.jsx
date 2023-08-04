import Image from "next/image";
import React from "react";

const UniquenessCard = ({ data }) => {
  const { bgColor, icon, title, description } = data;



  return (
    <div
      style={{ backgroundColor: bgColor, borderBottom: "4px solid rgba(0, 0, 0, 0.1)", transform: "rotateY(-26deg) rotateX(13deg)", mixBlendMode: "multiply", transition: "transform 0.3s", 
    }}
      className={`flex rounded-xl py-1 lg:py-2 transition duration-300 mx-auto cursor-pointer hover-effect`}
    >
      <div className="w-1/6 flex justify-center items-center">
        <Image src={icon} alt="Icon" className="w-6 lg:w-12 h-6 lg:h-12" />
      </div>

      <div className="w-5/6 flex flex-col justify-center">
        <h3 className="text-sm lg:text-base font-bold text-black">{title}</h3>
        <p className="text-gray-600 text-[13px]">{description}</p>
      </div>
    </div>
  );
};

export default UniquenessCard;
