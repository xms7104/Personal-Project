import styled from "styled-components";
import PinImage from "./img/pin.svg";
import UnwatchImage from "./img/Unwatch.svg";
import SortDownImage from "./img/sortDown.svg";
import ForkImage from "./img/fork.svg";
import StarImage from "./img/star.svg";
import React from "react";

const FunctionalElement = styled.ul`
list-style: none;
justify-content: end;
align-items: center;
padding-left:32px;
margin-bottom: 16px;
display: flex;
@media screen and (max-width: 768px) {
  display: none;
}
`
const PinBtn = styled.button`
padding: 3px 12px;
border: 1px solid #CCCCCC;
height: 28px;
margin-right: 8px;
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;
`
const FunctionalElementImg = styled.img`
width: 14.79px;
height: 14.79px;
`
const FunctionalElementBtn = styled.button`
display: flex;
justify-content: space-between;
align-items: center;
height: 28px;
border: 1px solid #CCCCCC;
border-radius: 5px;
margin-right: 8px;

`
const ForkAndStar = styled.li`
display: flex;
justify-content: center;
align-items: center;
`
const FunctionalElementNum = styled.p`
background-color: lightgray;
border-radius: 50px;
color: black;
width: 20px;
height: 20px;
display: flex;
justify-content: center;
align-items: center;

`
const UnWatchImg = styled.img`
width:10%;
margin-left: 8px;
padding-left: 8px;
border-left: 1px solid #000;
`

const ForkAndStarImg = styled.img`
width:12%;
margin-left: 8px;
padding-left: 8px;
`

function Product() {
  return (
    <FunctionalElement>
          <li>
            <PinBtn>
              <FunctionalElementImg src={PinImage} />
              Pin
            </PinBtn>
          </li>
          <li>
            <FunctionalElementBtn>
              <FunctionalElementImg src={UnwatchImage} />
              Unwatch
              <FunctionalElementNum>1</FunctionalElementNum>
              <UnWatchImg src={SortDownImage} />
            </FunctionalElementBtn>
          </li>
          <ForkAndStar>
            <FunctionalElementBtn>
              <ForkAndStarImg src={ForkImage} />
              Fork
              <FunctionalElementNum>0</FunctionalElementNum>
              <UnWatchImg src={SortDownImage}/>
            </FunctionalElementBtn>
          </ForkAndStar>
          <ForkAndStar>
            <FunctionalElementBtn>
              <ForkAndStarImg src={StarImage} />
              Star
              <FunctionalElementNum>0</FunctionalElementNum>

              <UnWatchImg src={SortDownImage} />
            </FunctionalElementBtn>
          </ForkAndStar>
        </FunctionalElement>
  );
}

export default Product;
