import React from "react";
import CourseCard from "../common/CourseCard";

function CoursesHolder() {
  return (
    <div className="main-courses-slider shadow-[10px_10px_3px_0px_rgba(0,0,0,0.16)] border border-[rgba(239,239,239,1)] p-[25px] mt-[10px] w-[75%] rounded-[37px] gap-[40px] flex flex-row flex-wrap justify-center items-center">
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
    </div>
  );
}

export default CoursesHolder;
