import React from "react";
import SectionTitle from "../common/SectionTitle";

const OurServices = () => {
  return (
    <div className="sevices-container">
      <div className="py-16 mx-[30px] bg-white">
        {/* <h2 className="text-center text-3xl font-bold mb-[15px]">خدمات ما</h2>
        <p className="text-center ">
          ما فرصت آماده شدن برای زندگی را فراهم می کنیم
        </p> */}
        <SectionTitle
          title="خدمات ما"
          description=" ما فرصت آماده شدن برای زندگی را فراهم می کنیم"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-15 mt-15 px-35 ">
          {[
            {
              title: "اساتید مجرب",
              description:
                "لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود ",
              icon: "/images/figure-svgrepo-com.svg",
            },
            {
              title: "مشاوره رایگان",
              description:
                "لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود ",
              icon: "/images/",
            },
            {
              title: "فرصت های شغلی",
              description:
                "لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود ",
              icon: "/images/map-svgrepo-com.svg",
            },
            {
              title: "ارائه مدرک معتبر",
              description:
                "لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود ",
              icon: "/images/office-svgrepo-com.svg",
            },
            {
              title: "دوره های جامع و متنوع",
              description:
                "لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود ",
              icon: "/images/analyze-svgrepo-com.svg",
            },
            {
              title: "آموزش پروژه محور",
              description:
                "لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود ",
              icon: "/images/project-svgrepo-com.svg",
            },
          ].map((service, index) => (
            <div key={index} className="p-6  rounded-lg text-end shadow-md">
              <img src={service.icon} alt="" className="ml-[140px] " />
              <h3 className="text-lg font-semibold mt-4">{service.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
