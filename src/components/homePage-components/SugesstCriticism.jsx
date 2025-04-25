import { Field, Formik } from "formik";
import React from "react";
import { Form } from "react-router-dom";
import Button from "../common/Button";

function SugesstCriticism() {
  return (
    <div className="sugesstion-criticism  w-[85%] lg:h-[600px] mx-[auto] my-[50px] flex flex-row flex-nowrap justify-center">
      <div className="sugesstion-criticism-pic hidden lg:block w-[50%] h-[100%]">
        <img src="/images/3459554.svg" alt="" className="w-[100%] h-[100%]" />
      </div>
      <div className="sugesstion-criticism-form w-[100%] sm:w-[90%] md:w-[80%] lg:w-[55%] h-[100%] flex flex-col  items-center ">
        <Formik>
          <Form>
            <Field
              placeholder="نام و نام خانوادگی"
              className="w-[100%] h-[40px] sm:h-[50px] md:h-[60px] lg:h-[80px] text-xs sm:text-sm lg:text-base rounded-xl sm:rounded-[14px]  border-[2px] border-[rgba(21,139,104,1)] text-end mt-[20px] "
            />
            <Field
              placeholder="ایمیل"
              className="w-[100%] h-[40px] sm:h-[50px] md:h-[60px] lg:h-[80px] text-xs sm:text-sm lg:text-base rounded-xl sm:rounded-[14px]  border-[2px] border-[rgba(21,139,104,1)] text-end mt-[20px] "
            />
            <Field
              placeholder="متن"
              className="w-[100%] h-[100px] sm:h-[140px] md:h-[170px] lg:h-[210px] text-xs sm:text-sm lg:text-base rounded-xl sm:rounded-[14px]  border-[2px] border-[rgba(21,139,104,1)] text-end mt-[20px]"
            />
            <Button style="rounded-[11px] bg-[rgba(91,225,185,1)] w-[80px] lg:w-[120px] h-[40px] lg:h-[50px] ml-[auto] text-sm lg:text-base leading-[40px] lg:leading-[50px] mt-5 lg:mt-[30px]">
              ارسال
            </Button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default SugesstCriticism;
