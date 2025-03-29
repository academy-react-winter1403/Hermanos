import React from "react";

const Pagination = () => {
  return (
    <div className="join gap-2 flex-row-reverse">
      <input
        className="join-item btn border-none btn-circle bg-[rgba(21,139,104,1)]"
        type="radio"
        name="options"
        aria-label="1"
        checked="checked"
      />
      <input
        className="join-item btn border-none btn-circle"
        type="radio"
        name="options"
        aria-label="2"
      />
      <input
        className="join-item btn border-none btn-circle"
        type="radio"
        name="options"
        aria-label="3"
      />
      <input
        className="join-item btn border-none btn-circle"
        type="radio"
        name="options"
        aria-label="4"
      />
    </div>
  );
};

export default Pagination;
