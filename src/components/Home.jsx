import React from "react";
import HeroImage from "../assets/hero.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation(["home"]);

  return (
    <div
      name="home"
      className=" w-full bg-gradient-to-b from-black to-gray-500"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 py-24 md:flex-row">
        <div className="flex flex-col justify-center h-full mt-4">
          <h3 className="text-4xl sm:text-5xl font-bold text-white mt-6 ">
            {t("me")}
          </h3>
          <p className="text-white py-5 max-w-md">{t("paragraph")}</p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient bg-emerald-500 cursor-pointer"
            >
              {t("portfolio")}
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full mt-8"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
