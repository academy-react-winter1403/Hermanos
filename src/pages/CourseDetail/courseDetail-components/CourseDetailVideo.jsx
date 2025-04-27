import React from "react";
import CourseVideo from "./CourseVideo";
import SectionTitle from "../../../components/common/SectionTitle";

function CourseDetailVideo() {
  return (
    <div className="course-vidoes p-[30px] w-[1000px] rounded-[30px] bg-[rgba(255,255,255,1)] ">
      <SectionTitle title="ویدیوهای دوره" customClass="text-end" />
      <div className="video-pic w-[100%] mt-[30px] mb-[30px]">
        <img
          src="/images/shutterstock_279396767-e1504271826302-770x578.svg"
          alt=""
        />
      </div>
      <CourseVideo videoName="ویدیو اول : آشنایی با دوره" time="00 : 28 : 01" />
      <CourseVideo
        videoName="ویدیو دوم : آشنایی با جاوااسکریپت"
        time="00 : 28 : 01"
      />
      <CourseVideo
        videoName="ویدیو سوم : آشنایی با جاوااسکریپت"
        time="00 : 28 : 01"
      />
    </div>
  );
}

export default CourseDetailVideo;
