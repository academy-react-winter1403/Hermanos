import React from "react";

function CoursesHolder() {
  return (
    <div className="main-courses-slider border border-[rgba(239,239,239,1)] p-[25px] mt-[10px] w-[75%] rounded-[37px] flex flex-row flex-wrap justify-center items-center">
      <div className="course-card w-[350px] h-[550px] relative">
        <div className="course-card-logo w-[150px] h-[160px] absolute left-[105px] z-10">
          <img src="/images/icons8-angular.svg" alt="" />
        </div>
        <div className="course-card-body h-[485px] w-[100%] absolute top-[75px] bg-[rgba(251,246,246,1)] rounded-[34px] shadow-[10px_10px_10px_0px_rgba(0,0,0,0.16)]">
          <div className="course-status mx-[auto] mt-[90px] h-[40px] w-[87%] flex flex-row flex-nowrap justify-between items-center">
            <div className="like-dislike h-[90%] w-[80px] flex flex-row flex-nowrap justify-center">
              <div className="like w-[33%] h-[100%]">
                <img
                  src="/images/Path 1703.svg"
                  alt=""
                  className="like-icon block w-[100%] h-[55%]"
                />
                <span className="like-count text-[10px] block text-center leading-[20px]">
                  3
                </span>
              </div>
              <div className="dislike w-[33%] h-[100%]">
                <img
                  src="/images/Path 1704.svg"
                  alt=""
                  className="dislike-icon block w-[100%] h-[55%]"
                />
                <span className="like-count text-[10px] block text-center leading-[20px]">
                  5
                </span>
              </div>
              <div className="star-mark w-[33%] h-[100%]">
                <img
                  src="/images/Path 1705.svg"
                  alt=""
                  className="like-icon block w-[100%] h-[55%]"
                />
              </div>
            </div>
            <div className="course-status-btn h-[95%] w-[100px] text-center text-[11px] leading-[33px] rounded-[12px] bg-[rgba(191,244,228,1)] text-[rgba(21,139,104,1)]">
              وضعیت دوره
            </div>
          </div>
          <div className="course-title mx-[auto] mt-[10px] w-[87%] text-[23px] font-[400] text-end">
            آشنایی با برنامه نویسی با وردپرس
          </div>
          <div className="score&teacher mx-[auto] mt-[15px] h-[30px] w-[87%] flex flex-row flex-nowrap justify-between">
            <div className="star-score w-[45px] h-[100%] flex flex-row flex-nowrap">
              <div className="star w-[50%] h-[100%]">
                <img
                  className="w-[70%] h-[70%] block mt-[3px]"
                  src="/images/Path 1885.svg"
                  alt=""
                />
              </div>
              <div className="score w-[50%] h-[100%] text-[12px] text-[rgba(8,158,113,1)] leading-[25px]">
                4.8
              </div>
            </div>
            <div className="course-teacher w-[95px] h-[100%] flex flex-row flex-nowrap">
              <div className="teacher-name w-[70%] h-[100%] text-[12px] leading-[25px] text-[rgba(140,159,154,1)]">
                جان اسمیت
              </div>
              <div className="teacher-pic w-[30%] h-[100%]">
                <img
                  src="/images/Front-End-developer-profile-picture.svg"
                  alt=""
                  className="teacher-image w-[100%] h-[100%]"
                />
              </div>
            </div>
          </div>
          <p className="speach-time mt-[15px] block mx-[auto] text-[9px] w-[87%] text-end text-[rgba(65,167,137,1)]">
            سخنرانی (120ساعت)50
          </p>
          <p className="course-description h-[64px] mt-[10px] block mx-[auto] text-[14px] w-[87%] text-end text-[rgba(109,103,103,1)]">
            لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه
            دهندگان وب، تایپوگراف ها و طراحان استفاده می شود
          </p>
          <div className="course-price mt-[15px] border-t pt-[7px] border-t-[rgba(18,146,108,1)] mt-[10px] h-[35px] w-[87%] mx-[auto] flex flex-row flex-nowrap justify-center items-center">
            <div className="price w-[50%] h-[80%] text-[rgba(225,24,24,1)] text-[18px]">
              تومان 3,000,000
            </div>
            <div className="price-text w-[50%] h-[80%] text-end text-[rgba(18,146,108,1)]">
              : هزینه تمام دوره
            </div>
          </div>
          <div className="course-btns mt-[15px] w-[87%] h-[45px] mx-[auto] gap-[2px] flex flex-row flex-nowrap justify-between">
            <div className="course-reserve w-[50%] h-[100%] rounded-[12px] bg-[rgba(91,225,185,1)] text-center leading-[35px] text-[18px]">
              رزرو دوره
            </div>
            <div className="course-detail border w-[50%] h-[100%] rounded-[12px] border-[rgba(91,225,185,1)] text-center leading-[35px] text-[18px]">
              جزییات دوره
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursesHolder;
