import React from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";

import { useRef, useState } from "react";

import {
  BoldIcon,
  CheckCircleIcon,
  CheckIcon,
  ChevronDownIcon,
  CodeIcon,
  CrossReferenceIcon,
  FileMediaIcon,
  HeadingIcon,
  InfoIcon,
  IssueOpenedIcon,
  IssueReopenedIcon,
  ItalicIcon,
  LinkIcon,
  ListOrderedIcon,
  ListUnorderedIcon,
  MarkdownIcon,
  MentionIcon,
  QuoteIcon,
  ReplyIcon,
  SkipIcon,
  TasklistIcon,
  TriangleDownIcon,
  TypographyIcon,
} from "@primer/octicons-react";

import api from "../api";

function CreateComment({
  preview,
  setPreview,
  issueContainer,
  setIssueContainer,
  markDownBtn,
  setmarkDownBtn,
  renderAssigneeData,
  setTargetText,
  renderIssueData,
  issueDetailData,
  setCreateCommentRender,
  issueDetailState,
  setIssueDetailState,
  issueDetailStateReanson,
  setIssueDetailStateReanson,
  setLoading,
}: {
  preview: boolean;
  setPreview: React.Dispatch<React.SetStateAction<boolean>>;
  issueContainer: string;
  setIssueContainer: React.Dispatch<React.SetStateAction<string>>;
  markDownBtn: boolean;
  setmarkDownBtn: React.Dispatch<React.SetStateAction<boolean>>;
  renderAssigneeData: any;
  setTargetText: any;
  renderIssueData: any;
  issueDetailData: any;
  setCreateCommentRender: React.Dispatch<React.SetStateAction<boolean>>;
  issueDetailState: string;
  setIssueDetailState: React.Dispatch<React.SetStateAction<string>>;
  issueDetailStateReanson: string;
  setIssueDetailStateReanson: React.Dispatch<React.SetStateAction<string>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const Imgfile = useRef<HTMLInputElement | null | any>(null);
  const [imgURL, setImgURL]: any = useState("");
  const [tagsClose, setTagsClose]: any = useState(true);
  const [issueClose, setIssueClose]: any = useState(true);
  const [tagsName, setTagsName]: any = useState("");
  const [issueNum, setIssueNum]: any = useState(-1);
  const [closeIssue, setCloseIssue]: any = useState(false);
  const { IssueNum } = useParams();

  let jwtName = JSON.parse(window.localStorage.getItem("userName") as string);
  let jwtRepo = JSON.parse(
    window.localStorage.getItem("userChooseRepo") as string
  );
  let userImg = JSON.parse(window.localStorage.getItem("userImg") as string);

  async function CreateIssueComment() {
    setLoading(true);
    const data = await api.CreateComment(
      {
        owner: { jwtName },
        repo: { jwtRepo },
        body: issueContainer,
      },
      IssueNum
    );
    setCreateCommentRender((prev: boolean) => !prev);
    setIssueContainer("");
    setLoading(false);
  }

  async function UpdateUssueState() {
    const data = await api.UpdateIssue(
      {
        owner: { jwtName },
        repo: { jwtRepo },
        state: issueDetailState,
        state_reason: issueDetailStateReanson,
        issue_number: IssueNum,
      },
      IssueNum
    );
    setCreateCommentRender((prev: boolean) => !prev);
  }

  function PreviewText() {
    if (issueContainer === "" || issueContainer === "Leave a comment") {
      return <p className="text-sm">Nothing to preview</p>;
    } else if (
      issueContainer !== "" &&
      imgURL === "" &&
      tagsName === "" &&
      issueNum === -1
    ) {
      return (
        <ReactMarkdown
          children={issueContainer}
          components={{
            em: ({ node, ...props }) => (
              <i style={{ fontStyle: "italic" }} {...props} />
            ),
            strong: ({ node, ...props }) => (
              <b style={{ fontWeight: "bolder" }} {...props} />
            ),
            h1: ({ node, ...props }) => (
              <h1 style={{ fontSize: "1.75em" }} {...props} />
            ),
            h2: ({ node, ...props }) => (
              <h2 style={{ fontSize: "1.5em" }} {...props} />
            ),
            h3: ({ node, ...props }) => (
              <h3 style={{ fontSize: "1.25em" }} {...props} />
            ),
            ul: ({ node, ...props }) => (
              <ul
                style={{ listStyle: "disc", paddingLeft: "16px" }}
                {...props}
              />
            ),
            li: ({ node, ...props }) => <li {...props} />,
            ol: ({ node, ...props }) => (
              <ol
                style={{ listStyle: "auto", paddingLeft: "16px" }}
                {...props}
              />
            ),
            blockquote: ({ node, ...props }) => (
              <blockquote
                style={{
                  padding: "0px 14px",
                  borderLeft: "0.25em solid #d0d7de",
                }}
                {...props}
              />
            ),
            code: ({ node, ...props }) => (
              <code
                style={{
                  padding: "0.2em 0.4em",
                  margin: 0,
                  fontSize: "85%",
                  borderRadius: "6px",
                  background: "rgba(175,184,193,0.2)",
                }}
                {...props}
              />
            ),
            input: ({ node, ...props }) => (
              <input
                type="checkbox"
                style={{
                  margin: "0 0.2em 0.25em -1.6em",
                  verticalAlign: "middle",
                }}
                {...props}
              />
            ),
          }}
        />
      );
    } else if (
      issueContainer !== "" &&
      imgURL !== "" &&
      tagsName === "" &&
      issueNum === -1
    ) {
      return <img src={imgURL} alt="" />;
    } else if (
      issueContainer !== "" &&
      imgURL === "" &&
      tagsName !== "" &&
      issueNum === -1
    ) {
      return (
        <p className="font-semibold hover:decoration-1">
          {" "}
          <a href={`https://github.com/${tagsName}`} className="text-md">
            {issueContainer}
          </a>
        </p>
      );
    } else if (
      issueContainer !== "" &&
      issueNum !== -1 &&
      imgURL === "" &&
      tagsName === ""
    ) {
      return (
        <p className="text-[#0969da]">
          {" "}
          <a
            href={`https://github.com/Xie-Ms/Personal-Project/issues/${issueNum}`}
            className="text-md"
          >
            {issueContainer}
          </a>
        </p>
      );
    }
  }

  function TagAssigneeName() {
    if (issueContainer.includes("@") && tagsClose) {
      setTargetText("Assignees");
      return renderAssigneeData.map((_item: any, TagIndex: number) => {
        return (
          <li
            className="text-md w-[200px] h-[25px] flex justify-start items-center text-black hover:bg-[#0969da] hover:text-white cursor-pointer"
            onClick={() => {
              setIssueContainer("@" + renderAssigneeData[TagIndex].login + " ");
              setTagsName(renderAssigneeData[TagIndex].login);
              setTagsClose(false);
              setIssueNum(-1);
            }}
          >
            @{renderAssigneeData[TagIndex].login}
          </li>
        );
      });
    }
  }

  function TagIssue() {
    if (issueContainer.includes("#") && issueClose) {
      setTargetText("Issues");
      return renderIssueData
        .slice(0, 5)
        .map((_item: any, IssueIndex: number) => {
          return (
            <li
              className="text-md w-[200px] h-[25px] flex justify-start items-center text-black hover:bg-[#0969da] hover:text-white cursor-pointer"
              onClick={() => {
                setIssueContainer("#" + renderIssueData[IssueIndex].number);
                setIssueClose(false);
                setIssueNum(renderIssueData[IssueIndex].number);
              }}
            >
              <IssueOpenedIcon size={16} fill="green" className="mr-2 ml-2" />
              <p className="mr-2">#{renderIssueData[IssueIndex].number}</p>
              <p className="mr-2">@{renderIssueData[IssueIndex].title}</p>
            </li>
          );
        });
    }
  }

  return (
    <div className="w-full justify-start lg:relative flex items-start xl:flex relative mt-4">
      <div className="md:hidden lg:block w-[7.24%] xl:block">
        <img src={userImg} alt="" className="w-[70%] rounded-full sm:hidden" />
      </div>
      <div className="md:w-full lg:w-[88.7%] xl:w-[88.7%]">
        <div>
          <div className="md:h-auto md:border-[0px] lg:border-[1px] lg:border-solid lg:border-gray-200 lg:rounded-md lg:h-auto lg:mb-2 xl:border-[1px] xl:border-solid xl:border-gray-200 xl:rounded-md xl:h-auto xl:mb-2">
            <div className="block justify-start items-center w-full">
              <div className="md:w-full md:mt-0 md:mx-0 lg:mt-2 lg:mx-2 lg:flex lg:justify-between lg:items-end  xl:mt-2 xl:mx-2 xl:flex xl:justify-between xl:items-end">
                <div className="lg:flex lg:justify-between lg:items-end md:w-full xl:flex xl:justify-between xl:items-end ">
                  <button
                    className={`${
                      preview
                        ? "border-none bg-white"
                        : "border-gray-400 bg-slate-50"
                    } py-2 px-5 md:border-[1px] border-solid md:w-[50%] lg:w-auto lg:border-[1px] lg:border-b-[0px] lg:border-gray-200 lg:rounded-t-md xl:w-auto xl:border-[1px] xl:border-b-[0px] xl:border-gray-200 xl:rounded-t-md`}
                    onClick={() => {
                      setPreview(false);
                      setmarkDownBtn(true);
                    }}
                  >
                    <p className="lg:text-sm xl:text-sm">Write</p>
                  </button>
                  <button
                    className={`${
                      preview
                        ? "border-gray-200 border-t-[1px] border-r-[1px] border-l-[1px] border-b-[0px] bg-slate-50 rounded-t-md"
                        : "bg-white border-b-[1px] border-solid border-gray-200"
                    } py-2 px-5 md:border-t-[1px] md:border-r-[1px] md:border-b-[1px] border-solid border-gray-400 md:w-[50%] lg:w-auto xl:w-auto`}
                    onClick={() => {
                      setPreview(true);
                      setmarkDownBtn(false);
                    }}
                  >
                    <p className="lg:text-sm xl:text-sm">Preview</p>
                  </button>
                </div>
                <div className="md:hidden lg:w-[100%] xl:w-[100%]">
                  <hr className="md:hidden lg:block xl:block" />
                </div>
              </div>

              <div className="flex justify-between items-start pt-2 px-2 mb-2 lg:mb-0 xl:mb-0">
                <div
                  className={`${
                    markDownBtn ? "md:block" : "md:hidden"
                  } md:block lg:hidden xl:hidden`}
                >
                  <details>
                    <summary className="flex ml-[5px] mr-1 py-2 px-1">
                      <TypographyIcon size={16} />
                      <ChevronDownIcon size={16} />
                    </summary>
                    <button
                      className="ml-[5px] mr-1 py-2 px-1"
                      onClick={() => {
                        setIssueContainer("### " + issueContainer);
                        setIssueNum(-1);
                        setImgURL("");
                        setTagsName("");
                      }}
                    >
                      <HeadingIcon size={16} />
                    </button>
                    <button
                      className="ml-[5px] mr-1 py-2 px-1"
                      onClick={() => {
                        setIssueContainer("**" + issueContainer + "**");
                        setIssueNum(-1);
                        setImgURL("");
                        setTagsName("");
                      }}
                    >
                      <BoldIcon size={16} />
                    </button>
                    <button
                      className="ml-[5px] mr-1 py-2 px-1"
                      onClick={() => {
                        setIssueContainer("_" + issueContainer + "_");
                        setIssueNum(-1);
                        setImgURL("");
                        setTagsName("");
                      }}
                    >
                      <ItalicIcon size={16} />
                    </button>
                    <button
                      className="ml-[5px] mr-1 py-2 px-1"
                      onClick={() => {
                        setIssueContainer("- " + issueContainer);
                        setIssueNum(-1);
                        setImgURL("");
                        setTagsName("");
                      }}
                    >
                      <ListUnorderedIcon size={16} />
                    </button>
                    <button
                      className="ml-[5px] mr-1 py-2 px-1"
                      onClick={() => {
                        setIssueContainer("1. " + issueContainer);
                        setIssueNum(-1);
                        setImgURL("");
                        setTagsName("");
                      }}
                    >
                      <ListOrderedIcon size={16} />
                    </button>
                    <button className="ml-[5px] mr-1 py-2 px-1">
                      <TasklistIcon size={16} />
                    </button>
                  </details>
                </div>
                <div className="flex justify-between items-start">
                  <div className="md:hidden lg:flex xl:flex">
                    <button
                      className="ml-[5px] mr-1 py-2 px-1 lg:py-1 lg:px-1 lg:ml-[6px] lg:mx-1 xl:py-1 xl:px-1 xl:ml-[6px] xl:mx-1"
                      onClick={() => {
                        setIssueContainer("### " + issueContainer);
                        setIssueNum(-1);
                        setImgURL("");
                        setTagsName("");
                      }}
                    >
                      <HeadingIcon size={16} />
                    </button>
                    <button
                      className="ml-[5px] mr-1 py-2 px-1 lg:py-1 lg:px-1 lg:ml-[6px] lg:mx-1 xl:py-1 xl:px-1 xl:ml-[6px] xl:mx-1"
                      onClick={() => {
                        setIssueContainer("**" + issueContainer + "**");
                        setIssueNum(-1);
                        setImgURL("");
                        setTagsName("");
                      }}
                    >
                      <BoldIcon size={16} />
                    </button>
                    <button
                      className="ml-[5px] mr-1 py-2 px-1 lg:py-1 lg:px-1 lg:ml-[6px] lg:mx-1 xl:py-1 xl:px-1 xl:ml-[6px] xl:mx-1"
                      onClick={() => {
                        setIssueContainer("_" + issueContainer + "_");
                        setIssueNum(-1);
                        setImgURL("");
                        setTagsName("");
                      }}
                    >
                      <ItalicIcon size={16} />
                    </button>
                  </div>
                  <div className="md:hidden lg:flex">
                    <button
                      className="ml-[5px] mr-1 py-2 px-1 lg:py-1 lg:px-1 lg:ml-[6px] lg:mx-1 xl:py-1 xl:px-1 xl:ml-[6px] xl:mx-1"
                      onClick={() => {
                        setIssueContainer("- " + issueContainer);
                        setIssueNum(-1);
                        setImgURL("");
                        setTagsName("");
                      }}
                    >
                      <ListUnorderedIcon size={16} />
                    </button>
                    <button
                      className="ml-[5px] mr-1 py-2 px-1 lg:py-1 lg:px-1 lg:ml-[6px] lg:mx-1 xl:py-1 xl:px-1 xl:ml-[6px] xl:mx-1"
                      onClick={() => {
                        setIssueContainer("1. " + issueContainer);
                        setIssueNum(-1);
                        setImgURL("");
                        setTagsName("");
                      }}
                    >
                      <ListOrderedIcon size={16} />
                    </button>
                    <button className="ml-[5px] mr-1 py-2 px-1 lg:py-1 lg:px-1 lg:ml-[6px] lg:mx-1 xl:py-1 xl:px-1 xl:ml-[6px] xl:mx-1">
                      <TasklistIcon size={16} />
                    </button>
                  </div>
                  <div>
                    <div className={`${markDownBtn ? "md:flex" : "md:hidden"}`}>
                      <button
                        className="ml-[5px] py-2 px-2 lg:py-1 lg:px-1 lg:ml-[6px] lg:mx-1 xl:py-1 xl:px-1 xl:ml-[6px] xl:mx-1"
                        onClick={() => {
                          setIssueContainer("> " + issueContainer);
                          setIssueNum(-1);
                          setImgURL("");
                          setTagsName("");
                        }}
                      >
                        <QuoteIcon size={16} />
                      </button>
                      <button
                        className="ml-[5px] py-2 px-2 lg:py-1 lg:px-1 lg:ml-[6px] lg:mx-1 xl:py-1 xl:px-1 xl:ml-[6px] xl:mx-1"
                        onClick={() => {
                          setIssueContainer("`" + issueContainer + "`");
                          setIssueNum(-1);
                          setImgURL("");
                          setTagsName("");
                        }}
                      >
                        <CodeIcon size={16} />
                      </button>
                      <button
                        className="ml-[5px] py-2 px-2 lg:py-1 lg:px-1 lg:ml-[6px] lg:mx-1 xl:py-1 xl:px-1 xl:ml-[6px] xl:mx-1"
                        onClick={() => {
                          setIssueContainer("[" + issueContainer + "](url)");
                          setIssueNum(-1);
                          setTagsName("");
                        }}
                      >
                        <LinkIcon size={16} />
                      </button>
                    </div>
                  </div>

                  <div className={`${markDownBtn ? "md:flex" : "md:hidden"}`}>
                    <button
                      className="ml-[5px] py-2 px-2 lg:py-1 lg:px-1 lg:ml-[6px] lg:mx-1 xl:py-1 xl:px-1 xl:ml-[6px] xl:mx-1"
                      onClick={() => {
                        setIssueContainer("@");
                        setIssueNum(-1);
                        setImgURL("");
                      }}
                    >
                      <MentionIcon size={16} />
                    </button>
                    <input
                      type="file"
                      className="hidden"
                      ref={Imgfile}
                      accept=".gif,.jpeg,.jpg,.mov,.mp4,.png,.svg,.webm,.csv,.docx,.fodg,.fodp,.fods,.fodt,.gz,.log,.md,.odf,.odg,.odp,.ods,.odt,.pdf,.pptx,.tgz,.txt,.xls,.xlsx,.zip"
                      multiple
                      onChange={() => {
                        const file = Imgfile.current?.files;
                        if (file[0] !== undefined) {
                          setImgURL(URL.createObjectURL(file[0]));
                          setIssueContainer(
                            `![${file[0].name}](${URL.createObjectURL(
                              file[0]
                            )})`
                          );
                          setTagsName("");
                          setIssueNum(-1);
                        }
                      }}
                    />
                    <button
                      className="ml-[5px] py-2 px-2 lg:py-1 lg:px-1 lg:ml-[6px] lg:mx-1 xl:py-1 xl:px-1 xl:ml-[6px] xl:mx-1"
                      onClick={() => {
                        Imgfile.current?.click();
                      }}
                    >
                      <FileMediaIcon size={16} />
                    </button>

                    <button
                      className="ml-[5px] py-2 px-2 lg:py-1 lg:px-1 lg:ml-[6px] lg:mx-1 xl:py-1 xl:px-1 xl:ml-[6px] xl:mx-1"
                      onClick={() => {
                        setIssueContainer("#");
                        setTagsName("");
                        setImgURL("");
                      }}
                    >
                      <CrossReferenceIcon size={16} />
                    </button>
                    <button className="ml-[5px] py-2 px-2 lg:py-1 lg:px-1 lg:ml-[6px] lg:mx-1 xl:py-1 xl:px-1 xl:ml-[6px] xl:mx-1">
                      <ReplyIcon size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-2 lg:mx-2 xl:mx-2">
              <div
                className={`${
                  preview ? "hidden" : "block"
                } lg:h-[126px] lg:px-0 lg:py-0 border-[1px] border-solid border-gray-400 bg-slate-100 rounded-md w-full relative md:border-0 px-2 py-2 md:h-[126px] xl:h-[126px] xl:px-0 xl:py-0`}
              >
                <div>
                  <textarea
                    cols="30"
                    rows="10"
                    placeholder={issueContainer}
                    value={
                      issueContainer !== "Leave a comment"
                        ? `${issueContainer}`
                        : ""
                    }
                    className="relative md:leading-snug md:h-[82px] px-2 py-2 border-[1px] md:border-b-[0px] border-solid border-gray-400 bg-slate-100 rounded-md w-full lg:focus:bg-white lg:border-b-[1px] border-t-[0px] border-r-[0px] border-l-[0px] lg:border-dashed lg:h-[96px] lg:leading-snug lg:rounded-b-[0px] xl:focus:bg-white xl:border-dashed xl:h-[96px] xl:leading-snug xl:rounded-b-[0px]"
                    onChange={(e) => {
                      setIssueContainer(e.target.value);
                    }}
                  />
                </div>
                <ul
                  className={`${
                    issueContainer.includes("@") && tagsClose
                      ? "block"
                      : "hidden"
                  } absolute z-30 bg-slate-100 top-[30px] left-[30px] border-[1px] border-solid  border-gray-200 rounded-md `}
                >
                  {TagAssigneeName()}
                </ul>
                <ul
                  className={`${
                    issueContainer.includes("#") && issueClose
                      ? "block"
                      : "hidden"
                  } absolute z-30 bg-slate-100 top-[30px] left-[30px] border-[1px] border-solid  border-gray-200 rounded-md `}
                >
                  {TagIssue()}
                </ul>
                <div className="md:block absolute bottom-0 md:bg-slate-100 flex justify-between items-center w-full px-[6px] py-[6px] lg:h-[30px] xl:absolute xl:h-[30px]">
                  <div className="xl:h-auto lg:h-auto lg:w-full lg:flex lg:justify-between lg:items-center xl:flex xl:justify-between xl:items-center xl:w-full">
                    <input
                      type="file"
                      className="hidden"
                      ref={Imgfile}
                      accept=".gif,.jpeg,.jpg,.mov,.mp4,.png,.svg,.webm,.csv,.docx,.fodg,.fodp,.fods,.fodt,.gz,.log,.md,.odf,.odg,.odp,.ods,.odt,.pdf,.pptx,.tgz,.txt,.xls,.xlsx,.zip"
                      multiple
                      onChange={() => {
                        const file = Imgfile.current?.files;
                        if (file[0] !== undefined) {
                          setImgURL(URL.createObjectURL(file[0]));
                          setIssueContainer(
                            `![${file[0].name}](${URL.createObjectURL(
                              file[0]
                            )})`
                          );
                          setTagsName("");
                          setIssueNum(-1);
                        }
                      }}
                    />
                    <button
                      className="flex justify-between items-center w-full"
                      onClick={() => {
                        Imgfile.current?.click();
                      }}
                    >
                      <p className="lg:text-sm xl:text-sm">
                        Attach files by selectimg or pasting them.
                      </p>

                      <MarkdownIcon size={16} />
                    </button>
                  </div>
                </div>
              </div>

              <div
                className={`${
                  preview ? "block" : "hidden"
                } px-2 pb-2 w-full min-h-[191px] border-b-[2px] border-solid border-[#d0d7de]`}
              >
                <p className="text-sm"></p>
                {PreviewText()}
              </div>
              <div className="flex justify-end items-center mt-2">
                <div className="relative flex justify-start items-center bg-[#f6f8fa] mr-2">
                  <button
                    className={`${
                      issueDetailData.state === "open" ? "flex" : "hidden"
                    } justify-between items-center cursor-pointer px-4 py-[5px] border-t-[1px] border-b-[1px] border-l-[1px] border-solid border-gray-200 rounded-l-lg`}
                    onClick={() => {
                      setIssueDetailState("closed");
                      setIssueDetailStateReanson("completed");
                      UpdateUssueState();
                    }}
                  >
                    <CheckCircleIcon
                      size={16}
                      fill={"purple"}
                      className="mr-1"
                    />

                    <p className="text-sm">Close issue</p>
                  </button>

                  <button
                    className={`${
                      issueDetailData.state === "closed" ? "flex" : "hidden"
                    } justify-between items-center cursor-pointer px-4 py-[5px] border-t-[1px] border-b-[1px] border-l-[1px] border-solid border-gray-200 rounded-l-lg`}
                    onClick={() => {
                      setIssueDetailState("open");
                      setIssueDetailStateReanson("reopened");
                      UpdateUssueState();
                    }}
                  >
                    <IssueReopenedIcon
                      size={16}
                      fill={"green"}
                      className="mr-1"
                    />

                    <p className="text-sm">Reopen</p>
                  </button>

                  <div
                    className="px-[10px] py-[5px] border-[1px] border-solid border-gray-200 rounded-lg h-[32px] w-[40px] hover:cursor-pointer"
                    onClick={() => {
                      if (closeIssue === false) {
                        setCloseIssue(true);
                      } else if (closeIssue === true) {
                        setCloseIssue(false);
                      }
                    }}
                  >
                    <TriangleDownIcon size={16} />
                  </div>
                  <ul
                    className={`${
                      closeIssue ? "block" : "hidden"
                    } absolute top-[38px] right-0 bg-white border-[1px] border-solid border-gray-200 rounded-r-lg`}
                  >
                    <li
                      className={`${
                        issueDetailData.state !== "open"
                          ? "items-center"
                          : "items-start"
                      } relative flex items-start py-2 pr-2 pl-[30px] w-[298px] h-[55px] border-b-[1px] border-solid border-gray-200`}
                    >
                      <div
                        className={`${
                          (issueDetailData.state === "open" &&
                            issueDetailData.state_reason === "reopened") ||
                          (issueDetailData.state === "closed" &&
                            issueDetailData.state_reason === "completed")
                            ? "block"
                            : "hidden"
                        } absolute left-[8px]`}
                      >
                        <CheckIcon size={16} className="mr-1" />
                      </div>

                      <div
                        className={`${
                          issueDetailData.state === "open" ? "block" : "hidden"
                        }  cursor-pointer`}
                        onClick={() => {
                          setIssueDetailState("closed");
                          setIssueDetailStateReanson("completed");
                          UpdateUssueState();
                        }}
                      >
                        <div className="flex justify-start items-center">
                          <CheckCircleIcon
                            size={16}
                            fill={"purple"}
                            className="mr-1"
                          />
                          <p className="text-sm font-semibold">
                            Close as completed
                          </p>
                        </div>
                        <p className="text-xs">Done, closed, fixed, resolved</p>
                      </div>

                      <div
                        className={`${
                          issueDetailData.state !== "open" ? "block" : "hidden"
                        }  cursor-pointer`}
                        onClick={() => {
                          setIssueDetailState("open");
                          setIssueDetailStateReanson("reopened");
                          UpdateUssueState();
                        }}
                      >
                        <div className="flex justify-start items-center">
                          <IssueReopenedIcon
                            size={16}
                            fill={"green"}
                            className="mr-1"
                          />
                          <p className="text-sm font-semibold">Reopen issue</p>
                        </div>
                      </div>
                    </li>
                    <li
                      className={`${
                        issueDetailData.state !== "open"
                          ? "items-center"
                          : "items-start"
                      } flex justify-start  py-2 pr-2 pl-[30px] w-[298px] h-[55px]`}
                    >
                      <div
                        className={`${
                          issueDetailData.state === "closed" &&
                          issueDetailData.state_reason === "not_planned"
                            ? "block"
                            : "hidden"
                        } absolute left-[8px]`}
                      >
                        <CheckIcon size={16} className="mr-1" />
                      </div>
                      <div
                        className="cursor-pointer"
                        onClick={() => {
                          setIssueDetailState("closed");
                          setIssueDetailStateReanson("not_planned");
                          UpdateUssueState();
                        }}
                      >
                        <div className="flex justify-start items-center">
                          <SkipIcon size={16} fill={"gray"} className="mr-1" />
                          <p className="text-sm font-semibold">
                            Close as not planned
                          </p>
                        </div>
                        <p
                          className={`${
                            issueDetailData.state === "open"
                              ? "block"
                              : "hidden"
                          } text-xs`}
                        >
                          Won't fix, can't repo, duplocate, state
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <button
                  className={`${
                    issueContainer !== "" ? "bg-[#2da44e]" : "bg-[#94d3a2]"
                  } px-4 py-[5px] text-sm  border-[1px] border-solid border-gray-200 rounded-lg text-white`}
                  onClick={() => {
                    CreateIssueComment();
                  }}
                >
                  Comment
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 mb-2 text-xs">
          <p className="flex justify-start items-center">
            <div className="mr-1">
              <InfoIcon size={16} className="fill-[#57606a]" />
            </div>
            Remember, contributions to this repository should follow our{" "}
            <a href="#" className="text-[#0969da]">
              GitHub Community Guidelines.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
export default CreateComment;
function readAsDataURL(arg0: any) {
  throw new Error("Function not implemented.");
}
