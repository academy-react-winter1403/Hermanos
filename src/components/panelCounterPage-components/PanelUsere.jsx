import React from "react";
import Button from "../common/Button";
import SectionTitle from "../common/SectionTitle";

function PanelUsere() {
  return (
    <div className="new-courses w-[48.5%] h-[380px] rounded-[10px] shadow-[10px_10px_5px_0px_rgba(0,0,0,0.16)] bg-[rgba(251,246,246,1)]">
      <div className="new-coourses-header w-[100%] h-[40px] text-center bg-[rgba(164,246,222,1)] rounded-t-[10px] leading-[35px]">
        اطلاعات کاربری
      </div>
      <div className=" flex flex-col justify-center items-center">
        <div className=" mt-[10px] w-[110px] h-[110px]">
          <img src="/images/12.svg" className="w-[100%] h-[100%]" alt="" />
        </div>
        <SectionTitle
          titleFontSize="20px"
          titleClass="mt-[10px]"
          title="نام و نام خانوادگی"
        />
        <div className=" w-[300px] h-[100px] mt-[20px]">
          <div className=" w-[100%] h-[33px] text-end flex flex-row flex-nowrap justify-center">
            <div className=" w-[60%] h-[100%] text-end leading-[35px]">
              09111234567
            </div>
            <div className=" w-[40%] h-[100%] text-end leading-[35px]">
              : تلفن همراه
            </div>
          </div>
          <div className=" w-[100%] h-[33px] text-end flex flex-row flex-nowrap justify-center">
            <div className=" w-[60%] h-[100%] text-end leading-[35px]">
              example@gmail.com
            </div>
            <div className=" w-[40%] h-[100%] text-end leading-[35px]">
              : ایمیل
            </div>
          </div>
          <div className=" w-[100%] h-[33px] text-end flex flex-row flex-nowrap justify-center">
            <div className=" w-[60%] h-[100%] text-end leading-[35px]">
              0123456789
            </div>
            <div className=" w-[40%] h-[100%] text-end leading-[35px]">
              : کدملی
            </div>
          </div>
        </div>
        <Button style="border border-[2px] border-[rgba(18,146,108,1)] w-[90px] h-[40px] leading-[30px] mt-[15px] bg-[rgba(18,146,108,1)] text-[rgba(255,255,255,1)] rounded-[51px]">
          ویرایش
        </Button>
      </div>
    </div>
  );
}

export default PanelUsere;
