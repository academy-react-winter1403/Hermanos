import React from "react";

function TopCategory() {
  return (
    <div className="useless-holder flex flex-row gap-[20px] flex-nowrap w-[320px] h-[60px] mr-[60px]">
      <div className="category border rounded-[43px] border-[rgba(21,139,104,1)] w-[200px] h-[100%]">
        {/* <div
    tabIndex={0}
    className="collapse collapse-arrow bg-base-100 border-base-300 border"
  >
    <div className="collapse-title font-semibold">
      How do I create an account?
    </div>
    <div className="collapse-content text-sm">
      Click the "Sign Up" button in the top right corner and follow the
      registration process.
    </div>
  </div> */}
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
