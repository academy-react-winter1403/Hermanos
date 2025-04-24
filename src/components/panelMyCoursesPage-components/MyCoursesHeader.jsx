import React from "react";

function MyCoursesHeader() {
  return (
    <div className="w-[100%] h-[80px] bg-[rgba(164,246,222,1)] rounded-t-[10px] flex flex-row flex-nowrap justify-around items-center">
      <div className=" h-[80%] px-[15px] leading-[58px] text-[rgba(34,68,93,1)] text-[14px]">
        وضعیت پرداخت
      </div>
      <div className=" h-[80%] px-[15px] leading-[58px] text-[rgba(34,68,93,1)] text-[14px]">
        تاریخ شروع
      </div>
      <div className=" h-[80%] px-[15px] leading-[58px] text-[rgba(34,68,93,1)] text-[14px]">
        نام گروه
      </div>
      <div className=" h-[80%] px-[15px] leading-[58px] text-[rgba(34,68,93,1)] text-[14px]">
        نام ترم
      </div>
      <div className=" h-[80%] px-[15px] leading-[58px] text-[rgba(34,68,93,1)] text-[14px]">
        نام استاد
      </div>
      <div className=" h-[80%] px-[15px] leading-[58px] text-[rgba(34,68,93,1)] text-[14px] mr-[80px]">
        نام دوره
      </div>
    </div>
  );
}

export default MyCoursesHeader;
