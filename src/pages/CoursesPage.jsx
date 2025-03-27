import { BsSearch } from "react-icons/bs";
import { Outlet } from "react-router-dom";
import MainCoursesSearch from "../components/coursesPage-components/MainCoursesSearch";
import CoursesHolder from "../components/coursesPage-components/CoursesHolder";
import CoursesFilter from "../components/coursesPage-components/CoursesFilter";
import CoursesSlider from "../components/coursesPage-components/CoursesSlider";

function CoursesPage() {
  return (
    <div>
      <Outlet />
      <div className="main-courses mx-[auto] gap-[10px] w-[95%] flex flex-wrap flex-row justify-center">
        <MainCoursesSearch />
        <CoursesHolder />
        <CoursesFilter />
      </div>
      <CoursesSlider />
      ======= CoursesPage
    </div>
  );
}

export default CoursesPage;
