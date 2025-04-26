import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import MainNavigation from "../common/MainNavigation";
import { NavLink } from "react-router-dom";
const items = [
  {
    label: <MainNavigation navigationTo="/">صفحه اصلی</MainNavigation>,
    key: "0",
  },
  {
    type: "divider",
  },
  {
    label: <MainNavigation navigationTo="/courses">دوره ها</MainNavigation>,
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: <MainNavigation navigationTo="/news">مقالات</MainNavigation>,
    key: "3",
  },
  {
    type: "divider",
  },
  {
    label: <MainNavigation navigationTo="/about-us">درباره ما</MainNavigation>,
    key: "4",
  },
];

const HeaderNavMenu = () => {
  return (
    <Dropdown menu={{ items }} trigger={["click"]}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="rgba(18, 146, 108, 1)"
            class="size-7"
          >
            <path
              fill-rule="evenodd"
              d="M2 3.75A.75.75 0 0 1 2.75 3h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75Zm0 4.167a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 4.166a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 4.167a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
              clip-rule="evenodd"
            />
          </svg>
        </Space>
      </a>
    </Dropdown>
  );
};

export default HeaderNavMenu;
