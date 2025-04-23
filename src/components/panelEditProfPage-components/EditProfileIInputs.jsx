import React from "react";
import EditProfInputField from "./EditProfInputField";
import Button from "../common/Button";

function EditProfileIInputs() {
  return (
    <div className=" w-[85%] h-[90%] mx-[auto] flex flex-col">
      <EditProfInputField num="2" firstTitle="نام خانوادگی" secTitle="نام" />
      <EditProfInputField num="1" firstTitle="شماره همراه" />
      <EditProfInputField
        num="2"
        firstTitle="تاریخ تولد "
        secTitle="شماره ملی"
      />
      <EditProfInputField num="1" firstTitle="درباره من " />
      <EditProfInputField num="1.5" firstTitle=" جنسیت " secTitle=" ایمیل" />
      <EditProfInputField
        num="2"
        firstTitle="پروفایل لینکدین "
        secTitle=" لینک تلگرام"
      />
      <Button style="w-[100%] h-[40px] bg-[rgba(21,139,104,1)] text-[rgba(255,255,255,1)] rounded-[10px] leading-[37px] mt-[20px]">
        ثبت تغییرات
      </Button>
    </div>
  );
}

export default EditProfileIInputs;
