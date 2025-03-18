import React from "react";
import { NavLink } from "react-router-dom";

function MainNavigation({ children, navigationTo }) {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? "p-[5px] text-center rounded-md bg-[rgb(214,231,227)] text-[rgb(20,190,145)] font-medium text-[13px]"
          : "p-[5px] w-[90px] text-center rounded-md font-medium text-[13px]"
      }
      to={navigationTo}
    >
      {children}
    </NavLink>
  );
}

export default MainNavigation;
