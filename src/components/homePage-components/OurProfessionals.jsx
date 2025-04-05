import React from "react";
import SectionTitle from "../common/SectionTitle";

const OurProfessionals = () => {
  const professionals = [
    {
      name: "باب گریفیلد",
      role: "استاد برنامه نویسی",
      image: "/images/fggf.svg",
      description:
        "لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگرافی ها و طراحان استفاده می شود",
    },
    {
      name: "آنا ریچموند",
      role: "استاد برنامه نویسی",
      image: "/images/fggf.svg",
      description:
        "لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگرافی ها و طراحان استفاده می شود",
    },
    {
      name: "ماری براون",
      role: "استاد برنامه نویسی",
      image: "/images/fggf.svg",
      description:
        "لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگرافی ها و طراحان استفاده می شود",
    },
  ];
  return (
    <div className="bg-linear-to-br from-[rgba(164,246,222,1)] to-[rgba(235,243,241,1)] py-16 w-[100%] h-[600px] text-center">
      <SectionTitle
        title="حرفه ای های ما"
        description="ساختن دنیایی بهتر، یک دوره در یک زمان"
      />

      <div className="flex flex-wrap justify-center px-4 my-auto">
        {professionals.map((member, index) => (
          <div
            key={index}
            className="rounded-xl p-6 w-72 h-[100%] mt-6  text-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-[60%] h-[60%] mx-auto mb-5 "
            />
            <h3 className="text-lg font-semibold text-[rgba(34,68,93,1)] mb-4">
              {member.name}
            </h3>
            <p className="text-[rgba(8,108,181,1)] text-xs mb-7">
              {member.role}
            </p>
            <p className="text-[rgba(33,57,75,1)] text-xs mt-2">
              {member.description}
            </p>
            <div className="flex justify-center items-center gap-1 mt-4">
              <div className="flex bg-[rgba(11,78,126,0.18)] h-[25px] w-[25px] rounded-full">
                <img
                  className="hover:cursor-pointer h-[60%] w-[80%] my-1.5 mx-auto"
                  src="/images/733635.svg"
                  alt=""
                />
              </div>
              <div className="flex bg-[rgba(11,78,126,0.18)] h-[25px] w-[25px] rounded-full">
                <img
                  className="hover:cursor-pointer h-[60%] w-[80%] my-1.5 mx-auto"
                  src="/images/87390.svg"
                  alt=""
                />
              </div>
              <div className="flex bg-[rgba(11,78,126,0.18)] h-[25px] w-[25px] rounded-full">
                <img
                  className="hover:cursor-pointer h-[60%] w-[80%] my-1.5 mx-auto"
                  src="/images/4701496.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProfessionals;
