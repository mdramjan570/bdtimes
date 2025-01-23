import React from "react";
import { NavLink } from "react-router-dom";

const Navitem = () => {
  return (
    <div>
      <ul className="flex items-center gap-4 text-lg">
        <NavLink
          to="/"
          className="transition-all cursor-pointer hover:text-primary"
        >
          Home
        </NavLink>
        <NavLink className="transition-all cursor-pointer hover:text-primary">
          AI
        </NavLink>
        <NavLink className="transition-all cursor-pointer hover:text-primary">
          Payments
        </NavLink>
        <NavLink className="transition-all cursor-pointer hover:text-primary">
          Banking
        </NavLink>
        <NavLink className="transition-all cursor-pointer hover:text-primary">
          Crypto
        </NavLink>
        <NavLink className="transition-all cursor-pointer hover:text-primary">
          wealth
        </NavLink>
        <NavLink className="transition-all cursor-pointer hover:text-primary">
          International
        </NavLink>
        <NavLink className="transition-all cursor-pointer hover:text-primary">
          Gallery
        </NavLink>
        <NavLink className="transition-all cursor-pointer hover:text-primary">
          More
        </NavLink>
      </ul>
    </div>
  );
};

export default Navitem;
