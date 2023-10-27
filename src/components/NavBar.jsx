import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const { i18n, t } = useTranslation(["common"]);

  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("en");
    }
  }, []);

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "skills",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed z-50">
      <div>
        <img
          className="ml-2 h-12"
          alt=""
          src={process.env.PUBLIC_URL + "/icons/iconic.png"}
        />
      </div>
      <div className="ml-2">
        <select
          className="bg-transparent border border-white rounded-md text-white py-1 px-1 mx-4 focus:outline-none text-sm"
          value={localStorage.getItem("i18nextLng")}
          onChange={handleLanguageChange}
        >
          <option  value="en">ENG</option>
          <option  value="itl">ITL</option>
        </select>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-white-500  hover:text-emerald-500 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {t(link)}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-500 text-white">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {t(link)}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;

