import { Field, Formik } from "formik";
import React from "react";
import { Form } from "react-router-dom";
import Button from "../common/Button";

function SugesstCriticism() {
  return (
    <div className="sugesstion-criticism  w-[85%] h-[600px] mx-[auto] my-[50px] flex flex-row flex-nowrap justify-center">
      <div className="sugesstion-criticism-pic  w-[50%] h-[100%]">
        <img src="/images/3459554.svg" alt="" className="w-[100%] h-[100%]" />
      </div>
      <div className="sugesstion-criticism-form  w-[50%] h-[100%] flex flex-col items-end">
        <Formik>
          <Form>
            <Field
              placeholder="نام و نام خانوادگی"
              className="w-[100%] h-[80px] rounded-[14px] border border-[2px] border-[rgba(21,139,104,1)] text-end mt-[20px] "
            />
            <Field
              placeholder="ایمیل"
              className="w-[100%] h-[80px] rounded-[14px] border border-[2px] border-[rgba(21,139,104,1)] text-end mt-[20px] "
            />
            <Field
              placeholder="متن"
              className="w-[100%] h-[210px] rounded-[14px] border border-[2px] border-[rgba(21,139,104,1)] text-end mt-[20px]"
            />
            <Button style="rounded-[11px] bg-[rgba(91,225,185,1)] w-[120px] h-[50px] ml-[auto] leading-[50px] mt-[30px]">
              ارسال
            </Button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default SugesstCriticism;
