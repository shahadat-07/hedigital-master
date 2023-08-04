import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Spinner } from 'react-bootstrap';

const ContactLeftColumn = ({modify = false}) => {

    const [loading, setLoading] = useState(false);
    const [userInfo, setUserInfo] = useState({
      name: "",
      email: "",
      mobile: "",
      message: "",
    });
    const submitForm = (e) => {
      e.preventDefault();
      setLoading(true);
  
      fetch("https://protected-caverns-91943.herokuapp.com/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...userInfo,
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          setLoading(false);
          console.log(result);
          setUserInfo({
            name: "",
            email: "",
            mobile: "",
            message: "",
          });
          alert(`${result.message}`);
        });
    };

    const [ref, inView] = useInView({
      triggerOnce: false,
      threshold: 0.1,
    });
  
    const animationVariants = {
      hidden: { opacity: 0, x: -500 },
      visible: { opacity: 1, x: 0 },
    };

    return (
        <div className={`mb-12 max-w-3xl shrink-0 grow basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6 ${modify ? "max-w-3xl grow mx-auto" : "w-full grow-0"}`}>
         <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={animationVariants}
            transition={{ duration: 0.7 }}
          >
        <div>
          <form onSubmit={submitForm}>
            <input
              type="text"
              placeholder="Name *"
              className="form-control my-3"
              value={userInfo.name}
              onChange={(e) =>
                setUserInfo((prev) => ({
                  ...prev,
                  name: e.target.value,
                }))
              }
              required
            />
            <input
              type="text"
              placeholder="E-mail *"
              className="form-control my-3"
              value={userInfo.email}
              onChange={(e) =>
                setUserInfo((prev) => ({
                  ...prev,
                  email: e.target.value,
                }))
              }
              required
            />
            <input
              type="text"
              placeholder="Telephone *"
              className="form-control my-3"
              value={userInfo.mobile}
              onChange={(e) =>
                setUserInfo((prev) => ({
                  ...prev,
                  mobile: e.target.value,
                }))
              }
            />
            <textarea
              placeholder="Message *"
              className="form-control my-3"
              rows={4}
              value={userInfo.message}
              onChange={(e) =>
                setUserInfo((prev) => ({
                  ...prev,
                  message: e.target.value,
                }))
              }
              required
            />
            {loading ? (
              <Spinner animation="border" variant="primary" />
            ) : (
              <input
                type="submit"
                value="SUBMIT"
                className="btn rounded-0 text-black fw-bold"
                style={{ background: "#ffc61b" }}
              />
            )}
          </form>
        </div>
        </motion.div>
      </div>  
    )
}

export default ContactLeftColumn;
