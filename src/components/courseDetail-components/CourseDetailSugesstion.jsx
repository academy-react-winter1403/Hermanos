import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Sugesstion from "./Sugesstion";
import UserSugesstion from "./UserSugesstion";

// function CourseDetailSugesstion({ signTo, userTo, holderStyle, btnStyle }) {
//   return (
//     <div className={`sugesstion ${holderStyle}`}>
//       <div className={`sugesstion-btn-holder ${btnStyle}`}>
//         <NavLink
//           to={signTo}
//           className={({ isActive }) =>
//             isActive
//               ? "text-center bg-[rgba(164,246,222,1)] relative z-[2] w-[50%] h-[100%] leading-[90px] text-[22px] rounded-l-[15px]"
//               : "text-center w-[50%] relative z-[1] h-[100%] leading-[90px] text-[22px] border border-[3px] border-[rgba(164,246,222,1)] rounded-l-[15px]"
//           }
//         >
//           ثبت نظر
//         </NavLink>
//         <NavLink
//           to={userTo}
//           className={({ isActive }) =>
//             isActive
//               ? "text-center bg-[rgba(164,246,222,1)] left-[-10px] relative z-[2] w-[50%] h-[100%] leading-[90px] text-[22px] rounded-tr-[15px] rounded-bl-[15px]"
//               : "text-center w-[50%] relative left-[-10px] z-[1] h-[100%] leading-[90px] text-[22px] border border-[3px] border-[rgba(164,246,222,1)] rounded-tr-[15px] rounded-bl-[15px]"
//           }
//         >
//           نظرات کاربران
//         </NavLink>
//       </div>
//       <Outlet />
//     </div>
//   );
// }

function CourseDetailSugesstion() {
  return (
    <div className="tabs tabs-border border w-[800px] flex flex-row flex-nowrap justify-center mx-[auto] mt-[30px] relative">
      <div className="border w-[400px] text-center h-[65px] mx-[auto]">
        <input
          type="radio"
          name="my_tabs_2"
          id="option1"
          className="tab block w-[100%] h-[100%] leading-[60px]"
          aria-label="ثبت نظر"
        />
        <div className="tab-content border border-[red] p-10 w-[100%] absolute left-[0]">
          <Sugesstion />
        </div>
      </div>

      <div className="border w-[400px] text-center h-[65px] mx-[auto]">
        <input
          type="radio"
          name="my_tabs_2"
          className="tab block w-[100%] h-[100%] leading-[60px]"
          aria-label="نظرات کاربران"
        />
        <div className="tab-content border border-[red] p-10 w-[100%] absolute left-[0]">
          <UserSugesstion />
        </div>
      </div>
    </div>
  );
}

export default CourseDetailSugesstion;
