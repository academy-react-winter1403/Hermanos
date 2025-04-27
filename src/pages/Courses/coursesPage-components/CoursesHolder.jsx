import React from "react";
import CourseCard from "../../../components/common/CourseCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

function CoursesHolder() {
  const SwiperStyle = {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    gap: "30px",
  };
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <div className="main-courses-slider mb-[80px] shadow-[8px_8px_10px_0px_rgba(0,0,0,0.16)] border border-[rgba(239,239,239,1)] p-[25px] mt-[10px] w-[100%] lg:w-[79%] min-h-[1300px] rounded-[37px] gap-y-[40px]">
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper h-[100%] mb-[40px]"
      >
        <SwiperSlide style={SwiperStyle}>
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </SwiperSlide>
        <SwiperSlide style={SwiperStyle}>
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </SwiperSlide>
        <SwiperSlide style={SwiperStyle}>
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default CoursesHolder;
