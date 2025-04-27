import React from "react";
import MyCoursesHeader from "../MyCoursesPage/panelMyCoursesPage-components/MyCoursesHeader";
import MyCourseInPanel from "../MyCoursesPage/panelMyCoursesPage-components/MyCourseInPanel";
import MyCoursePagination from "../../../components/common/MyCoursePagination";

function PanelMyCoursesPage() {
  return (
    <div className="border border-[rgba(232,232,232,1)] p-[20px] w-[96%] h-[92%] mt-[25px] mx-[auto] rounded-[15px] shadow-[10px_10px_5px_0px_rgba(0,0,0,0.16)] flex flex-row flex-wrap justify-center gap-[20px]">
      <div className="shadow-[10px_10px_5px_0px_rgba(0,0,0,0.16)] w-[98%] h-[98%] rounded-[10px] bg-[rgba(251,246,246,1)] mx-[auto] mt-[5px]">
        <MyCoursesHeader />
        <div className="w-[95%] h-[380px]  mx-[auto] mt-[15px]">
          <MyCourseInPanel />
          <MyCourseInPanel />
          <MyCourseInPanel />
          <MyCourseInPanel />
        </div>
        <div className="pagination h-[50px] w-[300px] mx-[auto] flex flex-row flex-nowrap justify-center items-center">
          <MyCoursePagination />
        </div>
      </div>
    </div>
  );
}

export default PanelMyCoursesPage;
