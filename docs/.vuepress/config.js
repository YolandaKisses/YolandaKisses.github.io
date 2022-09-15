module.exports = {
  theme: '',
  title: 'dataDriver - Element - Echarts',
  description: 'VuePress搭建Element + Echarts的业务组件库文档教程示例代码',
  port: '8080',
  themeConfig: {
    nav: [ // 配置顶部导航栏
      {
        text: '首页',
        link: '/'
      },
      {
        text: '组件',
        link: '/pages/'
      }
    ],
    sidebar: { // 配置侧边栏部分
      '/pages/': ['/pages/', '/pages/PaginationSelect.md']
    }
  },
  plugins: ['demo-container'], // 配置插件
}
