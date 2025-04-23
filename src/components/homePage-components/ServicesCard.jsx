import React from "react";
import SectionTitle from "../common/SectionTitle";

const ServicesCard = () => {
  const services = [
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
      icon: "/images/analyze-svgrepo-com.svg",
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
  ];
  return (
    <>
      {services.map((service) => (
        <div className=" w-[80px] h-[150px] block lg:hidden ">
          <div className="servise-pic  h-[70%] w-[100%] mx-auto">
            <img src={service.icon} alt="" className="w-[100%] h-[100%]" />
          </div>
          <div className="service-title w-[100%] h-[30%] text-center text-wrap text-xs font-bold">
            {service.title}
          </div>
        </div>
      ))}
    </>
  );
};

export default ServicesCard;
