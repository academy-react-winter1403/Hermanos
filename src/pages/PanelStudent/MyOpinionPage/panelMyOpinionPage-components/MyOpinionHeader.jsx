import React from "react";

function MyOpinionHeader() {
  return (
    <div className="w-[100%] h-[80px] bg-[rgba(164,246,222,1)] rounded-t-[10px] flex flex-row flex-nowrap justify-around items-center">
      <div className=" h-[80%] px-[15px] leading-[58px] text-[rgba(34,68,93,1)] text-[14px]">
        جزئیات
      </div>
      <div className=" h-[80%] px-[15px] leading-[58px] text-[rgba(34,68,93,1)] text-[14px]">
        وضعیت
      </div>
      <div className=" h-[80%] px-[15px] leading-[58px] text-[rgba(34,68,93,1)] text-[14px]">
        تاریخ ارسال
      </div>
      <div className=" h-[80%] px-[15px] leading-[58px] text-[rgba(34,68,93,1)] text-[14px]">
        تعداد پاسخ
      </div>
      <div className=" h-[80%] px-[15px] leading-[58px] text-[rgba(34,68,93,1)] text-[14px]">
        عنوان نظر
      </div>
      <div className=" h-[80%] px-[15px] leading-[58px] text-[rgba(34,68,93,1)] text-[14px] mr-[60px]">
        نام دوره
      </div>
    </div>
  );
}

export default MyOpinionHeader;
