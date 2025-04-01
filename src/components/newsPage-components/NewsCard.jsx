import React from "react";
import { Link } from "react-router-dom";
import Button from "../common/Button";

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
            className="rounded w-[100%] h-[100%] "
          />
        </span>
      </div>
      <div className="flex flex-wrap justify-center m-4">
        <div className="newsStatus flex flex-row-reverse flex-nowrap w-[100%] h-[40px] mt-5 ">
          <Button
            className=""
            width="40%"
            height="98%"
            radius="12px"
            borderColor=""
            navigationTo="/news/:id"
            bg="rgba(91,225,185,1)"
            textColor="rgba(21,139,104,1)"
            fontSize="18px"
          >
            وضعیت مقاله
          </Button>
          <div className="h-[100%] w-[35%] "></div>
          <div className=" flex flex-row flex-nowrap justify-center h-[98%] w-[25%]">
            <div className="w-[33%] h-[100%]">
              <img
                src="/images/Path 1703.svg"
                alt=""
                className="block w-[100%] h-[60%]"
              />
              <span className="block text-sm text-center text-[rgba(21,139,104,1)] leading-[20px]">
                12
              </span>
            </div>
            <div className="w-[33%] h-[100%]">
              <img
                src="/images/Path 1704.svg"
                alt=""
                className="block w-[100%] h-[60%]"
              />
              <span className="block text-sm text-center text-[rgba(21,139,104,1)] leading-[20px]">
                6
              </span>
            </div>
            <div className="w-[33%] h-[100%]">
              <img
                src="/images/Path 1705.svg"
                alt=""
                className="block w-[100%] h-[60%]"
              />
            </div>
          </div>
        </div>
        <h1 className="mt-2 text-2xl mb-3 ">
          آشنایی با برنامه نویسی با وردپرس
        </h1>
        <div className="rateHolder w-[100%] h-[38px] mb-8 flex flex-row-reverse flex-nowrap">
          <div className="w-[38%] flex flex-row-reverse flex-nowrap gap-[7px]">
            <div className="h-[100%]">
              <img
                src="/images/Front-End-developer-profile-picture.svg"
                alt=""
                className="w-[100%] h-[100%]"
              />
            </div>
            <div className="h-[100%] text-[17px] font-normal text-center text-[rgba(140,159,154,1)]">
              جان اسمیت
            </div>
          </div>
          <div className="h-[100%] w-[32%] "></div>
          <div className="w-[30%] h-[100%] flex flex-row flex-nowrap">
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
        <p className="text-[rgba(109,103,103,1)] text-[13px] mt-1 text-end">
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
