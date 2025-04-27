import React from "react";
// import { Button, Flex, Modal } from "antd";
import { CollapseFilter } from "../../pages/Courses/coursesPage-components/CoursesFilter";
// import CoursesSlider from "../coursesPage-components/CoursesSlider";

const FilterModal = () => {
  return (
    <div className="text-[rgba(33,57,75,1)] w-full relative bottom-6 opacity-0 ">
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn border w-[100%] h-[100%] rounded-md "
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="rgba(21,139,104,1)"
          class="size-6 mx-auto mt-1"
        >
          <path d="M17 2.75a.75.75 0 0 0-1.5 0v5.5a.75.75 0 0 0 1.5 0v-5.5ZM17 15.75a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0v-1.5ZM3.75 15a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75ZM4.5 2.75a.75.75 0 0 0-1.5 0v5.5a.75.75 0 0 0 1.5 0v-5.5ZM10 11a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0v-5.5A.75.75 0 0 1 10 11ZM10.75 2.75a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0v-1.5ZM10 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM3.75 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM16.25 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
        </svg>
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box text-end">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="">
            <h3 className="font-bold text-base mt-8 mb-3">فیلترها</h3>

            <CollapseFilter />
            <button className="bg-[rgba(91,225,185,1)] w-[100px] h-[30px] rounded-md text-xs leading-[30px] mt-5 mb-3 ">
              پاک کردن فیلترها
            </button>
          </div>
          <div className="">
            <h3 className="font-bold text-base mt-8 mb-3">مرتب سازی</h3>
            <div className="border border-[rgba(21,139,104,1)] rounded-lg min-h-[200px]"></div>
          </div>
          <button className="bg-[rgba(18,146,108,1)] text-white w-[60px] h-[40px] rounded-md text-xs leading-[30px] mt-5 mb-3 ">
            تایید
          </button>
        </div>
      </dialog>
    </div>
  );
};

export default FilterModal;
