import React from "react";
import FavoriteCourseHeader from "../components/panelFavoritePage-components/FavoriteCourseHeader";
import MyFavoriteCourse from "../components/panelFavoritePage-components/MyFavoriteCourse";
import MyCoursePagination from "../components/common/MyCoursePagination";
import { Tabs } from "antd";
import MyOpinionHeader from "../components/panelMyOpinionPage-components/MyOpinionHeader";
import MyOpinionCard from "../components/panelMyOpinionPage-components/MyOpinionCard";

function PanelMyOpinionPage() {
  return (
    <div className="border border-[rgba(232,232,232,1)] p-[20px] pt-[5px] w-[96%] h-[92%] mt-[25px] mx-[auto] rounded-[15px] shadow-[10px_10px_5px_0px_rgba(0,0,0,0.16)] flex flex-row flex-wrap justify-center gap-[20px]">
      <Tabs
        defaultActiveKey="1"
        centered
        items={[
          {
            label: " دوره ها",
            key: "1",
            children: (
              <div className="shadow-[10px_10px_5px_0px_rgba(0,0,0,0.16)] w-[1050px] h-[480px] rounded-[10px] bg-[rgba(251,246,246,1)] mx-[auto]">
                <MyOpinionHeader />
                <div className="w-[95%] h-[330px] mx-[auto] mt-[15px]">
                  <MyOpinionCard />
                  <MyOpinionCard />
                  <MyOpinionCard />
                  <MyOpinionCard />
                </div>
                <div className="pagination h-[50px] w-[300px] mx-[auto] flex flex-row flex-nowrap justify-center items-center">
                  <MyCoursePagination />
                </div>
              </div>
            ),
          },
          {
            label: " اخبار و مقالات   ",
            key: "2",
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
        ]}
      />
    </div>
  );
}

export default PanelMyOpinionPage;
