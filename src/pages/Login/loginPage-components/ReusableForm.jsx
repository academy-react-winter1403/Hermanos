import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../components/common/Button";

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
    <div className="flex justify-center items-center py-10 sm:py-0 sm:h-screen bg-white ]">
      <div className="holder  flex flex-row-reverse w-[70%] rounded-2xl shadow-[10px_10px_5px_0px_rgba(0,0,0,0.16)]">
        <div className="bg-[rgba(251,246,246,1)] rounded-r-xl  p-8 w-[100%] lg:w-[50%] h-[100%]">
          <h2 className="text-[rgba(34,68,93,1)] text-xl sm:text-3xl font-bold mb-5 sm:mb-15 mt-5 sm:mt-10 text-end">
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
                  className="text-end border-[2px]  bg-white h-[35px] sm:h-[60px] rounded-lg w-full py-2 px-3 text-xs sm:text-base text-[rgba(171,167,167,1)] border-[rgba(21,139,104,1)]"
                  type="phone"
                  name="phone"
                  placeholder="شماره همراه"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-end mt-[3px] text-xs sm:text-base sm:mt-2 text-red-500"
                />
              </div>

              <div className="mb-4">
                <Field
                  className="border-[2px] bg-white text-end h-[35px] sm:h-[60px] rounded-lg w-full py-2 px-3 text-xs sm:text-base text-[rgba(171,167,167,1)] border-[rgba(21,139,104,1)]"
                  type="password"
                  name="password"
                  placeholder="رمز عبور"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-end mt-[3px] sm:mt-2 text-xs sm:text-base text-red-500"
                />
              </div>
              <label className="block text-end my-3 sm:my-7 text-[rgba(34,68,93,1)] text-xs sm:text-sm ">
                مرا به خاطر بسپار
                <input className="ml-2 mb-1 " type="checkbox" />
              </label>
              <button
                type="submit"
                className="cursor-pointer bg-[rgba(21,139,104,1)] h-[35px] sm:h-[60px] text-white text-xs sm:text-base font-bold py-2 px-4 rounded-lg w-full"
              >
                تایید
              </button>
              <button
                onClick={previousPage}
                className="bg-white cursor-pointer border-2 border-[rgba(21,139,104,1)] h-[35px] sm:h-[60px] text-[rgba(34,68,93,1)] text-xs sm:text-base  font-bold py-2 px-4 rounded-lg w-full mt-5"
              >
                بازگشت به صفحه اصلی
              </button>
              <div className="flex flex-nowrap justify-center ">
                <p className="mt-6 flex flex-wrap  flex-row-reverse ">
                  <span className="ml-15 sm:ml-12 md:ml-30 lg:-ml-8 xl:ml-15 2xl:ml-35 ">
                    <Link
                      to="/sign-up"
                      className="text-[rgba(34,68,93,1)] underline text-xs sm:text-sm text-nowrap "
                    >
                      یک حساب کاربری ایجاد کنید
                    </Link>
                  </span>
                  <span className="sm:mr-22 lg:ml-0">
                    <Link
                      to="/login/forget-password"
                      className="text-[rgba(34,68,93,1)] underline text-xs sm:text-sm text-nowrap "
                    >
                      فراموشی رمز
                    </Link>
                  </span>
                </p>
              </div>
            </Form>
          </Formik>
        </div>
        <div className="hidden justify-center items-center rounded-l-xl w-[50%]  bg-[rgba(164,246,222,1)]  lg:flex">
          <img className="inline w-[80%] " src="/images/verfy.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ReusableForm;
