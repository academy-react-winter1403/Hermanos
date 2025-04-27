import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import {
  CategoryCard1,
  CategoryCard2,
  CategoryCard3,
  CategoryCard4,
  CategoryCard5,
} from "./CategoryCards";

const CategorySlider = () => {
  const SwiperStyle = {
    display: "flex",
    flexwrap: "nowrap",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    m: "",
  };
  return (
    <>
      <Swiper
        // cssMode={true}
        navigation={true}
        // pagination={true}
        // mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide style={SwiperStyle}>
          <CategoryCard1 />
        </SwiperSlide>
        <SwiperSlide style={SwiperStyle}>
          <CategoryCard2 />
        </SwiperSlide>
        <SwiperSlide style={SwiperStyle}>
          <CategoryCard3 />
        </SwiperSlide>
        <SwiperSlide style={SwiperStyle}>
          <CategoryCard4 />
        </SwiperSlide>
        <SwiperSlide style={SwiperStyle}>
          <CategoryCard5 />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default CategorySlider;
