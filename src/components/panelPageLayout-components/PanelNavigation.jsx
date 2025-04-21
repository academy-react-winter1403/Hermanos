import React from "react";
import ReusablePanelNavigation from "./ReusablePanelNavigation";

function PanelNavigation() {
  return (
    <div className="sidebar-navigation w-[25%] h-[635px] bg-[rgba(164,246,222,1)]">
      <ReusablePanelNavigation
        navIcon="/images/Path 3115.svg"
        to="/panel-student/counter"
        extraStyle="mt-[20px]"
      >
        پیشخوان
      </ReusablePanelNavigation>
      <ReusablePanelNavigation
        navIcon="/images/Path 1899.svg"
        to="/panel-student/edit-profile"
      >
        ویرایش پروفایل
      </ReusablePanelNavigation>
      <ReusablePanelNavigation
        navIcon="/images/Path 3126.svg"
        to="/panel-student/my-courses"
      >
        دوره های من
      </ReusablePanelNavigation>
      <ReusablePanelNavigation
        navIcon="/images/Path 3118.svg"
        to="/panel-student/reserved-courses"
      >
        دوره های رزرو
      </ReusablePanelNavigation>
      <ReusablePanelNavigation
        navIcon="/images/Path 3119.svg"
        to="/panel-student/favorites"
      >
        مورد علاقه ها
      </ReusablePanelNavigation>
      <ReusablePanelNavigation
        navIcon="/images/Path 3121.svg"
        to="/panel-student/my-opinion"
      >
        نظرات من
      </ReusablePanelNavigation>
      <ReusablePanelNavigation
        navIcon="/images/Path 3122.svg"
        to="/panel-student/change-pass"
      >
        تغییر رمز
      </ReusablePanelNavigation>
      <ReusablePanelNavigation
        navIcon="/images/Path 1902.svg"
        to="/"
        extraStyle="mt-[50px]"
      >
        بازگشت به خانه
      </ReusablePanelNavigation>
      <ReusablePanelNavigation navIcon="/images/Path 3125.svg" to="/">
        خروج
      </ReusablePanelNavigation>
    </div>
  );
}

export default PanelNavigation;
