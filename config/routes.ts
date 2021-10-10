export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    path: '/blog',
    name: 'blog',
    icon: 'read',
    routes: [
      {
        path: '/blog',
        redirect: '/blog/list',
      },
      {
        path: '/blog/list',
        name: 'list',
        component: './BlogList',
      },
      {
        path: '/blog/tag',
        name: 'tag',
        component: './Tag',
      },
      {
        path: '/blog/edit',
        name: 'edit',
        component: './BlogEdit',
      },
      {
        component: './404',
      },
    ],
  },
  {
    component: './404',
  },
];
