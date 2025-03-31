import MainCoursesSearch from "../components/coursesPage-components/MainCoursesSearch";
import CoursesHolder from "../components/coursesPage-components/CoursesHolder";
import CoursesFilter from "../components/coursesPage-components/CoursesFilter";
import CoursesSlider from "../components/coursesPage-components/CoursesSlider";
import SectionTitle from "../components/common/SectionTitle";
import CourseCard from "../components/common/CourseCard";
import Button from "../components/common/Button";

function CoursesPage() {
  return (
    <div>
      <div className="main-courses mt-[80px] mx-[auto] gap-[10px] w-[95%] flex flex-wrap flex-row justify-center">
        <SectionTitle title="لیست دوره ها  " />
        <MainCoursesSearch />
        <CoursesHolder />
        <CoursesFilter />
        <SectionTitle
          title=" دوره های برتر "
          description="ساختن دنیایی بهتر، یک دوره در یک زمان"
        />
      </div>
      <CoursesSlider />
      <div className="course-slider mt-[80px] mx-[auto] w-[99%] flex flex-row gap-[40px] flex-nowrap justify-center mb-[100px] relative">
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
      <Button
        bg="rgba(18,146,108,1)"
        radius="51px"
        width="250px"
        height="45px"
        lineHeight="40px"
      >
        مشاهده دوره های بیشتر
      </Button>
    </div>
  );
}

export default CoursesPage;
