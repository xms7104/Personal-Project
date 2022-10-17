import styled from "styled-components";
import React from "react";
import { useRef, useState } from "react";

import ChangeColorImage from "../src/img/change.png";

type CreateLabelboolean = {
  active: boolean;
};

const CreateLable = styled.div<CreateLabelboolean>`
  display: block;
  justify-content: start;
  align-items: center;
  padding: 16px 16px;
  border-radius: 10px;
  color: #f6f8fa;
  border: 1px solid rgba(0, 0, 0, 0.25);
  margin-bottom: 16px;
  background-color: #f6f8fa;
  @media screen and (max-width: 767px) {
    border-radius: 50px;
    width: 95%;
    border: none;
    margin-bottom: 0px;
  }
`;

type CreateButton = {
  CreateActive: boolean;
};

const CreateCreateLabel = styled.button<CreateButton>`
  width: 107.5px;
  height: 30px;
  pad: 5px 16px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  background-color: ${(props) => (props.CreateActive ? "#94d3a2" : "#2da44e")};
  text-align: center;
  color: white;
`;

const CreateLableTitle = styled.div`
  margin-bottom: 8px;
`;

const CreateLableTitleBtn = styled.button`
  background-color: ${(props) => props.color};
  border: 1px solid rgba(0, 0, 0, 0.25);
  padding: 0px 10px;
  border-radius: 50px;
  width: 14%;
  height: 22px;
  @media screen and (max-width: 767px) {
    width: 30%;
  }
`;

const CreateInformation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: self-end;
  @media screen and (max-width: 767px) {
    display: block;
  }
`;

const CreateInformationLeft = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  @media screen and (max-width: 767px) {
    display: block;
  }
`;

const CreateInformationInputUl = styled.ul`
  padding-left: 0px;
  padding-right: 16px;
  display: block;
  justify-content: start;
  align-items: center;
  list-style: none;

  @media screen and (max-width: 767px) {
    display: block;
    margin: 8px 0px;
  }
`;

const CreateInformationInputUlTotal = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  margin: 16px 0px;
  position: relative;
`;

const CreateInformationInputText = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  color: black;
  margin-bottom: 6px;
  @media screen and (max-width: 767px) {
    height: 44px;
  }
`;

const CreateInformationInput = styled.li`
  font-size: 14px;
  font-weight: 600;
  word-wrap: break-word;
  line-height: 1.5;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

const CreateInformationInputName = styled.input`
  margin-right: 5px;
  padding: 5px 12px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 100%;
  height: 20px;
  &:focus {
    border: 1px solid #54aeff;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

const CreateInformationInputDescription = styled.input`
  margin-right: 5px;
  padding: 5px 12px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 100%;
  height: 20px;
  &:focus {
    border: 1px solid #54aeff;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

type ErrorColorValue = {
  errorColorValue: boolean;
};

const CreateInformationInputColor = styled.input<ErrorColorValue>`
  color: ${(props) => (props.errorColorValue ? "red" : "black")};
  margin-right: 5px;
  padding: 5px 12px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 100%;
  height: 20px;
  margin-bottom: 20px;

  &:focus {
    border: 1px solid #54aeff;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    margin-bottom: 12px;
  }
`;

type selectColorMenuActive = {
  selectColorMenuActive: boolean;
};

const ColorList = styled.ul<selectColorMenuActive>`
  display: ${(props) => (props.selectColorMenuActive ? "block" : "none")};
  width: 230px;
  padding: 8px 8px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  background-color: white;
  height: 78px;
  border-radius: 10px;
  position: absolute;
  left: 28px;
  top: 60px;
`;

const ColorListP = styled.p`
  margin-top: 0;
  margin-bottom: 4px;
  font-size: 12px;
  color: black;
  @media screen and (max-width: 767px) {
  }
`;

const ColorBtn = styled.button`
  width: 24px;
  height: 24px;
  background-color: ${(props) => props.color};
  border: 0.5px solid rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin-bottom: 8px;
  margin-right: 3px;
  @media screen and (max-width: 767px) {
  }
`;

const CreateInformationChangeColor = styled.button`
  width: 40px;
  height: 33px;
  background-image: url(${ChangeColorImage});
  background-size: 25px;
  background-repeat: no-repeat;
  background-position: center;
  padding: 0px 7px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  background-color: ${(props) => props.color};
  margin-right: 8px;
`;

const CreateInformationRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px 0px 16px 12px;
  height: 32px;
  @media screen and (max-width: 767px) {
    justify-content: start;
    margin: 16px 0px;
  }
`;

const CreateCancel = styled.button`
  width: 74px;
  height: 30px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  background-color: transparent;
  text-align: center;
  margin-right: 8px;
  padding: 5px 16px;
  @media screen and (max-width: 767px) {
    order: 2;
    margin-left: 8px;
  }
`;

function Product({ index, item, onClick, onChange }: any) {
  const [active, setActive] = useState(false);
  const [newLabelsSelectColor, setNewLabelsSelectColor]: any =
    useState("#FBCA04");
  const Description = useRef<HTMLInputElement | null>(null);
  const [selectColorMenuActive, setSelectColorMenuActive]: any =
    useState(false);
  const SeleceColor = useRef<HTMLInputElement | null>(null);
  const [errorColorValue, setErrorColorValue]: any = useState(false);
  const [createActive, setCreateActive]: any = useState(true);
  const [updateUpdateColor, setupdateUpdateColor]: any = useState();

  return (
    <CreateLable active={active}>
      <CreateLableTitle>
        <CreateLableTitleBtn color={newLabelsSelectColor}>
          Label preview
        </CreateLableTitleBtn>
      </CreateLableTitle>
      <CreateInformation>
        <CreateInformationLeft>
          <CreateInformationInputUl>
            <CreateInformationInputText>Label name</CreateInformationInputText>
            <CreateInformationInput>
              <CreateInformationInputName
                type="text"
                placeholder="Label name"
                onChange={(e) => {
                  if (onChange) {
                    onChange(e);
                  }
                }}
              />
            </CreateInformationInput>
          </CreateInformationInputUl>
          <CreateInformationInputUl>
            <CreateInformationInputText>Description</CreateInformationInputText>
            <CreateInformationInput>
              <CreateInformationInputDescription
                type="text"
                placeholder="Description（optional）"
                ref={Description}
              />
            </CreateInformationInput>
          </CreateInformationInputUl>
          <CreateInformationInputUlTotal>
            <CreateInformationInputUl>
              <CreateInformationInputText>Color</CreateInformationInputText>
              <CreateInformationInput
                onClick={() => {
                  if (onClick) {
                    onClick();
                  }
                }}
              />
              <CreateInformationChangeColor
                color={newLabelsSelectColor}
                onClick={() => {
                  if (onClick) {
                    onClick();
                  }
                }}
              />
            </CreateInformationInputUl>
            <CreateInformationInputColor
              type="text"
              value={newLabelsSelectColor}
              ref={SeleceColor}
              onClick={() => {
                setSelectColorMenuActive(true);
              }}
              errorColorValue={errorColorValue}
              onChange={(e) => {
                if (onChange) {
                  onChange(e);
                }
              }}
            />
            <ColorList selectColorMenuActive={selectColorMenuActive}>
              <ColorListP>Choose from default colors:</ColorListP>
              <li>
                <ColorBtn
                  key={index}
                  color={item}
                  onClick={() => {
                    setNewLabelsSelectColor({ item }.item);
                    setupdateUpdateColor({ item }.item);
                    if (selectColorMenuActive === true) {
                      setSelectColorMenuActive(false);
                    } else {
                      setSelectColorMenuActive(true);
                    }
                  }}
                />
              </li>
            </ColorList>
          </CreateInformationInputUlTotal>
        </CreateInformationLeft>
        <CreateInformationRight>
          <CreateCancel onClick={() => setActive(false)}>Cancel</CreateCancel>
          <CreateCreateLabel
            CreateActive={createActive}
            disabled={createActive}
            onClick={() => {
              if (onClick) {
                onClick();
              }
            }}
          >
            Create label
          </CreateCreateLabel>
        </CreateInformationRight>
      </CreateInformation>
    </CreateLable>
  );
}

export default Product;
