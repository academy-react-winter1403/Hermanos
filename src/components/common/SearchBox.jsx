import React from "react";
import { BsSearch } from "react-icons/bs";

function SearchBox() {
  return (
    <div className="searchbox  w-[380px] h-[60px] flex flex-nowrap ml-[60px]">
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
  );
}

export default SearchBox;
