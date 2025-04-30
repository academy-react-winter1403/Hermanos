import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function LayOutPage() {
  return (
    <div className="layout-container flex flex-wrap flex-col justify-center items-center">
      <Header />
      <div className="main-container w-[95%]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default LayOutPage;
