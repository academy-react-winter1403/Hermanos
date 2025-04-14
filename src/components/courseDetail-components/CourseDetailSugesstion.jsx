import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function CourseDetailSugesstion({ signTo, userTo, holderStyle, btnStyle }) {
  return (
    <div className={`sugesstion ${holderStyle}`}>
      <div className={`sugesstion-btn-holder ${btnStyle}`}>
        <NavLink
          to={signTo}
          className={({ isActive }) =>
            isActive
              ? "text-center bg-[rgba(164,246,222,1)] relative z-[2] w-[50%] h-[100%] leading-[90px] text-[22px] rounded-l-[15px]"
              : "text-center w-[50%] relative z-[1] h-[100%] leading-[90px] text-[22px] border border-[3px] border-[rgba(164,246,222,1)] rounded-l-[15px]"
          }
        >
          ثبت نظر
        </NavLink>
        <NavLink
          to={userTo}
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
