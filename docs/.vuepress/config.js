module.exports = {
  title: '前端typeScript代码规范【孙卫其】',  // 设置网站标题
  description : 'typeScript代码规范',
  base : '/',
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }]
  ],
  port: '8080',
  themeConfig : {
    sidebar:  [
      '/named/',
      '/type/',
      '/other/'
    ],
    sidebarDepth : 5
  }
}