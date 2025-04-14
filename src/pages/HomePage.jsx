import OurServices from "../components/homePage-components/OurServices";
import HeroStatistics from "../components/homePage-components/HeroStatistics";
import Category from "../components/homePage-components/Category";
import OurCourses from "../components/homePage-components/OurCourses";
import OurProfessionals from "../components/homePage-components/OurProfessionals";
import CoursesSlider from "../components/coursesPage-components/CoursesSlider";
import NewsCard from "../components/newsPage-components/NewsCard";
import SectionTitle from "../components/common/SectionTitle";
import Button from "../components/common/Button";
import SugesstCriticism from "../components/homePage-components/SugesstCriticism";

function HomePage() {
  window.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY;
    console.log(scrollPosition);
  });

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
        <CoursesSlider sliderElement={<NewsCard />} />
        <Button style="mx-[auto] mt-[70px] mb-[120px] border border-[2px] border-[rgba(18,146,108,1)] w-[350px] h-[90px] rounded-[51px] text-[rgba(255,255,255,1)] text-center text-[20px] leading-[80px] bg-[rgba(18,146,108,1)]">
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
