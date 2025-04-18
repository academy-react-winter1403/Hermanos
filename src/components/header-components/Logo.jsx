import React from "react";
import LogoIcon from "./LogoIcon";

function Logo() {
  return (
    <div className="logo-container w-[250px] h-[100%] flex flex-nowrap flex-row items-center justify-between md:mr-[-45px] mt-[20px] sm:mr-[-30px]">
      <div className="logo-brand w-[70%] h-[100%] text-end leading-[50px] text-lg">
        <h1 className=" mr-[12px] p-[0]">آکادمی اچ وان</h1>
      </div>
      <LogoIcon />
    </div>
  );
}

export default Logo;
