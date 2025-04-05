import { Field, Formik } from "formik";
import React from "react";
import { Form } from "react-router-dom";
import Button from "../common/Button";

function Sugesstion() {
  return (
    <div className="sugesstion-input w-[100%] rounded-[15px] mb-[20px]">
      <Formik>
        <Form>
          <Field
            placeholder="عنوان    "
            className="w-[100%] text-[22px] h-[100px] border border-[2px] rounded-[15px] text-end mb-[20px]"
          />

          <Field
            placeholder="متن    "
            className="w-[100%] text-[22px] h-[300px] border border-[2px] rounded-[15px] text-end"
          />
          <Button style="rounded-[15px] bg-[rgba(91,225,185,1)] w-[100%] h-[80px] mt-[30px] leading-[80px] text-[22px] text-[rgba(34,68,93,1)]">
            ثبت کردن
          </Button>
        </Form>
      </Formik>
    </div>
  );
}

export default Sugesstion;
