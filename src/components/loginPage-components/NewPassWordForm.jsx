import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const NewPassWordForm = () => {
  const navigation = useNavigate();
  const initialValues = { password: "", passwordRepeat: "" };
  const validationSchema = Yup.object({
    password: Yup.string().required("این فیلد الزامیست"),
    passwordRepeat: Yup.string().required("این فیلد الزامیست"),
  });
  const handleSubmit = (values) => {
    console.log("Form data", values);
    navigation("/login/forget-password/new-password");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-white ]">
      <div className="holder flex flex-row-reverse h-[75%] w-[70%] rounded-2xl shadow-[10px_10px_5px_0px_rgba(0,0,0,0.16)] ">
        <div className="bg-[rgba(251,246,246,1)] rounded-r-xl  p-8 w-[50%] h-[100%]">
          <h2 className="text-[rgba(34,68,93,1)] text-3xl font-medium mb-10 mt-20 text-end">
            تغییر رمز
          </h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="mb-4 ">
                <Field
                  className="text-end border-2  bg-white h-[60px] rounded-lg w-full mb-4 py-2 px-3 text-[rgba(171,167,167,1)] border-[rgba(21,139,104,1)]"
                  type="password"
                  name="password"
                  placeholder=" رمز عبور "
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-end mt-2 text-red-500"
                />
                <Field
                  className="text-end border-2  bg-white h-[60px] rounded-lg w-full mb-16 py-2 px-3 text-[rgba(171,167,167,1)] border-[rgba(21,139,104,1)]"
                  type="passwordRepeat"
                  name="passwordRepeat"
                  placeholder=" تکرار رمز عبور "
                />
                <ErrorMessage
                  name="passwordRepeat"
                  component="div"
                  className="text-end mt-2 text-red-500"
                />
              </div>

              <button
                type="submit"
                className="bg-[rgba(21,139,104,1)] h-[60px] text-white font-bold py-2 px-4 rounded-lg w-full"
              >
                تایید
              </button>
              <p className="mt-6 text-end"></p>
            </Form>
          </Formik>
        </div>
        <div className="flex justify-center items-center rounded-l-xl w-[50%] h-[100%]  bg-[rgba(164,246,222,1)]">
          <img
            className="inline w-[80%] h-[60%]"
            src="/images/newPass (1).svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default NewPassWordForm;
