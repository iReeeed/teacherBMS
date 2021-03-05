/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const tableRouter = {
  path: '/table',
  component: Layout,
  redirect: '/table/complex-table',
  name: 'Table',
  meta: {
    title: '教师工作量管理',
    icon: 'table'
  },
  children: [{
    path: 'dynamic-table',
    component: () =>
      import ('@/views/table/dynamic-table/index'),
    name: 'DynamicTable',
    meta: { title: '教师工作量添加' }
  },
  {
    path: 'drag-table',
    component: () =>
      import ('@/views/table/drag-table'),
    name: 'DragTable',
    meta: { title: '教师工作量查询' }
  },
  {
    path: 'inline-edit-table',
    component: () =>
      import ('@/views/table/inline-edit-table'),
    name: 'InlineEditTable',
    meta: { title: 'Inline Edit' }
  },
  {
    path: 'complex-table',
    component: () =>
      import ('@/views/table/complex-table'),
    name: 'ComplexTable',
    meta: { title: 'Complex Table' }
  }
  ]
}
export default tableRouter
