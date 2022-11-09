import React from "react";

import {
  CheckCircleIcon,
  IssueOpenedIcon,
  SkipIcon,
} from "@primer/octicons-react";

function State(data: any) {
  return (
    <div className="flex items-center justify-start pb-2 mb-4">
      <div
        className={`${
          data.state === "open" && data.reason === "reopened"
            ? "flex"
            : "hidden"
        } items-center justify-start pb-2 mb-4`}
      >
        <button className="mr-2 py-[5px] px-3 border-[1px] border-solid border-[rgba(27,31,36,0.15)] bg-[#2da44e] text-white font-medium rounded-3xl">
          <IssueOpenedIcon size={16} className="mr-1" />
          {data.state}
        </button>
        <div className=" flex items-center justify-start">
          <a href="#" className="text-[#57606a] font-semibold">
            Xie-MS
          </a>
          <p className="text-[#57606a] text-sm ml-1 flex justify-start items-center">
            opened this issue <p className="text-sm mx-1"> 3 days ago</p> · 2
            comments
          </p>
        </div>
      </div>

      <div
        className={`${
          data.state === "closed" && data.reason === "not_planned"
            ? "flex"
            : "hidden"
        } items-center justify-start pb-2 mb-4`}
      >
        <button className="mr-2 py-[5px] px-3 border-[1px] border-solid border-[rgba(27,31,36,0.15)] bg-[#6e7781] text-white font-medium rounded-3xl">
          <SkipIcon size={16} className="mr-1" />
          {data.state}
        </button>
        <div className="flex items-center justify-start">
          <a href="#" className="text-[#57606a] font-semibold">
            Xie-MS
          </a>
          <p className="text-[#57606a] text-sm ml-1 flex justify-start items-center">
            opened this issue <p className="text-sm mx-1"> 3 days ago</p> · 2
            comments
          </p>
        </div>
      </div>
      <div
        className={`${
          data.state === "closed" && data.reason === "completed"
            ? "flex"
            : "hidden"
        } items-center justify-start pb-2 mb-4`}
      >
        <button className="mr-2 py-[5px] px-3 border-[1px] border-solid border-[rgba(27,31,36,0.15)] bg-[#8250df] text-white font-medium rounded-3xl">
          <CheckCircleIcon size={16} className="mr-1" />
          {data.state}
        </button>
        <div className="flex items-center justify-start">
          <a href="#" className="text-[#57606a] font-semibold">
            Xie-MS
          </a>
          <p className="text-[#57606a] text-sm ml-1 flex justify-start items-center">
            opened this issue <p className="text-sm mx-1"> 3 days ago</p> · 2
            comments
          </p>
        </div>
      </div>
    </div>
  );
}

export default State;
