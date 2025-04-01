// import { Outlet } from "react-router-dom";
import HeroSection from "../components/homePage-components/HeroSection";
import OurServices from "../components/homePage-components/OurServices";
import HeroStatistics from "../components/homePage-components/HeroStatistics";
import Category from "../components/homePage-components/Category";
import OurCourses from "../components/homePage-components/OurCourses";
import OurProfessionals from "../components/homePage-components/OurProfessionals";

function HomePage() {
  return (
    <div className="homePage-content mx-[10px]">
      <HeroSection />

      <OurServices />

      <HeroStatistics />

      <Category />
      <OurCourses />
      <OurProfessionals />
    </div>
  );
}

export default HomePage;
