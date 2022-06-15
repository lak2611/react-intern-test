import React from "react";
import icon1 from "../../../images/upload-delete-icon.png";
import icon2 from "../../../images/upload-report-icon.png";
import { getViewportWidth } from "../../../utils/util";

const Comment = ({
  data,
  index,
}: {
  data: { username: string; avt: any; date: string; comment: string };
  index: number;
}) => {
  console.log("helu");
  return (
    <div className="mt-10">
      <div className="flex justify-between item">
        <div className="flex">
          <img className="mr-4" src={data.avt} />
          <div>
            <div className="font-bold">{data.username}</div>
            <div>{data.date}</div>
          </div>
        </div>
        <div
          style={{
            display:
              index === 0 && getViewportWidth() >= 1024 ? "flex" : "none",
          }}
          className="flex gap-4"
        >
          <img src={icon1} className="h-5" />
          <img src={icon2} className="h-5" />
        </div>
      </div>
      <p>{data.comment}</p>
      <div
        style={{
          display: index === 0 && getViewportWidth() < 1024 ? "flex" : "none",
        }}
        className="flex gap-4 mt-2"
      >
        <img src={icon1} className="h-5" />
        <img src={icon2} className="h-5" />
      </div>
    </div>
  );
};

export default Comment;
