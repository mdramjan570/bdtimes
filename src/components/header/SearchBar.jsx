import React from "react";
import { IoSearchOutline } from "react-icons/io5";
const SearchBar = () => {
  return (
    <div className="items-center hidden gap-2 p-2 rounded-full sm:flex ring-1 ring-gray-200 focus-within:ring-2 focus-within:ring-primary ">
      <IoSearchOutline />
      <input className="outline-none " type="text" placeholder="Search" />
    </div>
  );
};

export default SearchBar;
