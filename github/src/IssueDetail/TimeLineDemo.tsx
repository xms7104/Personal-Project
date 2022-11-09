import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

import {
  BoldIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  CodeIcon,
  CrossReferenceIcon,
  FileMediaIcon,
  HeadingIcon,
  ItalicIcon,
  KebabHorizontalIcon,
  LinkIcon,
  ListOrderedIcon,
  ListUnorderedIcon,
  MarkdownIcon,
  MentionIcon,
  PencilIcon,
  PersonIcon,
  QuoteIcon,
  ReplyIcon,
  SkipIcon,
  SmileyIcon,
  TagIcon,
  TasklistIcon,
  TriangleDownIcon,
  TypographyIcon,
} from "@primer/octicons-react";

import UserImg from "../img/userImg.png";

function TimeLine() {
  const [preview, setPreview] = useState(false);
  const [markDownBtn, setmarkDownBtn] = useState(false);
  const [updateComment, setUpdateComment] = useState("");
  const [updateCommentNum, setUpdateCommentNum] = useState(-1);
  const [timeLineIndex, setTimeLineIndex] = useState(-1);
  const [issueUpdateInputDefaultValue, setIssueUpdateInputDefaultValue] =
    useState("");
  const [issueUpdateContainer, setIssueUpdateContainer] = useState("");

  const [TimeLineCommentemojiListClose, setTimeLineCommentEmojiListClose] =
    useState(false);
  const [kebabHorizontal, setKebabHorizontal] = useState(false);

  function PreviewText() {
    if (
      issueUpdateInputDefaultValue === "" ||
      issueUpdateInputDefaultValue === "Leave a comment"
    ) {
      return <p className="text-sm">Nothing to preview</p>;
    } else if (issueUpdateInputDefaultValue !== "") {
      return (
        <ReactMarkdown
          children={issueUpdateInputDefaultValue}
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
    }
  }

  return (
    <div className="relative lg:pl-4 lg:ml-10 md:ml-0 md:pl-0 xl:pl-4 xl:ml-10">
      <div className="absolute w-[2px] h-full bg-[rgba(27,31,36,0.15)] md:left-4 -z-20 md:top-0 lg:left-[30px] lg:top-[-15px] xl:left-[30px] xl:top-[-15px]" />
      <div className="flex justify-start items-center py-4 ml-4">
        <div className="flex justify-center items-center w-8 h-8 rounded-full border-[2px] border-solid border-white mr-2 bg-[#eaeef2] ml-[-15px]">
          <button>
            <TagIcon size={16} />
          </button>
        </div>

        <button className="flex justify-start items-center">
          <img src={UserImg} alt="" className="rounded-full w-5 h-5" />
          <p className="mr-2">Xie-MS</p>
          <p className="flex justify-start items-center text-sm text-[#57606a]">
            added the{" "}
            <button
              style={{
                backgroundColor: "yellow",
              }}
              className="text-[#24292f] flex justify-center items-center text-sm bg-yellow-400 px-[7px] border-[1px] border-solid border-[rgba(27,31,36,0.15)] rounded-3xl font-semibold h-[18px] mx-1"
            >
              fffff
            </button>{" "}
            labels 2 days ago.
          </p>
        </button>
      </div>

      <div className="flex justify-start items-center py-4 ml-4">
        <div className="flex justify-center items-center w-8 h-8 rounded-full border-[2px] border-solid border-white mr-2 bg-[#eaeef2] ml-[-15px]">
          <button>
            <TagIcon size={16} />
          </button>
        </div>

        <button className="flex justify-start items-center">
          <img src={UserImg} alt="" className="rounded-full w-5 h-5" />
          <p className="mr-2">Xie-MS</p>
          <p className="flex justify-start items-center text-sm text-[#57606a]">
            removed the{" "}
            <button
              style={{
                backgroundColor: "pink",
              }}
              className="text-[#24292f] flex justify-center items-center text-sm bg-yellow-400 px-[7px] border-[1px] border-solid border-[rgba(27,31,36,0.15)] rounded-3xl font-semibold h-[18px] mx-1"
            >
              abcde
            </button>{" "}
            labels 1 day ago.
          </p>
        </button>
      </div>

      <div className="flex justify-start items-center py-4 ml-4">
        <div className="flex justify-center items-center w-[40px] h-8 rounded-full border-[2px] border-solid border-white mr-2 bg-[#eaeef2] ml-[-15px] lg:w-8 xl:w-8">
          <button>
            <PersonIcon size={16} />
          </button>
        </div>
        <button className="flex justify-start items-center">
          <img src={UserImg} alt="" className="rounded-full w-5 h-5" />
          <p className="mr-2">Xie-MS</p>
          <p className="flex justify-start items-center text-sm text-[#57606a]">
            assigned <p className="text-[#24292f] mx-2 font-semibold">Xie-MS</p>{" "}
            17 hours ago.
          </p>
        </button>
      </div>

      <div className="flex justify-start items-center py-4 ml-4">
        <div className="flex justify-center items-center w-[40px] h-8 rounded-full border-[2px] border-solid border-white mr-2 bg-[#eaeef2] ml-[-15px] lg:w-8 xl:w-8">
          <button>
            <PersonIcon size={16} />
          </button>
        </div>
        <button className="flex justify-start items-center">
          <img src={UserImg} alt="" className="rounded-full w-5 h-5" />
          <p className="mr-2">Xie-MS</p>
          <p className="flex justify-start items-center text-sm text-[#57606a]">
            unassigned{" "}
            <p className="text-[#24292f] mx-2 font-semibold">Xie-MS</p> 15 hours
            ago.
          </p>
        </button>
      </div>

      <div className="relative flex justify-start items-center py-4 ml-4">
        <div className="flex justify-center items-center w-8 h-8 rounded-full border-[2px] border-solid border-white mr-2 bg-[#8250df] ml-[-15px]">
          <button>
            <CheckCircleIcon size={16} fill={"white"} />
          </button>
        </div>
        <button className="flex justify-start items-center">
          <img src={UserImg} alt="" className="rounded-full w-5 h-5" />
          <p className="mr-2">Xie-MS</p>
          <p className="flex justify-start items-center text-sm text-[#57606a]">
            closed this as comppleted 10 hours ago.
          </p>
        </button>
        <div className="absolute w-[107%] bg-[rgba(27,31,36,0.15)] h-[4px] bottom-0 left-[-33px] lg:left-[-70px] xl:left-[-70px]" />
      </div>

      <div className="relative flex justify-start items-center py-4 ml-4">
        <div className="flex justify-center items-center w-8 h-8 rounded-full border-[2px] border-solid border-white mr-2 bg-[#eaeef2] ml-[-15px]">
          <button>
            <SkipIcon size={16} />
          </button>
        </div>
        <button className="flex justify-start items-center">
          <img src={UserImg} alt="" className="rounded-full w-5 h-5" />
          <p className="mr-2">Xie-MS</p>
          <p className="flex justify-start items-center text-sm text-[#57606a]">
            closed this an not planned 3 hours ago.
          </p>
        </button>
        <div className="absolute w-[107%] bg-[rgba(27,31,36,0.15)] h-[4px] bottom-0 left-[-33px] lg:left-[-70px] xl:left-[-70px]" />
      </div>

      <div className="relative flex justify-start items-center py-4 ml-4">
        <div className="flex justify-center items-center w-8 h-8 rounded-full border-[2px] border-solid border-white mr-2 bg-[#eaeef2] ml-[-15px]">
          <button>
            <SkipIcon size={16} />
          </button>
        </div>
        <button className="flex justify-start items-center">
          <img src={UserImg} alt="" className="rounded-full w-5 h-5" />
          <p className="mr-2">Xie-MS</p>
          <p className="flex justify-start items-center text-sm text-[#57606a]">
            closed this an not planned 58 minutes ago.
          </p>
        </button>
        <div className="absolute w-[107%] bg-[rgba(27,31,36,0.15)] h-[4px] bottom-0 left-[-33px] lg:left-[-70px] xl:left-[-70px]" />
      </div>

      <div className="flex justify-start items-center py-4 ml-4">
        <div className="flex justify-center items-center w-8 h-8 rounded-full border-[2px] border-solid border-white mr-2 bg-[#eaeef2] ml-[-15px]">
          <button>
            <PencilIcon size={16} />
          </button>
        </div>

        <button className="flex justify-start items-center">
          <img src={UserImg} alt="" className="rounded-full w-5 h-5" />
          <p className="mr-2">Xie-MS</p>
          <p className="flex justify-start items-center text-sm text-[#57606a] mr-1">
            changed the this <p className="line-through mx-1">Title 1</p> Updata
            Title 1
          </p>
          <p className="flex justify-start items-center text-sm text-[#57606a]">
            32 minutes ago.
          </p>
        </button>
      </div>

      <div
        className={`${
          updateComment === "UpdateComment" &&
          updateCommentNum === timeLineIndex
            ? "hidden"
            : "flex"
        } lg:justify-start lg:items-start xl:justify-start xl:items-start lg:relative md:w-full md:left-0 lg:w-[106.5%] lg:left-[-75px] xl:relative xl:w-[106.5%] xl:left-[-75px] pt-4 `}
      >
        <div className="md:hidden lg:w-[7.5%] xl:w-[7.5%] flex justify-center">
          <img
            src={UserImg}
            alt=""
            className="rounded-full md:w-[3%] lg:w-[40%] xl:w-[40%]"
          />
        </div>
        <div className="bg-white border-[1px] border-solid border-[rgba(84,174,255,0.4)] rounded-md mb-4 md:w-full lg:w-[90%] xl:w-[90%]">
          <div className="h-[37px] flex justify-between items-center px-4 border-b-[1px] border-solid border-[rgba(27,31,36,0.15)] bg-[#ddf4ff]">
            <div className="flex justify-between items-center">
              <p className="text-sm font-semibold mr-2">Xie-MS</p>
              <p className="flex justify-between items-center text-sm text-[#57606a]">
                commented 53 seconds ago.．
                <button className="flex justify-between items-center">
                  <p>edited</p>
                  <TriangleDownIcon size={16} />
                </button>
              </p>
            </div>

            <div className="flex justify-between items-center">
              <button className="ml-1 px-[7px] border-[1px] border-solid border-[rgba(84,174,255,0.4)] text-xs rounded-[2rem] text-[#57606a] font-medium">
                owner
              </button>
              <div className="md:hidden lg:px-2 lg:py-1 lg:relative xl:px-2 xl:py-1 xl:relative">
                <button
                  className="w-[26px] h-[26px] bg-transparent rounded-full"
                  onClick={() => {
                    if (TimeLineCommentemojiListClose === false) {
                      setTimeLineCommentEmojiListClose(true);
                    } else if (TimeLineCommentemojiListClose === true) {
                      setTimeLineCommentEmojiListClose(false);
                    }
                  }}
                >
                  <SmileyIcon size={16} />
                </button>
                <div className="absolute left-[-270px] top-[5px]">
                  <ul
                    className={`${
                      TimeLineCommentemojiListClose ? "flex" : "hidden"
                    } justify-start items-center my-2 mr-2 px-[2px] border-[1px] border-solid border-[#d0d7de] bg-white rounded-md hover:cursor-pointer`}
                  >
                    <li className="px-1 py-1 my-1 mx-[2px] h-10 flex justify-center items-center">
                      👍2
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative">
                <div className="hover:cursor-pointer">
                  <KebabHorizontalIcon size={16} />
                </div>

                <ul
                  className={`${
                    kebabHorizontal && timeLineIndex === updateCommentNum
                      ? "block"
                      : "hidden"
                  } absolute right-0 top-[25px] w-[183px] py-1 bg-white border-[1px] border-solid border-[#d0d7de] justify-start items-center rounded-md z-20`}
                >
                  <li>
                    <p className="pl-4 pr-2 py-1 text-xs h-[29px]">Copy link</p>
                    <p className="pl-4 pr-2 py-1 text-xs h-[29px]">
                      Quote reply
                    </p>
                    <p className="pl-4 pr-2 py-1 text-xs h-[29px]">
                      Reference in new issue
                    </p>
                  </li>
                  <div className="my-2 border-t-[1px] border-solid border-[#d0d7de]" />
                  <li
                    className="pl-4 pr-2 py-1 text-xs h-[29px]"
                    onClick={() => {
                      setUpdateComment("UpdateComment");
                      setUpdateCommentNum(timeLineIndex);
                    }}
                  >
                    Edit
                  </li>
                  <li className="pl-4 pr-2 py-1 text-xs h-[29px]">Hide</li>
                  <li className="pl-4 pr-2 py-1 text-xs h-[29px] text-[#cf222e]">
                    Delete
                  </li>
                  <div className="my-2 border-t-[1px] border-solid border-[#d0d7de]" />
                  <li className="pl-4 pr-2 py-1 text-xs h-[29px]">
                    Report content
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-sm px-4 py-4 text-[#24292f] bg-white">
            <p>Demo</p>
          </div>
          <div className="mb-4 ml-4 flex justify-start items-center">
            <button
              className={`flex h-[24px] w-[40.476px] px-1 mr-2 border-[1px] border-solid border-[#d0d7de] rounded-[100px] bg-white text-xs justify-start items-center`}
            >
              👍
              <p className="mx-1 ml-[2px]">2</p>
            </button>

            <button
              className={`flex h-[24px] w-[40.476px] px-1 mr-2 border-[1px] border-solid border-[#d0d7de] rounded-[100px] bg-white text-xs justify-start items-center`}
            >
              🎉
              <p className="mx-1 ml-[2px]">1</p>
            </button>

            <button
              className={`flex h-[24px] w-[40.476px] px-1 mr-2 border-[1px] border-solid border-[#d0d7de] rounded-[100px] bg-white text-xs justify-start items-center`}
            >
              👀
              <p className="mx-1 ml-[2px]">1</p>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${
          updateComment === "UpdateComment" &&
          updateCommentNum === timeLineIndex
            ? "block"
            : "hidden"
        }`}
      >
        <div className="md:w-full lg:w-auto justify-start lg:relative flex items-start xl:flex relative mt-4">
          <div className="md:hidden lg:block w-[7.24%] xl:block">
            <img
              src={UserImg}
              alt=""
              className="w-10 h-10 rounded-full sm:hidden"
            />
          </div>
          <div className="md:w-full lg:w-[88.7%] xl:w-[88.7%]">
            <div>
              <div className="md:h-auto md:border-[0px] lg:border-[1px] lg:border-solid lg:border-gray-200 lg:rounded-md lg:h-auto lg:mb-2 xl:border-[1px] xl:border-solid xl:border-gray-200 xl:rounded-md xl:h-auto xl:mb-2">
                <div className="flex justify-between items-baseline w-full">
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
                            setIssueUpdateInputDefaultValue(
                              "### " + issueUpdateInputDefaultValue
                            );
                          }}
                        >
                          <HeadingIcon size={16} />
                        </button>
                        <button
                          className="ml-[5px] mr-1 py-2 px-1"
                          onClick={() => {
                            setIssueUpdateInputDefaultValue(
                              "**" + issueUpdateInputDefaultValue + "**"
                            );
                          }}
                        >
                          <BoldIcon size={16} />
                        </button>
                        <button
                          className="ml-[5px] mr-1 py-2 px-1"
                          onClick={() => {
                            setIssueUpdateInputDefaultValue(
                              "_" + issueUpdateInputDefaultValue + "_"
                            );
                          }}
                        >
                          <ItalicIcon size={16} />
                        </button>
                        <button
                          className="ml-[5px] mr-1 py-2 px-1"
                          onClick={() => {
                            setIssueUpdateInputDefaultValue(
                              "- " + issueUpdateInputDefaultValue
                            );
                          }}
                        >
                          <ListUnorderedIcon size={16} />
                        </button>
                        <button
                          className="ml-[5px] mr-1 py-2 px-1"
                          onClick={() => {
                            setIssueUpdateInputDefaultValue(
                              "1. " + issueUpdateInputDefaultValue
                            );
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
                            setIssueUpdateInputDefaultValue(
                              "### " + issueUpdateInputDefaultValue
                            );
                          }}
                        >
                          <HeadingIcon size={16} />
                        </button>
                        <button
                          className="ml-[5px] mr-1 py-2 px-1 lg:py-1 lg:px-1 lg:ml-[6px] lg:mx-1 xl:py-1 xl:px-1 xl:ml-[6px] xl:mx-1"
                          onClick={() => {
                            setIssueUpdateInputDefaultValue(
                              "**" + issueUpdateInputDefaultValue + "**"
                            );
                          }}
                        >
                          <BoldIcon size={16} />
                        </button>
                        <button
                          className="ml-[5px] mr-1 py-2 px-1 lg:py-1 lg:px-1 lg:ml-[6px] lg:mx-1 xl:py-1 xl:px-1 xl:ml-[6px] xl:mx-1"
                          onClick={() => {
                            setIssueUpdateInputDefaultValue(
                              "_" + issueUpdateInputDefaultValue + "_"
                            );
                          }}
                        >
                          <ItalicIcon size={16} />
                        </button>
                      </div>
                      <div className="md:hidden lg:flex">
                        <button
                          className="ml-[5px] mr-1 py-2 px-1 lg:py-1 lg:px-1 lg:ml-[6px] lg:mx-1 xl:py-1 xl:px-1 xl:ml-[6px] xl:mx-1"
                          onClick={() => {
                            setIssueUpdateInputDefaultValue(
                              "- " + issueUpdateInputDefaultValue
                            );
                          }}
                        >
                          <ListUnorderedIcon size={16} />
                        </button>
                        <button
                          className="ml-[5px] mr-1 py-2 px-1 lg:py-1 lg:px-1 lg:ml-[6px] lg:mx-1 xl:py-1 xl:px-1 xl:ml-[6px] xl:mx-1"
                          onClick={() => {
                            setIssueUpdateInputDefaultValue(
                              "1. " + issueUpdateInputDefaultValue
                            );
                          }}
                        >
                          <ListOrderedIcon size={16} />
                        </button>
                        <button className="ml-[5px] mr-1 py-2 px-1 lg:py-1 lg:px-1 lg:ml-[6px] lg:mx-1 xl:py-1 xl:px-1 xl:ml-[6px] xl:mx-1">
                          <TasklistIcon size={16} />
                        </button>
                      </div>
                      <div>
                        <div
                          className={`${markDownBtn ? "md:flex" : "md:hidden"}`}
                        >
                          <button
                            className="ml-[5px] py-2 px-2 lg:py-1 lg:px-1 lg:ml-[6px] lg:mx-1 xl:py-1 xl:px-1 xl:ml-[6px] xl:mx-1"
                            onClick={() => {
                              setIssueUpdateInputDefaultValue(
                                "> " + issueUpdateInputDefaultValue
                              );
                            }}
                          >
                            <QuoteIcon size={16} />
                          </button>
                          <button
                            className="ml-[5px] py-2 px-2 lg:py-1 lg:px-1 lg:ml-[6px] lg:mx-1 xl:py-1 xl:px-1 xl:ml-[6px] xl:mx-1"
                            onClick={() => {
                              setIssueUpdateInputDefaultValue(
                                "`" + issueUpdateInputDefaultValue + "`"
                              );
                            }}
                          >
                            <CodeIcon size={16} />
                          </button>
                          <button
                            className="ml-[5px] py-2 px-2 lg:py-1 lg:px-1 lg:ml-[6px] lg:mx-1 xl:py-1 xl:px-1 xl:ml-[6px] xl:mx-1"
                            onClick={() => {
                              setIssueUpdateInputDefaultValue(
                                "[" + issueUpdateInputDefaultValue + "](url)"
                              );
                            }}
                          >
                            <LinkIcon size={16} />
                          </button>
                        </div>
                      </div>

                      <div
                        className={`${markDownBtn ? "md:flex" : "md:hidden"}`}
                      >
                        <button
                          className="ml-[5px] py-2 px-2 lg:py-1 lg:px-1 lg:ml-[6px] lg:mx-1 xl:py-1 xl:px-1 xl:ml-[6px] xl:mx-1"
                          onClick={() => {
                            setIssueUpdateInputDefaultValue("@");
                          }}
                        >
                          <MentionIcon size={16} />
                        </button>

                        <button className="ml-[5px] py-2 px-2 lg:py-1 lg:px-1 lg:ml-[6px] lg:mx-1 xl:py-1 xl:px-1 xl:ml-[6px] xl:mx-1">
                          <FileMediaIcon size={16} />
                        </button>

                        <button
                          className="ml-[5px] py-2 px-2 lg:py-1 lg:px-1 lg:ml-[6px] lg:mx-1 xl:py-1 xl:px-1 xl:ml-[6px] xl:mx-1"
                          onClick={() => {
                            setIssueUpdateInputDefaultValue("#");
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
                        value={`${
                          updateCommentNum !== -1
                            ? `${issueUpdateInputDefaultValue}`
                            : `${issueUpdateContainer}`
                        }`}
                        className="relative md:leading-snug md:h-[82px] px-2 py-2 border-[1px] md:border-b-[0px] border-solid border-gray-400 bg-slate-100 rounded-md w-full lg:focus:bg-white lg:border-b-[1px] border-t-[0px] border-r-[0px] border-l-[0px] lg:border-dashed lg:h-[96px] lg:leading-snug lg:rounded-b-[0px] xl:focus:bg-white xl:border-dashed xl:h-[96px] xl:leading-snug xl:rounded-b-[0px]"
                        onChange={(e) => {
                          if (updateCommentNum !== -1) {
                            setIssueUpdateInputDefaultValue(e.target.value);
                          } else if (updateCommentNum === -1) {
                            setIssueUpdateContainer(e.target.value);
                          }
                        }}
                      />
                    </div>

                    <div className="md:block absolute bottom-0 md:bg-slate-100 flex justify-between items-center w-full px-[6px] py-[6px] lg:h-[30px] xl:absolute xl:h-[30px]">
                      <div className="xl:h-auto lg:h-auto lg:w-full lg:flex lg:justify-between lg:items-center xl:flex xl:justify-between xl:items-center xl:w-full">
                        <button className="flex justify-between items-center w-full">
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
                    } px-2 pb-2 w-full min-h-[191px] border-b-[2px] border-solid border-[#d0d7de] md:min-h-[270px]`}
                  >
                    <p className="text-sm"></p>
                    {PreviewText()}
                  </div>
                  <div className="flex justify-end items-center mt-2">
                    <button
                      className="px-4 py-[5px] border-[1px] border-solid border-gray-200 text-[#cf222e] bg-[#f6f8fa] text-sm font-medium rounded-md mr-[5px]"
                      onClick={() => {
                        setUpdateComment("");
                      }}
                    >
                      Cancel
                    </button>
                    <button className="px-4 py-[5px] border-[1px] border-solid border-gray-200 text-white bg-[#2da44e] text-sm font-medium rounded-md">
                      Update New Issue
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimeLine;
