import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import avt from "../../../images/upload-my-profile-2.png";
import { getVideoWidth, getViewportWidth } from "../../../utils/util";
import Video from "../../HomePage/ListVideo/Video";
import style from "./style.module.css";
const ModalListVideo = ({ data }: { data: any }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [movies, setMovies] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [shiftX, setShiftX] = useState(0);
  //caculate max video
  let maxVideo = 0;
  const parentWidth:any = ref.current?.clientWidth;
  for (let i = 1; i<=10;i++){
    if (Math.floor(getVideoWidth()*i + 20 + (i-1)*16) > parentWidth)
      break;
    maxVideo=i;
  }
  const getData = (page: number) => {
    axios
      .get(
        `https://yts.torrentbay.to/api/v2/list_movies.json?limit=10&page=${page}`
      )
      .then((res) => {
        setMovies([...movies, ...res.data.data.movies]);
      });
  };
  useEffect(() => {
    getData(1);
    window.addEventListener("resize", () => {
      setShiftX(0)
    });
  }, []);
  // list video element
  return (
    <div
      ref={ref}
      style={{
        height: "407px",
        backgroundColor: "#efefef",
        padding: "50px 10px",
      }}
    >
      <div className="w-fit mx-auto">
        <div className="flex items-center mb-4">
          <img className="mr-4" src={avt} />
          {data.username}
        </div>
        <div className="relative">
          <button onClick={()=>{setShiftX(shiftX+getVideoWidth()+16)}} className={style.btn} style={{ left: "-22px", display: shiftX===0?"none":"flex" }}><AiOutlineLeft/></button>
          <button onClick={()=>{setShiftX(shiftX-(getVideoWidth()+16)); getData(page+1); setPage(page+1)}} className={style.btn} style={{ right: "-22px" }}><AiOutlineRight/></button>
          <div
            className="overflow-hidden"
            style={{ maxWidth: maxVideo * getVideoWidth() + 16 * (maxVideo - 1) }}
          >
            <div className="flex gap-4" style={{transform: `translate(${shiftX}px, 0)`, transition: "all 0.4s linear"}}>
              {movies.map((item, index) => (
                <Video key={index} data={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalListVideo;
