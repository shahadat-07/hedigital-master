import Image from "next/image";

const IconBox = ({ icon, title }) => {

  return (
    <div className="p-2">
      <div className="border-2 border-[#ffc61b] text-center px-2 py-3">
        <Image
          src={icon}
          alt={title}
          height={50}
          width={50}
          className="mx-auto mb-2"
        />
        <div>
          <h2
            style={{
              fontFamily: "Roboto",
            }}
            className="text-xl font-semibold mb-4"
          >
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default IconBox;
