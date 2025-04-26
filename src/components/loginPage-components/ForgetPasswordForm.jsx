import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const ForgetPasswordForm = () => {
  const navigation = useNavigate();
  const initialValues = { email: "" };
  const validationSchema = Yup.object({
    email: Yup.string().required("این فیلد الزامیست"),
  });
  const handleSubmit = (values) => {
    console.log("Form data", values);
    navigation("/login/forget-password/new-password");
  };
  const previousPage = () => navigation("/login");
  const nextPage = () => navigation("/login/forget-password/new-password");

  return (
    <div className="flex justify-center items-center sm:h-screen bg-white ]">
      <div className="holder flex flex-row-reverse w-[70%] rounded-2xl shadow-[10px_10px_5px_0px_rgba(0,0,0,0.16)] ">
        <div className="bg-[rgba(251,246,246,1)] rounded-r-xl  p-8 w-[100%] lg:w-[50%] h-[100%]">
          <h2 className="text-[rgba(34,68,93,1)] text-xl sm:text-3xl font-bold sm:mb-15 sm:mt-10 mb-5 mt-20 text-end">
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
                  className="text-end border-2 border-[rgba(21,139,104,1)] text-sm sm:text-base bg-white h-[35px] sm:h-[60px] rounded-lg w-full py-2 px-3 mb-5 lg:mb-13 text-[rgba(171,167,167,1)] hover:border-[rgba(21,139,104,1)]"
                  type="email"
                  name="email"
                  placeholder="ایمیل خود را وارد کنید"
                />
                <ErrorMessage
                  name="phoneNumber"
                  component="div"
                  className="mt-[3px] text-xs sm:text-base sm:text-end sm:mt-2 text-red-500"
                />
              </div>

              <button
                type="submit"
                onClick={nextPage}
                className="cursor-pointer bg-[rgba(21,139,104,1)] h-[35px] text-xs sm:text-base sm:h-[60px] text-white font-bold py-2 px-4 rounded-lg w-full"
              >
                ادامه
              </button>
              <button
                onClick={previousPage}
                className="cursor-pointer bg-white border-2 text-xs sm:text-base border-[rgba(21,139,104,1)] h-[35px] sm:h-[60px] text-[rgba(34,68,93,1)] font-bold py-2 px-4 rounded-lg w-full mt-4"
              >
                بازگشت به صفحه قبل
              </button>
              <p className="mt-6 text-end"></p>
            </Form>
          </Formik>
        </div>
        <div className="hidden lg:flex justify-center items-center rounded-l-xl w-[50%] bg-[rgba(164,246,222,1)]">
          <img
            className="inline w-[80%] h-[60%]"
            src="/images/forgot.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordForm;
