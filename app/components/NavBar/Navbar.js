import { Transition } from "@headlessui/react";
import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/logo.svg";
import fb from "../../assets/nav-fb.svg";
import linkedin from "../../assets/nav-linkedin.svg";
import Link from "next/link";
import Image from "next/image";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const [navBackground, setNavBackground] = useState(true);
  const navRef = useRef();
  navRef.current = navBackground;
  let prevScrollpos = global.pageYOffset;

  useEffect(() => {
    const handleScroll = () => {
      const show = global.scrollY > -5; 
      if (navRef.current !== show) {
        setNavBackground(show);
      }
      const currentScrollPos = global.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("nav-main").style.top = "0";
      } else {
        document.getElementById("nav-main").style.top = "-100px";
      }
      prevScrollpos = currentScrollPos;
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <nav className={navBackground ? "stickyOn" : "stickyOff"} id="nav-main">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center justify-between w-full">
              <div className="flex-shrink-0">
                <Image
                  className="w-28"
                  src={logo}
                  alt="HawkEyes Digital Monitoring Ltd."
                  style={{ border: "2px solid #ffc61b", borderRadius: "5px" }}
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4 b-nav-item">
                  <Link
                    href="/"
                    className=" hover:bg-yellow-500 text-white focus:text-black px-3 py-2 rounded-md text-lg font-bold no-underline"
                  >
                    HOME
                  </Link>

                  <Link
                    href="/about"
                    className="text-white hover:bg-yellow-500 focus:text-black px-3 py-2 rounded-md text-lg font-bold no-underline"
                  >
                    ABOUT US
                  </Link>

                  <Link
                    href="/solutions"
                    className="text-white hover:bg-yellow-500 focus:text-black px-3 py-2 rounded-md text-lg font-bold no-underline"
                  >
                    SOLUTIONS
                  </Link>

                  <Link
                    href="/why-choose-us"
                    className="text-white hover:bg-yellow-500 focus:text-black px-3 py-2 rounded-md text-lg font-bold no-underline"
                  >
                    WHY US
                  </Link>

                  <Link
                    href="/client"
                    className="text-white hover:bg-yellow-500 focus:text-black px-3 py-2 rounded-md text-lg font-bold no-underline"
                  >
                    CLIENT
                  </Link>
                  <Link
                    href="/contact"
                    className="text-white hover:bg-yellow-500  focus:text-black px-3 py-2 rounded-md text-lg font-bold no-underline"
                  >
                    CONTACT
                  </Link>
                  <Link
                    href="/career"
                    className="text-white hover:bg-yellow-500  focus:text-black px-3 py-2 rounded-md text-lg font-bold no-underline"
                  >
                    CAREER
                  </Link>
                </div>
              </div>
              <div className="nav-social">
                <div className="flex">
                  <Link
                    href="https://www.facebook.com/hedigital.tech/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src={fb}
                      alt="HawkEyes Facebook Page"
                      style={{
                        width: "40px",
                        height: "auto",
                        marginRight: "10px",
                      }}
                    />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/hedigital-tech/mycompany/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src={linkedin}
                      alt="HawkEyes Linkedin"
                      style={{ width: "40px", height: "auto" }}
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div ref={ref} className="md:hidden" id="mobile-menu">
              <div  className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  style={{ textDecoration: "none" }}
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-lg font-bold no-underline"
                >
                  HOME
                </Link>

                <Link
                  onClick={() => setIsOpen(false)}
                  href="/about"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-lg font-bold no-underline"
                >
                  ABOUT US
                </Link>

                <Link
                  onClick={() => setIsOpen(false)}
                  href="/solutions"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-lg font-bold no-underline"
                >
                  SOLUTIONS
                </Link>

                <Link
                  onClick={() => setIsOpen(false)}
                  href="/why-choose-us"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-lg font-bold no-underline"
                >
                  WHY US
                </Link>

                <Link
                  onClick={() => setIsOpen(false)}
                  href="/client"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-lg font-bold no-underline"
                >
                  CLIENT
                </Link>
                <Link
                  onClick={() => setIsOpen(false)}
                  href="/contact"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-lg font-bold no-underline"
                >
                  CONTACT
                </Link>
                <Link
                  onClick={() => setIsOpen(false)}
                  href="/career"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-lg font-bold no-underline"
                >
                  CAREER
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default NavBar;
