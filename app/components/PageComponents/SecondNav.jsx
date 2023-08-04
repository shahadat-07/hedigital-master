"use client";
import { Nav, Navbar } from "react-bootstrap";
import Link from "next/link";
import logo from "../../assets/logo.svg";
import Image from "next/image";

const SecondNav = () => {
  return (
    <Navbar
      bg="white"
      style={{
        padding: "10px 20px",
        backgroundColor: "#fbb034",
        backgroundImage: "linear-gradient(315deg, #ffa81c 0%, #e8c900 74%)",
        boxShadow: "0 0 5px 0 #817f7c",
        position: "fixed",
        top: "0",
        width: "100%",
        height:"64px",
        zIndex: 9999,
      }}
    >
      {/* <Link href="/">
        <Image
          className="w-20"
          src={logo}
          alt="HawkEyes Digital Monitoring Ltd."
          style={{ border: "2px solid #ffc61b", borderRadius: "5px" }}
        />
      </Link> */}
      <Nav className="ml-auto">
        {/* <Link
          className="hover:bg-gray-700 text-white focus:text-black px-3 py-2 rounded-md text-lg font-bold"
          href="/"
        >
          {" "}
          BACK TO HOME
        </Link> */}
      </Nav>
    </Navbar>
  );
};

export default SecondNav;
