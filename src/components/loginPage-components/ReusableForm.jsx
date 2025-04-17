import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import Button from "../common/Button";

const ReusableForm = () => {
  const navigation = useNavigate();
  const initialValues = { phone: "", password: "" };
  const validationSchema = Yup.object({
    phone: Yup.string().required("این فیلد الزامیست"),
    password: Yup.string().required("این فیلد الزامیست"),
  });
  const handleSubmit = (values) => {
    console.log("Form data", values);
    navigation("/login/two-step");
  };
  const previousPage = () => navigation("/");

  return (
    <div className="flex justify-center items-center h-screen bg-white ]">
      <div className="holder  flex flex-row-reverse w-[70%] rounded-2xl shadow-[10px_10px_5px_0px_rgba(0,0,0,0.16)]">
        <div className="bg-[rgba(251,246,246,1)] rounded-r-xl  p-8 w-[50%] h-[100%]">
          <h2 className="text-[rgba(34,68,93,1)] text-3xl font-medium mb-15 mt-10 text-end">
            ورود به سیستم
          </h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="mb-4 ">
                <Field
                  className="text-end border-[2px] bg-white h-[60px] rounded-lg w-full py-2 px-3 text-[rgba(171,167,167,1)] border-[rgba(21,139,104,1)]"
                  type="phone"
                  name="phone"
                  placeholder="شماره همراه"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-end mt-2 text-red-500"
                />
              </div>

              <div className="mb-4">
                <Field
                  className="border-[2px] bg-white text-end h-[60px] rounded-lg w-full py-2 px-3 text-[rgba(171,167,167,1)] border-[rgba(21,139,104,1)]"
                  type="password"
                  name="password"
                  placeholder="رمز عبور"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-end mt-2 text-red-500"
                />
              </div>
              <label className="block text-end my-7 text-[rgba(34,68,93,1)] text-sm ">
                مرا به خاطر بسپار
                <input className="ml-2 mb-1 " type="checkbox" />
              </label>
              <button
                type="submit"
                className="bg-[rgba(21,139,104,1)] h-[60px] text-white font-bold py-2 px-4 rounded-lg w-full"
              >
                تایید
              </button>
              <button
                onClick={previousPage}
                className="bg-white border-2 border-[rgba(21,139,104,1)] h-[60px] text-[rgba(34,68,93,1)] font-bold py-2 px-4 rounded-lg w-full mt-5"
              >
                بازگشت به صفحه اصلی
              </button>
              <div className="flex flex-row flex-nowrap justify-center ">
                <p className="mt-6 ">
                  <span className="ml-21">
                    <Link
                      to="/sign-up"
                      className="text-[rgba(34,68,93,1)] underline text-sm ml-18 "
                    >
                      یک حساب کاربری ایجاد کنید
                    </Link>
                  </span>
                  <span className="mr-21">
                    <Link
                      to="/login/forget-password"
                      className="text-[rgba(34,68,93,1)] underline text-sm "
                    >
                      فراموشی رمز
                    </Link>
                  </span>
                </p>
              </div>
            </Form>
          </Formik>
        </div>
        <div className="flex justify-center items-center rounded-l-xl w-[50%]  bg-[rgba(164,246,222,1)]">
          <img className="inline w-[80%] " src="/images/verfy.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ReusableForm;
