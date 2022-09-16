# diff-table

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
| value / v-model | 绑定值 | string | — | — |
| disabled | 是否禁用 | boolean | — | false |
| size | 尺寸 | string | medium / small / mini | — |
| show-alpha | 是否支持透明度选择 | boolean | — | false |
| color-format | 写入 v-model 的颜色的格式 | string | hsl / hsv / hex / rgb | hex（show-alpha 为 false）/ rgb（show-alpha 为 true） |
| popper-class | ColorPicker 下拉框的类名 | string | — | — |
| predefine | 预定义颜色 | array | — | — |

### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change | 当绑定值变化时触发 | 当前值 |
| active-change | 面板中当前显示的颜色发生改变时触发 | 当前显示的颜色值 |
