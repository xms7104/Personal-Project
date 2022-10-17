import styled from "styled-components";
import React from "react";

import LogoImage from "./img/logo.jpg";
import SingOut from "./img/Singout.jpg";

const MobileMenuUl = styled.ul`

    background-color: #000;
    margin-top: 16px;
    margin-bottom: 16px;
    list-style: none;
    padding: 16px 16px 16px 16px;
    list-style: none;
`

const MobileMenuTextAndImg = styled.li`

    padding: 8px;
    font-weight: 600;
    white-space: nowrap;
    border-bottom: 1px solid rgba(255,255,255,0.15);
    display: flex;
    justify-content: start;
    align-items: center;
    color:white;
    list-style: none;
`

const MobileMenuImg = styled.img`

    width: 20px;
    height: 20px;
    margin-right: 3px;
    color:white;
`


function Product() {
  return (
    <MobileMenuUl>
    <MobileMenuTextAndImg>
      <MobileMenuImg src={LogoImage} alt="LogoImage"/>
      Xie-MS
    </MobileMenuTextAndImg>
    <MobileMenuTextAndImg>
      <MobileMenuImg src={SingOut} />Sign out
    </MobileMenuTextAndImg>
  </MobileMenuUl>
  );
}

export default Product;
