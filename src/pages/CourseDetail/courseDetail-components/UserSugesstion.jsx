import React from "react";
import Like from "../../../components/common/Like";
import SectionTitle from "../../../components/common/SectionTitle";
import Button from "../../../components/common/Button";

function UserSugesstion() {
  return (
    <>
      <div className="user-sugesstion  hidden sm:block px-[30px] border border-[transparent] w-[95%] mx-[auto] bg-[rgba(255,255,255,1)] rounded-[35px]">
        <div className="user-sugesstion-info mt-[20px] w-[100%] mx-[auto] h-[50px] flex flex-row flex-nowrap justify-between">
          <div>
            <Like />
          </div>
          <div className=" h-[100%] flex flex-row flex-nowrap gap-[5px] justify-cneter items-center">
            <div className="w-[240px] text-center">
              <SectionTitle
                title="عنوان : عنوان مقاله"
                titleClass="text-sm text-[18px]"
              />
            </div>
            <div className="w-[40px] h-[40px]">
              <img
                src="/images/Path 1901.svg"
                className="w-[100%] h-[100%]"
                alt=""
              />
            </div>
          </div>
        </div>
        <p className=" w-[85%] mx-[auto] text-end mt-[10px]">
          لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه
          دهندگان وب، تایپوگراف ها و طراحان استفاده می شود. تکه های لاتین متن
          نشان می دهد که یک پروژه در حال توسعه است.
        </p>
        <div className="sugesstion-date-time h-[40px] flex flex-row flex-nowrap justify-start gap-[30px] text-[14px] leading-[35px] mt-[10px] mb-[10px]">
          <div className="sugesst-time h-[100%] ">09 : 15</div>
          <div className="sugesst-date h-[100%]">1403/03/16</div>
        </div>
      </div>
      <div className="answer-btns border border-transparent h-[40px] flex flex-row flex-nowrap justify-cneter gap-[40px] mt-[10px] ml-[60px] text-[14px] text-[rgba(21,139,104,1)]">
        <Button>پاسخ دادن</Button>
        <Button>پاسخ ها</Button>
      </div>
    </>
  );
}

export default UserSugesstion;
