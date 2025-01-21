import React from "react";
import { MdClose } from "react-icons/md";

const MobileMenu = ({}) => {
  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center h-screen">
      <div className="w-20 h-full">
        <span className="text-2xl">
          <MdClose />
        </span>
        <h3>menu item</h3>
      </div>
    </div>
  );
};

export default MobileMenu;
