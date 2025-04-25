import { Outlet } from "react-router-dom";
import NewsCard from "../components/newsPage-components/NewsCard";
import MainCoursesSearch from "../components/coursesPage-components/MainCoursesSearch";
import Pagination from "../components/common/Pagination";
import CoursesSlider from "../components/coursesPage-components/CoursesSlider";
import Button from "../components/common/Button";
import SectionTitle from "../components/common/SectionTitle";
import NewsSlider from "../components/newsPage-components/NewsSlider";
import CoursesFilter from "../components/coursesPage-components/CoursesFilter";

function NewsPage() {
  return (
    <div className="mx-auto w-[100%] ">
      <Outlet />
      <SectionTitle
        title="لیست اخبار  و مقالات"
        titleClass="text-[30px]"
        customClass="mb-[50px] mt-[90px]"
      />
      <MainCoursesSearch />
      <div className="newsContainer border border-[rgba(239,239,239,1)] shadow-[10px_10px_7px_0px_rgba(0,0,0,0.16)] flex flex-wrap justify-center rounded-2xl mt-5 mb-5 mx-auto ">
        <div className="holder p-4 grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-y-10 g-x-0  drop-shadow-xl mb-1  ">
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

      <div className="hidden lg:block">
        <CoursesSlider sliderElement={<NewsCard />} />
      </div>
      <div className="block lg:hidden w-full">
        <NewsSlider />
      </div>
      <Button style="mx-[auto] mb-[70px] border border-[2px] border-[rgba(18,146,108,1)] w-[230px] h-[60px] rounded-[51px] text-[rgba(255,255,255,1)] text-center text-[18px] leading-[53px] bg-[rgba(18,146,108,1)]">
        مشاهده مقالات بیشتر
      </Button>
    </div>
  );
}

export default NewsPage;
