import React from "react";
import strapi from "../assets/portfolio/strapi.jpg";
import food from "../assets/portfolio/food.jpg";
import tracker from "../assets/portfolio/tracker.jpg";
import blog from "../assets/portfolio/blog.jpg";
import commerce from "../assets/portfolio/commerce.jpg";
import movies from "../assets/portfolio/movies.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: strapi,
      href: "https://github.com/ampodo/online-shop-strapi",
    },
    {
      id: 2,
      src: food,
      href: "https://github.com/ampodo/react-sap-food-menu",
    },
    {
      id: 3,
      src: tracker,
      href: "https://github.com/ampodo/crypto-price-tracker",
    },
    {
      id: 4,
      src: blog,
      href: "https://github.com/ampodo/crypto_blog_react",
    },
    {
      id: 5,
      src: commerce,
      href: "https://github.com/ampodo/E-commerce",
    },
    {
      id: 6,
      src: movies,
      href: "https://github.com/ampodo/movies",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-500 text-white w-full md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-16">
          <p className="text-4xl font-bold inline border-b-2 border-emerald-500">
            Portfolio
          </p>
          <p className="py-6">
            Some of my projects which are available for viewing.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href }) => (
            <div
              key={id}
              className="shadow-md shadow-emerald-600 rounded-lg bg-black"
            >
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />

              <div className="flex items-center justify-center">
                <ul className=" px-6 py-2 m-4">
                  <li className="list">
                    <a href={href}>Demo</a>
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
