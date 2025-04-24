import React from "react";

function MyOpinionCard() {
  return (
    <div className="my-course w-[100%] h-[60px] rounded-[25px] bg-[rgba(255,255,255,1)] shadow-[0px_3px_3px_0px_rgba(87,87,87,0.16)] mb-[20px] flex flex-row flex-nowrap justify-around items-center">
      <div className=" h-[80%] leading-[45px] text-[13px] px-[7px] flex justify-center items-center">
        ...
      </div>
      <div className=" h-[80%] leading-[45px] text-[13px] px-[7px]">
        تایید شده
      </div>
      <div className=" h-[80%] leading-[45px] text-[13px] px-[7px]">
        1403/03/16
      </div>
      <div className=" h-[80%] leading-[45px] text-[13px] px-[7px]">2</div>
      <div className=" h-[80%] leading-[45px] text-[13px] px-[7px]">
        بسیار عالی
      </div>
      <div className=" w-[180px] mr-[-30px] h-[80%] leading-[45px] text-[13px] flex flex-row flex-nowrap justify-between">
        <div className=" w-[100px] h-[100%] px-[7px]">نکست جی اس</div>
        <div className=" w-[70px] h-[100%]">
          <img src="/images/1_EGrPBUoYfKm-2DjfE5BHIA.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default MyOpinionCard;
