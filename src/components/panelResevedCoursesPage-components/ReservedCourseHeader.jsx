import React from "react";

function ReservedCourseHeader() {
  return (
    <div className="w-[100%] h-[80px] bg-[rgba(164,246,222,1)] rounded-t-[10px] flex flex-row flex-nowrap justify-around items-center">
      <div className=" h-[80%] px-[15px] leading-[58px] text-[rgba(34,68,93,1)] text-[14px]">
        حذف
      </div>
      <div className=" h-[80%] px-[15px] leading-[58px] text-[rgba(34,68,93,1)] text-[14px]">
        وضعیت تایید
      </div>
      <div className=" h-[80%] px-[15px] leading-[58px] text-[rgba(34,68,93,1)] text-[14px]">
        تاریخ شروع
      </div>
      <div className=" h-[80%] px-[15px] leading-[58px] text-[rgba(34,68,93,1)] text-[14px]">
        نام ترم
      </div>
      <div className=" h-[80%] px-[15px] leading-[58px] text-[rgba(34,68,93,1)] text-[14px]">
        نام استاد
      </div>
      <div className=" h-[80%] px-[15px] leading-[58px] text-[rgba(34,68,93,1)] text-[14px] mr-[60px]">
        نام دوره
      </div>
    </div>
  );
}

export default ReservedCourseHeader;
