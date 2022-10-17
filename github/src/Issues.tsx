import React from "react";

import { IssueOpenedIcon, CommentIcon } from "@primer/octicons-react";

import UserImg from "../src/img/userImg.png";

function IssueLabelList() {
  return (
    <div
      style={{
        borderBottom: "1px revert lightgray",
        borderRight: "1px revert lightgray",
        borderLeft: "1px revert lightgray",
        borderRadius: "5px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "16px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "start",
          paddingLeft: "16px",
        }}
      >
        <div
          style={{
            paddingLeft: "8px",
            paddingRight: "8px",
          }}
        >
          <input
            type="checkbox"
            style={{
              display: "flex",
            }}
          />
        </div>

        <div
          style={{
            paddingTop: "8px",
            paddingLeft: "16px",
          }}
        >
          <IssueOpenedIcon size={16} fill="green" />
        </div>
        <div
          style={{
            display: "block",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "8px 8px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              height: "25px",
            }}
          >
            <p
              style={{
                fontSize: "14px",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              test0930
            </p>
            <button
              style={{
                backgroundColor: `yellow`,
                borderRadius: "15px",
                padding: "7px 0px",
                fontWeight: "600",
                fontSize: "12px",
                height: "20px",
                width: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "4px",
              }}
            >
              abcde
            </button>
          </div>
          <p
            style={{
              fontSize: "12px",
              marginTop: "4px",
            }}
          >
            #1 opend 2 hour ago by Xie-MS
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          alignItems: "center",

          paddingRight: "16px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            width: "87.83px",
          }}
        >
          <img
            style={{
              borderRadius: "100%",
              width: "30%",
            }}
            src={UserImg}
            alt="UserImg"
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            width: "70px",
            cursor: "pointer",
            marginLeft: "8px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              width: "70px",
              cursor: "pointer",
              marginLeft: "8px",
            }}
          >
            <CommentIcon size={16} className="hover:fill-[#0969da]" />
            <p>2</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IssueLabelList;
