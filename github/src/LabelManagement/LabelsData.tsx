import styled from "styled-components";
import React from "react";
import { useState } from "react";

type CloseLabelTr = {
    CloseLabelTr: number;
    index: number;
  };


const Label = styled.tr<CloseLabelTr>`
  display: ${(props) => (props.CloseLabelTr === props.index ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
  padding: 16px 16px;
  border: 0.5px solid #cccccc;
  
`;

const LabelStyle = styled.td`
  width: 18%;

  @media screen and (max-width: 767px) {
    width: 40%;
  }
`;

const LabelBtn = styled.button`
  background-color: #${(props) => props.color};
  padding: 0 10px;
  font-size: 12px;
  font-weight: 500;
  line-height: 22px !important;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 2em;
`;

const LabelText = styled.td`
  width: 33%;
  font-size: 12px;
  color: #57606a;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const LabelEvent = styled.td`
  width: 12%;
  text-align: right;

  @media screen and (max-width: 1011px) {
    text-align: center;
    display: flex;
    justify-content: end;
    align-items: center;
  }
`;

const LabelEventBtn = styled.button`
  display: none;

  @media screen and (max-width: 1011px) {
    display: block;
    padding: 3px 12px;
    border: 1px solid #cccccc;
    width: 42px;
    height: 28px;
    border-radius: 10px;
    text-align: center;
    position: relative;
  }
`;

const LabelEventLi = styled.li`
  display: none;

  @media screen and (max-width: 1011px) {
    display: block;
    padding: 8px 16px 8px 8px;
    width: 134px;
    height: 18px;
    background: white;
    padding-top: 8px;
    padding-bottom: 8px;
    text-align: left;
  }
`;

type MoreButtonBoolean = {
    index: number;
    moreBtnNumActive: any;
  };
  
  const LabelEventUl = styled.ul<MoreButtonBoolean>`
    display: ${(props) =>
      props.index === props.moreBtnNumActive ? "block" : "none"};
  
    @media screen and (max-width: 1011px) {
      display: block;
      padding: 3px 0px;
      border: 1px solid #cccccc;
      width: 158px;
      height: 68px;
      border-radius: 10px;
      text-align: center;
      position: relative;
      left: -130px;
      bottom: -8.5px;
      z-index: 2;
      background: white;
      padding-top: 8px;
      padding-bottom: 8px;
      display: ${(props) =>
        props.index === props.moreBtnNumActive ? "block" : "none"};
    }
  `;

  const Edit = styled.button`
  background-color: white;
  border: none;

  @media screen and (max-width: 1011px) {
    display: none;
  }
`;

const Delete = styled.button`
  background-color: white;
  border: none;

  @media screen and (max-width: 1011px) {
    display: none;
  }
`;

function Product({index,onClick , onChange}:any) {
    const [moreBtnNumActive, setMoreBtnNumActive] = useState(-1);
    const [updateActive, setUpdateActive] = useState(-1);
    const [closeLabelTr, setCloseLabelTr]: any =
    useState(0);

  return (
    <Label key={index} CloseLabelTr={index} index={index}>
    <LabelStyle>
      <LabelBtn key={index} color={"#FEF2C0"}>
        LabelName
      </LabelBtn>
    </LabelStyle>
    <LabelText>Description</LabelText>
    <LabelEvent>
      <LabelEventBtn onClick={() => {
        if(moreBtnNumActive === index){
          setMoreBtnNumActive(-1)
        }else{
          setMoreBtnNumActive(index)
        }}}>
        ...
        <LabelEventUl index={index} moreBtnNumActive={moreBtnNumActive}>
          <LabelEventLi onClick={() => {
          setMoreBtnNumActive(-1)
          setUpdateActive(index)
          setCloseLabelTr(-1)
        }
          }>
            Edit
          </LabelEventLi>
          <LabelEventLi onClick={() => {
                if (onClick) {
                  onClick();
                }
              }}>Delete</LabelEventLi>
        </LabelEventUl>
      </LabelEventBtn>
      <Edit 
      onClick={() => {
        if (onClick) {
            setUpdateActive(index)
          onClick();
        }
      }}>Edit</Edit>
      <Delete      
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}>Delete</Delete>
    </LabelEvent>
  </Label>
  );
}

export default Product;
