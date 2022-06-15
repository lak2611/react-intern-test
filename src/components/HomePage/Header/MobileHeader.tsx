import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import logo from "../../../images/logo-icon.png";
import { getViewportWidth } from "../../../utils/util";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="justify-between bg-black text-gray-300">
      <div className="flex items-center">
        <FaBars
          onClick={() => setShowMenu(!showMenu)}
          size={25}
          className="ml-1"
        />
        <div className="p-3">
          <img src={logo} />
        </div>
      </div>
      <div style={{display: showMenu?"block":"none"}}>
        <div className="flex items-center justify-between" style={{borderBottom: "1px solid gray"}}>
          <input
            style={{
              color: "white",
              background: "transparent",
              padding: "0 5px",
              textAlign: "left"
            }}
            defaultValue="Search for motion trend........."
          />
          <div className=" text-white">
            <BiSearch size={25} />
          </div>
        </div>
        <div className="flex underline flex-col gap-2 py-2">
            <div>Discover</div>
            <div>Job</div>
            <div>Login</div>
            <div>Signup</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
