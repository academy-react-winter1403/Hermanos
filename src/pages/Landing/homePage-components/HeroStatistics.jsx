import React from "react";
import HeroStatsCard from "./HeroStatsCard";

const HeroStatistics = () => {
  const stats = [
    {
      icon: "/images/SVGRepo_iconCarrier1.svg",
      label: "مقاله آموزشی",
      value: 28,
    },
    {
      icon: "/images/SVGRepo_iconCarrier.svg",
      label: "دوره آموزشی",
      value: 182,
    },
    { icon: "/images/SVGRepo_iconCarrier2.svg", label: "دانشجو", value: 81 },
    {
      icon: "/images/SVGRepo_iconCarrier33.svg",
      label: "اساتید حرفه ای",
      value: 52,
    },
  ];
  return (
    <div className="lg:h-[280px] mt-[30px] mb-[50px] w-[100%] bg-[rgba(91,225,185,1)] sm:py-4 px-30 rounded-2xl flex flex-nowrap justify-center lg:justify-between items-center ">
      {stats.map((stat, index) => (
        <HeroStatsCard
          key={index}
          className="flex flex-col flex-nowrap items-center p-4 w-22 sm:w-40"
        >
          <img src={stat.icon} alt="" className=" w-[80%] my-auto "></img>
          <span className="text-[rgba(21,139,104,1)] text-xs sm:text-base lg:text-lg mt-auto text-nowrap">
            {stat.label}
          </span>
          <span className="text-[rgba(21,139,104,1)] text:sm sm:text-4xl font-normal my-auto ">
            {stat.value}
          </span>
        </HeroStatsCard>
      ))}
    </div>
  );
};

export default HeroStatistics;
