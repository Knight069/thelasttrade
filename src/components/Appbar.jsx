/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "./Button";
import { useState, useEffect } from "react";
import logobull from "../assets/logo-bull.jpg";
import lasttrade from "../assets/thelasttrade-font.jpg";

export const Appbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSendMessage = () => {
    const whatsappMessage = `Hello, I want to Learn Trading.`;
    const whatsappNumber = "+917258840855";

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage
      )}`,
      "_blank"
    );
  };

  useEffect(() => {
    // Check if the user is logged in by checking the existence of the token
    const token = localStorage.getItem("token");
    // console.log("token", token)
    setIsLoggedIn(!!token);
  }, []);

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token"); // Retrieve token from local storage
      if (!token) throw new Error("No token found");

      await axios.post(
        "http://localhost:3000/api/v1/user/signout",
        {}, // Empty body
        {
          headers: {
            Authorization: `${token}`, // Send token in Authorization header
          },
        }
      );

      // Clear local storage and navigate to signin
      localStorage.removeItem("token");
      setIsLoggedIn(false);
      navigate("/signin");
    } catch (error) {
      console.error("Error during signout:", error);
    }
  };

  const handleLogin = async () => {
    navigate("/signin")
  }

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4">
        {/* Logo and Title */}
        <a
          href="/"
          className="flex items-center text-gray-900 dark:text-white space-x-3 rtl:space-x-reverse"
        >
          <img src={logobull} className="h-8" alt="Logo" />
          <div className="font-mono text-wrap dark:text-white text-3xl">
            THE LAST TRADE
          </div>
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-cente text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600"
          aria-controls="navbar_dropdown"
          aria-expanded={isMenuOpen}
          onClick={handleToggleMenu}
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

        {/* Desktop Menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } fixed top-16 left-0 w-full md:static md:flex md:w-auto md:space-x-8 md:mt-0 md:bg-gray md:dark:bg-gray-900 md:border-0`}
          id="navbar_dropdown"
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:dark:bg-gray-900 bg-black">
            {/* Home */}
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-700 dark:text-white rounded hover:text-black-600 dark:hover:text-blue-400 transition"
                onClick={() => navigate("/")}
              >
                Home
              </a>
            </li>
            {/* Courses Dropdown */}
            {/* <li className="relative group"> */}
            <li>
              <button
                // id="dropdownNavbarLink"
                // data-dropdown-toggle="dropdownNavbar"
                onClick={() => navigate("/courses")}
                className="flex items-center py-2 px-3 text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                Courses
                {/* <svg
                  className="w-2.5 h-2.5 ms-2.5 transition-transform group-hover:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg> */}
              </button>
              {/* Dropdown menu */}
              {/* <div
                id="dropdownNavbar"
                className="absolute left-0 mt-2 hidden group-hover:block bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg w-44"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownNavbarLink"
                >
                  <li>
                    <a
                      href="/courses/equity-cash-intraday"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={() => navigate("/courses/equity-cash-intraday")}
                    >
                      Equity Cash Intraday
                    </a>
                  </li>
                  <li>
                    <a
                      href="/courses/index-option-premium"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={() => navigate("/courses/index-option-premium")}
                    >
                      Index Option (Premium)
                    </a>
                  </li>
                  <li>
                    <a
                      href="/courses/index-option-standard"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={() => navigate("/courses/index-option-standard")}
                    >
                      Index Option (Standard Package)
                    </a>
                  </li>
                  <li>
                    <a
                      href="/courses/index-option-combo"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={() => navigate("/courses/index-option-combo")}
                    >
                      Index Option (Combo Package)
                    </a>
                  </li>
                </ul>
              </div> */}
            </li>
            {/* Contact Us */}
            <li>
              <a
                href="/contact"
                className="block py-2 px-3 text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition"
                onClick={() => navigate("/contact")}
              >
                Contact Us
              </a>
            </li>
            {/* Pricing */}
            <li>
              <a
                href="/pricing"
                className="block py-2 px-3 text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition"
                onClick={() => navigate("/pricing")}
              >
                Pricing
              </a>
            </li>
            {/* Authentication Buttons */}
            {isLoggedIn ? (
              <li>
                <Button onClick={handleLogout} label={"Logout"} />
              </li>
            ) : (
              <li>
                <Button onClick={handleLogin} label={"Signin"} />
              </li>
            )}
            <li>
              <Button onClick={handleSendMessage} label={"WhatsApp"} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
