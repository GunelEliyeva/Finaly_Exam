import React from 'react';
import { Button, Dropdown, Space } from 'antd';
const items = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
       Login
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          Register
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          Tracking
        </a>
      ),
    },
   
  ];

const Pages = () => {
  return (
    <div>
        <Space direction="vertical">
    <Space wrap>
      <Dropdown
        menu={{
          items,
        }}
        placement="topRight"
      >
        <Button>Pages</Button>
      </Dropdown>
    </Space>
  </Space>
    </div>
  )
}

export default Pages