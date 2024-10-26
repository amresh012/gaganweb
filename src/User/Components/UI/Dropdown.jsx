import React from 'react';
import {Dropdown, Space } from 'antd';
import { GoVideo } from "react-icons/go";

const items = [
  {
    key: '1',
    label: (
      <li className="">Photos</li>
    ),
  },
  {
    key: '2',
    label: (
      <li className="">Video</li>
    ),
  },
];
const DropdownGallery = ({text}) => (
  <Space direction="vertical">
    <Space wrap>
      <Dropdown
        menu={{
          items,
        }}
        placement="bottom"
        arrow
      >
        <button>Gallery</button>
      </Dropdown>
    </Space>
  </Space>
);
export default DropdownGallery;