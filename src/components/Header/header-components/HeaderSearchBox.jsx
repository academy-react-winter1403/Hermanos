import React from "react";
import { BsSearch } from "react-icons/bs";

const HeaderSearchBox = () => {
  return (
    <div className="searchbox  w-[150px] h-[30px] flex flex-nowrap mt-1 sm:mt-2 lg:mt-[1.5px] ">
      <div className="search-icon w-[80px] rounded-l-[43px] h-[100%] bg-[rgba(164,246,222,1)] border border-[rgba(21,139,104,1)] ">
        <BsSearch size={18} className="mx-auto mt-[6px]" />
      </div>
      <div className="input-holder w-[300px] h-[100%]">
        <input
          className="border w-[100%] border-l-transparent border-[rgba(21,139,104,1)] h-[100%] rounded-r-[43px] text-end text-[12px] bg-white "
          placeholder="...جستجو     "
        />
      </div>
    </div>
  );
};

export default HeaderSearchBox;
