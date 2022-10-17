import React from "react";

import { useState, useEffect, useRef } from "react";

import { CheckIcon } from "@primer/octicons-react";

import UserImg from "../src/img/userImg.png";

import api from "./api";
import { url } from "inspector";

function AssigneePage({
  listClose,
  setListClose,
  assigneelist,
  setAssigneeList,
}: {
  listClose: boolean;
  setListClose: any;
  assigneelist: boolean;
  setAssigneeList: any;
}) {
  const [renderData, setRenderData]: any = useState([]);

  useEffect(() => {
    async function getAssigneeList() {
      const data = await api.getIssuesAssignee();
      setRenderData(data);
    }
    getAssigneeList();
  }, []);

  function AssigneeSelect() {
    return renderData.map((_item: any, AssigneeIndex: number) => {
      return (
        <li className="xl:py-2 px-2 border-t-[1px] border-solid border-gray-300 text-xs flex justify-start items-center md:pl-5 md:pr-2 md:py-4">
          <div>
            <CheckIcon size={16} className="mr-2" />
          </div>
          <div className="xl:flex items-center justify-start">
            <img
              src={`${renderData[AssigneeIndex].avatar_url}`}
              alt=""
              className="xl:w-[9%] md:w-[5%] rounded-full mr-2"
            />
            <div className="xl:flex items-center justify-center">
              <p className="xl:mr-2 font-semibold xl:text-sm">
                {renderData[AssigneeIndex].login}
              </p>
            </div>
          </div>
        </li>
      );
    });
  }

  return (
    <ul
      className={`${
        assigneelist ? "block" : "hidden"
      } md:left-[2.3%] md:bottom-[25%] md:top-[-470px] text-sm md:w-[95.5%] xl:absolute top-0 bottom-0 bg-white border-[1px] border-solid border-gray-300 rounded-md w-[275px] xl:top-[45px] right-0 lg:right-0 xl:h-[fit-content] lg:h-[fit-content] md:z-30 md:h-[775px] lg:z-20 xl:z-20`}
    >
      <li className="xl:px-[10px] py-2 text-xs font-semibold flex justify-between items-center">
        <p>Assign up to 10 people to this issue</p>
        <p
          onClick={() => {
            setListClose(false);
            setAssigneeList(false);
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
      <li className="xl:bg-slate-100 xl:py-2 xl:px-[10px] text-xs border-t-[1px] border-solid xl:border-gray-300 flex justify-start items-center md:px-[10px] md:bg-slate-100 md:font-semibold">
        Suggeations
      </li>
      {AssigneeSelect()}
    </ul>
  );
}

export default AssigneePage;
