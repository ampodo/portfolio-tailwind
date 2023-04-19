import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation(["about"]);

  return (
    <div
      name="about"
      className="w-full py-36 bg-gradient-to-b from-black to-gray-500 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-[-40px]">
          <p className="text-4xl font-bold inline border-b-2 border-emerald-500">
            {t("about")}
          </p>
        </div>

        <p className="text-lg mt-10 leading-8">{t("mydescription")}</p>
      </div>
    </div>
  );
};

export default About;
