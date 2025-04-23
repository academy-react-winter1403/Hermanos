import React from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { BiSolidLogIn } from "react-icons/bi";
import SearchBox from "../common/SearchBox";
import HeaderSearchBox from "./HeaderSearchBox";

function HeaderSignInBtn() {
  return (
    <div className="signin-container w-[50px] lg:w-[150px]  sm:w-[50px] h-[45%] md:h-[40%] sm:h-[40%] flex flex-nowrap flex-row sm:ml-[5px] ml-[20px] gap-[10px]">
      <div className="sign-in-btn rounded-md bg-[rgba(0,223,157,1)] w-[70%] h-[100%] my-auto md:my-1 sm:my-1 ">
        <Link
          to="/login"
          className="py-[7px] text-[14px] lg:block hidden text-center"
        >
          ورود/ثبت نام
        </Link>
        <Link to="/login" className="lg:hidden md:block sm:block text-center  ">
          <BiSolidLogIn size={30} className="w-[100%] h-[100%] mt-[1.5px] " />
        </Link>
      </div>
      <div className="search-icon w-[25%] h-[100%] lg:mt-1 md:mt-0 sm:mt-0">
        {/* <BsSearch
          size={20}
          className="mx-auto mt-[10px] lg:block md:hidden sm:hidden"
        /> */}
        <HeaderSearchBox className="" />
      </div>
    </div>
  );
}

export default HeaderSignInBtn;
