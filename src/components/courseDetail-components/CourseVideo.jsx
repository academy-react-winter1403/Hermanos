import React from "react";

function CourseVideo({ time, videoName }) {
  return (
    <div className="course-example-video  w-[100%]">
      <div className="video1  w-[100%] h-[40px] mb-[5px] border-b flex flex-row flex-nowrap justify-between">
        <div className="video1-time w-[120px] h-[100%] flex flex-row flex-nowrap justify-center gap-[2px]">
          <div className="download-icon w-[20px] h-[20px] mt-[10px]">
            <img src="/images/Vector.svg" alt="" />
          </div>
          <div className="time w-[90px] h-[100%] text-center leading-[40px] text-[15px]">
            {time}
          </div>
        </div>
        <div className="video1-name w-[50%] h-[100%] text-end leading-[30px] text-[14px]">
          {videoName}
        </div>
      </div>
    </div>
  );
}

export default CourseVideo;
