import MainCoursesSearch from "../Courses/coursesPage-components/MainCoursesSearch";
// import CoursesHolder from "../components/coursesPage-components/CoursesHolder";
import CoursesFilter from "../Courses/coursesPage-components/CoursesFilter";
import CoursesSlider from "../Courses/coursesPage-components/CoursesSlider";
import SectionTitle from "../../components/common/SectionTitle";
import CourseCard from "../../components/common/CourseCard";
import Button from "../../components/common/Button";
import NewsSlider from "../News/newsPage-components/NewsSlider";
import { Pagination } from "antd";
import MyCoursePagination from "../../components/common/MyCoursePagination";

function CoursesPage() {
  return (
    <div>
      <div className="main-courses mb-[40px] mt-[80px] mx-[auto] gap-[10px] w-[95%] flex flex-wrap flex-row justify-center">
        <SectionTitle
          title="لیست دوره ها  "
          titleClass="text-xl font-bold mb-[30px]"
        />
        <MainCoursesSearch />
        {/* <CoursesHolder /> */}
        <div className="main-courses-slider mb-[80px] shadow-[8px_8px_10px_0px_rgba(0,0,0,0.16)] border border-[rgba(239,239,239,1)] p-[25px] mt-[10px] w-[100%] lg:w-[79%] min-h-[1300px] rounded-[37px] gap-y-[40px] ">
          <div className="holder p-4 grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-y-10 g-x-0  drop-shadow-xl mb-1  ">
            {[...Array(6)].map(() => (
              <CourseCard />
            ))}
          </div>
          <div className="mt-[15px] mx-[auto] flex justify-center items-center">
            <MyCoursePagination />
          </div>
        </div>
        <CoursesFilter />
        <SectionTitle
          title=" دوره های برتر "
          description="ساختن دنیایی بهتر، یک دوره در یک زمان"
          titleClass="mb-[10px]"
        />
      </div>
      <div className="hidden lg:block">
        <CoursesSlider />
      </div>
      <div className="block lg:hidden w-full">
        <NewsSlider sliderElement={<CourseCard />} />
      </div>
      <Button style="mt-[50px] mx-[auto] mb-[120px] border border-[2px] border-[rgba(18,146,108,1)] w-[230px] h-[60px] rounded-[51px] text-[rgba(255,255,255,1)] text-center text-[16px] leading-[50px] bg-[rgba(18,146,108,1)]">
        مشاهده دوره های بیشتر
      </Button>
    </div>
  );
}

export default CoursesPage;
