import React from "react";
import HeaderSignInBtn from "./header-components/HeaderSignInBtn";
import HeaderNavigations from "./header-components/HeaderNavigations";
import Logo from "./header-components/Logo";

function Header() {
  return (
    <div className="header-container w-[100%] h-[60px] flex flex-nowrap flex-row items-center justify-between bg-linear-to-br from-[rgba(164,246,222,1)] to-[rgba(255,255,255,1)]">
      <HeaderSignInBtn />
      <HeaderNavigations />
      <Logo />
    </div>
  );
}

export default Header;
