import React from "react";
import Button from "../../../components/common/Button";

function PanelChangePassPage() {
  return (
    <div className="border border-[rgba(232,232,232,1)] p-[20px] w-[96%] h-[92%] mt-[25px] mx-[auto] rounded-[15px] shadow-[10px_10px_5px_0px_rgba(0,0,0,0.16)] flex flex-row flex-wrap justify-center gap-[20px]">
      <div className="shadow-[10px_10px_5px_0px_rgba(0,0,0,0.16)] w-[98%] h-[98%] rounded-[10px] bg-[rgba(251,246,246,1)] mx-[auto] mt-[5px]">
        <div className="w-[100%] h-[80px] bg-[rgba(164,246,222,1)] rounded-t-[10px] flex justify-center items-center">
          تغییر رمز عبور
        </div>
        <div className=" w-[98%] h-[430px] mt-[10px] flex flex-row flex-nowrap justify-center gap-[20px]">
          <div className=" w-[45%] h-[100%] flex justify-center items-center">
            <img
              src="/images/registerVerfy.svg"
              className="h-[90%] w-[90%]"
              alt=""
            />
          </div>
          <div className=" w-[50%] h-[100%]">
            <div className=" w-[100%] h-[55px] mt-[60px]">
              <input
                type="text"
                className="w-[100%] text-end h-[100%] text-[15px]  border-[2px] border-[rgba(21,139,104,1)] rounded-[15px] bg-[rgba(255,255,255,1)]"
                placeholder="رمز عبور فعلی      "
              />
            </div>
            <div className=" w-[100%] h-[55px] mt-[50px] mb-[15px]">
              <input
                type="text"
                className="w-[100%] text-end h-[100%] text-[15px]  border-[2px] border-[rgba(21,139,104,1)] rounded-[15px] bg-[rgba(255,255,255,1)]"
                placeholder="  رمز عبور جدید      "
              />
            </div>
            <div className=" w-[100%] h-[55px]">
              <input
                type="text"
                className="w-[100%] text-end h-[100%] text-[15px]  border-[2px] border-[rgba(21,139,104,1)] rounded-[15px] bg-[rgba(255,255,255,1)]"
                placeholder="  تکرار رمز عبور جدید      "
              />
            </div>
            <Button style="w-[100%] h-[55px] flex justify-center items-center bg-[rgba(21,139,104,1)] rounded-[10px] text-[rgba(255,255,255,1)] text-[14px] mt-[50px]">
              تایید
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PanelChangePassPage;
