import React from "react";
import styled from "styled-components";

import SearchImage from "../img/search.svg";

const Search = styled.li`
  padding: 0px 24px 0px 8px;
  list-style: none;
`;

const SearchInput = styled.input`
  padding: 5px 12px 5px 32px;
  border: 0.5px solid #000;
  background-color: #f6f8fa;
  width: 274px;
  height: 32px;
  background-image: url(${SearchImage});
  background-repeat: no-repeat;
  background-position: left;
  border-radius: 5px;
  color: black;
  &:focus {
    border: 1px solid #0969da;
    background-color: white;
  }
`;

function CreateLabelSearch() {
  return (
    <Search>
      <SearchInput value="Search all labels" />
    </Search>
  );
}

export default CreateLabelSearch;
