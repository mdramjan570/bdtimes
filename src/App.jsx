import React from "react";
import Navabr from "./components/header/Navabr";
import Footer from "./components/footer/footer";

const App = () => {
  return (
    <div className="container px-4 mx-auto text-3xl font-poppins md:px-8 lg:px-10 xl:px-0 max-w-7xl ">
      <Navabr />

      <Footer />
    </div>
  );
};

export default App;
