import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";

import {
  CheckCircleIcon,
  KebabHorizontalIcon,
  PencilIcon,
  PersonIcon,
  SkipIcon,
  SmileyIcon,
  TagIcon,
  TriangleDownIcon,
} from "@primer/octicons-react";

import api from "../api";
import UpdateComment from "./UpdateComment";

const Emoji = ["👍", "👎", "😄", "🎉", "😕", "❤", "🚀", "👀"];
const EmojiText = [
  "+1",
  "-1",
  "laugh",
  "confused",
  "hooray",
  "heart",
  "rocket",
  "eyes",
];

function TimeLine({
  preview,
  setPreview,
  setTargetText,
  markDownBtn,
  setmarkDownBtn,
  renderAssigneeData,
  renderIssueData,
  updateComment,
  setUpdateComment,
  issueDetailData,
  updateCommentNum,
  setUpdateCommentNum,
  commentNum,
  setCommentNum,
  createCommentRender,
  setCreateCommentRender,
  issueUpdateInputDefaultValue,
  setIssueUpdateInputDefaultValue,
  issueUpdateContainer,
  setIssueUpdateContainer,
  setLoading,
}: {
  preview: Boolean;
  setPreview: React.Dispatch<React.SetStateAction<boolean>>;
  setTargetText: any;
  markDownBtn: Boolean;
  setmarkDownBtn: React.Dispatch<React.SetStateAction<boolean>>;
  renderAssigneeData: any;
  renderIssueData: any;
  updateComment: String;
  setUpdateComment: React.Dispatch<React.SetStateAction<string>>;
  issueDetailData: any;
  updateCommentNum: number;
  setUpdateCommentNum: React.Dispatch<React.SetStateAction<number>>;
  commentNum: number;
  setCommentNum: React.Dispatch<React.SetStateAction<number>>;
  createCommentRender: boolean;
  setCreateCommentRender: React.Dispatch<React.SetStateAction<boolean>>;
  issueUpdateInputDefaultValue: string;
  setIssueUpdateInputDefaultValue: React.Dispatch<React.SetStateAction<string>>;
  issueUpdateContainer: string;
  setIssueUpdateContainer: React.Dispatch<React.SetStateAction<string>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [TimeLineCommentemojiListClose, setTimeLineCommentEmojiListClose] =
    useState(false);
  const [kebabHorizontal, setKebabHorizontal] = useState(false);
  const { IssueNum } = useParams();
  const [issueDetailTimeline, setIssueDetailTimeline]: any = useState<any>();

  const [emojiSelect, setEmojiSelect]: any = useState("");

  useEffect(() => {
    async function getIssueTimeline(IssueNum: string | undefined) {
      // setLoading(true);
      const data = await api.getIssueTimeline(IssueNum);
      setIssueDetailTimeline(data);
      // setLoading(false);
    }
    getIssueTimeline(IssueNum);
  }, [createCommentRender]);

  function EmojiList() {
    return Emoji.map((item: any, EmojiIndex: number) => {
      return (
        <li
          className="px-1 py-1 my-1 mx-[2px] h-10 flex justify-center items-center"
          onClick={() => {
            setEmojiSelect(EmojiText[EmojiIndex]);
            AddEmoji();
          }}
        >
          {Emoji[EmojiIndex]}
        </li>
      );
    });
  }

  let jwtName = JSON.parse(window.localStorage.getItem("userName") as string);
  let jwtRepo = JSON.parse(
    window.localStorage.getItem("userChooseRepo") as string
  );

  async function DeleteComment() {
    setLoading(true);
    const data = await api.DeleteComment(
      {
        owner: { jwtName },
        repo: { jwtRepo },
        comment_id: commentNum,
      },
      commentNum
    );

    setCreateCommentRender((prev: boolean) => !prev);
    setKebabHorizontal(false);
    setLoading(false);
  }

  async function AddEmoji() {
    setLoading(true);
    const data = await api.AddEmojiComment(
      {
        owner: { jwtName },
        repo: { jwtRepo },
        comment_id: commentNum,
        content: emojiSelect,
      },
      commentNum
    );
    setCreateCommentRender((prev: boolean) => !prev);
    setTimeLineCommentEmojiListClose(false);
    setLoading(false);
  }

  function Timeline() {
    if (issueDetailTimeline === undefined) return <></>;
    return issueDetailTimeline.map((timeLine: any, timeLineIndex: number) => {
      function timelineCreateTime() {
        const NewTime = new Date();
        const IssuesTime = new Date(timeLine.created_at);
        const reduce = NewTime.getTime() - IssuesTime.getTime();
        const days = Math.floor(reduce / (24 * 3600 * 1000));
        const leave1 = reduce % (24 * 3600 * 1000);
        const hours = Math.floor(leave1 / (3600 * 1000));
        const leave2 = leave1 % (3600 * 1000);
        const minutes = Math.floor(leave2 / (60 * 1000));
        const leave3 = leave2 % (60 * 1000);
        const seconds = Math.round(leave3 / 1000);

        if (days > 0) {
          return <p className="text-sm mx-1"> {`${days}`} days ago</p>;
        } else if (days === 0 && hours > 0) {
          return <p className="text-sm mx-1"> {`${hours}`} hours ago</p>;
        } else if (days === 0 && hours === 0 && minutes > 0) {
          return <p className="text-sm mx-1"> {`${minutes}`} minutes ago</p>;
        } else if (days === 0 && hours === 0 && minutes === 0 && seconds > 0) {
          return <p className="text-sm mx-1"> {`${seconds}`} seconds ago</p>;
        }
      }

      if (timeLine.event === "labeled") {
        return (
          <div className="flex justify-start items-center py-4 ml-4">
            <div className="flex justify-center items-center w-8 h-8 rounded-full border-[2px] border-solid border-white mr-2 bg-[#eaeef2] ml-[-15px]">
              <button>
                <TagIcon size={16} />
              </button>
            </div>

            <button className="flex justify-start items-center">
              <img
                src={timeLine.actor.avatar_url}
                alt=""
                className="rounded-full w-5 h-5"
              />
              <p className="mr-2">{timeLine.actor.login}</p>
              <p className="flex justify-start items-center text-sm text-[#57606a]">
                added the{" "}
                <button
                  style={{
                    backgroundColor: `#${timeLine.label.color}`,
                  }}
                  className="text-[#24292f] flex justify-center items-center text-sm bg-yellow-400 px-[7px] border-[1px] border-solid border-[rgba(27,31,36,0.15)] rounded-3xl font-semibold h-[18px] mx-1"
                >
                  {timeLine.label.name}
                </button>{" "}
                labels {timelineCreateTime()}
              </p>
            </button>
          </div>
        );
      } else if (timeLine.event === "unlabeled") {
        return (
          <div className="flex justify-start items-center py-4 ml-4">
            <div className="flex justify-center items-center w-8 h-8 rounded-full border-[2px] border-solid border-white mr-2 bg-[#eaeef2] ml-[-15px]">
              <button>
                <TagIcon size={16} />
              </button>
            </div>

            <button className="flex justify-start items-center">
              <img
                src={timeLine.actor.avatar_url}
                alt=""
                className="rounded-full w-5 h-5"
              />
              <p className="mr-2">{timeLine.actor.login}</p>
              <p className="flex justify-start items-center text-sm text-[#57606a]">
                removed the{" "}
                <button
                  style={{
                    backgroundColor: `#${timeLine.label.color}`,
                  }}
                  className="text-[#24292f] flex justify-center items-center text-sm bg-yellow-400 px-[7px] border-[1px] border-solid border-[rgba(27,31,36,0.15)] rounded-3xl font-semibold h-[18px] mx-1"
                >
                  {timeLine.label.name}
                </button>{" "}
                labels {timelineCreateTime()}
              </p>
            </button>
          </div>
        );
      } else if (timeLine.event === "assigned") {
        return (
          <div className="flex justify-start items-center py-4 ml-4">
            <div className="flex justify-center items-center w-[40px] h-8 rounded-full border-[2px] border-solid border-white mr-2 bg-[#eaeef2] ml-[-15px] lg:w-8 xl:w-8">
              <button>
                <PersonIcon size={16} />
              </button>
            </div>
            <button className="flex justify-start items-center">
              <img
                src={timeLine.actor.avatar_url}
                alt=""
                className="rounded-full w-5 h-5"
              />
              <p className="mr-2">{timeLine.actor.login}</p>
              <p className="flex justify-start items-center text-sm text-[#57606a]">
                assigned{" "}
                <p className="text-[#24292f] mx-2 font-semibold">
                  {timeLine.assignee.login}
                </p>{" "}
                {timelineCreateTime()}
              </p>
            </button>
          </div>
        );
      } else if (timeLine.event === "unassigned") {
        return (
          <div className="flex justify-start items-center py-4 ml-4">
            <div className="flex justify-center items-center w-[40px] h-8 rounded-full border-[2px] border-solid border-white mr-2 bg-[#eaeef2] ml-[-15px] lg:w-8 xl:w-8">
              <button>
                <PersonIcon size={16} />
              </button>
            </div>
            <button className="flex justify-start items-center">
              <img
                src={timeLine.actor.avatar_url}
                alt=""
                className="rounded-full w-5 h-5"
              />
              <p className="mr-2">{timeLine.actor.login}</p>
              <p className="flex justify-start items-center text-sm text-[#57606a]">
                unassigned{" "}
                <p className="text-[#24292f] mx-2 font-semibold">
                  {timeLine.assignee.login}
                </p>{" "}
                {timelineCreateTime()}
              </p>
            </button>
          </div>
        );
      } else if (
        (timeLine.event === "closed" && timeLine.state_reason === "reopened") ||
        (timeLine.event === "closed" && timeLine.state_reason === null)
      ) {
        return (
          <div className="relative flex justify-start items-center py-4 ml-4">
            <div className="flex justify-center items-center w-8 h-8 rounded-full border-[2px] border-solid border-white mr-2 bg-[#8250df] ml-[-15px]">
              <button>
                <CheckCircleIcon size={16} fill={"white"} />
              </button>
            </div>
            <button className="flex justify-start items-center">
              <img
                src={timeLine.actor.avatar_url}
                alt=""
                className="rounded-full w-5 h-5"
              />
              <p className="mr-2">{timeLine.actor.login}</p>
              <p className="flex justify-start items-center text-sm text-[#57606a]">
                closed this as comppleted {timelineCreateTime()}
              </p>
            </button>
            <div className="absolute w-[107%] bg-[rgba(27,31,36,0.15)] h-[4px] bottom-0 left-[-33px] lg:left-[-70px] xl:left-[-70px]" />
          </div>
        );
      } else if (
        timeLine.event === "closed" &&
        timeLine.state_reason === "not_planned"
      ) {
        return (
          <div className="relative flex justify-start items-center py-4 ml-4">
            <div className="flex justify-center items-center w-8 h-8 rounded-full border-[2px] border-solid border-white mr-2 bg-[#eaeef2] ml-[-15px]">
              <button>
                <SkipIcon size={16} />
              </button>
            </div>
            <button className="flex justify-start items-center">
              <img
                src={timeLine.actor.avatar_url}
                alt=""
                className="rounded-full w-5 h-5"
              />
              <p className="mr-2">{timeLine.actor.login}</p>
              <p className="flex justify-start items-center text-sm text-[#57606a]">
                closed this an not planned {timelineCreateTime()}
              </p>
            </button>
            <div className="absolute w-[107%] bg-[rgba(27,31,36,0.15)] h-[4px] bottom-0 left-[-33px] lg:left-[-70px] xl:left-[-70px]" />
          </div>
        );
      } else if (
        timeLine.event === "closed" &&
        timeLine.state_reason === "not_planned"
      ) {
        return (
          <div className="relative flex justify-start items-center py-4 ml-4">
            <div className="flex justify-center items-center w-8 h-8 rounded-full border-[2px] border-solid border-white mr-2 bg-[#eaeef2] ml-[-15px]">
              <button>
                <SkipIcon size={16} />
              </button>
            </div>
            <button className="flex justify-start items-center">
              <img
                src={timeLine.actor.avatar_url}
                alt=""
                className="rounded-full w-5 h-5"
              />
              <p className="mr-2">{timeLine.actor.login}</p>
              <p className="flex justify-start items-center text-sm text-[#57606a]">
                closed this an not planned {timelineCreateTime()}
              </p>
            </button>
            <div className="absolute w-[107%] bg-[rgba(27,31,36,0.15)] h-[4px] bottom-0 left-[-33px] lg:left-[-70px] xl:left-[-70px]" />
          </div>
        );
      } else if (timeLine.event === "renamed") {
        return (
          <div className="flex justify-start items-center py-4 ml-4">
            <div className="flex justify-center items-center w-8 h-8 rounded-full border-[2px] border-solid border-white mr-2 bg-[#eaeef2] ml-[-15px]">
              <button>
                <PencilIcon size={16} />
              </button>
            </div>

            <button className="flex justify-start items-center">
              <img
                src={timeLine.actor.avatar_url}
                alt=""
                className="rounded-full w-5 h-5"
              />
              <p className="mr-2">{timeLine.actor.login}</p>
              <p className="flex justify-start items-center text-sm text-[#57606a] mr-1">
                changed the this{" "}
                <p className="line-through mx-1">{timeLine.rename.from}</p>{" "}
                {timeLine.rename.to}
              </p>
              <p className="flex justify-start items-center text-sm text-[#57606a]">
                {timelineCreateTime()}
              </p>
            </button>
          </div>
        );
      } else if (timeLine.event === "commented") {
        function EmojiIcon() {
          return (
            <div className="mb-4 ml-4 flex justify-start items-center">
              <button
                className={`${
                  timeLine.reactions["+1"] !== 0 ? "flex" : "hidden"
                } h-[24px] w-[40.476px] px-1 mr-2 border-[1px] border-solid border-[#d0d7de] rounded-[100px] bg-white text-xs justify-start items-center`}
              >
                👍
                <p className="mx-1 ml-[2px]">{timeLine.reactions["+1"]}</p>
              </button>

              <button
                className={`${
                  timeLine.reactions["-1"] !== 0 ? "flex" : "hidden"
                } h-[24px] w-[40.476px] px-1 mr-2 border-[1px] border-solid border-[#d0d7de] rounded-[100px] bg-white text-xs justify-start items-center`}
              >
                👎
                <p className="mx-1 ml-[2px]">{timeLine.reactions["-1"]}</p>
              </button>

              <button
                className={`${
                  timeLine.reactions["confused"] !== 0 ? "flex" : "hidden"
                } h-[24px] w-[40.476px] px-1 mr-2 border-[1px] border-solid border-[#d0d7de] rounded-[100px] bg-white text-xs justify-start items-center`}
              >
                🎉
                <p className="mx-1 ml-[2px]">
                  {timeLine.reactions["confused"]}
                </p>
              </button>

              <button
                className={`${
                  timeLine.reactions["eyes"] !== 0 ? "flex" : "hidden"
                } h-[24px] w-[40.476px] px-1 mr-2 border-[1px] border-solid border-[#d0d7de] rounded-[100px] bg-white text-xs justify-start items-center`}
              >
                👀
                <p className="mx-1 ml-[2px]">{timeLine.reactions["eyes"]}</p>
              </button>

              <button
                className={`${
                  timeLine.reactions["heart"] !== 0 ? "flex" : "hidden"
                } h-[24px] w-[40.476px] px-1 mr-2 border-[1px] border-solid border-[#d0d7de] rounded-[100px] bg-white text-xs justify-start items-center`}
              >
                ❤<p className="mx-1 ml-[2px]">{timeLine.reactions["heart"]}</p>
              </button>

              <button
                className={`${
                  timeLine.reactions["hooray"] !== 0 ? "flex" : "hidden"
                } h-[24px] w-[40.476px] px-1 mr-2 border-[1px] border-solid border-[#d0d7de] rounded-[100px] bg-white text-xs justify-start items-center`}
              >
                😕
                <p className="mx-1 ml-[2px]">{timeLine.reactions["hooray"]}</p>
              </button>

              <button
                className={`${
                  timeLine.reactions["laugh"] !== 0 ? "flex" : "hidden"
                } h-[24px] w-[40.476px] px-1 mr-2 border-[1px] border-solid border-[#d0d7de] rounded-[100px] bg-white text-xs justify-start items-center`}
              >
                😄
                <p className="mx-1 ml-[2px]">{timeLine.reactions["laugh"]}</p>
              </button>

              <button
                className={`${
                  timeLine.reactions["rocket"] !== 0 ? "flex" : "hidden"
                } h-[24px] w-[40.476px] px-1 mr-2 border-[1px] border-solid border-[#d0d7de] rounded-[100px] bg-white text-xs justify-start items-center`}
              >
                🚀
                <p className="mx-1 ml-[2px]">{timeLine.reactions["rocket"]}</p>
              </button>
            </div>
          );
        }

        function MarkDownContainer() {
          return (
            <ReactMarkdown
              children={timeLine.body}
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

        return (
          <>
            <div
              className={`${
                updateComment === "UpdateComment" &&
                updateCommentNum === timeLineIndex
                  ? "hidden"
                  : "flex"
              } lg:justify-start lg:items-start xl:justify-start xl:items-start lg:relative md:w-full md:left-0 lg:w-[106.5%] lg:left-[-50px] xl:relative xl:w-[106.5%] xl:left-[-55px] pt-4 `}
            >
              <div className="md:hidden lg:w-[7.5%] xl:w-[7.5%]">
                <img
                  src={timeLine.actor.avatar_url}
                  alt=""
                  className="rounded-full md:w-[3%] lg:w-[60%] xl:w-[60%]"
                />
              </div>
              <div className="bg-white border-[1px] border-solid border-[rgba(84,174,255,0.4)] rounded-md mb-4 md:w-full lg:w-[90%] xl:w-[90%]">
                <div className="h-[37px] flex justify-between items-center px-4 border-b-[1px] border-solid border-[rgba(27,31,36,0.15)] bg-[#ddf4ff]">
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-semibold mr-2">
                      {timeLine.actor.login}
                    </p>
                    <p className="flex justify-between items-center text-sm text-[#57606a]">
                      commented {timelineCreateTime()}．
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
                          setUpdateCommentNum(timeLineIndex);
                          setCommentNum(timeLine.id);
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
                            TimeLineCommentemojiListClose &&
                            timeLineIndex === updateCommentNum
                              ? "flex"
                              : "hidden"
                          } justify-start items-center my-2 mr-2 px-[2px] border-[1px] border-solid border-[#d0d7de] bg-white rounded-md hover:cursor-pointer`}
                        >
                          {EmojiList()}
                        </ul>
                      </div>
                    </div>
                    <div className="relative">
                      <div
                        className="hover:cursor-pointer"
                        onClick={() => {
                          setUpdateCommentNum(timeLineIndex);
                          setCommentNum(timeLine.id);
                          setIssueUpdateInputDefaultValue(
                            issueDetailTimeline[timeLineIndex].body
                          );
                          if (kebabHorizontal === false) {
                            setKebabHorizontal(true);
                          } else if (kebabHorizontal === true) {
                            setKebabHorizontal(false);
                          }
                        }}
                      >
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
                          <p className="pl-4 pr-2 py-1 text-xs h-[29px]">
                            Copy link
                          </p>
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
                        <li className="pl-4 pr-2 py-1 text-xs h-[29px]">
                          Hide
                        </li>
                        <li
                          className="pl-4 pr-2 py-1 text-xs h-[29px] text-[#cf222e]"
                          onClick={() => {
                            DeleteComment();
                          }}
                        >
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
                  <p>{MarkDownContainer()}</p>
                </div>
                {EmojiIcon()}
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
              <UpdateComment
                setUpdateComment={setUpdateComment}
                preview={preview}
                setPreview={setPreview}
                markDownBtn={markDownBtn}
                setmarkDownBtn={setmarkDownBtn}
                renderAssigneeData={renderAssigneeData}
                setTargetText={setTargetText}
                renderIssueData={renderIssueData}
                updateCommentNum={updateCommentNum}
                setCreateCommentRender={setCreateCommentRender}
                commentNum={commentNum}
                issueUpdateInputDefaultValue={issueUpdateInputDefaultValue}
                setIssueUpdateInputDefaultValue={
                  setIssueUpdateInputDefaultValue
                }
                setKebabHorizontal={setKebabHorizontal}
                issueUpdateContainer={issueUpdateContainer}
                setIssueUpdateContainer={setIssueUpdateContainer}
                setLoading={setLoading}
              />
            </div>
          </>
        );
      }
    });
  }

  if (issueDetailData === undefined) return <></>;
  return (
    <div className="relative lg:pl-4 lg:ml-10 md:ml-0 md:pl-0 xl:pl-4 xl:ml-10">
      <div className="absolute w-[2px] h-full bg-[rgba(27,31,36,0.15)] md:left-4 -z-20 md:top-0 lg:left-[30px] lg:top-[-15px] xl:left-[30px] xl:top-[-15px]" />
      {Timeline()}
    </div>
  );
}

export default TimeLine;
