import React from "react";

function SectionTitle({ children }) {
  return (
    <h2 className="section-title mx-[auto] text-[30px] mt-[80px] mb-[30px]">
      {children}
    </h2>
  );
}

export default SectionTitle;
