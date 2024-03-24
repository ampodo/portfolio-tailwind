import React from "react";
import strapi from "../assets/portfolio/strapi.jpg";
import cars from "../assets/portfolio/cars.jpg";
import gold from "../assets/portfolio/gold.jpg";
import dashboard from "../assets/portfolio/dashboard.jpg";
import blog from "../assets/portfolio/blog.jpg";
import tracker from "../assets/portfolio/tracker.jpg";
import { useTranslation } from "react-i18next";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: cars,
      href: "https://github.com/ampodo/car-rental-app",
    },

    {
      id: 2,
      src: strapi,
      href: "https://github.com/ampodo/online-shop-strapi",
    },
    {
      id: 3,
      src: gold,
      href: "https://goldservice-check-model.pages.dev/",
    },
    {
      id: 4,
      src: dashboard,
      href: "https://github.com/ampodo/finance-app",
    },
  
    {
      id: 5,
      src: blog,
      href: "https://github.com/ampodo/crypto_blog_react",
    },

    {
      id: 6,
      src: tracker,
      href: "https://github.com/ampodo/crypto-price-tracker",
    },
 
  ];
  
  const { t } = useTranslation(["portfolio"]);

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-500 text-white w-full "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-20">
          <p className="text-4xl font-bold inline border-b-2 border-emerald-500 ">
            {t("heading")}
          </p>
          <p className="py-6">{t("projects")}</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href }) => (
            <div
              key={id}
              className="shadow-md shadow-emerald-600 rounded-lg bg-black"
            >
              <img src={src} alt="" className="rounded-md " />

              <div className="flex items-center justify-center">
                <ul className=" px-6 py-2 m-4">
                  <li className="list">
                    <a href={href}>Deployed</a>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
