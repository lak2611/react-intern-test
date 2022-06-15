import React from "react";
import { AiFillYoutube, AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import blackLogo from "../../../images/black-logo-icon.png";
import { getViewportWidth } from "../../../utils/util";

const Footer = () => {
  return (
    <div>
      <div
        className="flex px-8 justify-between bg-black items-center"
        style={{ color: "#9b9b9b", height: "40px"}}
      >
        <div className="flex">
          <div className="text-white font-bold mr-8">Contact</div>
          <div>motiontrend@test.com</div>
        </div>
        <div className="flex">
          <div className="mr-8">@ Motiontrend. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <AiOutlineInstagram />
            <FaFacebookF />
            <AiFillYoutube />
          </div>
        </div>
      </div>
      <div
        className="flex px-8 justify-between items-center"
        style={{ height: "33px" }}
      >
        <div className="flex gap-10">
          <div>Introduction</div>
          <div>Terms of Service</div>
          <div className="flex items-center">
            <div>Language </div>
            <FiChevronDown className="ml-1" />
          </div>
          <div>Customer Service</div>
        </div>
        <div>
          <img src={blackLogo} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
