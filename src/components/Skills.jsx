import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import material from "../assets/material.png";
import typescript from "../assets/typescript.png";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    
    {
      id: 6,
      src: graphql,
      title: "GraphQL",
      style: "shadow-pink-400",
    },
    {
      id: 7,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 8,
      src: material,
      title: "Material",
      style: "shadow-blue-400",
    },

    {
      id: 9,
      src: typescript,
      title: "Typescript",
      style: "shadow-sky-600",
    },

  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-black to-gray-500 w-full "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="mt-20">
          <p className="text-4xl font-bold inline border-b-2 border-emerald-500">
            Experience
          </p>
          <p className="py-6">
            Technical stack that I have used in my projects.
          </p>
        </div>
          
        <div className="w-full  grid grid-cols-2 sm:grid-cols-3 gap-4 text-center pb-8 mb-8 px-12 ">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
