import React from "react";
import styled from "styled-components";

import LogoImage from "./img/logo.svg";

const Footer = styled.div`
display: flex;
justify-content: start;
align-items: center;
margin-top: 40px;
border-top: 0.994px solid #CCCCCC;
padding: 40px 32px 8px 32px;

  @media screen and (max-width: 1011px) {
    display: block;
  }
`;

const Footerleft = styled.div`
display: flex;
align-items: center;
width: 186px;
height: 25px;
margin-right: 40px;
}

  @media screen and (max-width: 1011px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const FooterLogo = styled.img`
width: 15%;
margin-right: 8px;

  @media screen and (max-width: 1011px) {
    width: 2%;
  }
`;

const CCText = styled.p`
word-wrap: break-word;
font-size: 14px;
line-height: 1.5;
`;

const FooterRight = styled.div`
display: flex;
justify-content: start;
align-items: center;
overflow: hidden;
@media screen and (max-width: 1011px) {
  justify-content: center;
  overflow: hidden;
}`;

const FooterText = styled.p`
word-wrap: break-word;
font-size: 14px;
line-height: 1.5;
color: #0969da;
margin-right: 30px;
;`

function Footers() {
  return (
    <Footer>
      <Footerleft>
        <FooterLogo src={LogoImage}  alt=""/>
        <CCText>© 2022 GitHub, Inc.</CCText>
      </Footerleft>
      <FooterRight>
        <FooterText>Terms</FooterText>
        <FooterText>Privacy</FooterText>
        <FooterText>Security</FooterText>
        <FooterText>States</FooterText>
        <FooterText>Docs</FooterText>
        <FooterText>Contant GitHub</FooterText>
        <FooterText>Pricing</FooterText>
        <FooterText>API</FooterText>
        <FooterText>Training</FooterText>
        <FooterText>Blog</FooterText>
        <FooterText>About</FooterText>
      </FooterRight>
    </Footer>
  );
}

export default Footers;
