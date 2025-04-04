import React from "react";
import HeaderSignInBtn from "./header-components/HeaderSignInBtn";
import HeaderNavigations from "./header-components/HeaderNavigations";
import Logo from "./header-components/Logo";
import { useLocation } from "react-router-dom";
import HeroSection from "./homePage-components/HeroSection";

function Header() {
  const location = useLocation();

  if (location.pathname === "/")
    return (
      <div className="header-container w-[100%] flex flex-wrap flex-row items-center justify-between bg-linear-to-br from-[rgba(164,246,222,1)] to-[rgba(255,255,255,1)]">
        <HeaderSignInBtn />
        <HeaderNavigations />
        <Logo />
        <HeroSection />
      </div>
    );
  else
    return (
      <div className="header-container w-[100%] h-[60px] flex flex-nowrap flex-row items-center justify-between bg-linear-to-br from-[rgba(164,246,222,1)] to-[rgba(255,255,255,1)]">
        <HeaderSignInBtn />
        <HeaderNavigations />
        <Logo />
      </div>
    );
}

export default Header;
