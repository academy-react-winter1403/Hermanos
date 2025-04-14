import Button from "./Button";
import React from "react";
import Like from "./Like";
import CourseReusableTeacher from "./CourseReusableTeacher";

function CourseCard() {
  return (
    <div className="course-card w-[350px] h-[550px] relative">
      <div className="course-card-logo w-[150px] h-[160px] absolute left-[105px] z-10">
        <img src="/images/icons8-angular.svg" alt="" />
      </div>
      <div className="course-card-body h-[485px] w-[100%] absolute top-[75px] bg-[rgba(251,246,246,1)] rounded-[34px] shadow-[10px_10px_10px_0px_rgba(0,0,0,0.16)]">
        <div className="course-status mx-[auto] mt-[90px] h-[40px] w-[87%] flex flex-row flex-nowrap justify-between items-center">
          <Like />
          <div className="course-status-btn h-[95%] w-[100px] text-center text-[11px] leading-[33px] rounded-[12px] bg-[rgba(191,244,228,1)] text-[rgba(21,139,104,1)]">
            وضعیت دوره
          </div>
        </div>
        <div className="course-title mx-[auto] mt-[10px] w-[87%] text-[23px] font-[400] text-end">
          آشنایی با برنامه نویسی با وردپرس
        </div>
        <div className="score&teacher mx-[auto] mt-[15px] h-[30px] w-[87%] flex flex-row flex-nowrap justify-between">
          <div className="star-score w-[45px] h-[100%] flex flex-row flex-nowrap">
            <div className="star w-[50%] h-[100%]">
              <img
                className="w-[70%] h-[70%] block mt-[3px]"
                src="/images/Path 1885.svg"
                alt=""
              />
            </div>
            <div className="score w-[50%] h-[100%] text-[12px] text-[rgba(8,158,113,1)] leading-[25px]">
              4.8
            </div>
          </div>
          <CourseReusableTeacher />
        </div>
        <p className="speach-time mt-[15px] block mx-[auto] text-[9px] w-[87%] text-end text-[rgba(65,167,137,1)]">
          سخنرانی (120ساعت)50
        </p>
        <p className="course-description h-[64px] mt-[10px] block mx-[auto] text-[14px] w-[87%] text-end text-[rgba(109,103,103,1)]">
          لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه
          دهندگان وب، تایپوگراف ها و طراحان استفاده می شود
        </p>
        <div className="course-price mt-[25px] border-t pt-[7px] border-t-[rgba(18,146,108,1)]  h-[35px] w-[87%] mx-[auto] flex flex-row flex-nowrap justify-center items-center">
          <div className="price w-[50%] h-[80%] text-[rgba(225,24,24,1)] text-[18px]">
            تومان 3,000,000
          </div>
          <div className="price-text w-[50%] h-[80%] text-end text-[rgba(18,146,108,1)]">
            : هزینه تمام دوره
          </div>
        </div>
        <div className="course-btns mt-[15px] w-[87%] h-[45px] mx-[auto] gap-[5px] flex flex-row flex-nowrap justify-between">
          <Button style="w-[50%] h-[100%] rounded-[12px] bg-[rgba(91,225,185,1)] text-center leading-[38px]">
            رزرو دوره
          </Button>
          <Button
            style="w-[50%] h-[100%] rounded-[12px] border border-[rgba(91,225,185,1)] text-center leading-[38px]"
            navigationTo="/courses/:id"
          >
            جزییات دوره
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
