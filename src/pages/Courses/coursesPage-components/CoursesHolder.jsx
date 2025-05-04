import React from "react";
import CourseCard from "../../../components/common/CourseCard";
import RowCourseCard from "../../../components/common/RowCourseCard";

const CoursesHolder = ({
  topCoursesList,
  coursesRowView,
  setCoursesRowView,
}) => {
  return (
    <div className="holder flex flex-row flex-wrap justify-center gap-[40px]">
      {topCoursesList.map((item, index) =>
        coursesRowView ? (
          <RowCourseCard
            key={index}
            title={item.title}
            desc={item.describe}
            likeCount={item.likeCount}
            dissLikeCount={item.dissLikeCount}
            teacherName={item.teacherName}
            price={item.cost}
            courseStatus={item.statusName}
          />
        ) : (
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
        )
      )}
    </div>
  );
};

export default CoursesHolder;
