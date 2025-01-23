import React from "react";
import { MdClose } from "react-icons/md";

const MobileMenu = ({ setMenu }) => {
  return (
    <div className="fixed inset-0 top-0 bottom-0 left-0 right-0 z-10 w-full h-screen bg-black bg-opacity-10 backdrop-blur-sm">
      <div className="bg-white ml-auto h-full   w-[70%]">
        <span className="flex justify-end p-2 text-2xl cursor-pointer hover:text-primary ">
          <MdClose
            onClick={() => {
              setMenu(false);
            }}
          />
        </span>

        <ul className="flex flex-col gap-2 text-lg">
          <li className="p-2 transition-all cursor-pointer hover:bg-gray-50 hover:text-black">
            Home
          </li>
          <li className="p-2 transition-all cursor-pointer hover:bg-gray-50 hover:text-black">
            AI
          </li>
          <li className="p-2 transition-all cursor-pointer hover:bg-gray-50 hover:text-black">
            Payments
          </li>
          <li className="p-2 transition-all cursor-pointer hover:bg-gray-50 hover:text-black">
            Banking
          </li>
          <li className="p-2 transition-all cursor-pointer hover:bg-gray-50 hover:text-black">
            Crypto
          </li>
          <li className="p-2 transition-all cursor-pointer hover:bg-gray-50 hover:text-black">
            wealth
          </li>
          <li className="p-2 transition-all cursor-pointer hover:bg-gray-50 hover:text-black">
            International
          </li>
          <li className="p-2 transition-all cursor-pointer hover:bg-gray-50 hover:text-black">
            Gallery
          </li>
          <li className="p-2 transition-all cursor-pointer hover:bg-gray-50 hover:text-black">
            More
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
