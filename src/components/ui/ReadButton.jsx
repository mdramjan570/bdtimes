import React from "react";
import { IoTimeOutline } from "react-icons/io5";

const ReadButton = ({ title }) => {
  return (
    <div className="flex items-center gap-1 ">
      <span className="text-xl text-primary">
        <IoTimeOutline />
      </span>
      <p className="text-lg text-gray-500 ">{title}</p>
    </div>
  );
};

export default ReadButton;
