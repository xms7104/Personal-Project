import React from "react";

import { Outlet, useLocation } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { Reset } from "styled-reset";

import Footer from "./Footer/footer";
import Headers from "./Header/header";
import "./index.css";
import SignIn from "./PleaseSignIn";
import ContainerTitle from "./Repo/ContainerTitle";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
  }
`;

function App() {
  const location = useLocation();
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Headers />
      {location.pathname === "/" && <SignIn />}
      {location.pathname !== "/" && <ContainerTitle />}
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
