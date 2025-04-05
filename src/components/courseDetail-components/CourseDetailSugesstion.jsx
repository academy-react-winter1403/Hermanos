import React from "react";
import Sugesstion from "./Sugesstion";
import Button from "../common/Button";
import { NavLink, Outlet } from "react-router-dom";

function CourseDetailSugesstion() {
  return (
    <div className="sugesstion w-[1000px] mt-[20px] rounded-[30px] pb-[30px] pt-[30px] bg-[rgba(255,255,255,1)] px-[70px]">
      <div className="sugesstion-btn-holder mb-[50px] w-[100%] h-[100px] rounded-[15px] flex flex-row flex-nowrap justify-center">
        <NavLink
          to="/courses/:id/sign-opinion"
          className={({ isActive }) =>
            isActive
              ? "text-center bg-[rgba(164,246,222,1)] relative z-[2] w-[50%] h-[100%] leading-[90px] text-[22px] rounded-l-[15px]"
              : "text-center w-[50%] relative z-[1] h-[100%] leading-[90px] text-[22px] border border-[3px] border-[rgba(164,246,222,1)] rounded-l-[15px]"
          }
        >
          ثبت نظر
        </NavLink>
        <NavLink
          to="/courses/:id/users-opinion"
          className={({ isActive }) =>
            isActive
              ? "text-center bg-[rgba(164,246,222,1)] left-[-10px] relative z-[2] w-[50%] h-[100%] leading-[90px] text-[22px] rounded-tr-[15px] rounded-bl-[15px]"
              : "text-center w-[50%] relative left-[-10px] z-[1] h-[100%] leading-[90px] text-[22px] border border-[3px] border-[rgba(164,246,222,1)] rounded-tr-[15px] rounded-bl-[15px]"
          }
        >
          نظرات کاربران
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default CourseDetailSugesstion;
