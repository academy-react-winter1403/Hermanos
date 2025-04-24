import React from "react";
import ReservedCourseHeader from "../components/panelResevedCoursesPage-components/ReservedCourseHeader";
import ReservedCourses from "../components/panelResevedCoursesPage-components/ReservedCourses";
import MyCoursePagination from "../components/common/MyCoursePagination";
import { Tabs } from "antd";
import MyFavoriteCourse from "../components/panelFavoritePage-components/MyFavoriteCourse";
import FavoriteCourseHeader from "../components/panelFavoritePage-components/FavoriteCourseHeader";

function PanelFavoritePage() {
  return (
    <div className="border border-[rgba(232,232,232,1)] p-[20px] pt-[5px] w-[96%] h-[92%] mt-[25px] mx-[auto] rounded-[15px] shadow-[10px_10px_5px_0px_rgba(0,0,0,0.16)] flex flex-row flex-wrap justify-center gap-[20px]">
      <Tabs
        defaultActiveKey="1"
        centered
        items={[
          {
            label: " دوره های مورد علاقه من",
            key: "1",
            children: (
              <div className="shadow-[10px_10px_5px_0px_rgba(0,0,0,0.16)] w-[1050px] h-[480px] rounded-[10px] bg-[rgba(251,246,246,1)] mx-[auto]">
                <FavoriteCourseHeader />
                <div className="w-[95%] h-[330px] mx-[auto] mt-[15px]">
                  <MyFavoriteCourse />
                  <MyFavoriteCourse />
                  <MyFavoriteCourse />
                  <MyFavoriteCourse />
                </div>
                <div className="pagination h-[50px] w-[300px] mx-[auto] flex flex-row flex-nowrap justify-center items-center">
                  <MyCoursePagination />
                </div>
              </div>
            ),
          },
          {
            label: " مقالات مورد علاقه من",
            key: "2",
            children: <div>there is nothing in here</div>,
          },
        ]}
      />
    </div>
  );
}

export default PanelFavoritePage;
