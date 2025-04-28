import React from "react";

function NewCourses() {
  return (
    <div className="new-courses w-[27%] h-[150px] rounded-[10px] shadow-[10px_10px_5px_0px_rgba(0,0,0,0.16)] bg-[rgba(251,246,246,1)]">
      <div className="new-coourses-header w-[100%] h-[40px] text-center bg-[rgba(164,246,222,1)] rounded-t-[10px] leading-[35px]">
        جدیدترین دوره ها
      </div>
      <div className="w-[95%] h-[100px] mx-[auto] mt-[5px] rounded-[10px] bg-[rgba(255,255,255,1)] shadow-[10px_10px_5px_0px_rgba(0,0,0,0.16)] flex flex-row flex-nowrap justify-center items-center gap-[8px]">
        <div className=" w-[50%] h-[100%] text-end">
          <div className=" w-[100%] h-[27%] text-[12px] leading-[30px] mt-[9px]">
            عنوان دوره
          </div>
          <div className=" w-[100%] h-[27%] text-[12px] leading-[30px]">
            مدرس : نام استاد
          </div>
          <div className=" w-[100%] h-[27%] text-[12px] leading-[30px]">
            قیمت : 3,000,000 تومان
          </div>
        </div>
        <div className=" w-[45%] h-[96%] rounded-r-[10px] mt-[4px]">
          <img src="/images/06.svg" className="w-[100%] h-[100%]" alt="" />
        </div>
      </div>
    </div>
  );
}

export default NewCourses;
