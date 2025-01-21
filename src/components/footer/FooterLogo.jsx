import React from "react";
import Logo from "../../assets/images/logo.png";

const FooterLogo = () => {
  return (
    <div className="flex gap-6">
      <div>
        <img className="w-auto h-14" src={Logo} alt="logo" />
      </div>
      <div>
        <h2 className="text-5xl font-bold text-black">Bdtimes</h2>
      </div>
    </div>
  );
};

export default FooterLogo;
