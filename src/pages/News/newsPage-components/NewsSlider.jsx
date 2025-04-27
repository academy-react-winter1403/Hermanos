import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import NewsCard from "./NewsCard";

const NewsSlider = ({ sliderElement = <NewsCard /> }) => {
  const SwiperStyle = {
    display: "flex",
    flexwrap: "nowrap",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  };
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        // pagination={{ clickable: true }}
        // mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper flex mb-8 sm:w-[70%] md:w-[55%] "
      >
        <SwiperSlide style={SwiperStyle}>{sliderElement}</SwiperSlide>
        <SwiperSlide style={SwiperStyle}>{sliderElement}</SwiperSlide>
        <SwiperSlide style={SwiperStyle}>{sliderElement}</SwiperSlide>
        <SwiperSlide style={SwiperStyle}>{sliderElement}</SwiperSlide>
        <SwiperSlide style={SwiperStyle}>{sliderElement}</SwiperSlide>
      </Swiper>
    </>
  );
};

export default NewsSlider;
