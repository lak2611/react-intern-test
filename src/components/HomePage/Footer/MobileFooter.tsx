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
        className="flex px-8 justify-between bg-black items-center flex-col py-2"
        style={{ color: "#9b9b9b" }}
      >
        <div className="text-white font-bold">Contact</div>
        <div>motiontrend@test.com</div>
        <div>@ Motiontrend. All rights reserved.</div>
          <div className="flex items-center gap-4 mt-2">
            <AiOutlineInstagram />
            <FaFacebookF />
            <AiFillYoutube />
          </div>
      </div>
      <div
        className="flex px-8 justify-between items-center flex-col"
        style={{ height: "33px" }}
      >
        <div className="py-2">
          <img src={blackLogo} />
        </div>
        <div className="flex gap-4 flex-col underline">
          <div>Introduction</div>
          <div>Terms of Service</div>
          <div className="items-center">
            <span>Language</span>
            <FiChevronDown className="ml-1 inline" />
          </div>
          <div>Customer Service</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
