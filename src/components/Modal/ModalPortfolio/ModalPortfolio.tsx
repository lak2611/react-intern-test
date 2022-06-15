import React from "react";
import playIcon from "../../../images/play-icon.png";
import img2 from '../../../images/upload-video-img-2.png'
import img3 from '../../../images/upload-video-img-3.png'
import img4 from '../../../images/upload-video-img-4.png'
import { getViewportWidth } from "../../../utils/util";
const ModalPortfolio = ({ data }: { data: any }) => {
  const paragraph = `Hello, I'm ${data.username}. This is my first portfolio movement. Thank you very much.`;
  return (
    <div className="my-12">
      <div className="px-8 ">
        <div className="relative w-fit mx-auto">
          <img src={playIcon} className="center-position" />
          <img style={getViewportWidth()<1024?{}:{ height: "80vh" }} src={data.backgroundImage} />
        </div>
        <p className="text-left mt-10">
          {paragraph + paragraph + paragraph + paragraph}
        </p>
      </div>
      <div className="flex flex-col gap-16 px-28 mt-24 lg:px-2">
        <img src={img2}/>
        <img src={img3}/>
        <img src={img4}/>
      </div>
    </div>
  );
};

export default ModalPortfolio;
