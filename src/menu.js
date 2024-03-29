const menus = [
  // {
  //   name: 'Home',
  //   path: 'home',
  // },
  {
    name: 'gprs13',
    path: 'gprs13',
    children: [
      { name: '单个', path: 'gprs13' },
      { name: '批量', path: 'batch' },
    ],
  },
  {
    name: 'serial-port',
    path: 'serial-port/index',
  },
  {
    name: 'QRCode二维码',
    path: 'qrcode/index',
  },
  {
    name: '随机数',
    path: 'random/index',
  },
  {
    name: 'TCP Client',
    path: 'tcp/client',
  },
  {
    name: 'About',
    path: 'about',
    children: [
      { name: 'About1', path: 'about1' },
      {
        name: 'About2',
        path: 'about2',
        children: [
          { name: 'About2', path: 'about2' },
          { name: 'About3', path: 'about3' },
        ],
      },
    ],
  },
]

// 拼接完整path
const fullPath = (menus, parentPath = '/') =>
  menus.map((m) => {
    let result = { ...m, path: parentPath + m.path }
    if (m.children) result.children = fullPath(m.children, `${parentPath}${m.path}/`)
    return result
  })

// 提取children, 方便生成routes
const genarateRoute = (menus, result = []) => {
  menus.forEach((menu) => {
    if (!menu.children) result.push({ ...menu })
    else genarateRoute(menu.children, result)
  })
  return result
}

const path = fullPath(menus)
const route = genarateRoute(path)
const defaultRoute = '/gprs13/gprs13'
// console.log(menus, path, route)

export { path, route, defaultRoute }
