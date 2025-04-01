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
      <div className="border w-[100%] h-[400px] mt-10 mb-10">
        <CoursesSlider />
        Courses-Slider
      </div>
      <Button
        className=""
        bg="rgba(18,146,108,1)"
        radius="51px"
        width="250px"
        height="50px"
        lineHeight="40px"
        textColor="rgba(255,255,255,1)"
      >
        مشاهده دوره های بیشتر
      </Button>
    </div>
  );
};

export default OurCourses;
