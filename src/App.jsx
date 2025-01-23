import React from "react";
import Navabr from "./components/header/Navabr";
import Footer from "./components/footer/footer";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navabr />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
