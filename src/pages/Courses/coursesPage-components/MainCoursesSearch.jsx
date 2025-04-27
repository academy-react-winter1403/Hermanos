import React from "react";
import TopCategory from "./TopCategory";
import SearchBox from "../../../components/common/SearchBox";

function MainCoursesSearch() {
  return (
    <div className="top-filter text-[rgba(21,139,104,1)] w-[100%] shadow-[7px_7px_5px_0px_rgba(0,0,0,0.16)] bg-[rgba(251,246,246,1)] h-[60px] lg:h-[90px] rounded-[25px] mt-[50px] flex flex-row flex-wrap items-center justify-between">
      <SearchBox />
      <TopCategory />
    </div>
  );
}

export default MainCoursesSearch;
