import React from "react";

function Servise() {
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
        <div className="w-[380px] h-[150px] hidden lg:flex flex-row flex-nowrap ">
          <div className="service-desc-title  h-[100%] w-[280px] flex flex-col items-center justify-center gap-[5px]">
            <div className="service-title mt-[30px] w-[90%] h-[30px] text-end">
              {service.title}
            </div>
            <div className="service-desc  w-[90%] h-[80px] text-end text-[11px]">
              {service.description}
            </div>
          </div>
          <div className="servise-pic  h-[100%] w-[120px]">
            <img src={service.icon} alt="" className="w-[100%] h-[100%]" />
          </div>
        </div>
      ))}
    </>
  );
}

export default Servise;
