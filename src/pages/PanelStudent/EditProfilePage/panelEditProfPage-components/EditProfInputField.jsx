import React from "react";

function EditProfInputField({ num, firstTitle, secTitle = "" }) {
  if (num === "2")
    return (
      <div className=" w-[100%] h-[60px] flex flex-row flex-nowrap justify-between gap-[10px] mt-[10px]">
        <div className=" w-[50%] h-[100%] flex flex-col gap-[5px]">
          <div className=" h-[20px] text-[12px] text-end text-[rgba(21,139,104,1)]">
            {firstTitle}
          </div>
          <input
            type="text"
            className=" border-[2px] w-[100%] h-[40px] rounded-[10px] bg-[rgba(255,255,255,1)] border-[rgba(21,139,104,1)]"
          />
        </div>
        <div className=" w-[50%] h-[100%] flex flex-col gap-[5px]">
          <div className=" h-[20px] text-[12px] text-end text-[rgba(21,139,104,1)]">
            {secTitle}
          </div>
          <input
            type="text"
            className=" border-[2px] w-[100%] h-[40px] rounded-[10px] bg-[rgba(255,255,255,1)] border-[rgba(21,139,104,1)]"
          />
        </div>
      </div>
    );
  else if (num === "1")
    return (
      <div className=" w-[100%] h-[60px] mt-[10px]">
        <div className=" h-[20px] text-[12px] text-end text-[rgba(21,139,104,1)]">
          {firstTitle}
        </div>
        <input
          type="text"
          className=" border-[2px] w-[100%] h-[40px] rounded-[10px] bg-[rgba(255,255,255,1)] border-[rgba(21,139,104,1)]"
        />
      </div>
    );
  else if (num === "1.5")
    return (
      <div className=" w-[100%] h-[60px] mt-[10px] flex flex-row flex-nowrap justify-center gap-[10px]">
        <div className=" w-[20%] h-[100%] flex flex-col gap-[5px]">
          <div className=" h-[20px] text-[12px] text-end text-[rgba(21,139,104,1)]">
            {firstTitle}
          </div>
          <input
            type="text"
            className=" border-[2px] w-[100%] h-[40px] rounded-[10px] bg-[rgba(255,255,255,1)] border-[rgba(21,139,104,1)]"
          />
        </div>
        <div className=" w-[80%] h-[100%] flex flex-col gap-[5px]">
          <div className=" h-[20px] text-[12px] text-end text-[rgba(21,139,104,1)]">
            {secTitle}
          </div>
          <input
            type="text"
            className=" border-[2px] w-[100%] h-[40px] rounded-[10px] bg-[rgba(255,255,255,1)] border-[rgba(21,139,104,1)]"
          />
        </div>
      </div>
    );
}

export default EditProfInputField;
