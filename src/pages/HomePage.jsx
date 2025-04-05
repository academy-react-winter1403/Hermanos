import OurServices from "../components/homePage-components/OurServices";
import CoursesSlider from "../components/coursesPage-components/CoursesSlider";

function HomePage() {
  return (
    <div className="homePage-content">
      <OurServices />

      {/* Statistics */}

      <div className="statistics-box flex flex-row rounded-3xl bg-[rgba(91,225,185,1)] w-[90%] h-[300px] mx-auto my-[50px]"></div>
      <CoursesSlider />
    </div>
  );
}

export default HomePage;
