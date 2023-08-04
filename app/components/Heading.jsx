"use client";

const Heading = ({ title, subtitle, single }) => {
  return (
    <div className="text-center mb-8">
      <h1
        style={{
          fontWeight: "bold",
          fontFamily: "Roboto",
        }}
        className="text-xl md:text-lg lg:text-4xl"
      >
        {title}
      </h1>
      {subtitle && (
        <div
          style={{
            fontFamily: "Roboto",
          }}
          className="font-light text-neutral-500 mt-2"
        >
          {" "}
          {subtitle}
        </div>
      )}

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
    </div>
  );
};

export default Heading;
