import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const Home = () => {
  const [text, count] = useTypewriter({
    words: [
      "A Junior Front-End Developer",
      "Experienced in Marketing",
      "and a Freelancer",
    ],
    loop: true,
    delaySpeed: 700,
  });

  return (
    <section
      id="home"
      className="w-full h-screen mx-auto md:-mt-[66px] xs:max-h-screen"
    >
      <div
        className={`${styles.paddingX} h-screen max-w-7xl mx-auto flex lg:flex-row flex-col-reverse items-center justify-center gap-5 pt-10`}
      >
        <div>
          <div className="flex gap-3 select-none md:h-[18rem]">
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
              <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
            </div>

            <div className="lg:w-[32rem] md:w-[30rem] sm:w-full w-[17rem]">
              <h1
                className={`${styles.heroHeadText} text-white text-4xl xs:text-3xl`}
              >
                Hi, I'm <br />
                <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black">
                  Fayzil Napu
                </span>
              </h1>

              <p
                className={`${styles.heroSubText} mt-2 text-white-100 max-w-lg text-lg xs:text-base`}
              >
                {text}
                <Cursor cursorColor="#915eff" />
              </p>
            </div>
          </div>

          <a
            href="#about"
            className="w-fit mx-auto flex items-center justify-center gap-6 bg-tertiary lg:px-7 lg:py-3 px-4 py-2 rounded-xl lg:mt-10 mt-5 cursor-pointer max-[350px]:hidden select-none"
          >
            <div className="group border-[3px] border-white rounded-full h-12 w-7 flex justify-center lg:scale-100 scale-75">
              <div className="bg-white h-3 w-1 rounded-full mt-[10px] animate-bounce lg:scale-100 scale-75"></div>
            </div>

            <p>Scroll Down</p>
          </a>
        </div>

        <div className="w-full">
          <div className="flex items-center justify-center lg:w-96 lg:h-96 w-[17.5rem] h-[17.5rem] max-[350px]:w-[10.5rem] max-[350px]:h-[10.5rem] mx-auto bg-gradient-to-b from-blue-800 via-purple-700 to-red-700 hero-animation will-change-transform md:w-[23rem] md:h-[23rem]">
            <div className="bg-avatar bg-cover bg-no-repeat bg-[50%] mx-auto justify-self-center lg:w-[374px] lg:h-[374px] w-[17rem] h-[17rem] max-[350px]:w-40 max-[350px]:h-40 hero-animation will-change-transform md:bg-[85%] md:w-[22rem] md:h-[22rem]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Home, "home");
