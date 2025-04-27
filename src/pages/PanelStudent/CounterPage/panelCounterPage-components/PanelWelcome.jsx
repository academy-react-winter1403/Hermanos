import React from "react";

function PanelWelcome() {
  return (
    <div className="new-courses w-[70%] h-[150px] rounded-[10px] shadow-[10px_10px_5px_0px_rgba(0,0,0,0.16)] bg-[rgba(251,246,246,1)] flex flex-row flex-nowrap justify-center gap-[5px]">
      <div className=" w-[60%] h-[100%]">
        <h2 className=" text-center h-[50%] text-[22px] font-[500] leading-[100px]">
          سلام نام کاربری، خوش آمدید
        </h2>
        <p className=" h-[50%] text-end text-[14px] leading-[55px] w-[85%] mx-[auto] ml-[auto]">
          دوره شما نود جی اس توسط 11 کاربر جدید در این هفته تکمیل شد
        </p>
      </div>
      <div className="w-[30%] h-[100%]">
        <img src="/images/introImg.svg" className="h-[100%]" alt="" />
      </div>
    </div>
  );
}

export default PanelWelcome;
