import React from "react";

import { useState } from "react";

import { CheckIcon } from "@primer/octicons-react";

function IssueList() {
  const [labelMenu, setLabelMenu] = useState(false);
  const [clearSearch, setClearSearch]: any = useState();
  const [labeslSelectName, setLabeslSelectName] = useState<any>([]);
  const [mobileMenuBG, setMobileMenuBG] = useState(false);
  const [labeslSelectClose, setLabeslSelectClose] = useState(true);

  function LabelsSelectInput(e: any) {
    if (e.target.value === "") {
      setLabeslSelectClose(true);
    } else {
      setLabeslSelectClose(false);
    }
  }

  function LabelsSelectInputClick(e: any) {
    if (e.key === "Enter") {
      setClearSearch(true);
      setLabelMenu(false);
    }
  }

  return (
    <ul
      className={`block w-[300px] h-[446px] absolute top-[25px] left-[20px] bg-white border-[1px] border-solid border-gray-400 rounded-lg sm:fixed sm:top-[15%] sm:left-[6.5%] px-4 text-sm sm:w-[87%] z-10 sm:h-auto`}
    >
      <li className="px-4 py-[7px] text-xs font-semibold flex justify-between items-center border-b-[1px] border-solid border-gray-400 sm:font-semibold sm:px-4 sm:py-4 sm:w-full">
        <p>Filter by label</p>
        <p
          onClick={() => {
            setLabelMenu(false);
            setLabeslSelectName([]);
            setMobileMenuBG(false);
          }}
        >
          X
        </p>
      </li>
      <li className="px-2 py-2 border-b-[1px] border-solid border-gray-400 sm:px-4 sm:py-4 sm:w-full">
        <input
          type="text"
          defaultValue="Filter labels"
          className="py-[5px] px-3 bg-white border-[1px] border-solid border-gray-400 rounded-lg text-xs w-full sm:font-semibold sm:w-full"
          onChange={(e) => {
            LabelsSelectInput(e);
          }}
          onKeyDown={(e) => {
            LabelsSelectInputClick(e);
          }}
        />
      </li>
      <li className="py-[7px] px-4 text-xs border-b-[1px] border-solid border-gray-400 flex justify-start items-center sm:font-semibold sm:px-4 sm:py-4 sm:w-full">
        <div className="invisible">
          <CheckIcon size={16} className="mr-2" />
        </div>
        Unlabeled
      </li>
      <div className="overflow-y-auto overflow-x-hidden h-[320px]">
        <li
          className={`
          flex relative cursor-pointer py-[7px] border-b-[1px] border-solid border-gray-400 text-xs justify-start items-center w-[266px] sm:font-semibold sm:py-4 sm:w-full sm:pl-11 pr-4`}
          onClick={() => {
            setClearSearch(true);
            setLabelMenu(false);
            setMobileMenuBG(false);
          }}
        >
          <div className={`block absolute`}>
            <CheckIcon size={16} className="mr-2" />
          </div>
          <div className="flex items-starts ml-7">
            <p
              style={{
                backgroundColor: `pick`,
              }}
              className="bg-[#BFDADC] border-b-[1px] border-solid border-gray-400 rounded-full w-4 h-4 mr-2"
            />
            <p>
              Label Name
              <br />
              Label Description
            </p>
          </div>
        </li>
        <li
          className={`
          flex relative cursor-pointer py-[7px] border-b-[1px] border-solid border-gray-400 text-xs justify-start items-center w-[266px] sm:font-semibold sm:py-4 sm:w-full sm:pl-11 pr-4`}
          onClick={() => {
            setClearSearch(true);
            setLabelMenu(false);
            setMobileMenuBG(false);
          }}
        >
          <div className={`hidden absolute`}>
            <CheckIcon size={16} className="mr-2" />
          </div>
          <div className="flex items-starts ml-7">
            <p className="bg-[yellow] border-b-[1px] border-solid border-gray-400 rounded-full w-4 h-4 mr-2" />
            <p>
              Label Name 2
              <br />
              Label Description 2
            </p>
          </div>
        </li>
      </div>
    </ul>
  );
}

export default IssueList;
