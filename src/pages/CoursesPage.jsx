import { BsSearch } from "react-icons/bs";
import { Outlet } from "react-router-dom";
import MainCoursesSearch from "../components/coursesPage-components/MainCoursesSearch";
import CoursesHolder from "../components/coursesPage-components/CoursesHolder";
import CoursesFilter from "../components/coursesPage-components/CoursesFilter";
import SectionTitle from "../components/common/SectionTitle";

function CoursesPage() {
  return (
    <div>
      <Outlet />
      <div className="main-courses mx-[auto] gap-[10px] w-[95%] flex flex-wrap flex-row justify-center">
        <SectionTitle title="لیست دوره ها  " />
        <MainCoursesSearch />
        <CoursesHolder />
        <CoursesFilter />
        <SectionTitle
          title=" دوره های برتر "
          description="ساختن دنیایی بهتر، یک دوره در یک زمان"
        />
      </div>
      <div className="course-slider border mt-[40px] mx-[auto] w-[99%] h-[100px]">
        course-slider
      </div>
    </div>
  );
}

export default CoursesPage;
