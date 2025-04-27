import React from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { BiSolidLogIn } from "react-icons/bi";
import HeaderSearchBox from "./HeaderSearchBox";

function HeaderSignInBtn() {
  return (
    <div className="signin-container w-[50px] lg:w-[150px]  h-[45%] flex flex-nowrap flex-row sm:ml-[5px] ml-[5px] gap-2 lg:gap-[10px]">
      <div className="sign-in-btn rounded-md lg:bg-[rgba(0,223,157,1)] w-[70%] h-[100%] my-auto sm:my-1 ">
        <Link
          to="/login"
          className="py-[7px] text-[14px] lg:block hidden text-center"
        >
          ورود/ثبت نام
        </Link>
        <Link
          to="/login"
          className="lg:hidden md:block sm:block text-center text-[rgba(17,83,58,0.8)] "
        >
          <BiSolidLogIn size={30} className="w-[40px] h-[110%] sm:h-[80%] " />
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
