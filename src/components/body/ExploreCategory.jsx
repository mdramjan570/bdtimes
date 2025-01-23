import React from "react";
import Category from "../ui/Category";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ExploreCategory = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full py-10">
      <div className="relative text-center ">
        <div className="text-4xl font-semibold text-gray-100 lg:text-6xl sm:text-5xl">
          Explore Category
        </div>

        <h2 className="absolute left-0 right-0 text-2xl font-semibold text-black -bottom-2 lg:text-3xl">
          Explore Category
        </h2>
      </div>
      <div className="w-full py-10 slider ">
        <Slider {...settings}>
          <div>
            <Category />
          </div>
          <div>
            <Category />
          </div>
          <div>
            <Category />
          </div>
          <div>
            <Category />
          </div>
          <div>
            <Category />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ExploreCategory;
