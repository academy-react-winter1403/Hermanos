import React from "react";
import Button from "../common/Button";

const HeroSection = () => {
  return (
    <div className="sm:h-[700px] flex flex-row-reverse justify-center text-end py-20 bg-linear-to-br from-[rgba(164,246,222,1)] to-[rgba(255,255,255,1)]">
      <div className="intro w-full sm:w-[45%] h-[400px] my-[auto]">
        <h2 className="text-2xl sm:text-4xl font-bold pb-5 text-nowrap text-center sm:text-end ">
          آموزشگاه اچ وان
        </h2>
        <p className="mt-[30px] text-gray-600 mb-[70px] w-3/4 text-sm lg:text-lg sm:ml-[auto] pb-7 sm:mx-0 mx-auto text-center sm:text-end ">
          لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه
          دهندگان وب، تایپوگراف ها و طراحان استفاده می شود. تکه های لاتین متن
          نشان می دهد که یک پروژه در حال توسعه است. لورم اپسوم فقط برای توسعه
          دهندگان وب نیست. طراحان گرافیک نیز از آن با نرم افزارهای مختلفی مانند
          فوتوشاپ استفاده می کنند.
        </p>
        <Button
          navigationTo="/"
          style="border w-[150px] h-[60px] border-[2px] border-[rgba(18,146,108,1)] text-[rgba(255,255,255,1)] bg-[rgba(18,146,108,1)] mx-auto sm:ml-auto sm:mx-0 text-center leading-[50px] rounded-[51px]"
        >
          شروع یادگیری
        </Button>
      </div>
      <div className="intro-image  sm:w-[40%] h-[550px] sm:block hidden ">
        <img
          className="w-[100%] h-[100%] "
          src="/images/3190341@2x.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroSection;
