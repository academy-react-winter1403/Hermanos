import { Field, Formik } from "formik";
import React from "react";
import { Form } from "react-router-dom";

function Sugesstion({ height = "350px", placeholder = "عنوان    " }) {
  return (
    <div className="sugesstion-input w-[100%] rounded-[15px] mb-[20px]">
      <Formik>
        <Form>
          <Field
            placeholder={placeholder}
            className={`w-[100%] text-[22px] h-[${height}] border border-[2px] rounded-[15px] text-end`}
          />
        </Form>
      </Formik>
    </div>
  );
}

export default Sugesstion;
