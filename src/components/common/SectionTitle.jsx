import React from "react";

function SectionTitle({ title, description }) {
  return (
    <div className="text-center">
      <h2 className="section-title mx-[auto] text-[30px] mt-[80px] mb-[30px]">
        {title}
      </h2>
      <p className="section-description block mx-[auto]"> {description} </p>
    </div>
  );
}

export default SectionTitle;
