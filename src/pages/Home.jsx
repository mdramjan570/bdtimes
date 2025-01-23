import React from "react";
import SubHeader from "../components/header/SubHeader";
import Categories from "../components/body/Categories";
import Features from "../components/body/Features";
import ExploreCategory from "../components/body/ExploreCategory";

const Home = () => {
  return (
    <>
      <SubHeader />

      <div className="container px-4 py-6 mx-auto text-3xl md:px-8 lg:px-10 xl:px-0 max-w-7xl">
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="w-full md:w-1/2 ">
            <Features />
          </div>

          <div className="w-full md:w-1/2">
            <Categories />
          </div>
        </div>
        <ExploreCategory />
      </div>
    </>
  );
};

export default Home;
