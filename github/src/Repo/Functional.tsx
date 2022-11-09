import React from "react";
import styled from "styled-components";

import ActionImage from "../img/action.svg";
import CodeImage from "../img/code.svg";
import InsightsImage from "../img/Insights.svg";
import IssueImage from "../img/issue.svg";
import PRImage from "../img/pr.svg";
import ProjectsImage from "../img/Projects.svg";
import SecurityImage from "../img/Security.svg";
import SettingImage from "../img/setting.svg";
import WikiImage from "../img/wiki.svg";

const Functional = styled.ul`
  display: flex;
  justify-content: start;
  align-items: center;
  list-style: none;
  padding: 0px;
  margin: 0px;
  overflow: hidden;
`;
const FunctionalImg = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;

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
`;

const FunctionalDiv = styled.div`
  display: block;
  background-color: #eaeef2;
  white-space: nowrap;
  overflow-y: auto;
  @media screen and (max-width: 768px) {
    overflow-y: hidden;
  }
`;

function RepoFunctional() {
  return (
    <FunctionalDiv>
      <Functional>
        <FunctionalImgandText>
          <FunctionalImg src={CodeImage} alt="" />
          <p>Code</p>
        </FunctionalImgandText>
        <FunctionalImgandText>
          <FunctionalImg src={IssueImage} alt="" />
          <p>Issues</p>
        </FunctionalImgandText>
        <FunctionalImgandText>
          <FunctionalImg src={PRImage} alt="" />
          <p>Pull requests</p>
        </FunctionalImgandText>
        <FunctionalImgandText>
          <FunctionalImg src={ActionImage} alt="" />
          <p>Actions</p>
        </FunctionalImgandText>
        <FunctionalImgandText>
          <FunctionalImg src={ProjectsImage} alt="" />
          <p>Projects</p>
        </FunctionalImgandText>
        <FunctionalImgandText>
          <FunctionalImg src={WikiImage} alt="" />
          <p>Wiki</p>
        </FunctionalImgandText>
        <FunctionalImgandText>
          <FunctionalImg src={SecurityImage} alt="" />
          <p>Security</p>
        </FunctionalImgandText>
        <FunctionalImgandText>
          <FunctionalImg src={InsightsImage} alt="" />
          <p>Insights</p>
        </FunctionalImgandText>
        <FunctionalImgandText>
          <FunctionalImg src={SettingImage} alt="" />
          <p>Settings</p>
        </FunctionalImgandText>
      </Functional>
    </FunctionalDiv>
  );
}

export default RepoFunctional;
