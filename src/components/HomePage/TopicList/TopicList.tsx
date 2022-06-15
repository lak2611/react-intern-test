import React, { useEffect, useState } from "react";
import { getViewportWidth } from "../../../utils/util";
import style from "./style.module.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const TopicList = () => {
  const itemList = [
    "Theme",
    "Editing",
    "Camera Action, Angle",
    "Sound, Beat",
    "Graphical",
    "Experimental",
    "Elements",
    "Car",
    "Gun",
    "Doll",
  ];
  const [startItem, setStartItem] = useState(0);
  const [currentItem, setCurrentItem] = useState('Experimental')
  const [viewPortWidth, setViewPortWidth] = useState(getViewportWidth());
  useEffect(() => {
    window.addEventListener("resize", () => {
      setViewPortWidth(getViewportWidth());
    });
  }, []);
  //caculate amount of item to be rendered depend on viewport width
  let numberItem = 0;
  for (let i = 1; i <= 10; i++) {
    if (i * 210 > viewPortWidth) {
      numberItem = i;
      break;
    }
    numberItem = i;
  }
  const totalWidth = numberItem * 210;
  const shift = (totalWidth - viewPortWidth) / 2;
  // create item list element
  const itemListElement = [];
  for (let i = 0; i < numberItem; i++) {
    const currentIndex = (startItem + i) % 10;
    itemListElement.push(
      <div
        key={itemList[currentIndex]}
        className={style.item}
        onClick={()=>{setCurrentItem(itemList[currentIndex])}}
        style={
          itemList[currentIndex] === currentItem
            ? { backgroundColor: "#ff2e43" }
            : {}
        }
      >
        {itemList[currentIndex]}
      </div>
    );
  }
  //shift left
  const shiftRight = () => {
    setStartItem((startItem + 10 - 1) % 10);
  };
  const shiftLeft = () => {
    setStartItem((startItem + 1) % 10);
  };
  //shift right
  return (
    <div className="w-full mt-2 overflow-hidden relative noselect">
      <div onClick={shiftLeft} className={style.arrowBtn} style={{ left: 10 }}>
        <AiOutlineLeft />
      </div>
      <div
        onClick={shiftRight}
        className={style.arrowBtn}
        style={{ right: 10 }}
      >
        <AiOutlineRight />
      </div>
      <div style={{ position: "relative", right: shift }} className="flex">
        {itemListElement}
      </div>
    </div>
  );
};

export default TopicList;
