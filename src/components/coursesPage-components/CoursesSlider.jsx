import React from "react";
import CourseCard from "../common/CourseCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const CoursesSlider = () => {
  const SwiperStyle = {
    display: "flex",
    flexFlow: "row",
    flexDirection: "nowrap",
    justifyContent: "center",
    alignItems: "center",
    gap: "50px",
  };

  return (
    <div className="w-[99%] h-[600px] mx-[auto]">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper h-[100%]"
      >
        <SwiperSlide style={SwiperStyle}>
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </SwiperSlide>
        <SwiperSlide style={SwiperStyle}>
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </SwiperSlide>
        <SwiperSlide style={SwiperStyle}>
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </SwiperSlide>
        <SwiperSlide style={SwiperStyle}>
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </SwiperSlide>
        <SwiperSlide style={SwiperStyle}>
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </SwiperSlide>
        <SwiperSlide style={SwiperStyle}>
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CoursesSlider;
