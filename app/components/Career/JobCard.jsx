"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Heading from "../Heading";

const JobCard = ({ role, jobType }) => {
  const [show, setShow] = useState(false);
  const [singleProduct, setSingleProduct] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here (e.g., send data to the server)
    console.log("Form submitted:", formData);
  };

  const modalFunc = () => {
    setShow(true);
  };

  return (
    
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-50w"
        aria-labelledby="example-custom-modal-styling-title"
        size="md"
        centered
      >
        <form onSubmit={handleSubmit} className="max-w-6xl mx-auto mt-8 mb-4 p-4 bg-white shadow-lg rounded-lg">
          <Heading title="Submit Details" />
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cv">
            CV
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="cv"
            type="file"
            name="cv"
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
        </form>
        <Button
          style={{ backgroundColor: "orange", border: "none" }}
          onClick={() => setShow(false)}
        >
          Close
        </Button>
      </Modal>
      <div>
        <div onClick={() => {}} className="w-full p-1 hover:cursor-pointer">
          <div
            className="block p-6 bg-white hover:bg-opacity-50 transform hover:-translate-y-1 rounded-lg transition duration-500"
            href="#"
          >
            <div className="flex flex-wrap items-center justify-between -m-2">
              <div className="w-auto p-2">
                <h3 className="mb-1 font-semibold tracking-tight text-[#ffc61b]">
                  {role}
                </h3>
                <span className="text-gray-600 tracking-tight">{jobType}</span>
              </div>
              <div className="w-auto p-2">
                <div className="flex flex-row justify-center">
                  <Link
                    onClick={() => modalFunc()}
                    href="#"
                    className="about-btn"
                  >
                    Apply
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobCard;
