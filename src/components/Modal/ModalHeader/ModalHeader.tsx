import React from "react";
import { IconContext } from "react-icons";
import { BsHeart, BsPersonFill } from "react-icons/bs";
import { MdPerson } from "react-icons/md";
import avt from "../../../images/upload-my-profile-1.png";
import Button from "../../Shared/Button/Button";
import addIcon from "../../../images/white-add-button-icon.png";
import { getViewportWidth } from "../../../utils/util";
const ModalHeader = ({ data }: { data: any }) => {
  return (
    <div className="px-12 flex py-11 lg:flex-col lg:items-center lg:px-2">
      <div className="mr-7 lg:mr-0">
        <img src={avt} />
      </div>
      <div className="flex grow text-left flex-col">
        <div className="text-3xl lg:text-center" style={getViewportWidth()<1024?{}:{maxWidth: "70%"}}>{data.title}</div>
        <div className="flex text-base lg:flex-col lg:items-center">
          <div className="mr-8 lg:mr-0">{data.username}</div>
          <div style={{ color: "#8c8c8c" }}>
            Design, Music Video, Advertising
          </div>
        </div>
        <div className="flex justify-between mt-5 lg:flex-col gap-1 items-center">
          <div className="flex gap-1 lg:flex-col">
            <Button variant="primary" width="142px">
              <BsHeart className="center-icon" size={16} />
              <span>Like</span>
            </Button>
            <Button variant="secondary" width="142px">
              <MdPerson size={20} />
              <span>Follow</span>
            </Button>
            <Button variant="secondary" width="142px">
              <img src={addIcon} className="mr-1" width="14" height="12" />
              <span>Add</span>
            </Button>
          </div>
          <div>
            <Button variant="primary" width="142px">
              Edit Project
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalHeader;
