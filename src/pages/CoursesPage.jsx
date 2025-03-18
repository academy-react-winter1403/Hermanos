import { Outlet } from "react-router-dom";

function CoursesPage() {
  return (
    <div>
      <Outlet />
      <div className="main-courses border mx-[auto] gap-[10px] w-[95%] flex flex-wrap flex-row justify-center">
        <div className="top-filter w-[100%] bg-[#ccc] h-[50px] rounded-lg mt-[20px]">
          TOP-FILTER
        </div>
        <div className="main-courses-slider border mt-[10px] w-[75%] h-[500px] rounded-md">
          MAIN-COURSES-SLIDER
        </div>
        <div className="right-filter border mt-[10px] w-[23%] h-[200px]  rounded-md"></div>
      </div>
      <div className="course-slider border mx-[auto] w-[99%] h-[100px]">
        course-slider
      </div>
      ======= CoursesPage
    </div>
  );
}

export default CoursesPage;
