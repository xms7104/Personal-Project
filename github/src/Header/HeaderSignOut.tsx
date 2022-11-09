import React from "react";
import styled from "styled-components";

import BellImage from "../img/bell.png";
import LogoImage from "../img/logo.jpg";
import SortWhite from "../img/SortWhite.png";

const Header = styled.div`
  display: flex;
  padding: 16px;
  font-size: 14px;
  line-height: 1.5;
  color: #ffffff;
  background-color: #000000;
  align-items: center;
  flex-wrap: nowrap;
  height: 60px;
  padding: 16px 32px;
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    padding: 16px 16px;
  }
`;

const HeaderLeftUl = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0px;
`;

const Logo = styled.li`
  width: 32px;
  margin-right: 16px;
  cursor: pointer;
`;

const LogoImg = styled.img`
  width: 32px;
  height: 32px;
`;

const HeaderSearch = styled.li`
  display: block;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const HearderSearchInput = styled.input`
  display: table;
  width: 100%;
  max-width: 100%;
  padding: 0;
  font-size: inherit;
  font-weight: 400;
  vertical-align: middle;
  background-color: #000;
  border: 1px solid lightgray;
  box-shadow: none;
  color: lightgray;
  width: 272px;
  height: 30px;
  margin-right: 16px;
  border-radius: 8px;
  display: block;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const HeaderLeftText = styled.li`
  margin-right: 16px;
  color: white;
  white-space: nowrap;
  font-weight: 600;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const HeaderRightUl = styled.ul`
  display: flex;
  justify-content: end;
  align-items: center;
  list-style: none;
  @media screen and (max-width: 767px) {
    padding: 0px;
  }
`;

const BellImg = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

const More = styled.li`
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const MoreText = styled.p`
  font-size: 18px;
`;

const SortDownImg = styled.img`
  width: 20%;
`;

const SignIn = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 8px;
`;

function HeaderSignOut() {
  return (
    <Header>
      <div>
        <HeaderLeftUl>
          <Logo>
            <LogoImg src={LogoImage} />
          </Logo>
          <HeaderSearch>
            <HearderSearchInput type="text" value="  Search or jump to..." />
          </HeaderSearch>
          <HeaderLeftText>Pull requests</HeaderLeftText>
          <HeaderLeftText>Issues</HeaderLeftText>
          <HeaderLeftText>Marketplace</HeaderLeftText>
          <HeaderLeftText>Explore</HeaderLeftText>
        </HeaderLeftUl>
      </div>
      <div>
        <HeaderRightUl>
          <li>
            <BellImg src={BellImage} />
          </li>
          <More>
            <MoreText>＋</MoreText>
            <SortDownImg src={SortWhite} />
          </More>
          <SignIn>Sign In</SignIn>
        </HeaderRightUl>
      </div>
    </Header>
  );
}

export default HeaderSignOut;
