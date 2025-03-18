// import React, { useState } from "react";
import MainNavigation from "../common/MainNavigation";

function HeaderNavigations() {
  //   const [headerNav, setHeaderNav] = useState([
  //     { title: "صفحه اصلی", id: 1 },
  //     { title: "دوره ها", id: 2 },
  //     { title: "مقالات", id: 3 },
  //     { title: "درباره ما", id: 4 },
  //   ]);

  return (
    <div className="nav-container w-[400px] h-[80%] flex flex-nowrap flex-row items-center justify-between">
      {/* {headerNav.map((item) => (
        <Navigation title={item.title} key={item.id} />
      ))} */}
      <MainNavigation navigationTo="/about-us">درباره ما</MainNavigation>
      <MainNavigation navigationTo="/news">مقالات</MainNavigation>
      <MainNavigation navigationTo="/courses">دوره ها</MainNavigation>
      <MainNavigation navigationTo="/">صفحه اصلی</MainNavigation>
    </div>
  );
}

export default HeaderNavigations;
