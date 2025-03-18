import React from "react";
import { BsSearch } from "react-icons/bs";

function MainCoursesSearch() {
  return (
    <div className="top-filter w-[100%] drop-shadow-md bg-[rgba(251,246,246,1)] h-[90px] rounded-[37px] mt-[20px] flex flex-row flex-wrap items-center">
      <div className="searchbox  w-[380px] h-[60px] ml-[100px] flex flex-nowrap">
        <div className="search-icon w-[80px] rounded-l-[43px] h-[100%] bg-[rgba(164,246,222,1)]">
          <BsSearch size={30} className="mx-auto mt-[15px]" />
        </div>
        <div className="input-holder w-[300px] h-[100%]">
          <input
            className="border w-[100%] border-l-transparent border-[rgba(21,139,104,1)] h-[100%] rounded-r-[43px] text-end "
            placeholder="...جستجو     "
          />
        </div>
      </div>
    </div>
  );
}

export default MainCoursesSearch;
