import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { createContext, useState } from "react";

const MainPagesGlobalState = createContext();

function LayOutPage() {
  const [sliderCard, setSliderCard] = useState([]);

  return (
    <MainPagesGlobalState.Provider
      value={{
        sliderCard,
        setSliderCard,
      }}
    >
      <div className="layout-container flex flex-wrap flex-col justify-center items-center">
        <Header />
        <div className="main-container w-[95%]">
          <Outlet />
        </div>
        <Footer />
      </div>
    </MainPagesGlobalState.Provider>
  );
}

export default LayOutPage;
