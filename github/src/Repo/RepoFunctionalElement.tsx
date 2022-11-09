import React from "react";
import styled from "styled-components";

import {
  ChevronDownIcon,
  EyeIcon,
  PinIcon,
  RepoForkedIcon,
  StarIcon,
} from "@primer/octicons-react";

const FunctionalElement = styled.ul`
  width: 491px;
  list-style: none;
  justify-content: space-evenly;
  align-items: center;

  display: flex;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const PinBtn = styled.button`
  padding: 3px 12px;
  font-size: 12px;
  line-height: 20px;
  width: 65px;
  border: 1px solid #cccccc;
  height: 28px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FunctionalElementBtn = styled.button`
  padding: 3px 12px;
  font-size: 12px;
  line-height: 20px;
  border: 1px solid #cccccc;
  height: 28px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ForkAndStar = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FunctionalElementNum = styled.p`
  background-color: lightgray;
  border-radius: 50px;
  color: black;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 4px;
`;

const PinText = styled.p`
  margin-left: 8px;
`;

const FunctionalElementText = styled.p`
  margin: 0px 4px;
`;

function RepoFunctionalElement() {
  return (
    <FunctionalElement>
      <li>
        <PinBtn>
          <PinIcon size={16} />
          <PinText>Pin</PinText>
        </PinBtn>
      </li>
      <li>
        <FunctionalElementBtn>
          <EyeIcon size={16} />
          <FunctionalElementText>Unwatch</FunctionalElementText>

          <FunctionalElementNum>1</FunctionalElementNum>
          <ChevronDownIcon size={16} />
        </FunctionalElementBtn>
      </li>
      <ForkAndStar>
        <FunctionalElementBtn>
          <RepoForkedIcon size={16} />
          <FunctionalElementText>Fork</FunctionalElementText>

          <FunctionalElementNum>0</FunctionalElementNum>
          <ChevronDownIcon size={16} />
        </FunctionalElementBtn>
      </ForkAndStar>
      <ForkAndStar>
        <FunctionalElementBtn>
          <StarIcon size={16} />
          <FunctionalElementText>Star</FunctionalElementText>

          <FunctionalElementNum>0</FunctionalElementNum>
          <ChevronDownIcon size={16} />
        </FunctionalElementBtn>
      </ForkAndStar>
    </FunctionalElement>
  );
}

export default RepoFunctionalElement;
