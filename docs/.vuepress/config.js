const path = require("path");
module.exports = {
  theme: "",
  title: "dataDriver - Element - Echarts",
  description: "VuePress搭建Element + Echarts的业务组件库文档教程示例代码",
  palette: path.resolve(__dirname, "palette.styl"),
  base: "/",
  port: "8080",
  themeConfig: {
    nav: [
      // 配置顶部导航栏
      {
        text: "首页",
        link: "/"
      },
      {
        text: "组件",
        link: "/pages/"
      }
    ],
    sidebar: {
      // 配置侧边栏部分
      "/pages/": [
        {
          title: "使用指南",
          collapsable: true,
          path: '/pages/'
        },
        {
          title: "基于Element",
          collapsable: true,
          children: [{ title: "diff-table 差异化表格", path: "/pages/diff-table.md" }]
        },
        {
          title: "基于Echarts",
          collapsable: true,
          children: []
        },
        {
          title: "CommonUtils工具类",
          collapsable: true,
          children: []
        }
      ]
    }
  },
  plugins: ["demo-container"] // 配置插件
};
