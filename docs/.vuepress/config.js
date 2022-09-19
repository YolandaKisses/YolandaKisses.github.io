const path = require("path");
module.exports = {
  theme: "",
  title: "基于Vxe + ElementUI + Echarts业务组件库",
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
          path: "/pages/"
        },
        {
          title: "基于Element + Vxe",
          collapsable: true,
          children: [
            { title: "diff-table 表格差异化对比高亮展示", path: "/pages/diff-table.md" },
            { title: "multiple-select-table 带表格查询的下拉框", path: "/pages/multiple-select-table.md" }
          ]
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
