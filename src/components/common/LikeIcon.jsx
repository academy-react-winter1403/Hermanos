import React from "react";

function LikeIcon({ likeCount }) {
  return (
    <div className="like w-[25px] h-[100%]">
      <img
        src="/images/Path 1703.svg"
        alt=""
        className="like-icon block w-[100%] h-[55%]"
      />
      <span className="like-count text-[10px] block text-center leading-[20px]">
        {likeCount}
      </span>
    </div>
  );
}

export default LikeIcon;
