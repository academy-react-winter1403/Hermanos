import Button from "../../components/common/Button";
import SectionTitle from "../../components/common/SectionTitle";
import CourseDetailSugesstion from "../CourseDetail/courseDetail-components/CourseDetailSugesstion";
import CoursesSlider from "../Courses/coursesPage-components/CoursesSlider";
import NewsTopic from "../NewsDetail//newsDetail-components/NewsTopic";
import NewsCard from "../News/newsPage-components/NewsCard";
import NewsSlider from "../News/newsPage-components/NewsSlider";

function NewsDetailPage() {
  return (
    <>
      <div className="rounded-[40px] w-[80%] mx-[auto] mt-[100px] bg-[rgba(251,246,246,1)]">
        <div className="news-detail-pic lg:w-[700px] sm:h-[450px] mx-auto">
          <img src="/images/6101071.svg" alt="" className="w-[100%] h-[100%]" />
        </div>
        <NewsTopic />
        <CourseDetailSugesstion
          signTo="/news/:id/sign-opinion"
          userTo="/news/:id/user-opinion"
          holderStyle="w-[100%] mx-[auto] mt-[50px]"
          btnStyle="mb-[50px] mx-[auto] w-[80%] h-[100px] rounded-[15px] flex flex-row flex-nowrap justify-center"
        />
      </div>
      <SectionTitle
        customClass="mt-[90px] mb-[30px]"
        title="اخبار و مقالات مشابه"
        description="ساختن دنیایی بهتر، یک دوره در یک زمان"
      />
      <div className="mt-[80px] hidden lg:block">
        <CoursesSlider sliderElement={<NewsCard />} />{" "}
      </div>
      <div className="mt-[60px] block lg:hidden w-full">
        <NewsSlider />
      </div>
      <Button style="mt-[50px] mx-[auto] mb-[50px] border border-[2px] border-[rgba(18,146,108,1)] w-[230px] h-[60px] rounded-[51px] text-[rgba(255,255,255,1)] text-center text-[16px] leading-[50px] bg-[rgba(18,146,108,1)]">
        مشاهده مقالات بیشتر
      </Button>
    </>
  );
}

export default NewsDetailPage;
