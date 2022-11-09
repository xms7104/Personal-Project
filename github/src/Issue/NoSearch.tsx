import React from "react";

import issueOpened from "../img/issueOpened.svg";

function NoSearch() {
  return (
    <div className={`block px-10 py-20 text-center`}>
      <img src={issueOpened} alt="" className=" my-0 mx-auto" />
      <p className="my-4 text-2xl font-semibold">
        No results matched your search.
      </p>
      <p className="mb-[10px]">
        You could search
        <a href="#" className="text-[#0969da]">
          all of GitHub
        </a>
        or try an
        <a href="#" className="text-[#0969da]">
          advanced search
        </a>
      </p>
    </div>
  );
}

export default NoSearch;
