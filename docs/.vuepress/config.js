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
            { title: "diff-table 表格差异化对比高亮展示", path: "/pages/components/diff-table.md" },
            { title: "select-table 带表格查询的单选下拉框", path: "/pages/components/select-table.md" },
            { title: "multiple-select-table 带表格查询的多选下拉框", path: "/pages/components/multiple-select-table.md" },
            { title: "query-from 查询表单", path: "/pages/components/query-form.md" },
            { title: "select-tree 下拉树单选", path: "/pages/components/select-tree.md" },
            { title: "multiple-select-tree 下拉树多选", path: "/pages/components/multiple-select-tree.md" },
          ]
        },
        {
          title: "基于Echarts",
          collapsable: true,
          children: [{ title: "pie", path: "/pages/echarts/my-chart.md" }]
        },
        {
          title: "CommonUtils工具类",
          collapsable: true,
          children: [
            {
              title: "工具类方法调用",
              children: [
                { title: "converTreeData 线性列表转树性列表", path: "/pages/utils/methods/converTreeData.md" },
                {
                  title: "convertToDictLabel 根据指定值从字典数据中转换label",
                  path: "/pages/utils/methods/convertToDictLabel.md"
                },
                { title: "convertToGroup 根据pkey归类", path: "/pages/utils/methods/convertToGroup.md" },
                { title: "Promise.all() 封装", path: "/pages/utils/methods/myPromiseAll.md" },
              ]
            },
            {
              title: "公共API接口",
              children: [
                { title: "getSqlDataBySqlCode 通用sqlCode接口", path: "/pages/utils/api/getSqlDataBySqlCode.md" },
              ]
            }
          ]
        }
      ]
    }
  },
  plugins: ["demo-container"] // 配置插件
};
