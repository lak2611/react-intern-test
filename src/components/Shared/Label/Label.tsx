import React from "react";
import styled from "styled-components";
const StyledLabel = styled.div<{color : string; height:string; width:string}>`
  background: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.height};
  font-size: 22px;
  color: white;
  position: relative;
  width: ${(props)=> props.width};
  &:after {
    border-top: 35px solid ${(props) => props.color};
    border-left: calc(${(props)=> props.width} / 2) solid transparent;
    border-right: calc(${(props)=> props.width} / 2) solid transparent;
    content: "";
    height: 0;
    left: 0;
    position: absolute;
    bottom: -35px;
    width: 0;
  }
`;

export default StyledLabel;
