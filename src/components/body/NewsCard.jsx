import React from "react";
import TodayDate from "../ui/TodayDate";
import ReadButton from "../ui/ReadButton";
import { FaRegCalendarMinus } from "react-icons/fa";

const NewsCard = () => {
  return (
    <div className="flex flex-col items-center gap-4 ">
      <div className="relative w-full">
        <img
          className="w-full rounded-2xl "
          src="https://infynews.nyc3.digitaloceanspaces.com/post%20image/1606/51cljedo_obama-biden-twitter_625x300_20_January_21.jpg"
          alt="feature"
        />
        <p className="absolute left-0 px-4 py-1 text-lg text-white rounded-r-lg top-3 bg-primary">
          Breaking
        </p>
      </div>

      <h2 className="text-xl font-bold md:text-2xl ">
        Lorem ipsum dolor sit amet consectetur adipisicing
      </h2>

      <div className="flex gap-4">
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

export default NewsCard;
