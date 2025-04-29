import React from "react";

function DisLikeIcon({ dissLikeCount }) {
  return (
    <div className="dislike w-[25px] h-[100%]">
      <img
        src="/images/Path 1704.svg"
        alt=""
        className="dislike-icon block w-[100%] h-[55%]"
      />
      <span className="like-count text-[10px] block text-center leading-[20px]">
        {dissLikeCount}
      </span>
    </div>
  );
}

export default DisLikeIcon;
