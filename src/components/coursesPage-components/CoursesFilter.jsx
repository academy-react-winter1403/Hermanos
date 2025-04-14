import React from "react";

function CoursesFilter() {
  return (
    <div className="right-filter rounded-[37px] bg-[rgba(251,246,246,1)] shadow-[10px_10px_3px_0px_rgba(0,0,0,0.16)] mt-[10px] w-[23%] h-[500px]">
      <div className="right-filter-title mb-[20px] w-[80px] h-[30px] mx-[auto] mt-[20px] flex flex-row flex-nowrap items-center">
        <div className="filter-title w-[60%] h-[100%] text-[13px] text-center leading-[25px]">
          فیلترها
        </div>
        <div className="filter-icon w-[30%] h-[60%]">
          <img
            src="/images/Path 1878.svg"
            alt=""
            className="w-[100%] h-[100%]"
          />
        </div>
      </div>
      <div className="join join-vertical bg-base-100 w-[100%]">
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input
            type="radio"
            name="my-accordion-4"
            defaultChecked
            className="block"
          />
          <div className="collapse-title font-semibold">تکنولوژی</div>
          <div className="collapse-content text-sm">
            <div className="tec1-holder">
              <input
                type="radio"
                name="radio-3"
                id="tec-input1"
                className="radio radio-neutral"
                defaultChecked
              />
              <label htmlFor="tec-input1">حضوری</label>
            </div>
            <div className="tec2-holder">
              <input
                type="radio"
                name="radio-3"
                id="tec-input2"
                className="radio radio-neutral"
              />
              <label htmlFor="tec-input2">آنلاین</label>
            </div>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title font-semibold">نوع برگزاری</div>
          <div className="collapse-content text-sm">
            <div className="kind1-holder">
              <input
                type="radio"
                name="radio-3"
                id="kind-input1"
                className="radio radio-neutral"
                defaultChecked
              />
              <label htmlFor="kind-input1">حضوری</label>
            </div>
            <div className="kind2-holder">
              <input
                type="radio"
                name="radio-3"
                id="kind-input2"
                className="radio radio-neutral"
              />
              <label htmlFor="kind-input2">آنلاین</label>
            </div>
          </div>
        </div>
        <div
          className="collapse collapse-arrow join-item border-base-300 border"
          style={{ direction: "rtl" }}
        >
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title font-semibold">سطح دوره</div>
          <div className="collapse-content text-sm">
            <div className="level1-holder">
              <input
                type="radio"
                name="radio-3"
                id="level-input1"
                className="radio radio-neutral"
                defaultChecked
              />
              <label htmlFor="level-input1">حضوری</label>
            </div>
            <div className="level2-holder">
              <input
                type="radio"
                name="radio-3"
                id="level-input2"
                className="radio radio-neutral"
              />
              <label htmlFor="level-input2">آنلاین</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursesFilter;
