import React from "react";
import LikeIcon from "./LikeIcon";
import DisLikeIcon from "./DisLikeIcon";
import StarMark from "./StarMark";
import { useLocation } from "react-router-dom";
import FlashBackIcon from "./FlashBackIcon";

function Like() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      {location.pathname === "/news/:id/user-opinion" ? (
        <div className="like-dislike h-[90%] w-[80px] flex flex-row flex-nowrap justify-between">
          <FlashBackIcon />
          <DisLikeIcon />
          <LikeIcon />
        </div>
      ) : location.pathname === "/courses/:id/users-opinion" ? (
        <div className="like-dislike h-[90%] w-[80px] flex flex-row flex-nowrap justify-between">
          <FlashBackIcon />
          <DisLikeIcon />
          <LikeIcon />
        </div>
      ) : (
        <div className="like-dislike h-[90%] w-[80px] flex flex-row flex-nowrap justify-between">
          <LikeIcon />
          <DisLikeIcon />
          <StarMark />
        </div>
      )}
    </>
  );
}

export default Like;
