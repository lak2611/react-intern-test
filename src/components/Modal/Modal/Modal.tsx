import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getViewportWidth } from "../../../utils/util";
import { closeModal } from "./modalSlice";
import rightArrow from '../../../images/r-white-line-arrow.png'
import leftArrow from '../../../images/l-white-line-arrow.png'
import icon1 from '../../../images/go-to-page-icon.png'
import icon2 from '../../../images/like-icon.png'
import icon3 from '../../../images/black-add-button-icon.png'
import icon4 from '../../../images/share-black-icon.png'

const SideButton = styled.div`
  width: 70px;
  height: 70px;
  background-color: white;
  border-top: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Modal = (props: any) => {
  const dispatch = useDispatch();
  return (
      <div
        className="fixed z-10 top-0 left-0 w-full overflow-auto"
        style={{
          height: "100vh",
          backgroundColor: "rgb(0,0,0,0.8)",
        }}
      >
        <div className="left-8 top-[666px] absolute lg:fixed lg:top-1/2 z-20 lg:rounded-full lg:p-2 lg:left-0 lg:bg-black opacity-50"><img className="lg:w-10 lg:h-10" src={leftArrow}/></div>
        <div className="right-8 top-[666px] absolute lg:fixed lg:top-1/2 z-20 lg:rounded-full lg:p-2 lg:right-0 lg:bg-black opacity-50"><img className="lg:w-10 lg:h-10" src={rightArrow}/></div>
        <div className="absolute top-48 right-12 lg:fixed lg:flex lg:top-auto lg:mx-auto lg:left-0 lg:right-0 lg:bottom-0 z-20  lg:justify-center lg:h-fit bg-white">
          <SideButton><img height={16} width={16} src={icon1}/><div>Page</div></SideButton>
          <SideButton><img height={18} width={18} src={icon2}/><div>Like</div></SideButton>
          <SideButton><img height={16} width={16} src={icon3}/><div>Add</div></SideButton>
          <SideButton><img height={16} width={16} src={icon4}/><div>Share</div></SideButton>
        </div>
        <div className="bg-white opacity-100 relative z-10 right-0 mx-32 mb-16 lg:mx-0">
            {props.children}
        </div>
        <div
          onClick={() => {
            dispatch(closeModal(null));
          }}
          className="text-white fixed top-5 right-8 z-10 cursor-pointer"
          style={getViewportWidth()<1024?{borderRadius: "50%", backgroundColor: "black", opacity: "0.5"}:{}}
        >
          <MdOutlineClose size={30} />
        </div>
      </div>
  );
};

export default Modal;
