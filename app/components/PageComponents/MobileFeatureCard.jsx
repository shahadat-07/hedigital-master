import Image from "next/image";

const MobileFeatureCard = ({icon, title, description}) => {
    return (
        <div className="flex flex-col items-center justify-center border-2 border-[#ffc61b] rounded-3xl py-4 px-2">
            <Image src={icon} alt="Icon" width={80} height={80} className="mb-2" />
            <h2 className="text-center text-xl">{title}</h2>
            <p
            style={{
              fontSize: "16px",
              fontFamily: "Arial",
              lineHeight: "26px",
              fontWeight: "300",
              textAlign: "justify",
              color: "#85868c",
            }}
            className="max-w-6xl text-center mx-auto"
          >
            {description}
          </p>
        </div>
    );
}

export default MobileFeatureCard;