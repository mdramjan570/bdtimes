import React from "react";

import {
  FaTwitter,
  FaLinkedinIn,
  FaPinterest,
  FaInstagram,
  FaTelegram,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";
export const FooterIcons = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      <span className="transition-all cursor-pointer hover:text-hoverColor">
        <FaFacebook />
      </span>
      <span className="transition-all cursor-pointer hover:text-hoverColor">
        <FaTwitter />
      </span>
      <span className="transition-all cursor-pointer hover:text-hoverColor">
        <FaLinkedinIn />
      </span>
      <span className="transition-all cursor-pointer hover:text-hoverColor">
        <FaPinterest />
      </span>
      <span className="transition-all cursor-pointer hover:text-hoverColor">
        <FaInstagram />
      </span>
      <span className="transition-all cursor-pointer hover:text-hoverColor">
        <FaTelegram />
      </span>
      <span className="transition-all cursor-pointer hover:text-hoverColor">
        <FaInstagram />
      </span>
      <span className="transition-all cursor-pointer hover:text-hoverColor">
        <FaYoutube />
      </span>
    </div>
  );
};
