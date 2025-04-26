import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

const LoginTwoStep = () => {
  const navigation = useNavigate();
  const initialValues = { verificationCode: "" };
  const validationSchema = Yup.object({
    verificationCode: Yup.string().required("این فیلد الزامیست"),
  });
  const handleSubmit = (values) => {
    console.log("Form data", values);
    navigation("/panel-student");
  };
  const previousPage = () => navigation("/login");
  return (
    <div className="flex justify-center py-10 sm:py-0 sm:h-screen items-center bg-white ]">
      <div className="holder flex flex-row-reverse w-[70%] rounded-2xl shadow-[10px_10px_5px_0px_rgba(0,0,0,0.16)] ">
        <div className="bg-[rgba(251,246,246,1)] rounded-r-xl  p-8 w-[100%] lg:w-[50%] h-[100%]">
          <h2 className="text-[rgba(34,68,93,1)] sm:text-3xl text-xl sm:mb-15 sm:mt-10 font-bold mb-5 mt-19 text-end">
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
                  className="text-end border-2 text-sm sm:text-base border-[rgba(21,139,104,1)] bg-white h-[35px] sm:h-[60px] rounded-lg w-full py-2 px-3 mb-5 lg:mb-13 text-[rgba(171,167,167,1)] hover:border-[rgba(21,139,104,1)]"
                  type="verificationCode"
                  name="verificationCode"
                  placeholder="کد تایید"
                />
                <ErrorMessage
                  name="verificationCode"
                  component="div"
                  className="text-end mt-[3px] text-xs sm:text-base sm:mt-2 text-red-500 mb-5"
                />
              </div>

              <button
                type="submit"
                className="bg-[rgba(21,139,104,1)] cursor-pointer h-[35px] text-xs sm:text-base sm:h-[60px] text-white font-bold py-2 px-4 rounded-lg w-full"
              >
                ورود
              </button>
              <button
                onClick={previousPage}
                className="bg-white cursor-pointer border-2 text-xs sm:text-base border-[rgba(21,139,104,1)] h-[35px] sm:h-[60px] text-[rgba(34,68,93,1)] font-bold py-auto px-4 rounded-lg w-full mt-5"
              >
                بازگشت به صفحه قبل
              </button>
              <p className="mt-6 text-center"></p>
            </Form>
          </Formik>
        </div>
        <div className="lg:flex hidden justify-center items-center rounded-l-xl w-[50%] bg-[rgba(164,246,222,1)]">
          <img
            className="inline w-[80%] h-[60%]"
            src="/images/sign.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default LoginTwoStep;
