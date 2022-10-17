import styled from "styled-components";
import React from "react";


const HeaderLeftUl = styled.ul`
list-style: none;
display: flex;
justify-content: space-around;
align-items: center;
padding: 0px;
background-color:black;
`

const HeaderLeftText = styled.li`
margin-right:16px;
color: white;
white-space: nowrap;
font-weight: 600;
@media screen and (max-width: 767px) {
    display: none;
}`



function Product() {
  return (
    <HeaderLeftUl>
    <HeaderLeftText>Pull requests</HeaderLeftText>
    <HeaderLeftText>Issues</HeaderLeftText>
    <HeaderLeftText>Marketplace</HeaderLeftText>
    <HeaderLeftText>Explore</HeaderLeftText>
  </HeaderLeftUl>
  );
}

export default Product;
