import { Outlet } from "react-router-dom";
import HeroSection from "../components/homePage-components/HeroSection";
import OurServices from "../components/homePage-components/OurServices";
import CoursesSlider from "../components/coursesPage-components/CoursesSlider";
import HeroStatistics from "../components/homePage-components/HeroStatistics";

function HomePage() {
  return (
    <div className="homePage-content mx-[30px]">
      <HeroSection />

      <OurServices />

      <HeroStatistics />

      {/* <CoursesSlider /> */}
    </div>
  );
}

export default HomePage;
