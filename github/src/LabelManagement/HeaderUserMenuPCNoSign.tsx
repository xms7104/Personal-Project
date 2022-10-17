import styled from "styled-components";
import React from "react";

import LogoImage from "../src/img/logo.jpg";
import BellImage from "../src/img/bell.png";
import SortWhite from "../src/img/SortWhite.png";

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
`;

const More = styled.li`
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
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

const Pofile = styled.li`
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const UserImg = styled.img`
  width: 45%;
  margin-right: 5px;
`;

const SortDownImgUser = styled.img`
  width: 20%;
`;

function Product() {
  return (
    <HeaderRightUl>
      <li>
        <BellImg src={BellImage} alt="" />
      </li>
      <More>
        <MoreText>＋</MoreText>
        <SortDownImg src={SortWhite} alt="" />
      </More>
      <Pofile>
        <UserImg src={LogoImage} alt="" />
        <SortDownImgUser src={SortWhite} alt="" />
      </Pofile>
    </HeaderRightUl>
  );
}

export default Product;
