import React from "react";

import { Flex, Progress } from "antd";
import SectionTitle from "../common/SectionTitle";
const Progresss = () => (
  <Flex vertical gap="small" style={{ width: 450, direction: "rtl" }}>
    <div className=" w-[100%] mx-[auto] text-[12px] mb-[-5px]">
      دوره های من - پرداخت شده
    </div>
    <Progress percent={30} size="small" />
    <div className=" w-[100%] mx-[auto] text-[12px] mb-[-5px]">
      دوره های تایید شده - پرداخت نشده
    </div>
    <Progress percent={50} size="small" status="active" />
    <div className=" w-[100%] mx-[auto] text-[12px] mb-[-5px]">
      دوره های رزرو شده
    </div>
    <Progress percent={70} size="small" status="exception" />
    <div className=" w-[100%] mx-[auto] text-[12px] mb-[-5px]">
      دوره های موردعلاقه
    </div>
    <Progress percent={100} size="small" />
  </Flex>
);

const CircleProgress = () => (
  <Flex wrap gap="small">
    <Progress type="circle" percent={30} size={80} />
  </Flex>
);

function MyCoursesStatus() {
  return (
    <div className=" h-[380px] w-[48.5%] flex flex-row flex-wrap justify-center gap-[5px]">
      <div className="new-courses h-[250px] mb-[5px] w-[100%] rounded-[10px] shadow-[10px_10px_5px_0px_rgba(0,0,0,0.16)] bg-[rgba(251,246,246,1)]">
        <div className="new-coourses-header w-[100%] h-[40px] text-center bg-[rgba(164,246,222,1)] rounded-t-[10px] leading-[35px]">
          وضعیت دوره های من
        </div>
        <div className="mx-[auto] w-[95%] mt-[13px] flex flex-row flex-nowrap justify-center">
          <Progresss />
        </div>
      </div>

      <div className="new-courses w-[350px] h-[120px] rounded-[10px] shadow-[10px_10px_5px_0px_rgba(0,0,0,0.16)] bg-[rgba(251,246,246,1)]">
        <div className="new-coourses-header w-[100%] h-[28px] text-center bg-[rgba(164,246,222,1)] rounded-t-[10px] text-[13px] leading-[27px]">
          دوره های من
        </div>
        <div className="w-[95%] h-[80px] mx-[auto] mt-[5px] rounded-[10px] bg-[rgba(255,255,255,1)] shadow-[10px_10px_5px_0px_rgba(0,0,0,0.16)] flex flex-row flex-nowrap justify-center items-center gap-[8px]">
          <div className=" w-[50%] h-[100%] text-end">
            <div className=" w-[100%] h-[27%] text-[12px] leading-[30px] mt-[2px]">
              عنوان دوره
            </div>
            <div className=" w-[100%] h-[27%] text-[12px] leading-[30px]">
              مدرس : نام استاد
            </div>
            <div className=" w-[100%] h-[27%] text-[12px] leading-[30px]">
              قیمت : 3,000,000 تومان
            </div>
          </div>
          <div className=" w-[45%] h-[85%] rounded-r-[10px] mt-[1px]">
            <img src="/images/06.svg" className="w-[100%] h-[100%]" alt="" />
          </div>
        </div>
      </div>

      <div className="new-courses ml-[5px] w-[145px] h-[120px] rounded-[10px] shadow-[10px_10px_5px_0px_rgba(0,0,0,0.16)] bg-[rgba(251,246,246,1)] mx-[auto] pt-[10px] flex flex-row flex-wrap justify-center">
        <CircleProgress />
        <div className="text-[14px]">درصد تکمیل پروفایل</div>
      </div>
    </div>
  );
}

export default MyCoursesStatus;
