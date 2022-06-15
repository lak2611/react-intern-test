import React from "react";
import { BsArrowDown, BsArrowRight } from "react-icons/bs";
import Button from "../../Shared/Button/Button";
import cmtAvt1 from "../../../images/commant-profile-1.png";
import cmtAvt2 from "../../../images/commant-profile-2.png";
import cmtAvt3 from "../../../images/commant-profile-3.png";
import Comment from "./Comment";
const commentData = [
  {
    username: "Kim Aeyoung",
    date: "2020. 07. 26",
    comment:
      "Amazing work you have here. feels like an alternative reality with that much saturation.. love it! Amazing work you have here feels like an alternative reality with that muchsaturation.. love it!",
    avt: cmtAvt1,
  },
  {
    username: "Kim Jimin",
    date: "2020. 07. 26",
    comment:
      "Amazing work you have here. feels like an alternative reality with that much saturation.. love it!",
    avt: cmtAvt2,
  },
  {
    username: "Cayley",
    date: "2020. 07. 26",
    comment:
      "Amazing work you have here. feels like an alternative reality with that much saturation.. love it!",
    avt: cmtAvt3,
  },
  {
    username: "Kim Aeyoung",
    date: "2020. 07. 26",
    comment:
      "Amazing work you have here. feels like an alternative reality with that much saturation.. love it! Amazing work you have here feels like an alternative reality with that muchsaturation.. love it!",
    avt: cmtAvt1,
  },
];

const ModalFooterLeft = () => {
  return (
    <div className="text-left px-12 pb-16 pt-12 lg:px-4" style={{ flex: 7, borderRight: "1px solid gray"}}>
      <div
        style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "20px" }}
      >
        Comments
      </div>
      <div className="w-full flex">
        <input style={{ border: "1px solid black", flexGrow: 1 }} />
        <Button variant="secondary" width="70px">
          <BsArrowRight size={20} />
        </Button>
      </div>
      <div className="mb-12">
        {commentData.map((item, index) => (
          <Comment key={index} data={item} index={index} />
        ))}
      </div>
      <Button variant="primary" width="100%">
        <b className="flex items-center">
          <span className="mr-2">More comments</span>
          <BsArrowDown />
        </b>
      </Button>
    </div>
  );
};

export default ModalFooterLeft;
