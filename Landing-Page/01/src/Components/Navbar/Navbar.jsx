import { useState } from "react";
import './Navbar.css'
import {
  ChevronDown,
  ChevronUp,
  Atom,
  Infinity,
  Lightbulb,
  Recycle,
  ShoppingCart,
  AudioLines,
  Flag,
  BadgeCheck,
} from "lucide-react";
import { FaAddressCard, FaFigma } from "react-icons/fa6";
import { SiApollographql, SiNotion } from "react-icons/si";
import { motion, useAnimation } from "framer-motion";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const controls = useAnimation();

  const toggleDropdown = (dropdown) => {
    setOpenDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  const toggleMobileMenu = () => {
    setOpenMobileMenu(!openMobileMenu);
    controls.start({
      opacity: openMobileMenu ? 0 : 1,
      y: openMobileMenu ? -30 : 0,
    });
  };

  return (
    <>
      <nav className="bg-transparent">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 lg:text-lg md:text-xs">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Your Logo
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <a
              href="/#"
              className="text-white hover:text-[#914ac8] duration-300 pe-7 py-3"
            >
              Get started
            </a>
            <a
              href="/#"
              className="border px-4 rounded-full h-13 py-3 hover:bg-gradient-to-r hover:from-[#914ac8] hover:to-[#f2758b]"
            >
              Book A Demo
            </a>
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu"
              aria-expanded={openMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div className="hidden md:flex md:order-1">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-transparent mx-3">
              <li className="relative">
                <button
                  className="flex items-center hover:text-neutral-400 duration-300"
                  onClick={() => toggleDropdown("products")}
                >
                  Product
                  <span>
                    {openDropdown === "products" ? (
                      <ChevronUp className="ms-2" />
                    ) : (
                      <ChevronDown className="ms-2" />
                    )}
                  </span>
                </button>
                {openDropdown === "products" && (
                  <div 
                  className="absolute left-1/2 transform -translate-x-1/2 mt-7 p-4 bg-[#23122e] rounded-xl shadow w-[300px] sm:w-[600px] lg:w-[900px] flex flex-wrap text-white z-10"
                  onMouseLeave={() => {
                    toggleDropdown(false)
                  }}
                  >
                    <div className="w-full lg:w-1/2 p-4 sm:p-4">
                      <h3 className="text-lg font-semibold mb-10">
                        Capabilities
                      </h3>
                      <ul className="space-y-10">
                        <li className="flex items-center itemsdd h-12 rounded-lg ps-5">
                          <Atom className="me-2 rounded-lg h-8 w-8" />
                          <span>Design</span>
                        </li>
                        <li className="flex items-center itemsdd h-12 rounded-lg ps-5">
                          <Infinity className="me-2 rounded-lg h-8 w-8" size={23} />
                          <span>Development</span>
                        </li>
                        <li className="flex items-center itemsdd h-12 rounded-lg ps-5">
                          <Lightbulb className="me-2 rounded-lg h-8 w-8" size={23} />
                          <span>Insights</span>
                        </li>
                        <li className="flex items-center itemsdd h-12 rounded-lg ps-5">
                          <Recycle className="me-2 rounded-lg h-8 w-8" size={23}  />
                          <span>Testing</span>
                        </li>
                      </ul>
                    </div>
                    <div className="w-full lg:w-1/2 p-4 border-l-2">
                      <h3 className="text-lg font-semibold mb-10 ms-5">
                        Solutions
                      </h3>
                      <ul className="space-y-12 mx-5">
                        <li className="flex items-center itemsdd h-12 rounded-lg ps-5">
                          <ShoppingCart className="me-2 rounded-lg h-8 w-8" size={23} />
                          <span>Sales</span>
                        </li>
                        <li className="flex items-center itemsdd h-12 rounded-lg ps-5">
                          <AudioLines className="me-2 rounded-lg h-8 w-8" size={23} />
                          <span>Marketing</span>
                        </li>
                        <li className="flex items-center itemsdd h-12 rounded-lg ps-5">
                          <Flag className="me-2 rounded-lg h-8 w-8" size={23} />
                          <span>Operations</span>
                        </li>
                        <li className="flex items-center itemsdd h-12 rounded-lg ps-5">
                          <BadgeCheck className="me-2 rounded-lg h-8 w-8" size={23} />
                          <span>Support</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </li>
              <li className="relative">
                <button
                  className="flex items-center hover:text-neutral-400 duration-300"
                  onClick={() => toggleDropdown("customers")}
                >
                  Customers
                  <span>
                    {openDropdown === "customers" ? (
                      <ChevronUp className="ms-2" />
                    ) : (
                      <ChevronDown className="ms-2" />
                    )}
                  </span>
                </button>
                {openDropdown === "customers" && (
                  <div 
                  className="absolute left-1/2 transform -translate-x-1/2 mt-7 p-4 bg-[#23122e] rounded-xl shadow sm:w-[600px] lg:[600px] text-center flex flex-wrap text-white z-10"
                  onMouseLeave={() => {
                    toggleDropdown(false)
                  }}
                  >
                    <div className="w-full p-4">
                      <h3 className="text-lg font-semibold mb-10">Customers</h3>
                      <ul className="space-y-10 text-center">
                        <li className="flex items-center itemsdd h-12 rounded-lg ps-5">
                          <FaAddressCard className="me-2 rounded-lg h-8 w-8" size={23} />
                          <span>Customer A</span>
                        </li>
                        <li className="flex items-center itemsdd h-12 rounded-lg ps-5">
                          <FaFigma className="me-2 rounded-lg h-8 w-8" size={23} />
                          <span>Customer B</span>
                        </li>
                        <li className="flex items-center itemsdd h-12 rounded-lg ps-5">
                          <SiApollographql className="me-2 rounded-lg h-8 w-8" size={23} />
                          <span>Customer C</span>
                        </li>
                        <li className="flex items-center itemsdd h-12 rounded-lg ps-5">
                          <SiNotion className="me-2 rounded-lg h-8 w-8" size={23} />
                          <span>Customer D</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </li>
              <li className="relative">
                <button
                  className="flex items-center hover:text-neutral-400 duration-300"
                  onClick={() => toggleDropdown("insights")}
                >
                  Insights
                  <span>
                    {openDropdown === "insights" ? (
                      <ChevronUp className="ms-2" />
                    ) : (
                      <ChevronDown className="ms-2" />
                    )}
                  </span>
                </button>
                {openDropdown === "insights" && (
                  <div 
                  className="absolute left-1/2 transform -translate-x-1/2 mt-7 p-4 bg-[#23122e] rounded-xl shadow w-[300px] sm:w-[600px] lg:w-[900px] flex flex-wrap text-white z-10"
                  onMouseLeave={() => {
                    toggleDropdown(false)
                  }}
                  >
                    <div className="w-full lg:w-1/2 p-4">
                      <h3 className="text-lg font-semibold mb-10">Insights</h3>
                      <ul className="space-y-10">
                        <li className="flex items-center">
                          <FaAddressCard className="me-2 rounded-lg h-8 w-8" size={23} />
                          <span>Insight A</span>
                        </li>
                        <li className="flex items-center">
                          <FaFigma className="me-2 rounded-lg h-8 w-8" size={23} />
                          <span>Insight B</span>
                        </li>
                        <li className="flex items-center">
                          <SiApollographql className="me-2 rounded-lg h-8 w-8" size={23} />
                          <span>Insight C</span>
                        </li>
                        <li className="flex items-center">
                          <SiNotion className="me-2 rounded-lg h-8 w-8" size={23} />
                          <span>Insight D</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </li>
              <li>
                <a href="/#" className="hover:text-neutral-400 duration-300">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/#" className="hover:text-neutral-400 duration-300">
                  Changelog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <motion.div
        className={`fixed top-16 left-0 w-full bg-[#914ac8] z-50 rounded-lg mt-4 ${
          openMobileMenu ? "flex" : "hidden"
        }`}
        initial={{ 
          opacity: 0, 
          y: -30 }}
        animate={controls}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col p-4">
          <ul className="space-y-4">
            <li className="relative">
              <button
                className="flex items-center text-white hover:text-neutral-400 duration-300"
                onClick={() => toggleDropdown("products")}
              >
                Product
                <span>
                  {openDropdown === "products" ? (
                    <ChevronUp className="ms-2" />
                  ) : (
                    <ChevronDown className="ms-2" />
                  )}
                </span>
              </button>
              {openDropdown === "products" && (
                <div className="mt-4 p-4 bg-[#23122e] rounded-xl shadow w-full flex flex-col text-white z-10">
                  <div className="w-full lg:w-1/2 p-4 sm:ps-6 sm:mb-6">
                    <h3 className="text-lg font-semibold mb-10">
                      Capabilities
                    </h3>
                    <ul className="space-y-10">
                      <li className="flex items-center itemsdd">
                        <Atom className="me-2 rounded-lg h-8 w-8" size={23} />
                        <span>Design</span>
                      </li>
                      <li className="flex items-center">
                        <Infinity className="me-2 rounded-lg h-8 w-8" size={23} />
                        <span>Development</span>
                      </li>
                      <li className="flex items-center">
                        <Lightbulb className="me-2 rounded-lg h-8 w-8" size={23} />
                        <span>Insights</span>
                      </li>
                      <li className="flex items-center">
                        <Recycle className="me-2 rounded-lg h-8 w-8" size={23} />
                        <span>Testing</span>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full lg:w-1/2 p-4 border-t-2">
                    <h3 className="text-lg font-semibold mb-10 ms-5">
                      Solutions
                    </h3>
                    <ul className="space-y-12 mx-5">
                      <li className="flex items-center">
                        <ShoppingCart className="me-2 rounded-lg h-8 w-8" size={23} />
                        <span>Sales</span>
                      </li>
                      <li className="flex items-center">
                        <AudioLines className="me-2 rounded-lg h-8 w-8" size={23} />
                        <span>Marketing</span>
                      </li>
                      <li className="flex items-center">
                        <Flag className="me-2 rounded-lg h-8 w-8" size={23} />
                        <span>Operations</span>
                      </li>
                      <li className="flex items-center">
                        <BadgeCheck className="me-2 rounded-lg h-8 w-8" size={23} />
                        <span>Support</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </li>
            <li className="relative">
              <button
                className="flex items-center text-white hover:text-neutral-400 duration-300"
                onClick={() => toggleDropdown("customers")}
              >
                Customers
                <span>
                  {openDropdown === "customers" ? (
                    <ChevronUp className="ms-2" />
                  ) : (
                    <ChevronDown className="ms-2" />
                  )}
                </span>
              </button>
              {openDropdown === "customers" && (
                <div className="mt-4 p-4 bg-[#23122e] rounded-xl shadow w-full flex flex-col text-white z-10">
                  <h3 className="text-lg font-semibold mb-10">Customers</h3>
                  <ul className="space-y-10">
                    <li className="flex items-center">
                      <FaAddressCard className="me-2 rounded-lg h-8 w-8" size={23} />
                      <span>Customer A</span>
                    </li>
                    <li className="flex items-center">
                      <FaFigma className="me-2 rounded-lg h-8 w-8" size={23} />
                      <span>Customer B</span>
                    </li>
                    <li className="flex items-center">
                      <SiApollographql className="me-2 rounded-lg h-8 w-8" size={23} />
                      <span>Customer C</span>
                    </li>
                    <li className="flex items-center">
                      <SiNotion className="me-2 rounded-lg h-8 w-8" size={23} />
                      <span>Customer D</span>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li className="relative">
              <button
                className="flex items-center text-white hover:text-neutral-400 duration-300"
                onClick={() => toggleDropdown("insights")}
              >
                Insights
                <span>
                  {openDropdown === "insights" ? (
                    <ChevronUp className="ms-2" />
                  ) : (
                    <ChevronDown className="ms-2" />
                  )}
                </span>
              </button>
              {openDropdown === "insights" && (
                <div className="mt-4 p-4 bg-[#23122e] rounded-xl shadow w-full flex flex-col text-white z-10">
                  <h3 className="text-lg font-semibold mb-10">Insights</h3>
                  <ul className="space-y-10">
                    <li className="flex items-center">
                      <FaAddressCard className="me-2 rounded-lg h-8 w-8" size={23} />
                      <span>Insight A</span>
                    </li>
                    <li className="flex items-center">
                      <FaFigma className="me-2 rounded-lg h-8 w-8" size={23} />
                      <span>Insight B</span>
                    </li>
                    <li className="flex items-center">
                      <SiApollographql className="me-2 rounded-lg h-8 w-8" size={23} />
                      <span>Insight C</span>
                    </li>
                    <li className="flex items-center">
                      <SiNotion className="me-2 rounded-lg h-8 w-8" size={23} />
                      <span>Insight D</span>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <a
                href="/#"
                className="text-white hover:text-neutral-400 duration-300"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="/#"
                className="text-white hover:text-neutral-400 duration-300"
              >
                Changelog
              </a>
            </li>
          </ul>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;