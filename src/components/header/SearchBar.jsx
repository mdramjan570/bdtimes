import React from "react";
import { IoSearchOutline } from "react-icons/io5";
const SearchBar = () => {
  return (
    <div className="flex items-center gap-2 p-2 rounded-full ring-1 ring-gray-200 focus-within:ring-2 focus-within:ring-primary ">
      <span className="text-lg">
        <IoSearchOutline />
      </span>
      <input
        className="text-lg outline-none"
        type="text"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBar;
