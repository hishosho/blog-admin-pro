import { Popconfirm, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-layout';
import React from 'react';
import type { ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { getBlogList } from '@/services/blog/api';


export type Blog = {
  id: number;
  title: string;
  state: string;
  order: number;
  publishDate: number;
  updateDate: number;
};

const BlogList: React.FC = () => {
  const renderRemoveBlog = (text: string) => (
    <Popconfirm key="popconfirm" title={`确认${text}吗?`} okText="是" cancelText="否">
      <a>{text}</a>
    </Popconfirm>
  );

  const columns: ProColumns<API.BlogListItem>[] = [
    {
      dataIndex: 'id',
      title: '序号',
    },
    {
      dataIndex: 'title',
      title: '博客名称',
    },
    {
      dataIndex: 'state',
      title: '博客状态',
    },
    {
      dataIndex: 'order',
      title: '博客排序',
    },
    {
      dataIndex: 'publishDate',
      title: '发布日期',
      valueType: 'date',
    },
    {
      dataIndex: 'updateDate',
      title: '更新日期',
      valueType: 'date',
    },
    {
      title: '操作',
      dataIndex: 'x',
      valueType: 'option',
      render: () => {
        const node = renderRemoveBlog('移除');
        return [<a key="edit">编辑</a>, node];
      },
    },
  ];

  return (
    <PageContainer>
      <ProTable<API.BlogListItem, API.PageParams>
        columns={columns}
        request={getBlogList}
        rowKey="id"
        pagination={{
          showQuickJumper: true,
        }}
        toolBarRender={() => [
          <Button
            key="button"
            icon={<PlusOutlined />} 
            type="primary"
          >
            新建
          </Button>,
        ]}
        search={false}
      />
    </PageContainer>
  );
};

export default BlogList;