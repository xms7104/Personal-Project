import React from "react";

import {
  TypographyIcon,
  QuoteIcon,
  CodeIcon,
  LinkIcon,
  HeadingIcon,
  BoldIcon,
  ItalicIcon,
  ListUnorderedIcon,
  ListOrderedIcon,
  TasklistIcon,
  MentionIcon,
  FileMediaIcon,
  CrossReferenceIcon,
  ReplyIcon,
  ChevronDownIcon,
  InfoIcon,
  MarkdownIcon,
} from "@primer/octicons-react";

import UserImg from "../src/img/userImg.png";

function CreateNewIssue({
  preview,
  setPreview,
  issueContainer,
  setIssueContainer,
  issueTitle,
  setIssueTitle,
  setIssue,
  markDownBtn,
  setmarkDownBtn,
  renderAssigneeData,
  renderLabelData,
  setTargetText,
  renderIssueData,
}: {
  preview: boolean;
  setPreview: any;
  issueContainer: string;
  setIssueContainer: any;
  issueTitle: string;
  setIssueTitle: any;
  setIssue: any;
  markDownBtn: boolean;
  setmarkDownBtn: any;
  renderAssigneeData: any;
  renderLabelData: any;
  setTargetText: any;
  renderIssueData: any;
}) {
  return (
    <div className="lg:relative flex justify-evenly items-start xl:flex relative">
      <div className="md:hidden lg:block w-[7.24%] xl:block">
        <img src={UserImg} alt="" className="w-[70%] rounded-full sm:hidden" />
      </div>
      <div className="md:w-full lg:w-[88.7%] xl:w-[88.7%]">
        <div>
          <div className="md:h-auto md:border-[0px] lg:border-[1px] lg:border-solid lg:border-gray-200 lg:rounded-md lg:h-auto lg:mb-2 xl:border-[1px] xl:border-solid xl:border-gray-200 xl:rounded-md xl:h-auto xl:mb-2">
            <div className="md:mb-4 md:px-0 md:py-0 lg:mb-0 lg:px-2 lg:py-2 xl:mb-0 xl:px-2 xl:py-2">
              <input
                type="text"
                defaultValue="Title"
                className="px-3 py-[5px] border-[1px] border-solid border-gray-400 bg-slate-50 rounded-md w-full lg:focus:bg-white lg:focus:border-[#218bff] xl:focus:bg-white xl:focus:border-blue-400"
                onChange={(e) => {
                  setIssueTitle(e.target.value);
                }}
              />
            </div>
            <div className="w-full">
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
                      }}
                    >
                      <HeadingIcon size={16} />
                    </button>
                    <button
                      className="ml-[5px] mr-1 py-2 px-1"
                      onClick={() => {
                        setIssueContainer("**" + issueContainer + "**");
                      }}
                    >
                      <BoldIcon size={16} />
                    </button>
                    <button
                      className="ml-[5px] mr-1 py-2 px-1"
                      onClick={() => {
                        setIssueContainer("_" + issueContainer + "_");
                      }}
                    >
                      <ItalicIcon size={16} />
                    </button>
                    <button
                      className="ml-[5px] mr-1 py-2 px-1"
                      onClick={() => {
                        setIssueContainer("- " + issueContainer);
                      }}
                    >
                      <ListUnorderedIcon size={16} />
                    </button>
                    <button
                      className="ml-[5px] mr-1 py-2 px-1"
                      onClick={() => {
                        setIssueContainer("1. " + issueContainer);
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
                      }}
                    >
                      <HeadingIcon size={16} />
                    </button>
                    <button
                      className="ml-[5px] mr-1 py-2 px-1 lg:py-1 lg:px-1 lg:ml-[6px] lg:mx-1 xl:py-1 xl:px-1 xl:ml-[6px] xl:mx-1"
                      onClick={() => {
                        setIssueContainer("**" + issueContainer + "**");
                      }}
                    >
                      <BoldIcon size={16} />
                    </button>
                    <button
                      className="ml-[5px] mr-1 py-2 px-1 lg:py-1 lg:px-1 lg:ml-[6px] lg:mx-1 xl:py-1 xl:px-1 xl:ml-[6px] xl:mx-1"
                      onClick={() => {
                        setIssueContainer("_" + issueContainer + "_");
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
                      }}
                    >
                      <ListUnorderedIcon size={16} />
                    </button>
                    <button
                      className="ml-[5px] mr-1 py-2 px-1 lg:py-1 lg:px-1 lg:ml-[6px] lg:mx-1 xl:py-1 xl:px-1 xl:ml-[6px] xl:mx-1"
                      onClick={() => {
                        setIssueContainer("1. " + issueContainer);
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
                        }}
                      >
                        <QuoteIcon size={16} />
                      </button>
                      <button
                        className="ml-[5px] py-2 px-2 lg:py-1 lg:px-1 lg:ml-[6px] lg:mx-1 xl:py-1 xl:px-1 xl:ml-[6px] xl:mx-1"
                        onClick={() => {
                          setIssueContainer("`" + issueContainer + "`");
                        }}
                      >
                        <CodeIcon size={16} />
                      </button>
                      <button
                        className="ml-[5px] py-2 px-2 lg:py-1 lg:px-1 lg:ml-[6px] lg:mx-1 xl:py-1 xl:px-1 xl:ml-[6px] xl:mx-1"
                        onClick={() => {
                          setIssueContainer("[" + issueContainer + "](url)");
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
                      }}
                    >
                      <MentionIcon size={16} />
                    </button>
                    <input
                      type="file"
                      className="hidden"
                      accept=".gif,.jpeg,.jpg,.mov,.mp4,.png,.svg,.webm,.csv,.docx,.fodg,.fodp,.fods,.fodt,.gz,.log,.md,.odf,.odg,.odp,.ods,.odt,.pdf,.pptx,.tgz,.txt,.xls,.xlsx,.zip"
                      multiple
                    />
                    <button className="ml-[5px] py-2 px-2 lg:py-1 lg:px-1 lg:ml-[6px] lg:mx-1 xl:py-1 xl:px-1 xl:ml-[6px] xl:mx-1">
                      <FileMediaIcon size={16} />
                    </button>

                    <button className="ml-[5px] py-2 px-2 lg:py-1 lg:px-1 lg:ml-[6px] lg:mx-1 xl:py-1 xl:px-1 xl:ml-[6px] xl:mx-1">
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
                } lg:h-[230px] lg:px-0 lg:py-0 border-[1px] border-solid border-gray-400 bg-slate-100 rounded-md w-full relative md:border-0 px-2 py-2 md:h-[200px] xl:h-[230px] xl:px-0 xl:py-0`}
              >
                <div>
                  <textarea
                    cols="30"
                    rows="10"
                    value={issueContainer}
                    className="relative md:leading-snug md:h-[200px] px-2 py-2 border-[1px] md:border-b-[0px] border-solid border-gray-400 bg-slate-100 rounded-md w-full lg:focus:bg-white lg:border-b-[1px] border-t-[0px] border-r-[0px] border-l-[0px] lg:border-dashed lg:h-[200px] lg:leading-snug lg:rounded-b-[0px] xl:focus:bg-white xl:border-dashed xl:h-[200px] xl:leading-snug xl:rounded-b-[0px]"
                    onChange={(e) => {
                      setIssueContainer(e.target.value);
                    }}
                  />
                </div>
                <ul
                  className={`block absolute z-30 bg-slate-100 top-[30px] left-[30px] border-[1px] border-solid  border-gray-200 rounded-md `}
                ></ul>
                <ul
                  className={`block absolute z-30 bg-slate-100 top-[30px] left-[30px] border-[1px] border-solid  border-gray-200 rounded-md `}
                ></ul>
                <div className="md:hidden lg:absolute bottom-0 flex justify-between items-center w-full px-[6px] py-[6px] lg:h-[30px]  xl:absolute xl:h-[30px]">
                  <div className="xl:h-auto lg:h-auto">
                    <button className="flex justify-between items-center w-full">
                      <p className="lg:text-sm xl:text-sm">
                        Attach files by dragging & dropping, selectimg or
                        pasting them.
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
              </div>
              <div className="md:hidden">
                <div className="flex justify-between items-center mt-2">
                  <div className="md:hidden lg:flex justify-between items-center xl:flex">
                    <MarkdownIcon
                      size={16}
                      className="lg:mr-[2px] xl:mr-[2px]"
                    />
                    <p className="lg:text-xs xl:text-xs">
                      Styling with Markdown is supported
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t-[1px] border-solid border-gray-200 lg:mt-0 lg:pt-0 xl:mt-0 xl:pt-0">
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

export default CreateNewIssue;
