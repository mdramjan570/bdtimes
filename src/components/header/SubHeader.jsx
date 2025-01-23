import React from "react";

import {
  FaTwitter,
  FaLinkedinIn,
  FaPinterest,
  FaInstagram,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import TodayDate from "../ui/TodayDate";
const SubHeader = () => {
  return (
    <div className="bg-[#F6F6F6] ">
      <div className="container px-4 mx-auto text-3xl md:px-8 lg:px-10 xl:px-0 max-w-7xl ">
        <div className="flex  items-center justify-between py-2.5 flex-wrap ">
          <div className="text-lg font-bold">
            <TodayDate />
          </div>
          <div className="justify-center hidden gap-4 text-lg sm:flex">
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
              <FaYoutube />
            </span>
          </div>
          <div className="flex items-center gap-3 text-lg">
            <div className="group">
              <div className="relative flex items-center gap-1 cursor-pointer">
                <h3>English</h3>
                <span className="pt-1">
                  <MdKeyboardArrowDown />
                </span>
              </div>
              <ul className="absolute z-10 flex flex-col invisible p-4 transition-all duration-300 bg-white rounded-md shadow-sm ring-1 ring-gray-100 gap-y-1 group-hover:visible">
                <li className="transition-all cursor-pointer hover:text-primary">
                  English
                </li>
                <li className="transition-all cursor-pointer hover:text-primary">
                  Chinese
                </li>
                <li className="transition-all cursor-pointer hover:text-primary">
                  Spanish
                </li>
                <li className="transition-all cursor-pointer hover:text-primary">
                  German
                </li>
              </ul>
            </div>
            <div className="font-medium cursor-pointer text-primary">Login</div>
            <span className="font-bold text-primary">|</span>
            <div className="font-medium cursor-pointer text-primary">
              Register
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
