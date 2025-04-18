import React from "react";
import { Collapse } from "antd";
import { useState } from "react";
import { Input, Radio } from "antd";

const style = {
  display: "flex",
  flexDirection: "column",
  gap: 8,
  direction: "rtl",
  border: "1px solid rgba(91,225,185,1)",
  borderRadius: "10px",
  padding: "10px",
};

const InputRadio = () => {
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <Radio.Group
      buttonCheckedBg="rgba(91,225,185,1)"
      style={style}
      onChange={onChange}
      value={value}
      options={[
        { value: 1, label: "حضوری" },
        { value: 2, label: "آنلاین" },
        { value: 3, label: "آنلاین-حضوری" },
      ]}
    />
  );
};

const items = [
  {
    key: "1",
    label: "تکنولوژی",
    children: (
      <div className="flex flex-col ltr">
        <InputRadio />
      </div>
    ),
  },
  {
    key: "2",
    label: "نوع برگزاری",
    children: (
      <div className="flex flex-col ltr">
        <InputRadio />
      </div>
    ),
  },
  {
    key: "3",
    label: "سطح دوره",
    children: (
      <div className="flex flex-col ltr">
        <InputRadio />
      </div>
    ),
  },
];
const CollapseFilter = () => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <Collapse
      className="text-end "
      bordered={false}
      onChange={onChange}
      items={items}
    />
  );
};
// export default App;

function CoursesFilter() {
  return (
    <div className="right-filter rounded-3xl bg-[rgba(251,246,246,1)] shadow-[7px_7px_10px_0px_rgba(0,0,0,0.16)] mt-[10px] ml-auto w-[18%] h-[500px]">
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
      <div className=" w-[100%] mt-[30px]">
        <CollapseFilter />
      </div>
    </div>
  );
}

export default CoursesFilter;
