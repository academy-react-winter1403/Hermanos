import React from "react";
import HeaderSignInBtn from "./header-components/HeaderSignInBtn";
import HeaderNavigations from "./header-components/HeaderNavigations";
import Logo from "./header-components/Logo";

function Header() {
  return (
    <div className="header-container border w-[100%] h-[60px] flex flex-nowrap flex-row items-center justify-between">
      <HeaderSignInBtn />
      <HeaderNavigations />
      <Logo />
    </div>
  );
}

export default Header;
