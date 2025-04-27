import React from "react";
import Button from "../../../../components/common/Button";

function EditUsersImage() {
  return (
    <div className=" w-[100%] h-[200px] bg-[rgba(251,246,246,1)] shadow-[10px_10px_5px_0px_rgba(0,0,0,0.16)] rounded-[10px]">
      <div className="new-coourses-header w-[100%] h-[40px] text-center bg-[rgba(164,246,222,1)] rounded-t-[10px] leading-[35px]">
        عکس پروفایل
      </div>
      <div className=" w-[100px] h-[100px] mx-[auto] mt-[10px]">
        <img src="/images/12.svg" className="w-[100%] h-[100%]" alt="" />
      </div>
      <Button style="w-[100px] text-[11px] leading-[27px] h-[30px] mx-[auto] mt-[10px] text-[rgba(255,255,255,1)] bg-[rgba(21,139,104,1)] rounded-[51px]">
        ویرایش عکس
      </Button>
    </div>
  );
}

export default EditUsersImage;
