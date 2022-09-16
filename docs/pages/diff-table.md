# diff-table 差异化表格

## 基本用法


::: demo
```html
<template>
  <diff-table :data-group="[oldData, newData]" :columns="tableColumns" />
</template>
<script>
export default {
  data() {
    return {
      oldData: [
        { id: 1, name: "zhangsan1", age: 23, address: "zxczxczxc" },
        { id: 2, name: "zhangsan2", age: 23.5, address: "zxczxczxc" },
        { id: 3, name: "zhangsan34", age: 23, address: "zxczxczxc" },
        { id: 4, name: "zhangsan4", age: 23, address: "zxczxczxc" },
        { id: 5, name: "zhangsan5", age: 23, address: "zxczxczxc" },
        { id: 6, name: "zhangsan5", age: 23, address: "zxczxczxc" },
      ],
      newData: [
        { id: 1, name: "zhangsan1", age: 23, address: "zxczxczxc" },
        { id: 2, name: "zhangsan2", age: 23, address: "zxczxczxc" },
        { id: 4, name: "zhangsan4", age: 23, address: "地址地址地址" },
        { id: 3, name: "zhangsan3", age: 23, address: "zxczxczxc" },
        { id: 5, name: "zhangsan5", age: 23, address: "zxczxczxc" },
        { id: 6, name: "zhangsan5", age: 13, address: "zxczxczxc" },
        { id: 7, name: "zhangsan5", age: 23, address: "zxczxczxc" },
      ],
      tableColumns: [
        { label: "唯一id", prop: "id" },
        { label: "名称", prop: "name" },
        { label: "年龄", prop: "age" },
        { label: "地址", prop: "address" },
      ],
    };
  },
  methods: {},
};
</script>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| uniqueKey | 对比唯一key(必填) | String | — | id |
| dataGroup | 需对比表格数据源(一组) | Array (validator: (val) => val.length === 2) | — | — |
| columns | 需对比表格的列(必填) | Array | — | — |
| addRowColor | 新增行背景色 | String | — | #E1F3D8 |
| addRowTxtColor | 新增行字体颜色 | String | — | red |
| diffCellColor | 差异单元格背景色 | String | — | rgba(254, 250, 207) |
| diffCellTxtColor | 差异单元格字体颜色 | String | — | red |
| tableHeight | 表格高度 | String | — | — |
| stripe | 是否斑马纹 | Boolean | — | true |
| border | 是否需要边框 | Boolean | — | true |
| headerCellStyle | 自定义表头 | Object | — | — |

### Columns Attributes 在 Columns 属性列中定义
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |---------- |---------- |
| prop | 对应列内容的字段名 | String | — | — |
| label | 显示的标题 | String | — | — |
| width | 对应列的宽度 | String | — | — |
| min-width | 对应列的最小宽度 | String |  — | 100 |
| header-align | 表头对齐方式 | String | left/center/right | center |
| align	 | 方式 | String | left/center/right | center |
