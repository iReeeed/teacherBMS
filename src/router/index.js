import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
import componentsRouter from './modules/components'
import chartsRouter from './modules/charts'
import tableRouter from './modules/table'
import nestedRouter from './modules/nested'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [{
  path: '/redirect',
  component: Layout,
  hidden: true,
  children: [{
    path: '/redirect/:path(.*)',
    component: () =>
      import ('@/views/redirect/index')
  }]
},
{
  path: '/login',
  component: () =>
    import ('@/views/login/index'),
  hidden: true
},
{
  path: '/auth-redirect',
  component: () =>
    import ('@/views/login/auth-redirect'),
  hidden: true
},
{
  path: '/404',
  component: () =>
    import ('@/views/error-page/404'),
  hidden: true
},
{
  path: '/401',
  component: () =>
    import ('@/views/error-page/401'),
  hidden: true
},
{
  path: '/',
  component: Layout,
  redirect: '/dashboard',
  children: [{
    path: 'dashboard',
    component: () =>
      import ('@/views/dashboard/index'),
    name: 'Dashboard',
    meta: { title: '首页', icon: 'dashboard', affix: true }
  }]
},
{
  path: '/profile',
  component: Layout,
  redirect: '/profile/index',
  hidden: true,
  children: [{
    path: 'index',
    component: () =>
      import ('@/views/profile/index'),
    name: 'Profile',
    meta: { title: 'Profile', icon: 'user', noCache: true }
  }]
}
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [{
  path: '/class',
  component: Layout,
  redirect: '/class/add/theory-class',
  alwaysShow: true, // will always show the root menu
  name: 'Class',
  meta: {
    title: '课程管理',
    icon: 'star',
    roles: ['admin', 'editor'] // you can set roles in root nav
  },
  children: [{
    path: 'add',
    component: () =>
      import ('@/views/permission/index'),
    name: 'AddClass',
    redirect: '/class/add/theory-class',
    meta: {
      title: '课程添加',
      icon: 'link',
      roles: ['admin'] // or you can only set roles in sub nav
    },
    children: [{
      path: 'theory-class',
      component: () =>
        import ('@/views/permission/classes/add-theory'),
      name: 'Theory',
      meta: {
        title: '添加理论课程',
        icon: 'edit'
      }
    }, {
      path: 'exp-class',
      component: () =>
        import ('@/views/permission/classes/add-exp'),
      name: 'experiment',
      meta: {
        title: '添加实验课程',
        icon: 'edit'
      }
    }]
  },
  {
    path: 'directive',
    component: () =>
      import ('@/views/permission/directive'),
    name: 'DirectivePermission',
    meta: {
      title: '课程查询',
      icon: 'search'
      // if do not set roles, means: this page does not require permission
    }
  }
    // {
    //     path: 'role',
    //     component: () =>
    //         import ('@/views/permission/role'),
    //     name: 'RolePermission',
    //     meta: {
    //         title: 'Role Permission',
    //         roles: ['admin']
    //     }
    // }
  ]
},

// {
//     path: '/icon',
//     component: Layout,
//     children: [{
//         path: 'index',
//         component: () =>
//             import ('@/views/icons/index'),
//         name: 'Icons',
//         meta: { title: 'Icons', icon: 'icon', noCache: true }
//     }]
// },

/** when your routing map is too long, you can split it into small modules **/

tableRouter,

{
  path: '/example',
  component: Layout,
  redirect: '/example/scientific-research',
  name: 'Example',
  meta: {
    title: '科研项目管理',
    icon: 'el-icon-s-help',
    roles: ['editor']

  },
  children: [{
    path: 'scientific-research',
    component: () =>
      import ('@/views/example/scientific-research'),
    name: 'CreateArticle',
    meta: { title: '科研项目管理', icon: 'edit' }
  },
  {
    path: 'list',
    component: () =>
      import ('@/views/example/list'),
    name: 'ArticleList',
    meta: { title: '科研项目查询', icon: 'list' }
  }
  ]
},

{
  path: '/users',
  component: Layout,
  redirect: '/users/tea-manage/list',
  name: 'Users',
  meta: {
    title: '用户管理',
    icon: 'excel'
  },
  children: [{
    path: 'tea-manage',
    name: 'Teacher',
    redirect: '/users/tea-manage/list',
    meta: { title: '教师信息管理', icon: 'lock' },
    component: () =>
      import ('@/views/users/teacher/index'),
    children: [{
      path: 'list',
      component: () =>
        import ('@/views/users/teacher/components/tea-list'),
      name: 'TeacherList',
      meta: { title: '教师信息列表', icon: 'list' }
    },
    {
      path: 'add',
      component: () =>
        import ('@/views/users/teacher/components/tea-add'),
      name: 'AddTeacher',
      meta: { title: '教师信息添加', icon: 'edit' }
    }
    ]
  },
  {
    path: 'stu-manage',
    component: () =>
      import ('@/views/users/student/index'),
    redirect: 'users/stu-manage/stu-list',
    name: 'Student',
    meta: { title: '学生信息管理', icon: 'message' },
    children: [{
      path: 'stu-list',
      component: () =>
        import ('@/views/users/student/components/stu-list'),
      name: 'TeacherList',
      meta: { title: '学生信息列表', icon: 'list' }
    },
    {
      path: 'stu-add',
      component: () =>
        import ('@/views/users/student/components/stu-add'),
      name: 'AddTeacher',
      meta: { title: '学生信息添加', icon: 'edit' }
    }
    ]
  },
  {
    path: 'admin-manage',
    component: () =>
      import ('@/views/users/admin/index'),
    name: 'Admin',
    redirect: '/users/admin-manage/admin-list',
    meta: { title: '管理员信息管理', icon: 'user' },
    children: [{
      path: 'admin-list',
      component: () =>
        import ('@/views/users/admin/components/admin-list'),
      name: 'TeacherList',
      meta: { title: '管理员信息列表', icon: 'list' }
    },
    {
      path: 'admin-add',
      component: () =>
        import ('@/views/users/admin/components/admin-add'),
      name: 'AddTeacher',
      meta: { title: '管理员信息添加', icon: 'edit' }
    }
    ]

  },
  {
    path: 'upload-excel',
    component: () =>
      import ('@/views/users/upload-excel'),
    name: 'UploadExcel',
    meta: { title: 'Upload Excel' }

  }
  ]
},
componentsRouter,
chartsRouter,
nestedRouter,
{
  path: '/tab',
  component: Layout,
  children: [{
    path: 'index',
    component: () =>
      import ('@/views/tab/index'),
    name: 'Tab',
    meta: { title: 'Tab', icon: 'tab' }
  }]
},

{
  path: '/error',
  component: Layout,
  redirect: 'noRedirect',
  name: 'ErrorPages',
  meta: {
    title: 'Error Pages',
    icon: '404'
  },
  children: [{
    path: '401',
    component: () =>
      import ('@/views/error-page/401'),
    name: 'Page401',
    meta: { title: '401', noCache: true }
  },
  {
    path: '404',
    component: () =>
      import ('@/views/error-page/404'),
    name: 'Page404',
    meta: { title: '404', noCache: true }
  }
  ]
},

{
  path: '/error-log',
  component: Layout,
  children: [{
    path: 'log',
    component: () =>
      import ('@/views/error-log/index'),
    name: 'ErrorLog',
    meta: { title: 'Error Log', icon: 'bug' }
  }]
},

{
  path: '/zip',
  component: Layout,
  redirect: '/zip/download',
  alwaysShow: true,
  name: 'Zip',
  meta: { title: 'Zip', icon: 'zip' },
  children: [{
    path: 'download',
    component: () =>
      import ('@/views/zip/index'),
    name: 'ExportZip',
    meta: { title: 'Export Zip' }
  }]
},

{
  path: '/pdf',
  component: Layout,
  redirect: '/pdf/index',
  children: [{
    path: 'index',
    component: () =>
      import ('@/views/pdf/index'),
    name: 'PDF',
    meta: { title: 'PDF', icon: 'pdf' }
  }]
},
{
  path: '/pdf/download',
  component: () =>
    import ('@/views/pdf/download'),
  hidden: true
},

{
  path: '/theme',
  component: Layout,
  children: [{
    path: 'index',
    component: () =>
      import ('@/views/theme/index'),
    name: 'Theme',
    meta: { title: 'Theme', icon: 'theme' }
  }]
},

{
  path: '/clipboard',
  component: Layout,
  children: [{
    path: 'index',
    component: () =>
      import ('@/views/clipboard/index'),
    name: 'ClipboardDemo',
    meta: { title: 'Clipboard', icon: 'clipboard' }
  }]
},

{
  path: 'external-link',
  component: Layout,
  children: [{
    path: 'https://github.com/PanJiaChen/vue-element-admin',
    meta: { title: 'External Link', icon: 'link' }
  }]
},

// 404 page must be placed at the end !!!
{ path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
