import React from "react";
import { FaRegCalendarMinus } from "react-icons/fa";
import TodayDate from "../ui/TodayDate";
import ReadButton from "../ui/ReadButton";

const Features = () => {
  return (
    <div className="flex flex-col items-center w-full gap-4">
      <div className="relative ">
        <img
          className="w-full rounded-2xl "
          src="https://infynews.nyc3.digitaloceanspaces.com/post%20image/1467/Data-collectionsss[1].jpg"
          alt="feature"
        />
        <p className="absolute left-0 px-4 py-1 text-lg text-white rounded-r-lg top-3 bg-primary">
          Breaking
        </p>
      </div>

      <h2 className="text-2xl font-bold md:text-4xl ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus est
        quia unde. Architecto quia maxime ut ad, esse,
      </h2>
      <p className="text-sm text-gray-500 ">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima totam
        quod obcaecati voluptatum. Aperiam molestias facere esse repudiandae aut
        nulla sapiente. Quos quod voluptas quibusdam magnam facere. Tempore,
        corporis labore.
      </p>
      <div className="flex self-start gap-4">
        <div className="flex items-center gap-1 ">
          <span className="text-xl text-primary">
            <FaRegCalendarMinus />
          </span>
          <p className="text-lg text-gray-500">
            <TodayDate />
          </p>
        </div>
        <ReadButton title={"1Min Reads"} />
      </div>
    </div>
  );
};

export default Features;
