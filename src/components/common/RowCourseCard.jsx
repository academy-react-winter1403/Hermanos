import React from "react";
import Button from "./Button";

function RowCourseCard({
  title,
  desc,
  likeCount,
  dissLikeCount,
  teacherName,
  price,
  courseStatus,
}) {
  return (
    <div className="relative w-[90%] bg-[rgba(251,246,246,1)] rounded-[30px] py-[7px] h-[90px] border-transparent flex flex-row flex-nowrap justify-around">
      <div className=" w-[130px] h-[100%] flex flex-col gap-[7px]">
        <Button
          navigationTo=""
          style="w-[100%] h-[40px] flex justify-center items-center text-[12px] rounded-[12px] bg-[rgba(91,225,185,1)]"
        >
          رزرو دوره
        </Button>
        <Button
          navigationTo="/courses/:id"
          style="w-[100%] h-[40px] flex justify-center items-center text-[12px] rounded-[12px] border border-[rgba(91,225,185,1)]"
        >
          جزییات دوره
        </Button>
      </div>
      <div className=" h-[100%] flex justify-center items-center px-[10px]">
        ...
      </div>
      <div className=" h-[100%] flex justify-center items-center px-[10px] text-[14px]">
        {teacherName}
      </div>
      <div className=" h-[100%] flex justify-center items-center px-[5px] text-[14px] font-[600] mr-[100px]">
        {title}
      </div>
      <div className=" h-[100%] w-[100px] flex justify-center items-center mr-[-40px] absolute right-[0] top-[0]">
        <img
          src="/images/icons8-angular.svg"
          className="w-[100%] h-[100%]"
          alt=""
        />
      </div>
    </div>
  );
}

export default RowCourseCard;
