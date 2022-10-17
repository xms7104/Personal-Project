import React from "react";
import { useState } from "react";
import { CheckIcon } from "@primer/octicons-react";
import styled from "styled-components";

function IssueLabelList() {
  return (
    <ul
      style={{
        listStyleType: "none",
        width: "400px",
        border: "1px solid lightgray",
        borderRadius: "5px",
        padding: "0px",
        marginLeft: "40px",
        paddingLeft: "16px",
      }}
      className="block w-[300px] h-[446px] absolute top-[25px] left-[-7px] bg-white border-[1px] border-solid border-gray-400 rounded-lg sm:sm:fixed sm:top-[25%] sm:left-[6.5%] px-4 text-sm sm:w-[87%] z-10"
    >
      <li
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        className="px-4 py-[7px] text-xs font-semibold border-b-[1px] border-solid border-gray-400 sm:font-semibold sm:px-4 sm:py-4"
      >
        <p>Filter by label</p>
        <p
          style={{
            marginRight: "16px",
          }}
        >
          X
        </p>
      </li>
      <li className="px-2 py-2 border-b-[1px] border-solid border-gray-400 sm:px-4 py-4">
        <input
          type="text"
          defaultValue="Filter labels"
          style={{ width: "95%" }}
          className="py-[5px] px-3 bg-white border-[1px] border-solid border-gray-400 rounded-lg text-xs w-full sm:font-semibold sm:w-full"
        />
      </li>
      <li
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          marginTop: "16px",
        }}
        className="py-[7px] px-4 text-xs border-b-[1px] border-solid border-gray-400 flex justify-start items-center sm:font-semibold px-4 sm:py-4"
      >
        <div
          className="invisible"
          style={{
            marginRight: "7px",
            visibility: "hidden",
          }}
        >
          <CheckIcon size={16} className="mr-2" />
        </div>
        Unlabeled
      </li>
      <div className="overflow-y-auto h-[320px]">
        <li
          style={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            marginTop: "0px",
          }}
          className={`
          flex relative py-[7px] border-b-[1px] border-solid border-gray-400 text-xs justify-start items-center w-[266px] sm:font-semibold px-4 sm:py-4`}
        >
          <div
            style={{
              marginRight: "7px",
              visibility: "hidden",
            }}
            className={`block absolute left-3 `}
          >
            <CheckIcon size={16} className="mr-2" />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "start",
              marginTop: "16px",
            }}
          >
            <p
              style={{
                background: "#BFDADC",
                width: "16px",
                height: "16px",
                border: "1px solid lightgary",
                borderRadius: "50%",
                marginRight: "8px",
              }}
            />
            <p
              style={{
                marginTop: "14px",
              }}
            >
              test
              <br />
              test0930
            </p>
          </div>
        </li>

        <li
          style={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            marginTop: "0px",
          }}
          className={`
          flex relative py-[7px] border-b-[1px] border-solid border-gray-400 text-xs justify-start items-center w-[266px] sm:font-semibold px-4 sm:py-4`}
        >
          <div
            style={{
              marginRight: "7px",
            }}
            className={`block absolute left-3 `}
          >
            <CheckIcon size={16} className="mr-2" />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "start",
            }}
          >
            <p
              style={{
                background: "yellow",
                width: "16px",
                height: "16px",
                border: "1px solid lightgary",
                borderRadius: "50%",
                marginRight: "8px",
              }}
            />
            <p
              style={{
                marginTop: "14px",
              }}
            >
              NOOOO
            </p>
          </div>
        </li>
      </div>
    </ul>
  );
}

export default IssueLabelList;
