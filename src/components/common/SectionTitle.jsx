import React from "react";

function SectionTitle({
  title = "",
  description = "",
  customClass,
  titleClass,
  titleFontSize = "26px",
}) {
  return (
    <div className={`text-center ${customClass}`}>
      <h2
        className={`section-title mx-[auto] text-[${titleFontSize}] ${titleClass}`}
      >
        {title}
      </h2>
      <p className="section-description block mx-[auto]"> {description} </p>
    </div>
  );
}

export default SectionTitle;
