import React from "react";

import { Switch } from "antd";
const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};
const SwitchBtn = () => (
  <Switch size="small" defaultChecked onChange={onChange} />
);

function PassSecurity() {
  return (
    <div className="mt-[15px] w-[100%] h-[200px] bg-[rgba(251,246,246,1)] shadow-[10px_10px_5px_0px_rgba(0,0,0,0.16)] rounded-[10px]">
      <div className="new-coourses-header w-[100%] h-[40px] text-center bg-[rgba(164,246,222,1)] rounded-t-[10px] leading-[35px]">
        امنیت
      </div>
      <div className=" w-[70%] h-[40px] mx-[auto] mt-[20px] flex flex-row flex-nowrap justify-center">
        <div className=" w-[75%] h-[100%] text-center text-[11px] leading-[35px] text-[rgba(21,139,104,1)]">
          رمز ورود دومرحله‌ای
        </div>
        <div className=" w-[25%] h-[100%] flex justify-center items-center">
          <SwitchBtn />
        </div>
      </div>
    </div>
  );
}

export default PassSecurity;
