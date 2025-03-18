import React from "react";
import SearchBox from "../common/SearchBox";
import TopCategory from "./TopCategory";

function MainCoursesSearch() {
  return (
    <div className="top-filter w-[100%] drop-shadow-md bg-[rgba(251,246,246,1)] h-[90px] rounded-[37px] mt-[20px] flex flex-row flex-wrap items-center justify-between">
      <SearchBox />
      <TopCategory />
    </div>
  );
}

export default MainCoursesSearch;
