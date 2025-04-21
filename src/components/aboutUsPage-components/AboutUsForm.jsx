import { Field, Formik } from "formik";
import React from "react";
import { Form } from "react-router-dom";
import Button from "../common/Button";

function AboutUsForm() {
  return (
    <div className="cotact-form w-[50%] h-[100%] bg-[rgba(251,246,246,1)] rounded-[25px] px-[70px] shadow-[10px_10px_3px_0px_rgba(0,0,0,0.16)]">
      <Formik>
        <Form>
          <Field
            placeholder="نام و نام خانوادگی   "
            className="w-[100%] h-[60px] bg-[rgba(255,255,255,1)] rounded-[15px] text-end border border-[rgba(21,139,104,1)] mt-[70px]"
          />
          <Field
            placeholder="ایمیل   "
            className="w-[100%] h-[60px] bg-[rgba(255,255,255,1)] rounded-[15px] text-end border border-[rgba(21,139,104,1)] mt-[25px]"
          />
          <Field
            placeholder=" شماره تماس   "
            className="w-[100%] h-[60px] bg-[rgba(255,255,255,1)] rounded-[15px] text-end border border-[rgba(21,139,104,1)] mt-[25px]"
          />
          <Field
            placeholder="متن   "
            className="w-[100%] h-[250px] bg-[rgba(255,255,255,1)] rounded-[15px] text-end border border-[rgba(21,139,104,1)] mt-[25px]"
          />
          <Button style="rounded-[11px] text-[rgba(255,255,255,1)] bg-[rgba(91,225,185,1)] w-[120px] h-[50px] ml-[auto] leading-[50px] mt-[30px]">
            ارسال
          </Button>
        </Form>
      </Formik>
    </div>
  );
}

export default AboutUsForm;
