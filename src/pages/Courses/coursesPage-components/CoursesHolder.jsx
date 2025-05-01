import React from "react";
import CourseCard from "../../../components/common/CourseCard";

const CoursesHolder = ({ topCoursesList }) => {
  return (
    <div className="holder p-4 grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-y-10 g-x-0  drop-shadow-xl mb-1  ">
      {topCoursesList.map((item, index) => {
        return (
          <CourseCard
            key={index}
            title={item.title}
            desc={item.describe}
            likeCount={item.likeCount}
            dissLikeCount={item.dissLikeCount}
            teacherName={item.teacherName}
            price={item.cost}
            courseStatus={item.statusName}
          />
        );
      })}
    </div>
  );
};

export default CoursesHolder;
