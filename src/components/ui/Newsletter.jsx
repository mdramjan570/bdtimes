import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-[#F6F6F6]  py-10 rounded-md">
      <div className="container px-4 mx-auto text-3xl md:px-8 lg:px-10 xl:px-0 max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-semibold text-center lg:text-left">
              Subscribe to our newsletter.
            </h2>
          </div>
          <div className="flex flex-col items-center w-full gap-4 lg:flex-row lg:w-1/2">
            <input
              className="w-full px-4 py-3 text-xl text-gray-700 rounded-md outline-none focus-within:ring-2 focus-within:ring-hoverColor"
              type="text"
              placeholder="Enter your Email"
            />
            <button className="px-10 py-3 text-lg font-medium text-white rounded-md bg-primary ">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
