import React from "react";
import { BiSearch } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import logo from "../../../images/logo-icon.png";
import { getViewportWidth } from "../../../utils/util";

const Header = () => {
  return (
    <div className="flex justify-between bg-black text-gray-300">
      <div className="flex items-center">
        <div className="p-3">
          <img src={logo} />
        </div>
        <div className="p-3">Discover</div>
        <div className="p-3">Job</div>
      </div>
      <div className="flex items-center">
        <input
          style={{
            color: "white",
            width: "400px",
            background: "transparent",
            paddingLeft: "20px",
            borderBottom: "1px solid gray",
          }}
          defaultValue="Search for motion trend........."
        />
      </div>
      <div className="flex items-center">
        <div className="p-3 text-white">
          <BiSearch size={25} />
        </div>
        <div className="p-3">Login</div>
        <div className="p-3">Signup</div>
      </div>
    </div>
  );
};

export default Header;
