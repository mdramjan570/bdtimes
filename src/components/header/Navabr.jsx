import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import Navitem from "./Navitem";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import MobileMenu from "./MobileMenu";
const Navabr = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="container px-4 mx-auto text-3xl md:px-8 lg:px-10 xl:px-0 max-w-7xl ">
      <div className="flex flex-wrap items-center justify-between py-3">
        <div>
          <Logo />
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden lg:block">
            <Navitem />
          </div>
          <div className="hidden sm:block">
            <SearchBar />
          </div>

          <div
            onClick={() => {
              setMenu(true);
            }}
            className="text-3xl cursor-pointer lg:hidden"
          >
            <IoIosMenu />
          </div>
          {menu && <MobileMenu setMenu={setMenu} />}
        </div>
      </div>
    </div>
  );
};

export default Navabr;
