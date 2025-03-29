import React from "react";

const NewsCard = (index) => {
  return (
    <div
      key={index}
      className="mx-5 bg-white rounded-2xl drop-shadow-xl hover:transition-drop-shadow cursor-pointer"
    >
      <div className="newsImage">
        <span>
          <img
            src="/images/tes_dta_blog_image_6-800x412.svg"
            alt="placeholder"
            className="rounded"
          />
        </span>
      </div>
      <div className="flex flex-wrap justify-center m-4">
        <div className="newsStatus border w-[100%] h-[60px] mt-5 "></div>
        <h1 className="mt-2 text-2xl mb-3 ">
          آشنایی با برنامه نویسی با وردپرس
        </h1>
        <div className="rateHolder border w-[100%] h-[30px] mb-8"> </div>
        <p className="text-[rgba(109,103,103,1)] text-sm mt-1 text-end">
          لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه
          دهندگان وب، تایپوگراف ها و طراحان استفاده می شود
        </p>
        <div className="border w-[100%] h-0 mb-[-5px] mt-5"> </div>
        <a
          href="/news/:id"
          className="mt-2 inline-block  text-[rgba(109,103,103,1)]  hover:underline"
        >
          مشاهده جزئیات
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
