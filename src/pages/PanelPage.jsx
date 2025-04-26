import React from "react";
import PanelHeader from "../components/panelPageLayout-components/PanelHeader";
import PanelNavigation from "../components/panelPageLayout-components/PanelNavigation";
import { Outlet } from "react-router-dom";

function PanelPage() {
  //this is the max-width and max-height of the window//
  return (
    <div className="panel-main-holder mx-[auto] w-[1535px] h-[735px]">
      <div className="panel-header w-[100%] h-[100px] flex flex-row flex-nowrap justify-center">
        <PanelHeader />
        <div className="panel-header-right w-[25%] h-[100%] text-center leading-[88px] text-[25px]">
          UserName
        </div>
      </div>
      <div className="panel-content-holder w-[100%] h-[635px] flex flex-row flex-nowrap justify-center">
        <div className="changing-content w-[75%] h-[635px]">
          <Outlet />
        </div>
        <PanelNavigation />
      </div>
    </div>
  );
}

export default PanelPage;
