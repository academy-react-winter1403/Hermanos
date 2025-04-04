import React from "react";

function TopCategory() {
  return (
    <div className="useless-holder flex flex-row gap-[20px] flex-nowrap w-[320px] h-[60px] mr-[60px]">
      <div className="category rounded-[43px] w-[200px] h-[100%]">
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-[rgba(21,139,104,1)] rounded-[43px]"
        >
          <div className="collapse-title font-semibold w-[200px] h-[60px]">
            مرتب سازی
          </div>
          <div className="collapse-content text-sm">
            نمیدونم مرتب سازیش برچه اساسیه
          </div>
        </div>
      </div>
      <div className="useless-btn border rounded-[43px] border-[rgba(21,139,104,1)] w-[100px] h-[100%]">
        <span className="left-btn  w-[50%] h-[100%] inline-block  rounded-l-[43px]">
          <img
            className="w-[45%] h-[45%] ml-[18px] mt-[15px]"
            src="/images/Path 1875.svg"
            alt=""
          />
        </span>
        <span className="right-btn  w-[50%] h-[100%] inline-block rounded-r-[43px]">
          <img
            className="w-[45%] h-[45%] ml-[10px] mt-[15px]"
            src="/images/Path 1876.svg"
            alt=""
          />
        </span>
      </div>
    </div>
  );
}

export default TopCategory;
