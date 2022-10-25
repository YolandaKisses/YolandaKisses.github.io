# converTreeData 线性列表转树性列表

```javascript
/**
 * @desc 线性结构转树形结构
 * @param {*} nodes 节点
 * @param {*} treeRootId 顶级根节点
 * @param {*} pidName 父节点名
 * @param {*} idName 子节点名
 * @param {*} mid 树形key
 * @returns
 */
const result = this.$CommonUtils.converTreeData(list, "XBRL", "VC_PARENT_NAME", "VC_ELEMENT_NAME_EN").data;
```

# 使用举例

```javascript
// 定义数据
const list = [
  {
    VC_DIFFERENCE: 108,
    VC_ELEMENT_ID: "0000",
    VC_ELEMENT_NAME_EN: "XBRL",
    VC_ELEMENT_NAME_ZH: "核对报告",
    VC_ORDER: "0",
    VC_PARENT: "1",
    VC_REPORT_TYPE: "S",
  },
  {
    VC_ELEMENT_NAME_EN: "JiJinJianJie",
    VC_ELEMENT_NAME_ZH: "基金简介",
    VC_ORDER: "02",
    VC_PARENT: "1",
    VC_PARENT_NAME: "XBRL",
    VC_REPORT_TYPE: "S",
  },
  {
    VC_ELEMENT_NAME_EN: "JiJinJiBenZiLiao",
    VC_ELEMENT_NAME_ZH: "基金基本情况",
    VC_ORDER: "0201",
    VC_PARENT_NAME: "JiJinJianJie",
    VC_REPORT_TYPE: "S",
  }
],

// 通过转换后数据结构如下
result = [
  VC_DIFFERENCE: 108,
  VC_ELEMENT_ID: "0000",
  VC_ELEMENT_NAME_EN: "XBRL",
  VC_ELEMENT_NAME_ZH: "核对报告",
  VC_ORDER: "0",
  VC_PARENT: "1",
  VC_REPORT_TYPE: "S",
  children: [
    {
      VC_ELEMENT_NAME_EN: "JiJinJianJie",
      VC_ELEMENT_NAME_ZH: "基金简介",
      VC_ORDER: "02",
      VC_PARENT: "1",
      VC_PARENT_NAME: "XBRL",
      VC_REPORT_TYPE: "S",
      children: [
        {
          VC_ELEMENT_NAME_EN: "JiJinJiBenZiLiao",
          VC_ELEMENT_NAME_ZH: "基金基本情况",
          VC_ORDER: "0201",
          VC_PARENT_NAME: "JiJinJianJie",
          VC_REPORT_TYPE: "S",
        }
      ]
    },
  ]
]
```
