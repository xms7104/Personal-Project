import React from "react";
import styled from "styled-components";

import RepoImage from "../img/repo.svg";

const RepoInformation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const Repo = styled.ul`
  display: flex;
  list-style: none;
  justify-content: start;
  align-items: center;
  padding-left: 0px;
  width: 346px;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

const RepoImg = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;

const RepoAndUserName = styled.li`
  font-size: 20px;
  color: #0969da;
  font-weight: bold;
  cursor: pointer;
`;

const RepoVisibility = styled.li`
  margin: 0px 8px;
`;

const RepoVisibilityBtn = styled.button`
  display: inline-block;
  padding: 0 7px;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  white-space: nowrap;
  border: 1px solid transparent;
  border-radius: 2em;
  border: 1px solid #cccccc;
`;

function RepoNameAndUserName() {
  return (
    <RepoInformation>
      <Repo>
        <RepoImg src={RepoImage} alt="" />
        <RepoAndUserName>Xie-MS</RepoAndUserName>／
        <RepoAndUserName>Personal-Project</RepoAndUserName>
        <RepoVisibility>
          <RepoVisibilityBtn>Public</RepoVisibilityBtn>
        </RepoVisibility>
      </Repo>
    </RepoInformation>
  );
}

export default RepoNameAndUserName;
