import React from "react";

// import { useNavigate } from "react-router-dom";

// const Button = () => {
//   const navigation = useNavigate();
//   const previousPage = () => navigation("/");
//   return (
//     <div>
//       <button
//         onClick={previousPage}
//         className="bg-white border h-[50px] text-[rgba(34,68,93,1)] font-bold py-2 px-4 rounded-lg w-full mt-3"
//       >
//         بازگشت به صفحه اصلی
//       </button>
//     </div>
//   );
// };

import { Link } from "react-router-dom";

function Button({ children, navigationTo, style, onClick }) {
  return (
    <div className={`text-center ${style}`} onClick={onClick}>
      <Link to={navigationTo}> {children}</Link>
    </div>
  );
}

export default Button;
