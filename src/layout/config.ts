const menuList = [
    {
        path: '/dashboard',
        name: '首页'
    },
    {
        path: '/sys',
        name: '系统管理',
        children: [
            {
                path: '/user',
                name: '用户管理'
            },
            {
                path: '/role',
                name: '角色管理'
            }
        ]
    }
]