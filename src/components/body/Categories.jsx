import React from "react";
import NewsCard from "./NewsCard";

const Categories = () => {
  return (
    <div className="grid grid-cols-1 gap-4 justify-items-center sm:grid-cols-2">
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </div>
  );
};

export default Categories;
