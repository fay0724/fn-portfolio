import React from "react";


import { logo } from "../assets";

const Footer = () => {
  return (
    <div className="bg-black-200 sm:px-16 px-6 sm:py-12 py-10 min-h-[250px] mt-20 select-none">
      <img src={logo} alt="logo" className="w-[110px] m-auto mb-4" />

      <p className="text-secondary text-[17px] leading-[30px] text-center absolute bottom-8 left-0 right-0 mx-auto">
        {new Date().getFullYear()} &copy; FAYZIL NAPU. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
