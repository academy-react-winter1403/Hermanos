import React from "react";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";

const Button = () => {
  const navigation = useNavigate();
  const previousPage = () => navigation("/");
  return (
    <div>
      <button
        onClick={previousPage}
        className="bg-white border h-[50px] text-[rgba(34,68,93,1)] font-bold py-2 px-4 rounded-lg w-full mt-3"
      >
        بازگشت به صفحه اصلی
      </button>
    </div>
  );
};
=======
import { NavLink } from "react-router-dom";

function Button({
  children,
  bg = "",
  fontSize = "18px",
  width,
  height,
  radius,
  borderColor,
  marginX = "auto",
  navigationTo,
}) {
  return (
    <div
      className={`${
        borderColor ? `border border-[${borderColor}]` : ""
      } w-[${width}] h-[${height}] rounded-[${radius}] mx-[${marginX}] bg-[${bg}] text-center text-[${fontSize}] mb-[30px] flex items-center justify-center`}
    >
      <NavLink to={navigationTo}> {children}</NavLink>
    </div>
  );
}
>>>>>>> AMIR

export default Button;
