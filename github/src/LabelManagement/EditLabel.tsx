import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import api from "../api";

import ChangeColorImage from "../../src/img/change.png";
import LoadingImg from "../../src/img/loading.gif";

const LableList = styled.table`
  width: 100%;
`;

const Container = styled.div`
  margin-top: 24px;
  padding: 0px 32px;
`;

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

const LabelStyle = styled.td`
  width: 18%;
  @media screen and (max-width: 767px) {
    width: 40%;
  }
`;

type LabelBtnColor = {
  LabelBtnBgColor: string;
  UpdateChangeColor: string;
  index: number;
  LabelBtnColorNum: number;
  updateChangeColorText: string;
  labelBtnColorText: string;
};

const LabelBtn: any = styled.button<LabelBtnColor>`
  background-color: #${(props) => (props.UpdateChangeColor === "" ? props.LabelBtnBgColor : props.UpdateChangeColor)};
  color: ${(props) =>
    props.LabelBtnColorNum === props.index
      ? props.updateChangeColorText
      : props.labelBtnColorText};
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
    justify-content: center;
    align-items: center;
    padding: 3px 12px;
    border: 1px solid #cccccc;
    width: 42px;
    height: 28px;
    border-radius: 5px;
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
    border-radius: 5px;
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
    height: 34px;
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
  margin-left: 16px;
  @media screen and (max-width: 1011px) {
    display: none;
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

const UpdateSaveBtn = styled.button`
  width: 107.5px;
  height: 30px;
  pad: 5px 16px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  background-color: #2da44e;
  text-align: center;
  color: white;
  font-size: 14px;
`;

type UpdateLabelboolean = {
  updateActive: number;
  updateId: number;
};

const Update = styled.div<UpdateLabelboolean>`
  display: ${(props) =>
    props.updateActive === props.updateId ? "block" : "none"};
`;

const UpdateInformation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: self-end;
  padding: 0px 16px;
  @media screen and (max-width: 767px) {
    display: block;
    padding: 0px 16px;
  }
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

function LabelEditManagement({
  labels,
  setLablels,
  moreBtnNumActive,
  setMoreBtnNumActive,
  SeleceColor,
  setNewLabelsSelectColor,
  selectColorMenuActive,
  setSelectColorMenuActive,
  colorMathFloorNum,
  setColorMathFloorNum,
  index,
  LabelBtnColorNum,
  setLabelBtnColorNum,
  errorColorValue,
  setErrorColorValue,
  setLabelsDataTotal,
  setTextLightOrDark,
  serLabelTextLightOrDark,
  loading,
  setLoading,
}: {
  labels: any;
  setLablels: React.Dispatch<any>;
  moreBtnNumActive: number;
  setMoreBtnNumActive: React.Dispatch<any>;
  SeleceColor: React.MutableRefObject<HTMLInputElement | null>;
  setNewLabelsSelectColor: React.Dispatch<React.SetStateAction<string>>;
  selectColorMenuActive: boolean;
  setSelectColorMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
  colorMathFloorNum: number;
  setColorMathFloorNum: React.Dispatch<React.SetStateAction<number>>;
  LabelBtnColorNum: number;
  setLabelBtnColorNum: React.Dispatch<React.SetStateAction<number>>;
  errorColorValue: boolean;
  setErrorColorValue: React.Dispatch<React.SetStateAction<boolean>>;
  setLabelsDataTotal: React.Dispatch<React.SetStateAction<undefined>>;
  setTextLightOrDark: React.Dispatch<React.SetStateAction<string>>;
  serLabelTextLightOrDark: React.Dispatch<React.SetStateAction<string>>;
  index: number;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [updateActive, setUpdateActive] = useState(-1);
  const [closeLabelTr, setCloseLabelTr]: any = useState(0);

  const [deleteLabels, setDeleteLabels]: any = useState();
  const [updateLabelName, setUpdateLabelName]: any = useState(
    labels[index].name
  );
  const [updateUpdateDescription, setupdateUpdateDescription]: any = useState();
  const [updateChangeColorText, setUpdateChangeColorText]: any = useState();
  const [labelBtnColorText, setLabelBtnColorText]: any = useState();

  const [ColorInputDefault, setColorInputDefault]: any = useState(
    labels[index].color
  );
  const [UpdateChangeColor, setUpdateChangeColor]: any = useState("");

  const dispatch = useDispatch();
  const LabelsData: any = useSelector((state) => state);

  async function getLabels() {
    const data = await api.getLabels();
    dispatch({ type: "SetLabelData", payload: data });
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
        setTextLightOrDark("black");
        setLabelBtnColorText("black");
        setUpdateChangeColorText("black");
      } else {
        setTextLightOrDark("white");
        setLabelBtnColorText("white");
        setUpdateChangeColorText("white");
      }
    } else {
      const r1 = parseInt(SelectColor.slice(0, 1), 16);
      const r2 = parseInt(SelectColor.slice(1, 2), 16);
      const g1 = parseInt(SelectColor.slice(2, 3), 16);
      const g2 = parseInt(SelectColor.slice(3, 4), 16);
      const b1 = parseInt(SelectColor.slice(4, 5), 16);
      const b2 = parseInt(SelectColor.slice(5, 6), 16);
      const hsp = r1 + r2 + g1 + g2 + b1 + b2;
      if (hsp > 45) {
        setTextLightOrDark("black");
        serLabelTextLightOrDark("black");
        setLabelBtnColorText("black");
        setUpdateChangeColorText("black");
      } else {
        setTextLightOrDark("white");
        serLabelTextLightOrDark("white");
        setLabelBtnColorText("white");
        setUpdateChangeColorText("white");
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

  function ColorListTotal() {
    return colorListArray.map((item: string, index: number) => {
      return (
        <ColorBtn
          key={index}
          color={item}
          onClick={() => {
            setNewLabelsSelectColor({ item }.item);
            setUpdateChangeColor({ item }.item.substring(1));
            setColorInputDefault({ item }.item.substring(1));
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

  function getUpdateColor() {
    setSelectColorMenuActive(false);
    let MathFloorColorNum;
    MathFloorColorNum = Math.floor(Math.random() * colorListArray.length);
    setColorMathFloorNum(MathFloorColorNum);
    setUpdateChangeColor(colorListArray[colorMathFloorNum].substring(1));
    setColorInputDefault(colorListArray[colorMathFloorNum].substring(1));
  }

  function UpdateLabelName(e: any) {
    if (e.target.value !== undefined) {
      setUpdateLabelName(e.target.value);
    } else return;
  }

  function UpdateDescriptionInput(e: any) {
    if (e.target.value !== undefined) {
      setupdateUpdateDescription(e.target.value);
    } else return;
  }

  function PostLabelColor(e: any) {
    setSelectColorMenuActive(false);

    if (e.target.value.length !== 7) {
      setErrorColorValue(true);
    } else {
      setErrorColorValue(false);
      lightOrDark(e.target.value);
    }
    setUpdateChangeColor(e.target.value.split("#")[1]);
    setColorInputDefault(e.target.value.split("#")[1]);
  }

  let jwtName = JSON.parse(window.localStorage.getItem("userName") as string);
  let jwtRepo = JSON.parse(
    window.localStorage.getItem("userChooseRepo") as string
  );

  async function deleteLabel(index: number) {
    setLoading(true);
    const data = await api
      .deleteLabel({
        owner: { jwtName },
        repo: { jwtRepo },
        name: labels[index].name,
      })
      .then((Labeldata) => {
        dispatch({
          type: "DeleteLabels",
          payload: { Labeldata },
        });
      });
    setLoading(false);
  }

  async function updataLabels(index: number) {
    setLoading(true);
    const data = await api
      .updataLabels({
        owner: { jwtName },
        repo: { jwtRepo },
        oldName: labels[index].name,
        name: updateLabelName,
        description: updateUpdateDescription,
        color: UpdateChangeColor,
      })
      .then((Labeldata) => {
        dispatch({
          type: "UpdateLabels",
          payload: { Labeldata },
        });
      });
    setCloseLabelTr(index);
    setUpdateActive(-1);
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
    <>
      <Label key={index} CloseLabelTr={index} index={index}>
        <LabelStyle>
          <LabelBtn
            key={index}
            LabelBtnBgColor={labels[index].color}
            UpdateChangeColor={UpdateChangeColor}
            index={index}
            LabelBtnColorNum={LabelBtnColorNum}
            updateChangeColorText={updateChangeColorText}
            labelBtnColorText={labelBtnColorText}
          >
            {updateLabelName}
          </LabelBtn>
        </LabelStyle>
        <LabelText>{labels[index].description}</LabelText>
        <LabelEvent>
          <LabelEventBtn
            onClick={() => {
              if (moreBtnNumActive === index) {
                setMoreBtnNumActive(-1);
              } else {
                setMoreBtnNumActive(index);
              }
            }}
          >
            ...
            <LabelEventUl index={index} moreBtnNumActive={moreBtnNumActive}>
              <LabelEventLi
                onClick={() => {
                  setLabelBtnColorNum(index);
                  setMoreBtnNumActive(-1);
                  setUpdateActive(index);
                  setCloseLabelTr(-1);
                  setUpdateLabelName(labels[index].name);
                  setupdateUpdateDescription(labels[index].description);
                  setNewLabelsSelectColor(`#` + labels[index].color);
                }}
              >
                Edit
              </LabelEventLi>
              <LabelEventLi
                onClick={() => {
                  setDeleteLabels(labels[index].name);
                  deleteLabel(index);
                }}
              >
                Delete
              </LabelEventLi>
            </LabelEventUl>
          </LabelEventBtn>
          <Edit
            onClick={() => {
              setUpdateActive(index);
              setUpdateLabelName(labels[index].name);
              setupdateUpdateDescription(labels[index].description);
            }}
          >
            Edit
          </Edit>
          <Delete
            onClick={() => {
              setDeleteLabels(labels[index].name);
              deleteLabel(index);
            }}
          >
            Delete
          </Delete>
        </LabelEvent>
      </Label>
      <Update updateActive={updateActive} updateId={index}>
        <UpdateInformation>
          <CreateInformationLeft>
            <CreateInformationInputUl>
              <CreateInformationInputText>
                Label name
              </CreateInformationInputText>
              <CreateInformationInput>
                <CreateInformationInputName
                  type="text"
                  defaultValue={updateLabelName}
                  onChange={(e) => UpdateLabelName(e)}
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
                  defaultValue={labels[index].description}
                  onChange={(e) => {
                    UpdateDescriptionInput(e);
                  }}
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
                  color={`#` + UpdateChangeColor}
                  onClick={() => {
                    getUpdateColor();
                  }}
                />
              </CreateInformationInputUl>
              <CreateInformationInputColor
                type="text"
                value={`#${ColorInputDefault}`}
                pattern="#?([a-fA-F0-9]{6})"
                maxLength={7}
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
            <CreateCancel
              onClick={() => {
                setUpdateActive(index);
                setCloseLabelTr(index);
                setUpdateActive(-1);
                setMoreBtnNumActive(-1);
              }}
            >
              Cancel
            </CreateCancel>
            <UpdateSaveBtn
              onClick={() => {
                updataLabels(index);
              }}
            >
              Save Changes
            </UpdateSaveBtn>
          </CreateInformationRight>
        </UpdateInformation>
      </Update>
    </>
  );
}

export default LabelEditManagement;
