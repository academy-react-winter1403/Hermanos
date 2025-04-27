import React from "react";
import { NavLink } from "react-router-dom";

function ReusablePanelNavigation({ children, navIcon, to, extraStyle }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? `w-[75%] h-[50px] mx-[auto]  rounded-[45px] mt-[13px] flex flex-row flex-nowrap justify-between bg-[rgba(21,139,104,1)] text-[rgba(255,255,255,1)] ${extraStyle}`
          : `w-[75%] h-[50px] mx-[auto]  rounded-[45px] mt-[13px] flex flex-row flex-nowrap justify-between ${extraStyle} text-[rgba(21,139,104,1)]`
      }
    >
      <div className="nav w-[70%] h-[100%] text-end rounded-l-[45px] leading-[50px] font-[500] text-[19px]">
        {children}
      </div>
      <div className="nav-icon w-[20%] h-[100%] rounded-full bg-[rgba(21,139,104,1)]">
        <img
          src={navIcon}
          className="mx-[auto] mt-[13px] w-[50%] h-[50%]"
          alt=""
        />
      </div>
    </NavLink>
  );
}

export default ReusablePanelNavigation;
