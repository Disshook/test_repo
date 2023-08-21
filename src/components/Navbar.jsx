import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CiLight } from "react-icons/ci";
import { FiMenu, FiX } from "react-icons/fi";
import axios from "axios";
import logo from "../assets/logo.png";
import white from "../assets/white.png";

const Navbar = () => {
  const [data, setData] = useState([]);
  const [theme, setTheme] = useState("light");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    axios
      .get("https://minggatu.zyberapi.site/categories")
      .then((res) => setData(res.data.data))
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setTheme(prefersDarkMode ? "dark" : "light");
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleHandler = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="h-20 items-center flex ">
        <div className="flex justify-between items-center mx-5 w-full lg:mx-24">
          <Link to={"/"}>
            <img
              src={theme === "dark" ? white : logo}
              alt=""
              className={`w-36 h-full lg:w-44 ${
                isOpen ? "opacity-100" : "opacity-100"
              }`}
            />
          </Link>

          <div className="flex items-center gap-4">
            <div className="hidden lg:block">
              <ul className="space-x-6 flex">
                {data.map((item) => (
                  <li key={item.id}>
                    <Link
                      to={`/categories/${item.id}`}
                      className={`block lg:flex px-4 py-2 text-lg font-semibold bg-gray-200 rounded dark:bg-white dark:text-black ${
                        theme === "dark" ? "text-white" : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <CiLight
              size={40}
              className={`cursor-pointer ${
                theme === "dark" ? "text-white" : ""
              }`}
              onClick={toggleHandler}
            />

            <div className="lg:hidden" onClick={handleMenuToggle}>
              {isOpen ? (
                <FiX
                  size={30}
                  className={`cursor-pointer ${
                    theme === "dark" ? "text-white" : ""
                  }`}
                />
              ) : (
                <FiMenu
                  size={30}
                  className={`cursor-pointer ${
                    theme === "dark" ? "text-white" : ""
                  }`}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="flex justify-center py-2 bg-gray-200 dark:bg-gray-800">
          <ul className="space-y-2">
            {data.map((item) => (
              <li key={item.id}>
                <Link
                  to={`categories/${item._id}`}
                  className="block px-4 py-2 text-lg font-semibold dark:text-white text-center"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      <hr className="h-px bg-black border-0 w-[90%] mx-auto py-0 dark:bg-white" />
    </>
  );
};

export default Navbar;
