import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import api from "../api";
import EditLabel from "./EditLabel";

import { ChevronDownIcon } from "@primer/octicons-react";
import ChangeColorImage from "../../src/img/change.png";
import LabelsImage from "../../src/img/Labels.svg";
import LoadingImg from "../../src/img/loading.gif";
import Milestone from "../../src/img/milestone.svg";
import SearchImage from "../../src/img/search.svg";

const Container = styled.div`
  margin-top: 24px;
  padding: 0px 32px;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuLeftUl = styled.ul`
  display: -webkit-inline-box;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding-left: 0px;
  margin-bottom: 24px;

  @media screen and (max-width: 767px) {
    display: block;
    justify-content: start;
    align-items: center;
  }
`;

const MenuBtn = styled.li`
  border: 1px solid #000;
  border-radius: 5px;
  background-color: white;
  display: flex;
  @media screen and (max-width: 767px) {
    width: fit-content;
  }
`;

const Labels = styled.button`
  display: flex;
  padding-right: 10px;
  justify-content: center;
  align-items: center;
  height: 32px;

  border: none;
  width: 88px;
  border-right: 1px solid #000;

  padding: 5px 12px;
  &:focus {
    background-color: #0969da;
    color: white;
  }
`;

const LabelsImg = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 4px;
`;

const Milestones = styled.button`
  display: flex;
  padding-right: 10px;
  justify-content: center;
  align-items: center;
  height: 32px;
  border-radius: 5px;
  background-color: white;
  border: none;
  width: 122px;
  padding: 5px 12px;
  &:focus {
    background-color: #0969da;
    color: white;
  }
`;

const Search = styled.li`
  padding: 0px 24px 0px 8px;
  @media screen and (max-width: 767px) {
    padding-left: 0px;
    margin-top: 16px;
  }
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
  @media screen and (max-width: 767px) {
    width: 320px;
  }
`;

const CreateLabel = styled.button`
  border: 0.5px solid rgba(27, 31, 36, 0.15);
  background-color: #2da44e;
  color: white;
  border-radius: 5px;
  padding: 5px 16px;
`;

const ContainerLabelList = styled.div`
  border-radius: 5px;
  border: 0.5px solid #cccccc;
`;

const LableListTitleTable = styled.table`
  width: 100%;
  height: 21px;
  background-color: lightgray;
`;

const LableListTitle = styled.tr`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  padding: 16px 16px;
  border: 0.5px solid #cccccc;
`;

const LabelTitleEvent = styled.td`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const LabelTitleEventBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: transparent;
  border: none;
`;

type Sortboolean = {
  sortActive: boolean;
};

const LabelTitleEventUl = styled.ul<Sortboolean>`
  display: ${(props) => (props.sortActive ? "block" : "none")};
  margin-top: 4px;
  margin-bottom: 20px;
  width: 279px;
  background-color: white;
  position: absolute;
  top: 30px;
  z-index: 2;
  right: -19px;
  border-radius: 5px;
  border: 1px solid #cccccc;
  @media screen and (max-width: 767px) {
    margin-top: 4px;
    margin-bottom: 20px;
    width: 298px;
    background-color: white;
    position: absolute;
    top: 30px;
    z-index: 2;
    right: -19px;
    border-radius: 5px;
    border: 1px solid #cccccc;
  }
`;

const LabelTitleEventLi = styled.li`
  padding: 8px 8px 8px 37px;
  border-bottom: 1px solid #cccccc;

  height: auto;
`;

const LabelTitleEventLiTitleDefault = styled.li`
  padding: 8px 10px;
  border-bottom: 1px solid #cccccc;

  display: flex;
  justify-content: start;
  align-items: center;
  height: auto;
`;

const LabelTitleEventLiTitle = styled.li`
  padding: 8px 10px;
  border-bottom: 1px solid #cccccc;

  display: flex;
  justify-content: start;
  align-items: center;
  height: auto;
`;

const LableList = styled.table`
  width: 100%;
`;

<<<<<<< HEAD
type CloseLabelTr = {
  CloseLabelTr: number;
  index: number;
};

const Label = styled.tr<CloseLabelTr>`
  display: ${(props) => (props.CloseLabelTr === props.index ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
  padding: 16px 16px;
  border-top: 0.5px solid #cccccc;
`;

type UpdateCloseLabelTr = {
  UpdateCloseLabelTr: number;
  index: number;
};

const UpdateLabels = styled.tr<UpdateCloseLabelTr>`
  display: ${(props) =>
    props.UpdateCloseLabelTr === props.index ? "flex" : "none"};
  justify-content: space-between;
  align-items: center;
  padding: 16px 16px;
  border-top: 0.5px solid #cccccc;
`;

const UpdateLabel = styled.tr`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 16px;
  border-top: 0.5px solid #cccccc;
`;

const LabelStyle = styled.td`
  width: 18%;
  @media screen and (max-width: 767px) {
    width: 40%;
  }
`;

type LabelBtnColor = {
  LabelBtnColor: string;
  UpdateChangeColor: string;
  index: number;
  LabelBtnColorNum: number;
};

const LabelBtn: any = styled.button<LabelBtnColor>`
  background-color: #${(props) => (props.LabelBtnColorNum === props.index ? props.UpdateChangeColor : props.LabelBtnColor)};
  color: ${(props) => props.color};
  padding: 0 10px;
  font-size: 12px;
  font-weight: 500;
  line-height: 22px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 2em;
`;

const LabelText = styled.td`
  width: 33%;
  font-size: 12px;
  color: #57606a;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const LabelEvent = styled.td`
  width: 12%;
  text-align: right;

  @media screen and (max-width: 1011px) {
    text-align: center;
    display: flex;
    justify-content: end;
    align-items: center;
  }
`;

const LabelEventBtn = styled.button`
  display: none;

  @media screen and (max-width: 1011px) {
    display: block;
    padding: 3px 12px;
    border: 1px solid #cccccc;
    width: 42px;
    height: 28px;
    border-radius: 10px;
    text-align: center;
    position: relative;
  }
`;

type MoreButtonBoolean = {
  index: number;
  moreBtnNumActive: any;
};

const LabelEventUl = styled.ul<MoreButtonBoolean>`
  display: ${(props) =>
    props.index === props.moreBtnNumActive ? "block" : "none"};

  @media screen and (max-width: 1011px) {
    display: block;
    padding: 3px 0px;
    border: 1px solid #cccccc;
    width: 158px;
    height: 68px;
    border-radius: 10px;
    text-align: center;
    position: relative;
    left: -130px;
    bottom: -8.5px;
    z-index: 2;
    background: white;
    padding-top: 8px;
    padding-bottom: 8px;
    display: ${(props) =>
      props.index === props.moreBtnNumActive ? "block" : "none"};
  }
`;

const LabelEventLi = styled.li`
  display: none;

  @media screen and (max-width: 1011px) {
    display: block;
    padding: 8px 16px 8px 8px;
    width: 134px;
    height: 18px;
    background: white;
    padding-top: 8px;
    padding-bottom: 8px;
    text-align: left;
  }
`;

const Edit = styled.button`
  background-color: white;
  border: none;

  @media screen and (max-width: 1011px) {
    display: none;
  }
`;

const Delete = styled.button`
  background-color: white;
  border: none;

  @media screen and (max-width: 1011px) {
    display: none;
  }
`;

=======
>>>>>>> Sprint5
type CreateLabelboolean = {
  active: boolean;
};

const CreateLable = styled.div<CreateLabelboolean>`
  display: ${(props) => (props.active ? "block" : "none")};
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

const CreateLableTitle = styled.div`
  margin-bottom: 8px;
`;

type CreateLableTitleBtnText = {
  CreateLableTitleBtnText: string;
};

const CreateLableTitleBtn = styled.button<CreateLableTitleBtnText>`
  background-color: ${(props) => props.color};
  color: ${(props) => props.CreateLableTitleBtnText};
  border: 1px solid rgba(0, 0, 0, 0.25);
  padding: 0px 10px;
  border-radius: 50px;
  width: 18%;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

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
  border-radius: 5px;
  width: 100%;
  height: 30px;
  background-color: #f6f8fa;

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
  border-radius: 5px;
  width: 100%;
  height: 30px;
  background-color: #f6f8fa;

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
  border-radius: 5px;
  width: 104px;
  height: 30px;
  background-color: #f6f8fa;

  &:focus {
    border: 1px solid #54aeff;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    margin-bottom: 8px;
  }
`;

type selectColorMenuActive = {
  selectColorMenuActive: boolean;
};

const ColorList = styled.ul<selectColorMenuActive>`
  display: ${(props) => (props.selectColorMenuActive ? "block" : "none")};
  width: 240px;
  padding: 8px 8px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  background-color: white;
  height: auto;
  border-radius: 10px;
  position: absolute;
  left: 28px;
  top: 60px;
`;

const ColorListP = styled.p`
  margin-top: 0;
  margin-bottom: 8px;
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
  border-radius: 5px;
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
  border-radius: 5px;
  background-color: transparent;
  text-align: center;
  margin-right: 8px;
  padding: 5px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: black;
  @media screen and (max-width: 767px) {
    order: 2;
    margin-left: 8px;
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
  border-radius: 5px;
  background-color: ${(props) => (props.CreateActive ? "#94d3a2" : "#2da44e")};
  text-align: center;
  color: white;
  font-size: 14px;
`;

const Loading = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

let colorListArray: any = [
  "#B60205",
  "#D93F0B",
  "#FBCA04",
  "#0E8A16",
  "#006B75",
  "#1D76DB",
  "#0052CC",
  "#5319E7",
  "#E99695",
  "#F9D0C4",
  "#FEF2C0",
  "#C2E0C6",
  "#BFDADC",
  "#C5DEF5",
  "#BFD4F2",
  "#D4C5F9",
];

function LabelManagement() {
  const [labels, setLablels] = useState<any>([]);
  const [active, setActive] = useState(false);
  const [sortActive, setSortActive] = useState(false);
  const [createActive, setCreateActive] = useState(true);
  const [moreBtnNumActive, setMoreBtnNumActive] = useState(-1);
  const Description = useRef<HTMLInputElement | null>(null);
  const SeleceColor = useRef<HTMLInputElement | null>(null);
  const [inputName, setInputName]: any = useState("Label Preview");
  const [newLabelsSelectColor, setNewLabelsSelectColor]: any =
    useState("#FFFFFF");
  const [updateLabelsSelectColor, setUpdateLabelsSelectColor]: any =
    useState("");
  const [selectColorMenuActive, setSelectColorMenuActive]: any =
    useState(false);
  const [colorMathFloorNum, setColorMathFloorNum]: any = useState(0);
  const [LabelBtnColor, setLabelBtnColor]: any = useState();

  const [LabelBtnColorNum, setLabelBtnColorNum] = useState(-1);
  const [errorColorValue, setErrorColorValue] = useState(false);
  const [labelsDataTotal, setLabelsDataTotal] = useState();
  const [lightOrDarkCreateText, setLightOrCreateDark] = useState("black");
  const [textLightOrDark, setTextLightOrDark] = useState("black");

  const [labelTextLightOrDark, serLabelTextLightOrDark] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const LabelsData: any = useSelector((state) => state);

  async function getLabels() {
    setLoading(true);
    const data = await api.getLabels();
    dispatch({ type: "SetLabelData", payload: data });
    setLoading(false);
  }

  useEffect(() => {
    getLabels();
  }, []);

  function lightOrDark(SelectColor: string) {
    if (SelectColor.includes("#")) {
      const r1 = parseInt(SelectColor.substring(1).slice(0, 1), 16);
      const r2 = parseInt(SelectColor.substring(1).slice(1, 2), 16);
      const g1 = parseInt(SelectColor.substring(1).slice(2, 3), 16);
      const g2 = parseInt(SelectColor.substring(1).slice(3, 4), 16);
      const b1 = parseInt(SelectColor.substring(1).slice(4, 5), 16);
      const b2 = parseInt(SelectColor.substring(1).slice(5, 6), 16);
      const hsp = r1 + r2 + g1 + g2 + b1 + b2;
      if (hsp > 45) {
        setLightOrCreateDark("black");
        setTextLightOrDark("black");
        serLabelTextLightOrDark("black");
      } else {
        setLightOrCreateDark("white");
        setTextLightOrDark("white");
        serLabelTextLightOrDark("white");
      }
      console.log(hsp, r1, r2, g1, g2, b1, b2);
    } else {
      const r1 = parseInt(SelectColor.slice(0, 1), 16);
      const r2 = parseInt(SelectColor.slice(1, 2), 16);
      const g1 = parseInt(SelectColor.slice(2, 3), 16);
      const g2 = parseInt(SelectColor.slice(3, 4), 16);
      const b1 = parseInt(SelectColor.slice(4, 5), 16);
      const b2 = parseInt(SelectColor.slice(5, 6), 16);
      const hsp = r1 + r2 + g1 + g2 + b1 + b2;
      if (hsp > 45) {
        setLightOrCreateDark("black");
        setTextLightOrDark("black");
        serLabelTextLightOrDark("black");
      } else {
        setLightOrCreateDark("white");
        setTextLightOrDark("white");
        serLabelTextLightOrDark("white");
      }
    }
  }

  useEffect(() => {
    async function getLabels() {
      const data = await api.getLabels();
      setLablels(data);
      setLabelsDataTotal(data.length);
      if (LabelsData.labelReducer.length !== 1) {
        setLablels(LabelsData.labelReducer);
        setLabelsDataTotal(LabelsData.labelReducer.length);
      } else if (
        LabelsData.labelReducer.length === 1 &&
        LabelsData.labelReducer[0].name === undefined
      ) {
        setLablels(data);
        setLabelsDataTotal(data.length);
      } else if (
        LabelsData.labelReducer.length === 1 &&
        LabelsData.labelReducer[0].name !== undefined
      ) {
        setLablels(data);
        setLabelsDataTotal(data.length);
      }
    }
    getLabels();
  }, [LabelsData.labelReducer]);

  if (labels === undefined || labels?.message === "Bad credentials") {
    window.location.assign("/");
    localStorage.clear();
  }

  function showSortList() {
    if (sortActive === false) {
      setSortActive(true);
    } else {
      setSortActive(false);
    }
  }

  function CloseColorListOrMoreBtn() {
    setSelectColorMenuActive(false);
    setMoreBtnNumActive(-1);
  }
  function ColorListTotal() {
    return colorListArray.map((item: string, index: number) => {
      return (
        <ColorBtn
          key={index}
          color={item}
          onClick={() => {
            setNewLabelsSelectColor({ item }.item);
            setLabelBtnColorNum(index);
            if (selectColorMenuActive === true) {
              setSelectColorMenuActive(false);
            } else {
              setSelectColorMenuActive(true);
            }
          }}
        />
      );
    });
  }

  function getColor() {
    setSelectColorMenuActive(false);
    let MathFloorColorNum;
    MathFloorColorNum = Math.floor(Math.random() * colorListArray.length);
    setColorMathFloorNum(MathFloorColorNum);
    setUpdateLabelsSelectColor(colorListArray[colorMathFloorNum]);
    setNewLabelsSelectColor(colorListArray[colorMathFloorNum]);
    lightOrDark(colorListArray[colorMathFloorNum]);
  }

  function PostLabelName(e: any) {
    if (e.target.value !== undefined) {
      setInputName(e.target.value);
      setCreateActive(false);
    } else return;
  }

  function PostLabelColor(e: any) {
    setSelectColorMenuActive(false);
    setNewLabelsSelectColor(e.target.value);
    if (e.target.value.length !== 7) {
      setErrorColorValue(true);
    } else {
      setErrorColorValue(false);
      setNewLabelsSelectColor(e.target.value);
      setLabelBtnColor(e.target.value);
      lightOrDark(e.target.value);
    }
  }

  let jwtName = JSON.parse(window.localStorage.getItem("userName") as string);
  let jwtRepo = JSON.parse(
    window.localStorage.getItem("userChooseRepo") as string
  );

  async function setLabels() {
    setLoading(true);
    const data = await api
      .setLabels({
        owner: { jwtName },
        repo: { jwtRepo },
        name: inputName,
        description: Description.current?.value,
        color: newLabelsSelectColor.substring(1),
      })
      .then((Labeldata) => {
        dispatch({
          type: "CreateLabels",
          payload: { Labeldata },
        });
      });
    setLoading(false);
  }

  if (loading) {
    return (
      <Container>
        <Loading src={LoadingImg} alt="LoadingImg" />
      </Container>
    );
  }

  return (
    <Container>
      <Menu
        onMouseDown={() => {
          CloseColorListOrMoreBtn();
        }}
      >
        <div>
          <MenuLeftUl>
            <MenuBtn>
              <Labels>
                <LabelsImg src={LabelsImage} alt="" />
                Labels
              </Labels>
              <Milestones>
                <LabelsImg src={Milestone} alt="" />
                Milestones
              </Milestones>
            </MenuBtn>
            <Search>
              <SearchInput placeholder="Search all labels" />
            </Search>
          </MenuLeftUl>
        </div>
        <div>
          <CreateLabel onClick={() => setActive(true)}>New label</CreateLabel>
        </div>
      </Menu>
      <CreateLable active={active}>
        <CreateLableTitle>
          <CreateLableTitleBtn
            color={newLabelsSelectColor}
            CreateLableTitleBtnText={lightOrDarkCreateText}
          >
            {inputName}
          </CreateLableTitleBtn>
        </CreateLableTitle>
        <CreateInformation>
          <CreateInformationLeft>
            <CreateInformationInputUl>
              <CreateInformationInputText>
                Label name
              </CreateInformationInputText>
              <CreateInformationInput>
                <CreateInformationInputName
                  type="text"
                  placeholder="Label name"
                  onChange={(e) => PostLabelName(e)}
                />
              </CreateInformationInput>
            </CreateInformationInputUl>
            <CreateInformationInputUl>
              <CreateInformationInputText>
                Description
              </CreateInformationInputText>
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
                    setSelectColorMenuActive(true);
                  }}
                />
                <CreateInformationChangeColor
                  color={newLabelsSelectColor}
                  onClick={() => {
                    getColor();
                    lightOrDark(newLabelsSelectColor);
                  }}
                />
              </CreateInformationInputUl>
              <CreateInformationInputColor
                type="text"
                pattern="#?([a-fA-F0-9]{6})"
                maxLength={7}
                value={newLabelsSelectColor}
                ref={SeleceColor}
                onClick={() => {
                  setSelectColorMenuActive(true);
                }}
                errorColorValue={errorColorValue}
                onChange={(e) => {
                  PostLabelColor(e);
                }}
              />
              <ColorList selectColorMenuActive={selectColorMenuActive}>
                <ColorListP>Choose from default colors:</ColorListP>
                <li>{ColorListTotal()}</li>
              </ColorList>
            </CreateInformationInputUlTotal>
          </CreateInformationLeft>
          <CreateInformationRight>
            <CreateCancel onClick={() => setActive(false)}>Cancel</CreateCancel>
            <CreateCreateLabel
              CreateActive={createActive}
              disabled={createActive}
              onClick={() => {
                setLabels();
                setActive(false);
              }}
            >
              Create label
            </CreateCreateLabel>
          </CreateInformationRight>
        </CreateInformation>
      </CreateLable>
      <ContainerLabelList>
        <LableListTitleTable>
          <LableListTitle>
            <td>{labelsDataTotal} labesls</td>
            <LabelTitleEvent>
              <LabelTitleEventBtn onClick={() => showSortList()}>
                Sort
                <ChevronDownIcon size={16} />
              </LabelTitleEventBtn>
              <LabelTitleEventUl sortActive={sortActive}>
                <LabelTitleEventLiTitle>Sort</LabelTitleEventLiTitle>
                <LabelTitleEventLiTitleDefault>
                  <ChevronDownIcon size={16} />
                  Alphabetically
                </LabelTitleEventLiTitleDefault>
                <LabelTitleEventLi>Reverse alphabetically</LabelTitleEventLi>
                <LabelTitleEventLi>Most issues</LabelTitleEventLi>
                <LabelTitleEventLi>Fewest issues</LabelTitleEventLi>
              </LabelTitleEventUl>
            </LabelTitleEvent>
          </LableListTitle>
        </LableListTitleTable>
        <LableList>
          {labels.map((item: any, index: number) => {
            return (
              <EditLabel
                index={index}
                labels={labels}
                setLablels={setLablels}
                moreBtnNumActive={moreBtnNumActive}
                setMoreBtnNumActive={setMoreBtnNumActive}
                SeleceColor={SeleceColor}
                setNewLabelsSelectColor={setNewLabelsSelectColor}
                selectColorMenuActive={selectColorMenuActive}
                setSelectColorMenuActive={setSelectColorMenuActive}
                colorMathFloorNum={colorMathFloorNum}
                setColorMathFloorNum={setColorMathFloorNum}
                LabelBtnColorNum={LabelBtnColorNum}
                setLabelBtnColorNum={setLabelBtnColorNum}
                errorColorValue={errorColorValue}
                setErrorColorValue={setErrorColorValue}
                setLabelsDataTotal={setLabelsDataTotal}
                setTextLightOrDark={setTextLightOrDark}
                serLabelTextLightOrDark={serLabelTextLightOrDark}
                loading={loading}
                setLoading={setLoading}
              />
            );
          })}
        </LableList>
      </ContainerLabelList>
    </Container>
  );
}

export default LabelManagement;
