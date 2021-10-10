// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取博客列表 GET /api/blogList */
export async function getBlogList(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.BlogList>('/api/blogList', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据id获取博客详情 GET /api/blogDetail */
export async function blogDetail(
  params: {
    id: number
  },
  options?: { [key: string]: any },
) {
  return request<{
    data: API.Blog
  }>('/api/blogDetail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取博客标签列表 GET /api/tagList */
export async function tagList(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<{
    data: API.TagList
  }>('/api/tagList', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}