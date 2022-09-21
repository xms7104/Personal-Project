import React from "react";
import styled from "styled-components";

import LogoImage from "./img/logo.jpg";
import SingOut from "./img/Singout.jpg";
import BellImage from "./img/bell.png";
import SortWhite from "./img/SortWhite.png";

const Header = styled.div`
    display: flex;
    padding: 16px;
    font-size: 14px;
    line-height: 1.5;
    color: #FFFFFF;
    background-color: #000000;
    align-items: center;
    flex-wrap: nowrap;
    height: 30px;
    padding: 16px 32px;
    justify-content: space-between;

  @media screen and (max-width: 767px) {
    padding: 16px 16px;
  }
`;

const MobileIcon = styled.div`
    display: none;

  @media screen and (max-width: 767px) {
    display: block;
  }
  `;

const MobileMenu = styled.div`
display: none;

@media screen and (max-width: 767px) {
    position: absolute;
    top: 53px;
    left: 8px;
    display: none;
    width: 97.8%;
}`;

const MobileMenuUl = styled.ul`
@media screen and (max-width: 767px) {
    background-color: #000;
    margin-top: 16px;
    margin-bottom: 16px;
    list-style: none;
    padding: 16px 16px 16px 16px;
}`

const MobileSearch = styled.li`
  display:block;
@media screen and (max-width: 767px) {
    width: 94%;
    background-color: #000;
    border: 1px solid gray;
    padding: 0px 12px;
    height: 28px;
    border-radius: 5px;
}`

const MobileMenuText = styled.li`
@media screen and (max-width: 767px) {
    padding: 8px;
    font-weight: 600;
    white-space: nowrap;
    border-bottom: 1px solid rgba(255,255,255,0.15);
}`

const MobileMenuTextAndImg = styled.li`
@media screen and (max-width: 767px) {
    padding: 8px;
    font-weight: 600;
    white-space: nowrap;
    border-bottom: 1px solid rgba(255,255,255,0.15);
    display: flex;
    justify-content: start;
    align-items: center;
}`

const MobileMenuImg = styled.img`
@media screen and (max-width: 767px) {
    width: 20px;
    height: 20px;
    margin-right: 3px;
}`

const HeaderLeftUl = styled.ul`
list-style: none;
display: flex;
justify-content: space-around;
align-items: center;
padding: 0px;`

const Logo = styled.li`
width: 32px;
margin-right: 16px;`

const LogoImg = styled.img`
width: 32px;
height: 32px;
`

const HeaderSearch = styled.li`
display: block;`

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
color:lightgray;
width: 272px;
height: 30px;
margin-right: 16px;
border-radius: 8px;
display:none;
`

const HeaderLeftText = styled.li`
margin-right:16px;
color: white;
white-space: nowrap;
font-weight: 600;
@media screen and (max-width: 767px) {
    display: none;
}`

const HeaderRightUl = styled.ul`
display: flex;
justify-content: end;
align-items: center;
list-style: none;
@media screen and (max-width: 767px) {
    padding: 0px;
}`

const BellImg = styled.img`
    width: 16px;
    height:16px;
`

const More = styled.li`
width: 60px;
display: flex;
justify-content: center;
align-items: center;
@media screen and (max-width: 767px) {
    display: none;
}`

const MoreText = styled.p`
font-size: 18px;`

const SortDownImg = styled.img`
width: 20%;
`

const Pofile = styled.li`
width: 50px;
display: flex;
align-items: center;
justify-content: center;
@media screen and (max-width: 767px) {
    display: none;
}`

const UserImg = styled.img`
width: 45%;
margin-right: 5px;`

const SortDownImgUser = styled.img`
width: 20%;`

function Headers() {


  return (
    <Header>
    <MobileIcon>☰</MobileIcon>
    <MobileMenu>
      <MobileMenuUl>
        <MobileSearch>
          <input type="search" placeholder="Search" />
        </MobileSearch>
        <MobileMenuText>Dashboard</MobileMenuText>
        <MobileMenuText>Pull Requests</MobileMenuText>
        <MobileMenuText>Issues</MobileMenuText>
        <MobileMenuText>Codespaces</MobileMenuText>
        <MobileMenuText>Marketplace</MobileMenuText>
        <MobileMenuText>Explore</MobileMenuText>
        <MobileMenuText>Sponsors</MobileMenuText>
        <MobileMenuText>Settings</MobileMenuText>
        <MobileMenuTextAndImg>
          <MobileMenuImg src={LogoImage} alt="LogoImage"/>
          Xie-MS
        </MobileMenuTextAndImg>
        <MobileMenuTextAndImg>
          <MobileMenuImg src={SingOut} />
          Sign out
        </MobileMenuTextAndImg>
      </MobileMenuUl>
    </MobileMenu>
    <div>
      <HeaderLeftUl>
        <Logo><LogoImg src={LogoImage} /></Logo>
        <HeaderSearch>
          <HearderSearchInput
            type="text"
            value="  Search or jump to..." />
        </HeaderSearch>
        <HeaderLeftText>Pull requests</HeaderLeftText>
        <HeaderLeftText>Issues</HeaderLeftText>
        <HeaderLeftText>Marketplace</HeaderLeftText>
        <HeaderLeftText>Explore</HeaderLeftText>
      </HeaderLeftUl>
    </div>
    <div>
      <HeaderRightUl>
        <li><BellImg src={BellImage} /></li>
        <More>
          <MoreText>＋</MoreText>
          <SortDownImg src={SortWhite} />
        </More>
        <Pofile>
          <UserImg src={LogoImage} />
          <SortDownImgUser src={SortWhite} />
        </Pofile>
      </HeaderRightUl>
    </div>
  </Header>
  );
}

export default Headers;
