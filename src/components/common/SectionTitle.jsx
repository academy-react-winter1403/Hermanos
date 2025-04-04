import React from "react";

function SectionTitle({
  title = "",
  description = "",
  customClass,
  fontSize = "30px",
}) {
  return (
    <div className={`text-center ${customClass}`}>
      <h2 className={`section-title mx-[auto] text-[${fontSize}]`}>{title}</h2>
      <p className="section-description block mx-[auto]"> {description} </p>
    </div>
  );
}

export default SectionTitle;
