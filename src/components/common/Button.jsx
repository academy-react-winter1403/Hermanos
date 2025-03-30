import React from "react";
import { NavLink } from "react-router-dom";

function Button({
  children,
  bg = "",
  fontSize = "18px",
  width,
  height,
  radius,
  borderColor,
  marginX = "auto",
  navigationTo,
}) {
  return (
    <div
      className={`${
        borderColor ? `border border-[${borderColor}]` : ""
      } w-[${width}] h-[${height}] rounded-[${radius}] mx-[${marginX}] bg-[${bg}] text-center text-[${fontSize}] mb-[30px] flex items-center justify-center`}
    >
      <NavLink to={navigationTo}> {children}</NavLink>
    </div>
  );
}

export default Button;
