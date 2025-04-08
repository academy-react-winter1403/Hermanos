import { Outlet } from "react-router-dom";
import NewsCard from "../components/newsPage-components/NewsCard";
import MainCoursesSearch from "../components/coursesPage-components/MainCoursesSearch";
import Pagination from "../components/common/Pagination";
import CoursesSlider from "../components/coursesPage-components/CoursesSlider";
import Button from "../components/common/Button";
import SectionTitle from "../components/common/SectionTitle";

function NewsPage() {
  return (
    <div className="mx-7">
      <Outlet />
      <MainCoursesSearch />
      <div className="newsContainer border border-[1px] border-[rgba(239,239,239,1)] shadow-[10px_10px_3px_0px_rgba(0,0,0,0.16)] flex flex-wrap justify-center rounded-2xl mt-5 mb-5 ">
        <div className="holder p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 drop-shadow-xl mb-3">
          {[...Array(6)].map(() => (
            <NewsCard />
          ))}
        </div>
        <Pagination />
      </div>
      <SectionTitle
        title="اخبار و مقالات مشابه"
        titleClass="mt-[60px]"
        description="ساختن دنیایی بهتر، یک دوره در یک زمان"
        customClass="mb-[45px]"
      />

      <CoursesSlider sliderElement={<NewsCard />} />
      <Button style="mx-[auto] mt-[70px] mb-[70px] border border-[2px] border-[rgba(18,146,108,1)] w-[350px] h-[90px] rounded-[51px] text-[rgba(255,255,255,1)] text-center text-[20px] leading-[80px] bg-[rgba(18,146,108,1)]">
        مشاهده مقالات بیشتر
      </Button>
    </div>
  );
}

export default NewsPage;
