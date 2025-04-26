import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const RegisterStepThree = () => {
  const initialValues = {
    phoneNumber: "",
    userEmail: "",
    password: "",
    passwordRepeat: "",
  };
  const validationSchema = Yup.object({
    password: Yup.string().required("این فیلد الزامیست"),
    passwordRepeat: Yup.string().required("این فیلد الزامیست"),
  });
  const handleSubmit = (values) => {
    console.log("Form data", values);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-white ]">
      <div className="holder flex flex-row-reverse w-[70%] rounded-2xl shadow-[10px_10px_5px_0px_rgba(0,0,0,0.16)] ">
        <div className="bg-[rgba(251,246,246,1)] rounded-r-xl  p-8 lg:w-[50%] h-[100%]">
          <h2 className="text-[rgba(34,68,93,1)] text-xl sm:text-3xl font-bold mb-5 sm:mb-10 sm:mt-8 text-end">
            ثبت نام
          </h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="mb-4 ">
                <Field
                  className="text-end border-2  bg-white  h-[35px] sm:h-[60px] rounded-lg w-full mb-4 py-2 px-3 text-[rgba(171,167,167,1)] border-[rgba(21,139,104,1)] text-xs sm:text-base"
                  type="phoneNumber"
                  name="phoneNumber"
                  placeholder="شماره همراه"
                />
                <ErrorMessage
                  name="phoneNumber"
                  component="div"
                  className="text-end mb-3 sm:mt-2 text-red-500 text-xs sm:text-base"
                />
                <Field
                  className="text-end border-2  bg-white  h-[35px] sm:h-[60px] rounded-lg w-full mb-4 py-2 px-3 text-[rgba(171,167,167,1)] border-[rgba(21,139,104,1)] text-xs sm:text-base"
                  type="userEmail"
                  name="userEmail"
                  placeholder="ایمیل کاربر"
                />
                <ErrorMessage
                  name="userEmail"
                  component="div"
                  className="text-end mb-2 sm:mt-2 text-red-500 text-xs sm:text-base"
                />
                <Field
                  className="text-end border-2  bg-white  h-[35px] sm:h-[60px] rounded-lg w-full mb-4 py-2 px-3 text-[rgba(171,167,167,1)] border-[rgba(21,139,104,1)] text-xs sm:text-base"
                  type="password"
                  name="password"
                  placeholder=" رمز عبور "
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-end mb-3 sm:mt-2 text-red-500 text-xs sm:text-base"
                />
                <Field
                  className="text-end border-2  bg-white  h-[35px] sm:h-[60px] rounded-lg w-full mb-8 py-2 px-3 text-[rgba(171,167,167,1)] border-[rgba(21,139,104,1)] text-xs sm:text-base"
                  type="password"
                  name="passwordRepeat"
                  placeholder=" تکرار رمز عبور "
                />
                <ErrorMessage
                  name="passwordRepeat"
                  component="div"
                  className="text-end mb-2 sm:mt-2 text-red-500 text-xs sm:text-base"
                />
              </div>

              <button
                type="submit"
                className="cursor-pointer bg-[rgba(21,139,104,1)] h-[35px] sm:h-[60px] text-xs sm:text-base text-white font-bold py-2 px-4 rounded-lg w-full"
              >
                ادامه
              </button>
              <p className="mt-6 text-end"></p>
            </Form>
          </Formik>
        </div>
        <div className="flex justify-center items-center rounded-l-xl w-[50%] bg-[rgba(164,246,222,1)]">
          <img
            className="inline w-[80%] h-[60%]"
            src="/images/Layer 2.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterStepThree;
