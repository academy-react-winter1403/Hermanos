import React from "react";
import SectionTitle from "../common/SectionTitle";

const Category = () => {
  const courses = [
    {
      id: 1,
      title: "دوره های طراحی UI/UX",
      sessions: 25,
      icon: "/images/9172978.svg",
    },
    {
      id: 2,
      title: "دوره های طراحی UI/UX",
      sessions: 25,
      icon: "/images/5968292.svg",
    },
    {
      id: 3,
      title: "دوره های طراحی UI/UX",
      sessions: 25,
      icon: "/images/1532556.svg",
    },
    {
      id: 4,
      title: "دوره های طراحی UI/UX",
      sessions: 25,
      icon: "/images/63089.svg",
    },
    {
      id: 5,
      title: "دوره های طراحی UI/UX",
      sessions: 25,
      icon: "/images/2318906.svg",
    },
  ];

  const CategoryCard = ({ course }) => {
    return (
      <div className="bg-white w-50 h-70 shadow-xl rounded-xl p-7  text-center flex flex-row flex-wrap justify-center cursor-pointer transition-all hover:scale-110 hover:shadow-2xl">
        <img className="my-auto w-[50%]" src={course.icon} />
        <h2 className="text-md font-normal text-[rgba(34,68,93,1)] mt-2">
          {course.title}
        </h2>
        <p className="text-[rgba(34,68,93,1)] text-xs mt-5">
          جلسه {course.sessions}
        </p>
      </div>
    );
  };

  return (
    <div className="mb-6">
      <SectionTitle
        title="دسته بندی"
        description=" ما فرصت آماده شدن برای زندگی را فراهم می کنیم"
        customClass="mb-[30px] mt-[90px]"
      />
      <div className="flex justify-center gap-6 p-10 flex-wrap my-auto">
        {courses.map((course) => (
          <CategoryCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Category;
