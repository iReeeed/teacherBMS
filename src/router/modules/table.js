/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const tableRouter = {
  path: '/workload',
  component: Layout,
  redirect: '/workload/list',
  name: 'Workload',
  meta: {
    title: '教师工作量管理',
    icon: 'table'
  },
  children: [{
    path: 'list',
    component: () =>
      import ('@/views/workload/list'),
    name: 'WorkloadList',
    meta: { title: '教师工作量列表', icon: 'list' }
  },
  {
    path: 'drag-table',
    component: () =>
      import ('@/views/workload/drag-table'),
    name: 'DragTable',
    meta: { title: '教师工作量查询', icon: 'search' }
  }

  ]
}
export default tableRouter
