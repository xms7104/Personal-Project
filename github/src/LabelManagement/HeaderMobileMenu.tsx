import styled from "styled-components";
import React from "react";


const MobileMenuUl = styled.ul`
    list-style: none;
    background-color: #000;
    margin-top: 16px;
    margin-bottom: 16px;
    list-style: none;
    padding: 16px 16px 16px 16px;
`

const MobileMenuText = styled.li`

    padding: 8px;
    font-weight: 600;
    white-space: nowrap;
    border-bottom: 1px solid rgba(255,255,255,0.15);
    color:white;
    list-style: none;

`



function Product() {
  return (
    <MobileMenuUl>
    <MobileMenuText>Dashboard</MobileMenuText>
    <MobileMenuText>Pull Requests</MobileMenuText>
    <MobileMenuText>Issues</MobileMenuText>
    <MobileMenuText>Codespaces</MobileMenuText>
    <MobileMenuText>Marketplace</MobileMenuText>
    <MobileMenuText>Explore</MobileMenuText>
    <MobileMenuText>Sponsors</MobileMenuText>
    <MobileMenuText>Settings</MobileMenuText>
    </MobileMenuUl>
  );
}

export default Product;
