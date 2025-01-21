import React from "react";
import { MdClose } from "react-icons/md";

const MobileMenu = ({ setMenu }) => {
  return (
    <div className="w-[70%]  bg-white shadow ml-auto  h-screen absolute top-0 right-0 left-0 md:hidden ">
      <div>
        <span className="flex justify-end p-2 text-2xl cursor-pointer ">
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
