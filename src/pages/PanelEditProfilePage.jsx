import React from "react";
import Button from "../components/common/Button";
import EditProfileIInputs from "../components/panelEditProfPage-components/EditProfileIInputs";
import EditUsersImage from "../components/panelEditProfPage-components/EditUsersImage";
import PassSecurity from "../components/panelEditProfPage-components/PassSecurity";

function PanelEditProfilePage() {
  return (
    <div className="border border-[rgba(232,232,232,1)] p-[20px] w-[96%] h-[92%] mt-[25px] mx-[auto] rounded-[15px] shadow-[10px_10px_5px_0px_rgba(0,0,0,0.16)] flex flex-row flex-wrap justify-center gap-[20px]">
      <div className="w-[70%] h-[99%] bg-[rgba(251,246,246,1)] shadow-[10px_10px_5px_0px_rgba(0,0,0,0.16)] rounded-[10px]">
        <div className="new-coourses-header w-[100%] h-[40px] text-center bg-[rgba(164,246,222,1)] rounded-t-[10px] leading-[35px]">
          مشخصات کاربر
        </div>
        <EditProfileIInputs />
      </div>
      <div className="w-[20%] h-[500px]">
        <EditUsersImage />
        <PassSecurity />
      </div>
    </div>
  );
}

export default PanelEditProfilePage;
