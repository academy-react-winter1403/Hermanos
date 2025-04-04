import React from "react";
import Sugesstion from "./Sugesstion";
import Button from "../common/Button";

function CourseDetailSugesstion() {
  return (
    <div className="sugesstion w-[1000px] mt-[20px] rounded-[30px] pb-[30px] pt-[30px] bg-[rgba(255,255,255,1)] px-[70px]">
      <div className="sugesstion-btn-holder mb-[50px] border border-[2px] border-[rgba(164,246,222,1)] w-[100%] h-[100px] rounded-[15px] flex flex-row flex-nowrap justify-center">
        <Button
          width="50%"
          radius="15px"
          height="100%"
          bg="rgba(164,246,222,1)"
        >
          ثبت نظر
        </Button>
        <Button width="50%" radius="15px" height="100px">
          نظرات کاربران
        </Button>
      </div>
      <Sugesstion height="60px" />
      <Sugesstion height="150px" placeholder="متن   " />
      <Button width="100%" height="90px" bg="rgba(91,225,185,1)" radius="15px">
        ثبت کردن
      </Button>
    </div>
  );
}

export default CourseDetailSugesstion;
