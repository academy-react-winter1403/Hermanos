import React from "react";

const HeroStatsCard = ({ children, className }) => {
  return (
    <div
      className={` h-[90%] rounded-2xl  p-6 flex flex-col items-center ${className}`}
    >
      {children}
    </div>
  );
};

export default HeroStatsCard;
