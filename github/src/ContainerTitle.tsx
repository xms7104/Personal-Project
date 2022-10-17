import React from "react";
import styled from "styled-components";


import RepoImage from "./img/repo.svg";
import PinImage from "./img/pin.svg";
import UnwatchImage from "./img/Unwatch.svg";
import SortDownImage from "./img/sortDown.svg";
import ForkImage from "./img/fork.svg";
import StarImage from "./img/star.svg";
import CodeImage from "./img/code.svg";
import IssueImage from "./img/issue.svg";
import PRImage from "./img/pr.svg";
import ActionImage from "./img/action.svg";
import ProjectsImage from "./img/Projects.svg";
import WikiImage from "./img/wiki.svg";
import SecurityImage from "./img/Security.svg";
import InsightsImage from "./img/Insights.svg";
import SettingImage from "./img/setting.svg";


const ContainetTitle = styled.div`
background-color: #eaeef2;
padding: 0px 32px;
padding-top:16px;
`;

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
@media screen and (max-width: 767px) {
    width: 100%;
}`

const RepoImg = styled.img`
width: 16px;
height: 16px;
margin-right: 8px;`

const RepoAndUserName = styled.li`
font-size: 20px;
color: #0969da;
font-weight: bold ;`

const RepoVisibility = styled.li`
margin: 0px 8px 0px 4px;`

const RepoVisibilityBtn = styled.button`
display: inline-block;
padding: 0 7px;
font-size: 12px;
font-weight: 500;
line-height: 18px;
white-space: nowrap;
border: 1px solid transparent;
border-radius: 2em;
border: 1px solid #CCCCCC;

`

const FunctionalElement = styled.ul`
list-style: none;
justify-content: end;
align-items: center;
padding-left:32px;
margin-bottom: 16px;
display: flex;
@media screen and (max-width: 768px) {
  display: none;
}
`
const PinBtn = styled.button`
padding: 3px 12px;
border: 1px solid #CCCCCC;
height: 28px;
margin-right: 8px;
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;
`
const FunctionalElementImg = styled.img`
width: 14.79px;
height: 14.79px;
`
const FunctionalElementBtn = styled.button`
display: flex;
justify-content: space-between;
align-items: center;
height: 28px;
border: 1px solid #CCCCCC;
border-radius: 5px;
margin-right: 8px;

`
const ForkAndStar = styled.li`
display: flex;
justify-content: center;
align-items: center;
`
const FunctionalElementNum = styled.p`
background-color: lightgray;
border-radius: 50px;
color: black;
width: 20px;
height: 20px;
display: flex;
justify-content: center;
align-items: center;
`
const UnWatchImg = styled.img`
border-left: 1px solid #CCCCCC;
width:10%;
margin-left: 8px;
padding-left: 8px;
`

const ForkAndStarImg = styled.img`
border-left: 1px solid #CCCCCC;
width:12%;
margin-left: 8px;
padding-left: 8px;
`

const Functional = styled.ul`
display: flex;
justify-content: start;
align-items: center;
list-style: none;
padding: 0px;
margin: 0px;
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

function ContainerTitle() {
  return (
    <ContainetTitle>
      <RepoInformation>
        <Repo>
          <RepoImg src={RepoImage}/>
          <RepoAndUserName>Xie-MS</RepoAndUserName>
          ／
          <RepoAndUserName>Personal-Project</RepoAndUserName>
          <RepoVisibility>
            <RepoVisibilityBtn>Public</RepoVisibilityBtn>
          </RepoVisibility>
        </Repo>
        <FunctionalElement>
          <li>
            <PinBtn>
              <FunctionalElementImg src={PinImage} />
              Pin
            </PinBtn>
          </li>
          <li>
            <FunctionalElementBtn>
              <FunctionalElementImg src={UnwatchImage} />
              Unwatch
              <FunctionalElementNum>1</FunctionalElementNum>
              <UnWatchImg src={SortDownImage} />
            </FunctionalElementBtn>
          </li>
          <ForkAndStar>
            <FunctionalElementBtn>
              <ForkAndStarImg src={ForkImage} />
              Fork
              <FunctionalElementNum>0</FunctionalElementNum>
              <FunctionalElementImg src={SortDownImage}/>
            </FunctionalElementBtn>
          </ForkAndStar>
          <ForkAndStar>
            <FunctionalElementBtn>
              <ForkAndStarImg src={StarImage} />
              Star
              <FunctionalElementNum>0</FunctionalElementNum>

              <FunctionalElementImg src={SortDownImage} />
            </FunctionalElementBtn>
          </ForkAndStar>
        </FunctionalElement>
      </RepoInformation>
      <div>
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
      </div>
    </ContainetTitle>
  );
}

export default ContainerTitle;
