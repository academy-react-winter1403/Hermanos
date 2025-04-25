const Pagination = () => {
  return (
    <div className="join gap-2 flex-row-reverse mb-4">
      <input
        className="join-item btn border-none btn-circle "
        type="radio"
        name="options"
        aria-label="1"
        defaultChecked
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
    </div>
  );
};

export default Pagination;
