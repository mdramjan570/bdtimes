import React from "react";
import FooterLogo from "./FooterLogo";
import { FooterIcons } from "./FooterIcons";
import FooterItems from "./FooterItems";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-8">
      <FooterLogo />
      <FooterItems />
      <FooterIcons />
    </div>
  );
};

export default Footer;
