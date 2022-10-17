import styled from "styled-components";
import React from "react";

import CodeImage from "./img/code.svg";
import IssueImage from "./img/issue.svg";
import PRImage from "./img/pr.svg";
import ActionImage from "./img/action.svg";
import ProjectsImage from "./img/Projects.svg";
import WikiImage from "./img/wiki.svg";
import SecurityImage from "./img/Security.svg";
import InsightsImage from "./img/Insights.svg";
import SettingImage from "./img/setting.svg";

const Functional = styled.ul`
display: flex;
justify-content: start;
align-items: center;
list-style: none;
padding: 0px;
margin: 0px;
background-color: #eaeef2;
`
const FunctionalImg = styled.img`
width: 16px;
height: 16px;
margin-right: 8px;
`

const FunctionalImgandText = styled.button`
display: flex;
justify-content: center;
align-items: center;
margin-right: 20px;
font-size: 14px;
line-height: 30px;
cursor: pointer;
background-color: #eaeef2;
border: none;
`

function Product() {
  return (
    <Functional>
    <FunctionalImgandText>
      <FunctionalImg src={CodeImage}/>
      <p>code</p>
    </FunctionalImgandText>
    <FunctionalImgandText>
      <FunctionalImg src={IssueImage} />
      <p>Issues</p>
    </FunctionalImgandText>
    <FunctionalImgandText>
      <FunctionalImg src={PRImage} />
      <p>Pull requests</p>
    </FunctionalImgandText>
    <FunctionalImgandText>
      <FunctionalImg src={ActionImage} />
      <p>Actions</p>
    </FunctionalImgandText>
    <FunctionalImgandText>
      <FunctionalImg src={ProjectsImage} />
      <p>Projects</p>
    </FunctionalImgandText>
    <FunctionalImgandText>
      <FunctionalImg src={WikiImage} />
      <p>Wiki</p>
    </FunctionalImgandText>
    <FunctionalImgandText>
      <FunctionalImg src={SecurityImage} />
      <p>Security</p>
    </FunctionalImgandText>
    <FunctionalImgandText>
      <FunctionalImg src={InsightsImage} />
      <p>Insights</p>
    </FunctionalImgandText>
    <FunctionalImgandText>
      <FunctionalImg src={SettingImage} />
      <p>Settings</p>
    </FunctionalImgandText>
  </Functional>
  );
}

export default Product;
