import React from "react";

import { useState, useEffect, useRef } from "react";

import { CheckIcon } from "@primer/octicons-react";

import api from "./api";

function AssigneePage({
  setListClose,
  labelList,
  setLabelList,
}: {
  setListClose: any;
  labelList: boolean;
  setLabelList: any;
}) {
  const [renderData, setRenderData]: any = useState([]);

  useEffect(() => {
    async function getAssigneeList() {
      const data = await api.getLabels();
      setRenderData(data);
    }
    getAssigneeList();
  }, []);

  console.log(renderData);

  function LabelsSelect() {
    return renderData.map((_item: any, LabelIndex: number) => {
      return (
        <li className="xl:py-2 px-2 border-t-[1px] border-solid border-gray-300 text-xs flex justify-start items-center md:pl-5 md:pr-2 md:py-4">
          <div>
            <CheckIcon size={16} className="mr-2" />
          </div>
          <div className="xl:block items-center justify-start">
            <div className="xl:flex items-center justify-center">
              <p
                style={{
                  backgroundColor: `#${renderData[LabelIndex].color}`,
                }}
                className="xl:w-[14px] h-[14px] rounded-full mr-2 mt-[2px]"
              />
              <p className="xl:mr-2 font-semibold xl:text-sm">
                {renderData[LabelIndex].name}
              </p>
            </div>
            <p className="xl:text-xs">{renderData[LabelIndex].description}</p>
          </div>
        </li>
      );
    });
  }

  return (
    <ul
      className={`${
        labelList ? "block" : "hidden"
      } md:left-[2.3%] md:bottom-[25%] md:top-[-470px] text-sm md:w-[95.5%] xl:absolute top-0 bottom-0 bg-white border-[1px] border-solid border-gray-300 rounded-md w-[275px] xl:top-[65px] xl:right-0  xl:h-[fit-content] lg:h-[fit-content] md:z-30`}
    >
      <li className="xl:px-[10px] py-2 text-xs font-semibold flex justify-between items-center">
        <p>Assign labels to this issue</p>
        <p
          onClick={() => {
            setListClose(false);
            setLabelList(false);
          }}
        >
          X
        </p>
      </li>
      <li className="xl:px-[10px] py-[10px] border-t-[1px] border-solid border-gray-300 md:px-4 md:py-4">
        <input
          type="text"
          defaultValue="Filter labels"
          className="xl:py-[5px] px-3 bg-white border-[1px] border-solid border-gray-300 rounded-md text-sm w-full"
        />
      </li>
      <div className="overflow-y-auto md:h-[607px] lg:h-[270px] xl:h-[270px]">
        {LabelsSelect()}
      </div>
      <li></li>
    </ul>
  );
}

export default AssigneePage;
