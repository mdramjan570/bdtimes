import React from "react";

const Category = () => {
  return (
    <div className=" w-[188px] h-[110px] relative  cursor-pointer group">
      <img
        className="w-full h-full rounded-md "
        src="https://infynews.nyc3.digitaloceanspaces.com/post%20image/1621/7_407_340.jpg"
        alt="image"
      />

      <div className="absolute z-10 text-white bottom-2 left-1">
        <h2 className="text-lg">Banking</h2>
        <p className="text-sm">story</p>
      </div>
      <div className="absolute top-0 w-full h-full rounded-md bg-slate-600 opacity-35"></div>
      <div className="absolute top-0 invisible w-full h-full transition-all rounded-md opacity-60 bg-primary group-hover:visible"></div>
    </div>
  );
};

export default Category;
