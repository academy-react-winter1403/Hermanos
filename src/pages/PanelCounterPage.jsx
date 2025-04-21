import React from "react";
import NewCourses from "../components/panelCounterPage-components/NewCourses";
import PanelWelcome from "../components/panelCounterPage-components/PanelWelcome";
import MyCoursesStatus from "../components/panelCounterPage-components/MyCoursesStatus";
import SectionTitle from "../components/common/SectionTitle";
import Button from "../components/common/Button";
import PanelUsere from "../components/panelCounterPage-components/PanelUsere";

function PanelCounterPage() {
  return (
    <div className="border border-[rgba(232,232,232,1)] p-[20px] w-[96%] h-[92%] mt-[25px] mx-[auto] rounded-[15px] shadow-[10px_10px_5px_0px_rgba(0,0,0,0.16)] flex flex-row flex-wrap justify-center gap-[15px]">
      <NewCourses />
      <PanelWelcome />
      <MyCoursesStatus />
      <PanelUsere />
    </div>
  );
}

export default PanelCounterPage;
