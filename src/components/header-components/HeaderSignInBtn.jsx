import React from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

function HeaderSignInBtn() {
  return (
    <div className="signin-container w-[150px] h-[70%] flex flex-nowrap flex-row ml-[20px]">
      <div className="sign-in-btn rounded-md bg-[rgba(0,223,157,1)] w-[75%] h-[100%] ">
        <Link
          to="/login"
          className="px-[20px] py-[7px] my-[auto] text-[12px] block text-center"
        >
          ورود/ثبت نام
        </Link>
      </div>
      <div className="search-icon w-[25%] h-[100%]">
        <BsSearch size={20} className="mx-auto mt-[10px]" />
      </div>
    </div>
  );
}

export default HeaderSignInBtn;
