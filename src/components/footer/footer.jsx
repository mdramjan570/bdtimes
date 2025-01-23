import React from "react";
import FooterLogo from "./FooterLogo";
import { FooterIcons } from "./FooterIcons";
import FooterItems from "./FooterItems";
import FooterText from "./FooterText";
import Newsletter from "../ui/Newsletter";

const Footer = () => {
  return (
    <>
      <Newsletter />
      <div className="container px-4 py-10 mx-auto text-3xl font-poppins md:px-8 lg:px-10 xl:px-0 max-w-7xl">
        <div className="flex flex-col items-center justify-center w-full gap-8">
          <FooterLogo />
          <FooterItems />
          <FooterIcons />
          <FooterText />
        </div>
      </div>
    </>
  );
};

export default Footer;
