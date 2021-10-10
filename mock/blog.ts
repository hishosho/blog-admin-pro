import { Request, Response } from 'express';
import { parse } from 'url';


const genList = (current: number, pageSize: number) => {
  const blogList: API.BlogListItem[] = []
  
  for (let i = 0; i < 10; i++) {
    let blogListItem: API.BlogListItem = {
      id: (i + 1) * current,
      title: `blog-${(i + 1) * current}`,
      state: 'pubilshed',
      order: i,
      tags: [{
        id: 0,
        name: 'vue'
      }],
      admireCount: 1,
      visitCount: 1,
      publishDate: Date.now(),
      updateDate: Date.now(),
    }
    blogList.push(blogListItem)
  }
  return blogList
}

function getList(req: Request, res: Response, u: string) {
  let realUrl = u;
  if (!realUrl || Object.prototype.toString.call(realUrl) !== '[object String]') {
    realUrl = req.url;
  }
  const { current = 1, pageSize = 10 } = req.query;
  const params = parse(realUrl, true).query as unknown as API.PageParams;
  let blogList = genList(1, 100)

  let dataSource = [...blogList].slice(
    ((current as number) - 1) * (pageSize as number),
    (current as number) * (pageSize as number),
  );

  const result = {
    data: dataSource,
    total: dataSource.length,
    success: true,
    pageSize,
    current: parseInt(`${params.current}`, 10) || 1,
  };

  return res.json(result);
}

export default {
  'GET /api/blogList': getList
}