import React from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation(["contact"]);

  return (
    <div
      name="contact"
      className="w-full bg-gradient-to-b from-black to-gray-500  p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8 mt-16">
          <p className="text-4xl font-bold inline border-b-2 border-emerald-500">
            {t("contact")}
          </p>
          <p className="py-6"> {t("text")}</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/b92461c4-08ad-43a7-ba82-4919ee1cf093"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder={t("name")}
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              pattern="[a-zA-Z]{2,}"
              required
            />
            <input
              type="text"
              name="email"
              placeholder={t("email")}
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
              required
            />
            <textarea
              name="message"
              placeholder={t("message")}
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            ></textarea>

            <button className="text-white bg-emerald-500  px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              {t("submit")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
