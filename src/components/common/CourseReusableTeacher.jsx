import React from "react";

function CourseReusableTeacher({ lineHeight = "25px", gap = "0" }) {
  return (
    <div
      className={`course-teacher w-[95px] h-[100%] flex flex-row flex-nowrap gap-[${gap}]`}
    >
      <div
        className={`teacher-name w-[70%] h-[100%] text-[12px] leading-[${lineHeight}] text-[rgba(140,159,154,1)]`}
      >
        جان اسمیت
      </div>
      <div className="teacher-pic w-[30%] h-[100%]">
        <img
          src="/images/Front-End-developer-profile-picture.svg"
          alt=""
          className="teacher-image w-[100%] h-[100%]"
        />
      </div>
    </div>
  );
}

export default CourseReusableTeacher;
