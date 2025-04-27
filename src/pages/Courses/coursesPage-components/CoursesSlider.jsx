import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import CourseCard from "../../../components/common/CourseCard";
const CoursesSlider = ({ sliderElement = <CourseCard /> }) => {
  const SwiperStyle = {
    display: "flex",
    flexwrap: "nowrap",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "",
    m: "",
  };

  return (
    <div className="w-[99%] h-[600px] mx-[auto]">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper h-[100%] lg:w-[85%] xl:w-[80%] 2xl:w-[70%]"
      >
        <SwiperSlide style={SwiperStyle}>{sliderElement}</SwiperSlide>
        <SwiperSlide style={SwiperStyle}>{sliderElement}</SwiperSlide>
        <SwiperSlide style={SwiperStyle}>{sliderElement}</SwiperSlide>
        <SwiperSlide style={SwiperStyle}>{sliderElement}</SwiperSlide>
        <SwiperSlide style={SwiperStyle}>{sliderElement}</SwiperSlide>
        <SwiperSlide style={SwiperStyle}>{sliderElement}</SwiperSlide>
        <SwiperSlide style={SwiperStyle}>{sliderElement}</SwiperSlide>
        <SwiperSlide style={SwiperStyle}>{sliderElement}</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CoursesSlider;
