import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function LayOutPage() {
  return (
    <div className="layout-container border-transparent flex flex-wrap flex-col justify-center items-center">
      <Header />
      <div className="main-container w-[95%]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default LayOutPage;
