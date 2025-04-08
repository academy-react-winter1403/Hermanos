import Button from "../components/common/Button";
import SectionTitle from "../components/common/SectionTitle";
import CourseDetailSugesstion from "../components/courseDetail-components/CourseDetailSugesstion";
import CoursesSlider from "../components/coursesPage-components/CoursesSlider";
import NewsTopic from "../components/newsDetail-components/NewsTopic";
import NewsCard from "../components/newsPage-components/NewsCard";

function NewsDetailPage() {
  return (
    <>
      <div className="rounded-[40px] w-[80%] mx-[auto] mt-[100px] bg-[rgba(251,246,246,1)]">
        <div className="news-detail-pic w-[700px] h-[450px] border mx-[auto]">
          <img
            src="/images/Background Complete.svg"
            alt=""
            className="w-[100%] h-[100%]"
          />
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
      <CoursesSlider sliderElement={<NewsCard />} />
      <Button style="mx-[auto] mt-[70px] mb-[70px] border border-[2px] border-[rgba(18,146,108,1)] w-[350px] h-[90px] rounded-[51px] text-[rgba(255,255,255,1)] text-center text-[20px] leading-[80px] bg-[rgba(18,146,108,1)]">
        مشاهده مقالات بیشتر
      </Button>
    </>
  );
}

export default NewsDetailPage;
