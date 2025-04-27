import React from "react";

function FirstCourseInfo({ answering, asking, color }) {
  return (
    <div className=" w-[100%] h-[30px] text-[14px] flex flex-row flex-nowrap justify-center">
      <div className={` w-[50%] h-[100%] text-end text-[${color}]`}>
        {answering}
      </div>
      <div className=" w-[50%] h-[100%] text-end text-[#12926C]">
        : {asking}
      </div>
    </div>
  );
}

export default FirstCourseInfo;
