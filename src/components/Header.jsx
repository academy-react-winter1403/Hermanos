import React from "react";
import HeaderSignInBtn from "./header-components/HeaderSignInBtn";
import HeaderNavigations from "./header-components/HeaderNavigations";
import Logo from "./header-components/Logo";
import { useLocation } from "react-router-dom";
import HeroSection from "./homePage-components/HeroSection";
import MainNavigation from "./common/MainNavigation";

function Header() {
  const location = useLocation();

  if (location.pathname === "/")
    return (
      <div className="header-container border-b-[rgba(0,223,157,1)] sm:border-b-none w-[100%] flex flex-wrap flex-row items-center justify-between bg-linear-to-br from-[rgba(164,246,222,1)] to-[rgba(255,255,255,1)]">
        <HeaderSignInBtn />
        <HeaderNavigations />
        <Logo />
        <HeroSection />
      </div>
    );
  else
    return (
      <>
        <div className="header-container border-b  border-b-[rgba(18,146,108,1)] sm:border-b-white w-[100%] h-[80px] flex flex-nowrap flex-row items-center justify-between bg-linear-to-br from-[rgba(164,246,222,1)] to-[rgba(255,255,255,1)]">
          <HeaderSignInBtn />
          <HeaderNavigations />
          <Logo />
        </div>
        <div className="flex flex-nowrap flex-row items-center border-b justify-center border-b-[rgba(18,146,108,1)]  h-[30px] w-[100%] bg-[#c4fbea] p-0 sm:hidden ">
          <div className="flex w-[200px] justify-center items-center gap-3">
            <MainNavigation navigationTo="/about-us">درباره ما</MainNavigation>
            <MainNavigation navigationTo="/news">مقالات</MainNavigation>
            <MainNavigation navigationTo="/courses">دوره ها</MainNavigation>
            <MainNavigation navigationTo="/">صفحه اصلی</MainNavigation>
          </div>
        </div>
      </>
    );
}

export default Header;
