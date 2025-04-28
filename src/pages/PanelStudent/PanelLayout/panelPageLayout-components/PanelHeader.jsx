import React from "react";
import Logo from "../../../../components/Header/header-components/Logo";

function PanelHeader() {
  return (
    <div className="panel-header-left w-[75%] h-[100%] flex flex-row flex-wrap justify-between bg-[rgba(164,246,222,1)] shadow-[0px_10px_3px_0px_rgba(0,0,0,0.14)]">
      <div className=" h-[100%] w-[360px] flex flex-row flex-wrap justify-center items-center gap-[20px]">
        <div className="stu-pic w-[75px] h-[75px] ml-[15px]">
          <img src="/images/12.svg" className="mx-[auto] mt-[2.5px]" alt="" />
        </div>
        <div className="basket-icon  w-[55px] h-[55px]">
          <img
            src="/images/Path 3112.svg"
            className="mx-[auto] mt-[13px] w-[60%] h-[60%]"
            alt=""
          />
        </div>
        <div className="night-icon  w-[55px] h-[55px]">
          <img
            src="/images/Path 3113.svg"
            className="mx-[auto] mt-[13px] w-[60%] h-[60%]"
            alt=""
          />
        </div>
        <div className="color-icon  w-[55px] h-[55px]">
          <img
            src="/images/Path 3114.svg"
            className="mx-[auto] mt-[13px] w-[60%] h-[60%]"
            alt=""
          />
        </div>
      </div>
      <div className="h-[100px] mr-[10px]">
        <Logo />
      </div>
    </div>
  );
}

export default PanelHeader;
