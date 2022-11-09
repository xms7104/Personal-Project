import React from "react";

import { CheckIcon, XIcon } from "@primer/octicons-react";
function IssueLabelList() {
  return (
    <div
      className={`
          xl:top-[115px] md:max-h[775px]
       md:left-[2.3%] md:bottom-[25%] md:top-[-470px] text-sm md:w-[95.5%] md:h-0 xl:absolute top-0 bottom-0 bg-white border-[1px] border-solid border-gray-300 rounded-md xl:right-[10px] xl:h-fit lg:h-fit md:z-30 xl:z-30 lg:z-30`}
    >
      <ul
        className={`block lg:w-[275px] xl:w-[275px] md:w-full overflow-auto md:h-[722px]`}
      >
        <li className="xl:px-[10px] py-2 text-xs font-semibold flex justify-between items-center">
          <p className={`block`}>Assign labels to this issue</p>
        </li>
        <li className="xl:px-[10px] py-[10px] border-t-[1px] border-solid border-gray-300 md:px-4 md:py-4">
          <input
            type="text"
            defaultValue="Filter labels"
            className={`block xl:py-[5px] px-3 bg-white border-[1px] border-solid border-gray-300 rounded-md text-sm w-full`}
          />
        </li>

        <div className="overflow-y-auto md:max-h[607px] lg:max-h[270px] xl:max-h[270px]">
          <li
            className={`flex xl:py-2 px-2 cursor-pointer border-t-[1px] border-solid border-gray-300 text-xs justify-start items-center md:pl-5 md:pr-2 md:py-4 xl:pl-6 lg:pl-6 lg:relative xl:relative`}
          >
            <div
              className={`block xl:absolute xl:left-[5px] xl:top-[13px] xl:mx-1 lg:mx-1`}
            >
              <CheckIcon size={16} className="mr-2" />
            </div>
            <div className="xl:block items-center justify-start ml-2">
              <div className="xl:flex items-center justify-start">
                <p
                  style={{
                    backgroundColor: `yellow`,
                  }}
                  className="xl:w-[14px] h-[14px] rounded-full mr-2 mt-[2px]"
                />
                <p className="xl:mr-2 font-semibold xl:text-sm">abcde</p>
              </div>
              <p className="xl:text-xs">abcde description</p>
            </div>
            <div className={`block xl:absolute xl:right-0 xl:mx-1 lg:mx-1`}>
              <XIcon size={16} />
            </div>
          </li>
          <li
            className={`flex xl:py-2 px-2 cursor-pointer border-t-[1px] border-solid border-gray-300 text-xs justify-start items-center md:pl-5 md:pr-2 md:py-4 xl:pl-6 lg:pl-6 lg:relative xl:relative`}
          >
            <div
              className={`hidden xl:absolute xl:left-[20px] xl:top-[10px] xl:mx-1 lg:mx-1`}
            >
              <CheckIcon size={16} className="mr-2" />
            </div>
            <div className="xl:block items-center justify-start ml-2">
              <div className="xl:flex items-center justify-start">
                <p
                  style={{
                    backgroundColor: `lightblue`,
                  }}
                  className="xl:w-[14px] h-[14px] rounded-full mr-2 mt-[2px]"
                />
                <p className="xl:mr-2 font-semibold xl:text-sm">test</p>
              </div>
            </div>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default IssueLabelList;
