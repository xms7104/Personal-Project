import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Reset } from "styled-reset";
import { createGlobalStyle } from "styled-components";

import Headers from "./header";
import ContainerTitle from "./ContainerTitle";
import Footer from "./footer";
import "./index.css";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
  }
`;

function App() {
  const LabelsData = useSelector((state) => state);
  const [sortSelect, setsortSelect]: any = useState("");
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Headers />
      <ContainerTitle />
      <Outlet context={[sortSelect, setsortSelect]} />
      <Footer />
    </>
  );
}

export default App;
