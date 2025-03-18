import React from "react";

function Logo() {
  return (
    <div className="logo-container w-[250px] h-[100%] flex flex-nowrap flex-row items-center justify-between">
      <div className="logo-brand w-[70%] h-[100%] text-end leading-[50px] text-lg">
        <h1 className="m-[0] p-[0]">آکادمی اچ وان</h1>
      </div>
      <div className="logo border w-[30%] h-[100%]"></div>
    </div>
  );
}

export default Logo;
