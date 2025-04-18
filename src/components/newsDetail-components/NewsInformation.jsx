import React from "react";
import Like from "../common/Like";

function NewsInformation() {
  return (
    <div className="news-info w-[95%] h-[50px] mt-[20px] mb-[15px] flex flex-row flex-nowrap justify-between items-center">
      <div className="like-dis h-[100%]">
        <Like />
      </div>
      <div className="news-information w-[500px] h-[80%] flex flex-row flex-nowrap justify-between">
        <div className=" w-[110px] h-[100%] flex flex-row flex-nowrap justify-center items-center">
          <div className=" w-[70%] h-[100%] text-center text-[11px] leading-[35px]">
            کلمات کلیدی
          </div>
          <div className=" w-[25%] h-[60%]">
            <img
              src="/images/Path 1895.svg"
              className="w-[100%] h-[100%]"
              alt=""
            />
          </div>
        </div>
        <div className=" w-[110px] h-[100%] flex flex-row flex-nowrap justify-center items-center">
          <div className=" w-[70%] h-[100%] text-center text-[11px] leading-[35px]">
            1402 6 مهر
          </div>
          <div className=" w-[25%] h-[60%]">
            <img
              src="/images/Path 1896.svg"
              className="w-[100%] h-[100%]"
              alt=""
            />
          </div>
        </div>
        <div className=" w-[110px] h-[100%] flex flex-row flex-nowrap justify-center items-center">
          <div className=" w-[70%] h-[100%] text-center text-[11px] leading-[35px] pl-[25px]">
            1124
          </div>
          <div className=" w-[25%] h-[60%]">
            <img
              src="/images/Group 255.svg"
              className="w-[100%] h-[100%]"
              alt=""
            />
          </div>
        </div>
        <div className=" w-[110px] h-[100%] flex flex-row flex-nowrap justify-center items-center">
          <div className=" w-[70%] h-[100%] text-center text-[11px] leading-[35px]">
            نام نویسنده
          </div>
          <div className=" w-[25%] h-[60%]">
            <img
              src="/images/Path 1899.svg"
              className="w-[100%] h-[100%]"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsInformation;
