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
      <span>
        <FaFacebook />
      </span>
      <span>
        <FaTwitter />
      </span>
      <span>
        <FaLinkedinIn />
      </span>
      <span>
        <FaPinterest />
      </span>
      <span>
        <FaInstagram />
      </span>
      <span>
        <FaTelegram />
      </span>
      <span>
        <FaInstagram />
      </span>
      <span>
        <FaYoutube />
      </span>
    </div>
  );
};
