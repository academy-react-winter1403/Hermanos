import React from "react";

function SectionTitle({ title = "", description = "" }) {
  return (
    <div className="text-center text-[rgba(34,68,93,1)]">
      <h2 className="section-title mx-[auto] text-[40px]">{title}</h2>
      <p className="section-description text-lg block mx-[auto] font-normal">
        {description}
      </p>
    </div>
  );
}

export default SectionTitle;
