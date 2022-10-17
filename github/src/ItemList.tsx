import React from "react";

import { useState } from "react";
import { CheckIcon, GearIcon } from "@primer/octicons-react";

function ItemListData({ data }: { data: any }) {
  const [Close, setClose] = useState(false);
  function Assignee() {
    return data.map((_item: any, Index: number) => {
      return (
        <div className="overflow-y-auto md:max-h[607px] lg:max-h[270px] xl:max-h[270px]">
          <li className="xl:py-2 px-2 border-t-[1px] border-solid border-gray-300 text-xs justify-start items-center md:pl-5 md:pr-2 md:py-4 xl:pl-6 lg:pl-6 lg:relative xl:relative">
            <div
              className={`${
                data[Index].name.includes("Xie-MS") ? "block" : "hidden"
              } absolute xl:left-0 xl:mx-1 lg:mx-1`}
            >
              <CheckIcon size={16} className="mr-2" />
            </div>
            <div className="xl:flex items-center justify-start">
              <img
                src={`${data[Index].avatar_url}`}
                alt=""
                className="xl:w-[9%] md:w-[5%] rounded-full mr-2"
              />
              <div className="xl:flex items-center justify-center">
                <p className="xl:mr-2 font-semibold xl:text-sm">
                  {data[Index].name}
                </p>
              </div>
            </div>
          </li>
        </div>
      );
    });
  }

  return (
    <>
      <div className="md:pt-4 lg:pt-0 xl:pt-0 xl:relative w-[270px]">
        <div className=" xl:flex justify-between items-center mb-[10px] relative">
          <p className="py-1 text-xs mb-1 hover:text-[#0969da]">Assignees</p>
          <div
            className="pt-4 cursor-pointer xl:mt-[2px] xl:pt-0 lg:mt-[2px] lg:pt-0"
            onClick={() => {
              setClose(true);
            }}
          >
            <GearIcon size={16} />
          </div>
        </div>
        <p className="text-xs flex justify-start items-center">
          No one—<p className="hover:text-[#0969da]">assign yourself</p>
        </p>
      </div>
      <div
        className={`${
          Close ? "block" : "hidden"
        } xl:top-[40px] md:h-[775px] lg:z-20 xl:z-20 md:top-[-100px] md:left-[2.3%] md:bottom-[25%] text-sm md:w-[95.5%] xl:absolute top-0 bottom-0 bg-white border-[1px] border-solid border-gray-300 rounded-md xl:right-[10px] xl:h-fit lg:h-fit md:z-30 absolute xl:bottom-0 xl:left-0 xl:w-[277px]`}
      >
        <ul className="lg:w-[275px] xl:w-[275px] md:w-full overflow-auto md:h-[722px]">
          <li className="xl:px-[10px] py-2 text-xs font-semibold flex justify-between items-center">
            <p className="block">Assign up to 10 people to this issue</p>
            <p
              onClick={() => {
                setClose(false);
              }}
            >
              X
            </p>
          </li>
          <li className="xl:px-[10px] py-[10px] border-t-[1px] border-solid border-gray-300 md:px-4 md:py-4">
            <input
              type="text"
              defaultValue="Type or choose a user"
              className="xl:py-[5px] px-3 bg-white border-[1px] border-solid border-gray-300 rounded-md text-sm w-full"
            />
          </li>
          <li className="block xl:bg-slate-100 xl:py-2 xl:px-[10px] text-xs border-t-[1px] border-solid xl:border-gray-300 flex justify-start items-center md:px-[10px] md:bg-slate-100 md:font-semibold">
            Suggeations
          </li>
          {Assignee()}
        </ul>
      </div>
    </>
  );
}

export default ItemListData;
