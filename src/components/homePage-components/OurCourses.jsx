import React from "react";
import SectionTitle from "../common/SectionTitle";
import CoursesSlider from "../coursesPage-components/CoursesSlider";
import Button from "../common/Button";

const OurCourses = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center">
      <SectionTitle
        title="خدمات ما"
        description=" ما فرصت آماده شدن برای زندگی را فراهم می کنیم"
      />
      <div className=" w-[100%] mt-10 mb-10">
        <CoursesSlider />
      </div>
      <Button style="mx-[auto] mt-[70px] mb-[120px] border border-[2px] border-[rgba(18,146,108,1)] w-[350px] h-[90px] rounded-[51px] text-[rgba(255,255,255,1)] text-center text-[20px] leading-[80px] bg-[rgba(18,146,108,1)]">
        مشاهده دوره های بیشتر
      </Button>
    </div>
  );
};

export default OurCourses;
