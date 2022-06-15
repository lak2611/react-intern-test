import React from "react";
import { AiFillHeart, AiTwotoneEye } from "react-icons/ai";
import { MdPerson } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import Button from "../../Shared/Button/Button";
import { BsHeart } from "react-icons/bs";
import addIcon from "../../../images/white-add-button-icon.png";
const ModalStat = ({ data }: { data: any }) => {
  return (
    <div className="my-12 flex flex-col">
      <div className="text-3xl">{data.title}</div>
      <div className="flex gap-4 justify-center mt-5">
        <div className="flex items-center">
          <AiFillHeart className="mr-1 center-icon" />
          1,688
        </div>
        <div className="flex items-center">
          <AiTwotoneEye className="mr-1 center-icon" />
          18,178
        </div>
        <div className="flex items-center">
          <IoPersonSharp className="mr-1 center-icon" />
          332
        </div>
      </div>
      <div className="mt-7 mb-10" style={{ color: "#8c8c8c" }}>
        Publishing date : 2020.10.15
      </div>
      <div className="flex justify-center gap-2 ">
        <Button variant="primary" width="142px">
          <BsHeart className="center-icon" size={16} />
          <span>Like</span>
        </Button>
        <Button variant="secondary" width="142px">
          <img src={addIcon} className="mr-1" width="14" height="12" />
          <span>Add</span>
        </Button>
      </div>
    </div>
  );
};

export default ModalStat;
