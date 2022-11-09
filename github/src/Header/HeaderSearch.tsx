import React from "react";
import styled from "styled-components";

const HeaderSearchLI = styled.li`
  display: block;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

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
  color: lightgray;
  width: 272px;
  height: 30px;
  margin-right: 16px;
  border-radius: 8px;
  display: block;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

function HeaderSearch() {
  return (
    <HeaderSearchLI>
      <HearderSearchInput type="text" value="  Search or jump to..." />
    </HeaderSearchLI>
  );
}

export default HeaderSearch;
