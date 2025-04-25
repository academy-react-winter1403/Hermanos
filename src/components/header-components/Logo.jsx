import React from "react";
import LogoIcon from "./LogoIcon";
import { useLocation } from "react-router-dom";

function Logo() {
  const location = useLocation();
  if (location.pathname === "/")
    return (
      <div className="logo-container w-[250px] h-[100%] flex flex-nowrap flex-row items-center  justify-between text-center pb-6 pl-30 mt-[10px] sm:mt-[15px] ml-5 m-0 sm:mr-[3px] lg:mr-3 ">
        <div className="logo-brand relative right-3 flex w-[100%] h-[100%] text-end">
          <h1 className="text-base hidden sm:block lg:text-xl font-semibold text-nowrap ">
            آکادمی اچ وان
          </h1>
        </div>

        <LogoIcon />
      </div>
    );
  else
    return (
      <div className="logo-container w-[250px] h-[100%] flex flex-nowrap flex-row items-center  justify-between text-center pb-6 pl-30 mt-[25px] sm:mt-[20px] sm:mr-[3px] lg:mr-3 ">
        <div className="logo-brand flex w-[100%] h-[100%] text-end mt-4 sm:mt-6 lg:mt-4 ">
          <h1 className="text-base hidden relative right-3 sm:block lg:text-xl font-semibold text-nowrap ">
            آکادمی اچ وان
          </h1>
        </div>

        <LogoIcon />
      </div>
    );
}

export default Logo;
