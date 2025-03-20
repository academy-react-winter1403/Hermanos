import React from "react";

const HeroSection = () => {
  return (
    <div className="h-[500px] flex flex-row-reverse gap-[20px] text-end py-20 bg-linear-to-br from-[rgba(164,246,222,1)] to-[rgba(255,255,255,1)]">
      <div className="intro w-[50%] mr-[50px] ">
        <h2 className="text-4xl  font-bold pb-5 ">آموزشگاه اچ وان</h2>
        <p className="mt-4 text-gray-600 w-3/4 mx-40 pb-7">
          لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه
          دهندگان وب، تایپوگراف ها و طراحان استفاده می شود. تکه های لاتین متن
          نشان می دهد که یک پروژه در حال توسعه است. لورم اپسوم فقط برای توسعه
          دهندگان وب نیست. طراحان گرافیک نیز از آن با نرم افزارهای مختلفی مانند
          فوتوشاپ استفاده می کنند.
        </p>
        <button className="mt-6 bg-[rgba(18,146,108,1)] text-white px-6 py-3 rounded-[51px] cursor-pointer">
          شروع یادگیری
        </button>
      </div>
      <div className="intro-image h-[400px] my-[-30px] ">
        <img
          className="w-[750px] h-[400px] "
          src="/images/3190341@2x.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroSection;
