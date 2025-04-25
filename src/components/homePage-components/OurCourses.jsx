import React from "react";
import SectionTitle from "../common/SectionTitle";
import CoursesSlider from "../coursesPage-components/CoursesSlider";
import Button from "../common/Button";
import NewsSlider from "../newsPage-components/NewsSlider";
import CourseCard from "../common/CourseCard";

const OurCourses = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center">
      <div className="mt-15 sm:mt-0">
        <SectionTitle
          title="خدمات ما"
          description=" ما فرصت آماده شدن برای زندگی را فراهم می کنیم"
        />
      </div>
      <div className=" w-[100%] mt-10 mb-10 hidden lg:block">
        <CoursesSlider />
      </div>
      <div className=" mt-10 sm:mb-10 block lg:hidden w-full">
        <NewsSlider sliderElement={<CourseCard />} />
      </div>
      <Button
        navigationTo="/courses"
        style="mx-[auto] lg:mt-[70px] mb-[120px] border border-[2px] border-[rgba(18,146,108,1)] w-[200px] lg:w-[350px] h-[60px] lg:h-[90px] rounded-[51px] text-[rgba(255,255,255,1)] text-center text-base lg:text-[20px] leading-[50px] lg:leading-[80px] bg-[rgba(18,146,108,1)]"
      >
        مشاهده دوره های بیشتر
      </Button>
    </div>
  );
};

export default OurCourses;
