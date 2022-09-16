# diff-table

## 基本用法

::: demo diff-table
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