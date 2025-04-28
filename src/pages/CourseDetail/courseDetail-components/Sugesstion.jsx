import { Field, Formik } from "formik";
import React from "react";
import { Form } from "react-router-dom";
// import Button from "../common/Button";

function Sugesstion() {
  return (
    <div className="sugesstion-input w-[100%] rounded-[15px] mb-[20px]">
      <Formik>
        <Form>
          <Field
            placeholder="عنوان    "
            className="w-[100%] lg:text-[22px] h-[35px] sm:h-[45px] md:h-[60px] lg:h-[100px]  border-[rgba(21,139,104,1)] border-[2px] rounded-md lg:rounded-[15px] text-end mb-[20px]"
          />

          <Field
            placeholder="متن    "
            className="w-[100%] lg:text-[22px] h-[150px] md:h-[200px] lg:h-[300px]  border-[rgba(21,139,104,1)] border-[2px] rounded-md lg:rounded-[15px] text-end"
          />
          <button className="text-center rounded-md lg:rounded-[15px] bg-[rgba(91,225,185,1)] w-[100%] h-[35px] md:h-[80px] mt-[30px] leading-[32px] md:leading-[80px] md:text-[22px] text-[rgba(34,68,93,1)] mx-auto">
            ثبت کردن
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default Sugesstion;
