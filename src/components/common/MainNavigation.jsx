import React from "react";
import { NavLink } from "react-router-dom";

function MainNavigation({ children, navigationTo }) {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? "p-[5px] text-center rounded-md bg-[rgb(214,231,227)] text-[rgb(20,190,145)] underline font-medium text-[13px] sm:text-xs text-nowrap"
          : "p-[5px] w-[80px] text-center rounded-md font-medium text-[13px] text-nowrap"
      }
      to={navigationTo}
    >
      {children}
    </NavLink>
  );
}

export default MainNavigation;
