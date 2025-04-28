import React from "react";

function SearchBox() {
  return (
    <div className=" searchbox hidden w-[180px] sm:w-[190px] md:w-[250px] lg:w-[380px] h-[45%] sm:h-[80%] lg:h-[60px] sm:flex flex-nowrap ml-[30px] lg:ml-[60px]">
      <div className="search-icon w-[80px] border lg:w-[80px] rounded-l-[43px] h-[100%] bg-[rgba(164,246,222,1)]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-7 md:size-8  lg:size-11 mt-[8px] lg:mt-2 md:ml-2 lg:ml-5 mx-auto"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>
      <div className="input-holder w-[300px] h-[100%]">
        <input
          className="border bg-white w-[100%] border-l-transparent border-[rgba(21,139,104,1)] h-[100%] rounded-r-[43px] text-sm lg:text-base text-end text-[rgba(128,122,122,1)] "
          placeholder="...جستجو     "
        />
      </div>
    </div>
  );
}

export default SearchBox;
