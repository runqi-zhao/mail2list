import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

export default new Router({
  // mode: 'history',
  // mode: 'hash', //默认 有#号
  routes: [
    {
      path: '/bootPage',
      name: 'bootPage',
      component: () => import('../components/pages/bootPage')
    },

    {
      path: '/',
      name: 'main',
      component: () => import('../components/Main.vue'),
      redirect: '/',//设置默认指向的路径
      children: [ //这里就是二级路由的配置
        {
          path: '/',
          name: 'content',
          component: () => import('../components/Content.vue'),
          redirect: '/',//设置默认指向的路径
          children: [ //这里就是二级路由的配置
            {
              path: '/',
              name: 'sections',
              component: () => import('../components/pages/index')
            },
            {
              path: '/maillist',
              name: 'mailList',
              component: () => import('../components/pages/mailList')
            },
            {
              path: '/archive',
              name: 'archive',
              component: () => import('../components/pages/archive')
            }
          ]
        },
      ]
    },





    // {
    //   path: '/',
    //   name: 'main',
    //   component: () => import('../components/Main.vue'),
    //   redirect: '/',//设置默认指向的路径
    //   children: [ //这里就是二级路由的配置
    //     {
    //       path: '/',
    //       name: 'flow',
    //       component: () => import('../components/pages/Flow')
    //     },
    //     {
    //       path: '/group',
    //       name: 'group',
    //       component: () => import('../components/pages/Group')
    //     },
    //     {
    //       path: '/processes',
    //       name: 'processes',
    //       component: () => import('../components/pages/Processes')
    //     },
    //     {
    //       path: '/template',
    //       name: 'template',
    //       component: () => import('../components/pages/Template')
    //     },
    //     {
    //       path: '/datasource',
    //       name: 'datasource',
    //       component: () => import('../components/pages/DataSource')
    //     },
    //     {
    //       path: '/admin',
    //       name: 'admin',
    //       component: () => import('../components/pages/Admin')
    //     },
    //   ]
    // },
  ]
})
