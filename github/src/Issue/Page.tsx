import React from "react";

import { useState } from "react";

import { ChevronLeftIcon, ChevronRightIcon } from "@primer/octicons-react";

function Page() {
  const [page, setPage] = useState(1);
  const [firstpage, setFirstpage] = useState(false);
  const [endpage, setEndpage] = useState(true);

  const [sortSelect, setsortSelect]: any = useState("");

  return (
    <div className="visible my-4 flex justify-center items-center">
      <button
        className="flex justify-start items-center px-[10px] py-[5px]"
        onClick={() => {
          setPage(page - 1);
          setsortSelect(page - 1);

          if (page <= 2) {
            setEndpage(true);
            setFirstpage(false);
          } else if (page > 2) {
            setFirstpage(true);
          }
        }}
      >
        <ChevronLeftIcon
          size={16}
          className={`fill-${firstpage ? "[#0969da]" : "[#8c959f]"}`}
        />
        <p className={`text-${firstpage ? "[#0969da]" : "[#8c959f]"}`}>
          previous
        </p>
      </button>
      <button
        className="flex justify-start items-center px-[10px] py-[5px]"
        onClick={() => {
          setPage(page + 1);
          setsortSelect(page + 1);
          setFirstpage(true);
          if (page >= 2) {
            setEndpage(false);
          }
        }}
      >
        <p className={`text-${endpage ? "[#0969da]" : "[#8c959f]"}`}>Next</p>
        <ChevronRightIcon
          size={16}
          className={`fill-${endpage ? "[#0969da]" : "[#8c959f]"}`}
        />
      </button>
    </div>
  );
}

export default Page;
