import React from "react";
import styled from "styled-components";

import LogoImage from "../img/logo.jpg";
const Logo = styled.li`
  width: 32px;
  margin-right: 16px;
  list-style: none;
  cursor: pointer;
`;

const LogoImg = styled.img`
  width: 32px;
  height: 32px;
`;

function HeaderLogo() {
  return (
    <Logo>
      <LogoImg src={LogoImage} alt="" />
    </Logo>
  );
}

export default HeaderLogo;
