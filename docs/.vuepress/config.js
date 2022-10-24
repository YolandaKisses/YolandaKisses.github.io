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
      },
      {
        text: "规范",
        link: "/standard/"
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
                { title: "converTreeData", path: "/pages/utils/methods/converTreeData.md" },
                {
                  title: "convertToDictLabel",
                  path: "/pages/utils/methods/convertToDictLabel.md"
                },
                { title: "convertToGroup", path: "/pages/utils/methods/convertToGroup.md" },
                { title: "recursionData", path: "/pages/utils/methods/recursionData.md" },
                { title: "arrObjSort", path: "/pages/utils/methods/arrObjSort.md" },
                { title: "timeStamp2String", path: "/pages/utils/methods/timeStamp2String.md" },
                { title: "Promise.all() 二次封装", path: "/pages/utils/methods/myPromiseAll.md" },
              ]
            },
            {
              title: "公共API接口",
              children: [
                { title: "getSqlDataBySqlCode", path: "/pages/utils/api/getSqlDataBySqlCode.md" },
              ]
            },
            {
              title: "通用正则表达式",
              children: [
                { title: "转换为百分位/千分位/万分位", path: "/pages/utils/RegExp/ConvertUnit.md" },
                { title: "正数，可以是整数，也可以是浮点数", path: "/pages/utils/RegExp/isPositiveNumber.md" },
                { title: "验证电子邮箱格式是否正确", path: "/pages/utils/RegExp/validEmail.md" },
                { title: "验证手机号格式是否正确", path: "/pages/utils/RegExp/phone.md" },
                { title: "判断是否为空", path: "/pages/utils/RegExp/isNull.md" },
                { title: "验证身份证号", path: "/pages/utils/RegExp/validIdentity.md" },
              ]
            }
          ]
        }
      ],
      "/standard/": [
        {
          title: "后台管理系统说明",
          collapsable: true,
          path: "/standard/"
        },
      ]
    }
  },
  plugins: ["demo-container"], // 配置插件
};
