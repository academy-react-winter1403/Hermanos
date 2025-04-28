import React from "react";
import FilterModal from "../../../components/common/FilterModal";

function TopCategory() {
  return (
    <div className="useless-holder  flex flex-row gap-[20px] flex-nowrap w-full sm:w-[320px] h-[60px] justify-around sm:justify-end sm:px-0 items-center sm:mr-3 md:mr-7 lg:pl-0 lg:mr-[60px]">
      <div className="category hidden lg:block rounded-[43px] w-[200px] h-[100%]">
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-[rgba(21,139,104,1)]  rounded-[43px]"
        >
          <div className="collapse-title font-semibold w-[200px] h-[60px]">
            مرتب سازی
          </div>
          <div className="collapse-content text-sm">
            نمیدونم مرتب سازیش برچه اساسیه
          </div>
        </div>
      </div>
      <div className="useless-btn  border rounded-[43px] border-[rgba(21,139,104,1)] w-[100px] h-[70%] lg:h-[100%] my-2 lg:my-0">
        <span className="left-btn  w-[50%] h-[100%] inline-block  rounded-l-[43px] ">
          <img
            className="w-[45%] h-[45%] ml-[18px] mt-[10px] lg:mt-[15px]"
            src="/images/Path 1875.svg"
            alt=""
          />
        </span>
        <span className="right-btn  w-[50%] h-[100%] inline-block rounded-r-[43px]">
          <img
            className="w-[45%] h-[45%] ml-[10px] mt-[10px] lg:mt-[15px]"
            src="/images/Path 1876.svg"
            alt=""
          />
        </span>
      </div>
      <div className="border lg:hidden rounded-md w-[37px] h-[60%]  ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-7 mx-auto mt-1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
          />
        </svg>

        <FilterModal />
      </div>
    </div>
  );
}

export default TopCategory;
