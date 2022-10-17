import styled from "styled-components";
import React from "react";

import BellImage from "./img/bell.png";
import SortWhite from "./img/SortWhite.png";

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


function Product() {
  return (
    <HeaderRightUl>
    <li><BellImg src={BellImage} /></li>
    <More>
      <MoreText>＋</MoreText>
      <SortDownImg src={SortWhite} />
    </More>
    <Pofile>Sign In</Pofile>
  </HeaderRightUl>
  );
}

export default Product;
