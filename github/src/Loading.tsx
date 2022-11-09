import React from "react";

import LoadingImg from "./img/loading.gif";

function LoadingPage() {
  return (
    <div>
      <img
        src={LoadingImg}
        alt="LoadingImg"
        className="flex justify-center items-center mx-auto my-auto"
      />
    </div>
  );
}

export default LoadingPage;
