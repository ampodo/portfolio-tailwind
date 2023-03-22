import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full py-36 bg-gradient-to-b from-black to-gray-500 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-[-40px]">
          <p className="text-4xl font-bold inline border-b-2 border-emerald-500">
            About
          </p>
        </div>

        <p className="text-lg mt-10 leading-8">
        I am a devoted front-end engineer who likes creating responsive web applications. Most of the time, I work with the React.js framework. I am always trying to make the client experience on the front side as smooth as possible. Very often, I worked with the RESTful API interface for accessing and using data, so I am familiar with POST and GET requests. I like to use headless CMS like Strapi for back-end systems.
        </p>
      </div>
    </div>
  );
};

export default About;
