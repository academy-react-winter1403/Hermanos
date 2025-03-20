import { BsSearch } from "react-icons/bs";
import { Outlet } from "react-router-dom";
import MainCoursesSearch from "../components/coursesPage-components/MainCoursesSearch";
import CoursesHolder from "../components/coursesPage-components/CoursesHolder";
import CoursesFilter from "../components/coursesPage-components/CoursesFilter";
import SectionTitle from "../components/common/SectionTitle";

// there is no need for this component to have a children route , just have this your mind...

function CoursesPage() {
  return (
    <div>
      <Outlet />
      <div className="main-courses mx-[auto] gap-[10px] w-[95%] flex flex-wrap flex-row justify-center">
        <SectionTitle>لیست دوره ها</SectionTitle>
        <MainCoursesSearch />
        <CoursesHolder />
        <CoursesFilter />
      </div>
      <div className="course-slider border mx-[auto] w-[99%] h-[100px]">
        course-slider
      </div>
    </div>
  );
}

export default CoursesPage;
