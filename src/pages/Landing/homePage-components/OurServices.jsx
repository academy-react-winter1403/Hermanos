import React from "react";
import Servise from "./Servise";
import ServicesCard from "./ServicesCard";
import SectionTitle from "../../../components/common/SectionTitle";

const OurServices = () => {
  return (
    <>
      <SectionTitle
        title="خدمات ما"
        description="ما فرصت آماده شدن برای زندگی را فراهم می کنیم"
        titleClass="mb-[10px] mt-[70px]"
      />
      <div className="sevices-container  w-[90%] mx-[auto] flex flex-row flex-wrap gap-[30px] justify-center mt-[90px] mb-[100px]">
        <Servise />
        <ServicesCard />
      </div>
    </>
  );
};

export default OurServices;
