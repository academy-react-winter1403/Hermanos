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
      <div className="main-courses mb-[40px] mt-[80px] mx-[auto] gap-[10px] w-[95%] flex flex-wrap flex-row justify-center">
        <SectionTitle title="لیست دوره ها  " titleClass="mb-[40px]" />
        <MainCoursesSearch />
        <CoursesHolder />
        <CoursesFilter />
        <SectionTitle
          title=" دوره های برتر "
          description="ساختن دنیایی بهتر، یک دوره در یک زمان"
          titleClass="mb-[10px]"
        />
      </div>
      <CoursesSlider />

      <Button style="mx-[auto] mt-[70px] mb-[120px] border border-[2px] border-[rgba(18,146,108,1)] w-[230px] h-[60px] rounded-[51px] text-[rgba(255,255,255,1)] text-center text-[16px] leading-[50px] bg-[rgba(18,146,108,1)]">
        مشاهده دوره های بیشتر
      </Button>
    </div>
  );
}

export default CoursesPage;
