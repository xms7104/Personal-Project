import React from "react";

import { useState } from "react";

import UserImg from "../img/userImg.png";

import {
  CheckCircleIcon,
  CircleSlashIcon,
  CommentIcon,
  IssueOpenedIcon,
} from "@primer/octicons-react";

function Issue() {
  const [noSearch, setNoSearch] = useState(false);

  return (
    <div className="contents justify-start items-center px-4 py-2 bg-white border-[1px] border-solid border-gray-200 rounded-b-md h-[62.5px] md:h-[83.5px] sm:text-sm">
      <div
        className={`${
          noSearch ? "hidden" : "flex"
        } justify-between items-center border-b-[1px] border-r-[1px] border-l-[1px] border-slate-200 border-solid`}
      >
        <div className="flex justify-start items-start pl-4">
          <div className="py-2">
            <input type="checkbox" className="flex md:hidden" />
          </div>
          <div className={`hidden pt-2 pl-4`}>
            <IssueOpenedIcon size={16} fill="green" />
          </div>
          <div className={`block pt-2 pl-4`}>
            <CheckCircleIcon size={16} fill="purple" />
          </div>
          <div className={`hidden pt-2 pl-4`}>
            <CircleSlashIcon size={16} fill="gray" />
          </div>
          <div className="block justify-center items-center px-2 py-2">
            <div className="flex justify-start items-center md:block">
              <p className="text-base font-semibold hover:text-[#0969da] hover:cursor-pointer">
                Issue 1
              </p>
              <button
                style={{
                  backgroundColor: `yellow`,
                }}
                className={`rounded-xl px-[7px] font-semibold text-sm ml-1 md:text-xs`}
              >
                Label 1
              </button>
            </div>
            <p className="mt-1 text-xs">2 days ago by Xie-MS</p>
          </div>
        </div>
        <div className="flex justify-end items-center pt-2 pr-4">
          <div className="flex justify-end items-center w-[87.83px]">
            <img
              src={UserImg}
              alt=""
              className="w-[30%] rounded-full sm:hidden"
            />
          </div>

          <div className="flex justify-end items-center w-[70px] hover:text-[#0969da] hover:cursor-pointer ml-2 sm:hidden">
            <CommentIcon size={16} className="hover:fill-[#0969da]" />2
          </div>
        </div>
      </div>
    </div>
  );
}

export default Issue;
