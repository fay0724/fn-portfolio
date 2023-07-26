import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, instagram, facebook, twitter } from "../assets";
import { SectionWrapper } from "../hoc";
import {
  myGithub,
  projects,
  myInstagram,
  myFacebook,
  myTwitter,
} from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  demo_link,
}) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div className="relative w-full h-[230px]">
        <img
          src={image}
          alt="project_image"
          className="w-full h-full object-cover rounded-2xl select-none"
        />

        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer select-none"
          >
            <img
              src={github}
              alt="source code"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
      </div>

      <div
        className="mt-5 cursor-pointer"
        onClick={() => window.open(demo_link, "_blank")}
      >
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2 select-none">
        {tags.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
  );
};

const LogoLink = ({ logo, link }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="rounded-full cursor-pointer select-none"
      style={{
        background: "linear-gradient(45deg, #FF6BAC, #87CEFA)",
        padding: "1px",
      }}
      onClick={() => window.open(link, "_blank")}
    >
      <div className="bg-tertiary rounded-full px-5 py-2 flex justify-evenly items-center">
        <img
          src={logo}
          alt="source code"
          className="w-[40px] h-[40px] object-contain"
        />
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <div id="project">
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>

        <div className="w-full flex">
          <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
            Sebagai seorang freelancer, saya mengerjakan proyek secara remote
            dan berkolaboarsi bersama para Senior Web Dev, dan telah
            menyelesaikan banyak proyek dengan hasil yang sangat memuaskan
            klien. Komitmen saya untuk memberikan hasil yang berkualitas telah
            menciptakan reputasi keunggulan di komunitas freelancer di bidang
            Web Dev.
            <br /> berikut Proyek-Proyek hasil kolaborasi saya bersama para
            Senior Web Dev.
          </p>
        </div>

        <div className="mt-20 flex flex-wrap gap-7 justify-center">
          {projects.map((project) => (
            <ProjectCard key={`project-${project.name}`} {...project} />
          ))}
        </div>

        <div className="w-full flex flex-col items-center justify-center">
          <p className="mt-24 text-secondary text-[21px] max-w-3xl leading-[30px] text-center">
            ingin tau tentang saya lebih jauh? mari berteman... ikuti saya di
            sosial media yang ada dibawah ini.
          </p>

          <div className="flex justify-center mt-10 gap-8">
            <LogoLink logo={github} link={myGithub} />
            <LogoLink logo={instagram} link={myInstagram} />
            <LogoLink logo={facebook} link={myFacebook} />
            <LogoLink logo={twitter} link={myTwitter} />
            {/* Add more LogoLink components for other social media platforms */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
