import React from 'react';
import { Button, Dropdown, Space } from 'antd';
const items = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        Blog
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          Blog Details
        </a>
      ),
    },
   
  ];

const BlogPage = () => {
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
        <Button>Blog</Button>
      </Dropdown>
    </Space>
  </Space>
    </div>
  )
}

export default BlogPage