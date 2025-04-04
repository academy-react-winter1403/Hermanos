import React from "react";

function Like() {
  return (
    <div className="like-dislike h-[90%] w-[80px] flex flex-row flex-nowrap justify-between">
      <div className="like w-[25px] h-[100%]">
        <img
          src="/images/Path 1703.svg"
          alt=""
          className="like-icon block w-[100%] h-[55%]"
        />
        <span className="like-count text-[10px] block text-center leading-[20px]">
          3
        </span>
      </div>
      <div className="dislike w-[25px] h-[100%]">
        <img
          src="/images/Path 1704.svg"
          alt=""
          className="dislike-icon block w-[100%] h-[55%]"
        />
        <span className="like-count text-[10px] block text-center leading-[20px]">
          5
        </span>
      </div>
      <div className="star-mark w-[25px] h-[100%]">
        <img
          src="/images/Path 1705.svg"
          alt=""
          className="like-icon block w-[100%] h-[55%]"
        />
      </div>
    </div>
  );
}

export default Like;
