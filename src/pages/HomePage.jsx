import { Outlet } from "react-router-dom";
import HeroSection from "../components/homePage-components/HeroSection";
import OurServices from "../components/homePage-components/OurServices";

function HomePage() {
  return (
    <div className="homePage-content">
      <HeroSection />

      <OurServices />

      {/* Statistics */}

      <div className="statistics-box flex flex-row rounded-3xl bg-[rgba(91,225,185,1)] w-[90%] h-[300px] mx-auto my-[50px]"></div>
    </div>
  );
}

export default HomePage;
