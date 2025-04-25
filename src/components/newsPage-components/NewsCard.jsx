import React from "react";
import { Link } from "react-router-dom";
import Button from "../common/Button";
import Like from "../common/Like";

const NewsCard = (index) => {
  return (
    <div
      key={index}
      className="mx-auto mb-3 bg-white min-w-[260px] max-w-[70%] md:max-w-[90%] lg:max-w-[80%] md:w-[80%] xl:min-w-[90%] rounded-2xl drop-shadow-xl  cursor-pointer "
    >
      <div className="newsImage">
        <span>
          <img
            src="/images/tes_dta_blog_image_6-800x412.svg"
            alt="placeholder"
            className="rounded w-[100%] h-[100%] "
          />
        </span>
      </div>
      <div className="flex flex-wrap justify-center m-4">
        <div className="newsStatus flex flex-row-reverse flex-nowrap w-[100%] h-[40px] mt-5 ">
          <Button style=" bg-[rgba(191,244,228,1)] pt-1 rounded-lg w-[120px] h-[35px] text-[rgba(21,139,104,1)] text-xs lg:text-sm leading-[25px] my-auto ">
            وضعیت مقاله
          </Button>
          <div className="h-[100%] w-[35%] "></div>
          <div className=" flex flex-row flex-nowrap justify-center h-[80%] w-[25%] mr-[10px] xl:mr-[35px] gap-1">
            {/* <div className="w-[50px] h-[100%]">
              <img
                src="/images/Path 1703.svg"
                alt=""
                className="block w-[100%] h-[60%]"
              />
              <span className="block text-xs lg:text-sm text-center text-[rgba(21,139,104,1)] leading-[20px] mr-2">
                12
              </span>
            </div>
            <div className="w-[60px] h-[100%]">
              <img
                src="/images/Path 1704.svg"
                alt=""
                className="block w-[100%] h-[60%]"
              />
              <span className="block text-xs lg:text-sm text-center text-[rgba(21,139,104,1)] leading-[20px] mr-2">
                6
              </span>
            </div>
            <div className="w-[50px] h-[100%]">
              <img
                src="/images/Path 1705.svg"
                alt=""
                className="block w-[100%] h-[60%]"
              />
            </div> */}
            <Like />
          </div>
        </div>
        <h1 className="mt-2 font-bold sm:text-sm md:text-base xl:text-xl mb-3 text-nowrap  ">
          آشنایی با برنامه نویسی با وردپرس
        </h1>
        <div className="rateHolder w-[100%] h-[38px] mb-3 flex flex-row-reverse flex-nowrap">
          <div className="min-w-[47%] flex flex-row-reverse flex-nowrap gap-[7px] lg:gap-1">
            <div className="h-[100%] w-43 ">
              <img
                src="/images/Front-End-developer-profile-picture.svg"
                alt=""
                className="w-[100%] h-[100%]"
              />
            </div>
            <div className="h-[100%] text-sm lg:text-base xl:text-[17px]  xl:ml-11  font-normal text-center text-nowrap text-[rgba(140,159,154,1)] my-1">
              جان اسمیت
            </div>
          </div>
          <div className="h-[100%] w-[32%] "></div>
          <div className="min-w-[30%] h-[100%] flex flex-row flex-nowrap">
            <div className="w-[30%] h-[80%] my-auto">
              <img
                className="h-[80%] block"
                src="/images/Repeat Grid 5.svg"
                alt=""
              />
            </div>
            <div className="h-[80%] text-xl text-[rgba(8,158,113,1)]">4.8</div>
          </div>
        </div>
        <p className="text-[rgba(109,103,103,1)] text-xs lg:text-[13px] lg:mt-1 text-end">
          لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه
          دهندگان وب، تایپوگراف ها و طراحان استفاده می شود
        </p>
        <div className="border border-[rgba(21,139,104,1)] w-[100%] h-0 mb-[-5px] mt-5"></div>
        <Link
          to="/news/:id"
          className="mt-2 inline-block  text-[rgba(109,103,103,1)]  hover:underline"
        >
          مشاهده جزئیات
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
