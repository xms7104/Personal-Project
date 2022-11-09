import React, { useState } from "react";
import UserImg from "../img/userImg.png";

import {
  KebabHorizontalIcon,
  SmileyIcon,
  TriangleDownIcon,
} from "@primer/octicons-react";

function Comment() {
  const [kebabHorizontal, setKebabHorizontal] = useState(false);

  return (
    <div
      className={`flex lg:justify-start lg:items-start xl:justify-start xl:items-start mt-2 ml-2`}
    >
      <div className="md:hidden lg:w-[7.5%] xl:w-[7.5%]">
        <img
          src={UserImg}
          alt=""
          className="rounded-full md:w-[3%] lg:w-[60%] xl:w-[60%]"
        />
      </div>
      <div className="border-[1px] border-solid border-[rgba(84,174,255,0.4)] rounded-md mb-4 md:w-full lg:w-[90%] xl:w-[90%]">
        <div className="h-[37px] flex justify-between items-center px-4 border-b-[1px] border-solid border-[rgba(27,31,36,0.15)] bg-[#ddf4ff]">
          <div className="flex justify-between items-center">
            <p className="text-sm font-semibold mr-2">Xie-MS</p>
            <p className="flex justify-between items-center text-sm text-[#57606a]">
              commented <p className="text-sm mx-1"> 3 days ago</p>．
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
              <button className="w-[26px] h-[26px] bg-transparent rounded-full">
                <SmileyIcon size={16} />
              </button>
            </div>
            <div className="relative">
              <div
                className="hover:cursor-pointer"
                onClick={() => {
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
                  kebabHorizontal ? "block" : "hidden"
                } absolute right-0 top-[25px] w-[183px] bg-white border-[1px] border-solid border-[#d0d7de] justify-start items-center rounded-md z-20`}
              >
                <li>
                  <p className="pl-4 pr-2 py-1 text-xs h-[29px]">Copy link</p>
                  <p className="pl-4 pr-2 py-1 text-xs h-[29px]">Quote reply</p>
                </li>
                <div className="my-2 border-t-[1px] border-solid border-[#d0d7de]" />
                <li className="pl-4 pr-2 py-1 text-xs h-[29px]">Edit</li>
                <div className="my-2 border-t-[1px] border-solid border-[#d0d7de]" />
                <li className="pl-4 pr-2 py-1 text-xs h-[29px]">
                  Report content
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-sm px-4 py-4 text-[#24292f]">
          <p>Issue Comment Container</p>
        </div>
        <div className="mb-4 ml-4 flex justify-start items-center">
          <button
            className={`flex h-[24px] w-[40.476px] px-1 mr-2 border-[1px] border-solid border-[#d0d7de] rounded-[100px] bg-white text-xs justify-start items-center`}
          >
            👍<p className="mx-1 ml-[2px]">7</p>
          </button>

          <button
            className={`flex h-[24px] w-[40.476px] px-1 mr-2 border-[1px] border-solid border-[#d0d7de] rounded-[100px] bg-white text-xs justify-start items-center`}
          >
            👎<p className="mx-1 ml-[2px]">2</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Comment;
