import OurServices from "../Landing/homePage-components/OurServices";
import HeroStatistics from "../Landing/homePage-components/HeroStatistics";
import Category from "../Landing/homePage-components/Category";
import OurCourses from "../Landing/homePage-components/OurCourses";
import OurProfessionals from "../Landing/homePage-components/OurProfessionals";
import CoursesSlider from "../Courses/coursesPage-components/CoursesSlider";
import NewsCard from "../News/newsPage-components/NewsCard";
import SectionTitle from "../../components/common/SectionTitle";
import Button from "../../components/common/Button";
import SugesstCriticism from "../Landing/homePage-components/SugesstCriticism";
import NewsSlider from "../News/newsPage-components/NewsSlider";
import { useContext, useEffect } from "react";
import { getSliderCards } from "../../core/services/api/sliderCards";

function HomePage() {
  // const { sliderCard, setSliderCard } = useContext(MainPagesGlobalState);
  // useEffect(
  //   function () {
  //     async function getSlider() {
  //       const sliderCourses = await getSliderCards();
  //       setSliderCard(sliderCourses);
  //     }
  //     getSlider();
  //   },
  //   [setSliderCard]
  // );

  return (
    <div className="homePage-content">
      <OurServices />

      <HeroStatistics />

      <Category />
      <OurCourses />
      <OurProfessionals />
      <div className="my-[50px]">
        <SectionTitle
          title="اخبار و مقالات"
          description="ساختن دنیایی بهتر، یک دوره در یک زمان"
          customClass="my-[50px]"
        />
        <div className="hidden lg:block">
          <CoursesSlider sliderElement={<NewsCard />} />
        </div>
        <div className="block lg:hidden w-full">
          <NewsSlider />
        </div>
        <Button style="mx-[auto] lg:mt-[70px] mb-[120px] border border-[2px] border-[rgba(18,146,108,1)] w-[200px] lg:w-[350px] h-[60px] lg:h-[90px] rounded-[51px] text-[rgba(255,255,255,1)] text-center text-base  lg:text-[20px] leading-[50px] lg:leading-[80px] bg-[rgba(18,146,108,1)]">
          مشاهده مقالات بیشتر
        </Button>
      </div>
      <SectionTitle
        title="پیشنهادات و انتقادات"
        description="نظرات خود را با ما در میان بگذارید"
        titleClass="mb-[10px]"
      />
      <SugesstCriticism />
    </div>
  );
}

export default HomePage;
