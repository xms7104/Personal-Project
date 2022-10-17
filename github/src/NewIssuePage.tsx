import React from "react";

import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GearIcon } from "@primer/octicons-react";

import CreateNewIssue from "./CreateNewIssue";
import SharedListData from "./SharedListData";
import api from "./api";

function NewIssuePage() {
  const [preview, setPreview] = useState(false);
  const [listClose, setListClose] = useState(false);
  const [itemList, setItemList] = useState(false);
  const [targetText, setTargetText]: any = useState("");
  const [issueTitle, setIssueTitle]: any = useState("");
  const [issueContainer, setIssueContainer]: any = useState("Leave a comment");
  const [markDownBtn, setmarkDownBtn]: any = useState(true);

  const [renderAssigneeData, setRenderAssigneeData]: any = useState([]);
  const [renderLabelData, setRenderLabelData]: any = useState([]);
  const [renderIssueData, setRenderIssueData]: any = useState([]);

  const [assigneeSelectData, setAssigneeSelectData]: any = useState([]);
  const [labelSelectData, setLabelSelectData]: any = useState([]);

  const targetAssigneeSpan = useRef<HTMLParagraphElement | null>(null);
  const targetLabelSpan = useRef<HTMLParagraphElement | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    async function getAssigneeList() {
      if (targetText === targetAssigneeSpan.current?.outerText) {
        const data = await api.getIssuesAssignee();
        setRenderAssigneeData(data);
      } else if (targetText === targetLabelSpan.current?.outerText) {
        const data = await api.getLabels();
        setRenderLabelData(data);
      } else if (targetText === "Issues") {
        const data = await api.getListIssuesState(1);
        setRenderIssueData(data);
      }
    }
    getAssigneeList();
  }, [targetText]);

  function AssigneeSelect() {
    if (assigneeSelectData.length !== 0) {
      return renderAssigneeData.map(
        (_item: any, assigneeSelectIndex: number) => {
          return (
            <button
              className={`${
                assigneeSelectData.includes(
                  renderAssigneeData[assigneeSelectIndex].login
                )
                  ? "flex"
                  : "hidden"
              } justify-start items-center mt-2`}
            >
              <img
                src={`${renderAssigneeData[assigneeSelectIndex].avatar_url}`}
                alt=""
                className="md:w-[5%] rounded-full mr-1 lg:w-[9%] xl:w-[9%]"
              />
              <p className="text-xs font-semibold">
                {renderAssigneeData[assigneeSelectIndex].login}
              </p>
            </button>
          );
        }
      );
    } else if (assigneeSelectData.length === 0) {
      return (
        <p className="text-xs flex justify-start items-center">
          No one—<p className="hover:text-[#0969da]">assign yourself</p>
        </p>
      );
    }
  }

  function LabelseSelect() {
    if (labelSelectData.length !== 0) {
      return renderLabelData.map((_item: any, labelSelectIndex: number) => {
        return (
          <button
            style={{
              backgroundColor: `#${renderLabelData[labelSelectIndex].color}`,
            }}
            className={`${
              labelSelectData.includes(renderLabelData[labelSelectIndex].name)
                ? "flex"
                : "hidden"
            } text-xs font-semibold justify-center items-center rounded-xl border-[1px] border-solid border-gray-50 mr-1 mb-1 px-[7px] h-[20px]`}
          >
            {renderLabelData[labelSelectIndex].name}
          </button>
        );
      });
    } else if (labelSelectData.length === 0) {
      return <p className="text-xs justify-start items-center">Noneyet</p>;
    }
  }

  async function setIssue() {
    const data = await api.setIssue({
      owner: "Xie-MS",
      repo: "Personal-Project",
      title: issueTitle,
      body: issueContainer,
      labels: labelSelectData,
      assignees: assigneeSelectData,
    });

    window.location.assign(`/IssuePage`);
  }

  return (
    <div className="md:block mt-6 px-4 relative lg:flex justify-evenly items-start lg:px-6 xl:flex xl:px-6">
      <CreateNewIssue
        preview={preview}
        setPreview={setPreview}
        issueContainer={issueContainer}
        setIssueContainer={setIssueContainer}
        issueTitle={issueTitle}
        setIssueTitle={setIssueTitle}
        setIssue={setIssue}
        markDownBtn={markDownBtn}
        setmarkDownBtn={setmarkDownBtn}
        renderAssigneeData={renderAssigneeData}
        renderLabelData={renderLabelData}
        setTargetText={setTargetText}
        renderIssueData={renderIssueData}
      />
      <div className="md:w-full lg:w-[240px] xl:w-[256px]">
        <div className="md:pt-4 lg:pt-0 xl:pt-0">
          <div className=" xl:flex justify-between items-center mb-[10px] relative">
            <p
              className="py-1 text-xs mb-1 hover:text-[#0969da]"
              ref={targetAssigneeSpan}
            >
              Assignees
            </p>
            <div
              className="pt-4 cursor-pointer xl:mt-[2px] xl:pt-0 lg:mt-[2px] lg:pt-0"
              onClick={() => {
                setItemList(true);
                setListClose(true);
                setTargetText(targetAssigneeSpan.current?.outerText);
              }}
            >
              <GearIcon size={16} />
            </div>
          </div>
          {AssigneeSelect()}
        </div>
        <div
          className={`${
            itemList ? "block" : "hidden"
          } md:bg-black md:opacity-60 top-0 bottom-0 left-0 right-0 fixed md:z-10 xl:z-0 lg:z-0`}
          onClick={() => {
            setListClose(false);
            setItemList(false);
          }}
        />
        <SharedListData
          setListClose={setListClose}
          itemList={itemList}
          setItemList={setItemList}
          targetText={targetText}
          setTargetText={setTargetText}
          targetAssigneeSpan={targetAssigneeSpan}
          targetLabelSpan={targetLabelSpan}
          renderAssigneeData={renderAssigneeData}
          renderLabelData={renderLabelData}
          assigneeSelectData={assigneeSelectData}
          setAssigneeSelectData={setAssigneeSelectData}
          labelSelectData={labelSelectData}
          setLabelSelectData={setLabelSelectData}
        />
        <div>
          <div className="mt-4 pt-4 border-t-[1px] border-solid border-gray-200 flex justify-between items-center relative">
            <p
              className="py-1 text-xs mb-1 hover:text-[#0969da]"
              ref={targetLabelSpan}
            >
              Labels
            </p>
            <div
              className="pt-4 cursor-pointer xl:mt-[2px] xl:pt-0 lg:mt-[2px] lg:pt-0"
              onClick={() => {
                setListClose(true);
                setItemList(true);
                setTargetText(targetLabelSpan.current?.outerText);
              }}
            >
              <GearIcon size={16} />
            </div>
          </div>
          <div className="lg:flex lg:justify-start lg:items-center xl:flex xl:justify-start xl:items-center">
            {LabelseSelect()}
          </div>
        </div>

        <div>
          <div className="mt-4 pt-4 border-t-[1px] border-solid border-gray-200 flex justify-between items-center">
            <p className="py-1 text-xs mb-1 hover:text-[#0969da]">Projects</p>
            <div>
              <GearIcon size={16} />
            </div>
          </div>
          <p className="text-xs flex justify-start items-center">Noneyet</p>
        </div>
        <div>
          <div className="mt-4 pt-4 border-t-[1px] border-solid border-gray-200 flex justify-between items-center">
            <p className="py-1 text-xs mb-1 hover:text-[#0969da]">Milestone</p>
            <div>
              <GearIcon size={16} />
            </div>
          </div>
          <p className="text-xs flex justify-start items-center">Noneyet</p>
        </div>
        <div className="mt-4 pt-4 border-t-[1px] border-solid border-gray-200 block justify-between items-center">
          <p className="py-1 text-xs mb-1">Development</p>
          <p className="text-xs flex justify-start items-center">
            shows branches and pull requests linked to this issue.
          </p>
        </div>
        <div className="mt-4 pt-4 border-t-[1px] border-solid border-gray-200 block justify-between items-center">
          <p className="py-1 text-xs mb-1">Helpful resources</p>
          <p className="text-xs flex justify-start items-center text-[#0969da]">
            GitHub Community Guidelines
          </p>
        </div>
        <div className="mt-4 pt-4 border-t-[1px] border-solid border-gray-200 block justify-between items-center"></div>
      </div>

      <div className="md:w-full mt-4 pt-4 md:block lg:hidden xl:hidden">
        <button
          className={`${
            issueTitle !== "" ? "bg-[#2DA44E]" : "bg-[#94d3a2]"
          } mt-6 px-4 py-[5px] border-[1px] border-solid border-[rgba(27,31,36,0.15)] w-full rounded-md lg:mt-0 xl:mt-0`}
          onClick={() => {
            setIssue();
          }}
        >
          <p className="text-sm text-white">Submit new issue</p>
        </button>
      </div>
    </div>
  );
}

export default NewIssuePage;
