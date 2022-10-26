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
            {
              title: "multiple-select-table 带表格查询的多选下拉框",
              path: "/pages/components/multiple-select-table.md"
            },
            { title: "query-from 查询表单", path: "/pages/components/query-form.md" },
            { title: "select-tree 下拉树单选", path: "/pages/components/select-tree.md" },
            { title: "multiple-select-tree 下拉树多选", path: "/pages/components/multiple-select-tree.md" }
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
                { title: "线性结构转树形结构", path: "/pages/utils/methods/conver-tree-data.md" },
                {
                  title: "字典数据中转换中文",
                  path: "/pages/utils/methods/convert-dict-label.md"
                },
                { title: "根据key进行数据分类", path: "/pages/utils/methods/convert-to-group.md" },
                { title: "树形数据增删改查", path: "/pages/utils/methods/recursion-data.md" },
                { title: "数组对象排序", path: "/pages/utils/methods/arr-obj-sort.md" },
                { title: "时间戳转换日期格式", path: "/pages/utils/methods/timeStamp-to-string.md" },
                { title: "Promise.all() 二次封装", path: "/pages/utils/methods/my-promise-all.md" }
              ]
            },
            {
              title: "公共API接口",
              children: [{ title: "数据库通用接口", path: "/pages/utils/api/get-sql-data.md" }]
            },
            {
              title: "通用正则表达式",
              children: [
                { title: "转换为百分位/千分位/万分位", path: "/pages/utils/RegExp/convert-unit.md" },
                { title: "正数，可以是整数，也可以是浮点数", path: "/pages/utils/RegExp/is-positive-number.md" },
                { title: "验证电子邮箱格式是否正确", path: "/pages/utils/RegExp/valid-email.md" },
                { title: "验证手机号格式是否正确", path: "/pages/utils/RegExp/phone.md" },
                { title: "判断是否为空", path: "/pages/utils/RegExp/is-null.md" },
                { title: "验证身份证号", path: "/pages/utils/RegExp/validIdentity.md" }
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
        {
          title: "Vue 代码规范及优化写法",
          collapsable: true,
          children: [
            {
              title: "代码规范",
              path: "/standard/code-lint.md"
            },
            {
              title: "简洁代码片段（推荐写法）",
              path: "/standard/code-review.md"
            }
          ]
        }
      ]
    }
  },
  plugins: ["demo-container"] // 配置插件
};
