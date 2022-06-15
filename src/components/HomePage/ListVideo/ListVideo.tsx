import axios from "axios";
import React, { useEffect, useState } from "react";
import { getViewportWidth } from "../../../utils/util";
import Turtorial from "../Turtorial/Turtorial";
import Video from "./Video";

const ListVideo = () => {
  const [data, setData] = useState<any>(null);
  const [viewPortWidth, setViewPortWidth] = useState(getViewportWidth());
  // caculate item each row
  let itemEachRow = 1;
  for (let i = 1; i <= 10; i++) {
    if (i * 360 + (i - 1) * 16 > viewPortWidth - 48) break;
    itemEachRow = i;
  }
  const itemLastRow = 30 % itemEachRow ? 30 % itemEachRow : itemEachRow;
  // on resize window
  useEffect(() => {
    window.addEventListener("resize", () => {
      setViewPortWidth(getViewportWidth);
    });
  }, []);
  // get data
  useEffect(() => {
    axios
      .get(`https://yts.torrentbay.to/api/v2/list_movies.json?limit=30`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "x-requested-with": "XMLHttpRequest",
        },
      })
      .then((res) => {
        setData(res.data.data);
      })
      .catch((error) => {
        alert(
          "Please disable CORS in your browser to see the video list, it's a problem of the server"
        );
      });
  }, []);
  //empy item
  const emptyItems = [];
  for (let i = 1; i <= itemEachRow - itemLastRow; i++) emptyItems.push(i);
  //selection criteria
  const selectionCriteria = (
    <div className="flex justify-between">
      <div className="flex gap-6">
        <div className="font-bold underline">Motion trend pick</div>
        <div>Latest</div>
        <div>Recommended</div>
      </div>
      <div>
        <div>Selection criteria</div>
      </div>
    </div>
  );
  //selection criteria mobile
  const selectionCriteriaMobile = <div>
    <div>Selection criteria</div>
    <select className="w-full py-2" style={{border: "1px solid black"}}>
      <option>Motion trend pick</option>
      <option>Lastest</option>
      <option>Recommended</option>
    </select>
  </div>
  return (
    <div
      className="px-6 mt-8 m-auto"
      style={{
        width: Math.min(itemEachRow * 360 + (itemEachRow - 1) * 16,getViewportWidth()-48),
        boxSizing: "content-box",
      }}
    >
      {/* Selection criteria */}
      {getViewportWidth()<1024?selectionCriteriaMobile:selectionCriteria}
      {/* List video */}
      <div className="flex flex-wrap justify-between mt-5">
        {data?.movies.map((item: any, index: number) =>
          index + 1 <= 30 - itemLastRow ? (
            <Video key={index} data={item} index={index} />
          ) : null
        )}
        <div className="w-full my-16" style={{display: getViewportWidth()<1024?"none":"block", height: getViewportWidth()<1024?"fit-content":"428px" }}>
          <Turtorial />
        </div>
        {data?.movies.map((item: any, index: number) =>
          (index + 1 > 30 - itemLastRow) && getViewportWidth()>=1024 ? (
            <Video key={index} data={item} index={index} />
          ) : null
        )}
        {emptyItems.map((i) => (
          <div key={"empty" + i} className="invisible">
            <Video data={data?.movies[i]} index={i} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListVideo;
