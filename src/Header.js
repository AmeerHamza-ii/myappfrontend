import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaMoon } from "react-icons/fa6";
import { FaSearch, FaBars, FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const { t } = useTranslation();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };
  const [selectedLanguage, setSelectedLanguage] = useState("🇬🇧 English");

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <div>
      <header className="header flex items-center md:items-start justify-between md:px-20 px-4 pb-2 bg-sky-bg">
        <div className="logo justify-center  w-full md:w-auto">
          <Link to="/">
            <img
              src="https://i.postimg.cc/13JvwsDs/Myapproved-logo.png"
              alt="My Approved Logo"
            />
          </Link>
        </div>
        <button
          className="flex justify-center items-center max-w-[50px] md:hidden text-2xl border border-yellow text-yellow px-2 py-1 rounded-md"
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <FaBars />
        </button>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-start gap-4 justify-between  right-0">
          <div className="flex flex-col items-center">
            <div className="buttons pt-3 flex gap-3">
              {/* Trade Dropdown */}
              <div className="dropdown flex flex-col gap-0">
                <div>
                  <button className="flex items-center text-sm gap-2 font-bold">
                    Trade <FaCaretDown className="text-xs text-gray-600" />
                  </button>
                </div>
                <div className="dropdown-content ">
                  <Link to="/login" className="text-sm ">
                    Log in
                  </Link>
                  <Link to="/register" className="text-sm ">
                    Create A New Account
                  </Link>
                </div>
              </div>

              {/* Client Dropdown */}
              <div className="dropdown">
                <button className="flex items-center text-sm gap-2 font-bold">
                  Client <FaCaretDown className="text-xs text-gray-600" />
                </button>
                <div className="dropdown-content ">
                  <Link to="/signin" className="text-sm">
                    Login
                  </Link>
                  <Link to="/signup" className="text-sm">
                    Register
                  </Link>
                </div>
              </div>

              {/* Language Dropdown with Flags */}
              <div className="dropdown flex gap-0">
                <button className="yellow flex items-center text-sm gap-2 font-bold">
                  {selectedLanguage}{" "}
                  <FaCaretDown className="text-xs text-gray-600" />
                </button>
                <div className="dropdown-content ">
                  <Link
                    onClick={() => handleLanguageChange("🇬🇧 English")}
                    className="dropdown-item py-1 pl-4"
                  >
                    🇬🇧 English
                  </Link>
                  <Link
                    onClick={() => handleLanguageChange("🇪🇸 Spanish")}
                    className="dropdown-item py-1 pl-4"
                  >
                    🇪🇸 Spanish
                  </Link>
                  <Link
                    onClick={() => handleLanguageChange("🇫🇷 French")}
                    className="dropdown-item py-1 pl-4"
                  >
                    🇫🇷 French
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
      </header>

      <div
        className={`bg-sky-bg flex  items-start gap-4 justify-end px-4 transition-all duration-1000 ease-in-out buttons pt-2 w-flex justify-center items-center gap-2 ${
          toggleMenu ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {/* <div className="flex flex-col items-center w-full"> */}
        {/* <div className="buttons pt-2 mx-4  w-flex justify-center items-center gap-2"> */}
        {/* Trade Mobile Dropdown */}
        <div className="dropdown relative group">
          <div>
            <button className="bordered">Trade1 &#9660;</button>
          </div>
          <div className="dropdown-content  group-hover:block absolute">
            <Link to="/login" className="text-sm">
              Log in
            </Link>
            <Link to="/register" className="text-sm">
              Create A New Account
            </Link>
          </div>
        </div>

        {/* Client Mobile Dropdown */}
        <div className="dropdown">
          <button className="bordered">Client &#9660;</button>
          <div className="dropdown-content">
            <Link to="/signin" className="text-sm">
              Login
            </Link>
            <Link to="/signup" className="text-sm">
              Register
            </Link>
          </div>
        </div>

        {/* Language Mobile Dropdown */}
        <div className="dropdown">
          <button className="yellow">🇬🇧 English &#9660;</button>
          <div className="dropdown-content">
            <Link
              onClick={() => handleLanguageChange("🇬🇧 English")}
              className="dropdown-item"
            >
              🇬🇧 English
            </Link>
            <Link
              onClick={() => handleLanguageChange("🇪🇸 Spanish")}
              className="dropdown-item"
            >
              🇪🇸 Spanish
            </Link>
            <Link
              onClick={() => handleLanguageChange("🇫🇷 French")}
              className="dropdown-item"
            >
              🇫🇷 French
            </Link>
          </div>
        </div>
      </div>
    </div>
    // </div>
    // </div>
  );
};

export default Header;
