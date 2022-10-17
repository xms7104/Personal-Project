import styled from "styled-components";
import React from "react";

import LabelsImage from "../src/img/Labels.svg";
import Milestone from "../src/img/milestone.svg";

const MenuBtn = styled.li`
  border: 1px solid #000;
  border-radius: 5px;
  display: flex;
  width: 210px;
`;

const Labels = styled.button`
  display: flex;
  padding-right: 10px;
  justify-content: center;
  align-items: center;
  height: 32px;
  background-color: white;
  border: none;
  width: 88px;
  border-right: 1px solid #000;
  padding: 5px 12px;
  &:focus {
    background-color: #0969da;
    color: white;
  }
`;

const LabelsImg = styled.img`
  width: 16px;
  height: 16px;
`;

const Milestones = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  border-radius: 5px;
  background-color: white;
  border: none;
  width: 122px;
  padding: 5px 0px;
  margin-left: 0px;
  &:focus {
    background-color: #0969da;
    color: white;
  }
`;

function Product() {
  return (
    <>
      <MenuBtn>
        <Labels>
          <LabelsImg src={LabelsImage} alt="" />
          Labels
        </Labels>
        <Milestones>
          <LabelsImg src={Milestone} alt="" />
          Milestones
        </Milestones>
      </MenuBtn>
    </>
  );
}

export default Product;
