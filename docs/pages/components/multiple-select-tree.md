# multiple-select-tree 下拉树多选

::: demo

```html
<template>
  <MultipleSelectTree
    v-model="values"
    size="small"
    nodeKey="id"
    :treeData="treeData"
    :defaultProps="defaultProps"
    clearable
    @change="change"
  ></MultipleSelectTree>
</template>

<script>
export default {
  data() {
    return {
      defaultProps: {
        children: "children",
        label: "label"
      },
      values: [1, 4, 9],
      treeData: [],
      treeData2: [
        {
          id: 1,
          label: "一级 1",
          children: [
            {
              id: 4,
              label: "二级 1-1",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: "一级 2",
          children: [
            {
              id: 5,
              label: "二级 2-1"
            },
            {
              id: 6,
              label: "二级 2-2"
            }
          ]
        },
        {
          id: 3,
          label: "一级 3",
          children: [
            {
              id: 7,
              label: "二级 3-1"
            },
            {
              id: 8,
              label: "二级 3-2"
            }
          ]
        }
      ]
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      setTimeout(() => {
        this.treeData = this.treeData2;
      }, 500);
    },
    change(data){
      console.log(data);
    }
  }
};
</script>
```

:::

### Attributes

| 参数           | 说明            | 类型          | 可选值 | 默认值       |
| -------------- | -------------- | ------------- | ------ | ----------- |
| v-model        | 绑定值          | string/number | — | — |
| size           | 输入框尺寸      | string        | medium/small/mini | — |
| clearable      | 是否可以清空选项 | boolean       | — | false |
| disabled       | 是否禁用        | boolean       | — | false |
| placeholder    | 占位文字        | string        | — | 请选择 |
| nodeKey        | 必填，v-model的值取决于这个字段值 | string | — | — |
| treeData       | tree数据        | array         | — | — |
| defaultProps   | tree 配置项     | obj           | — | { children: "children", label: "label" } |
| checkStrictly  | 是否严格的遵循父子不互相关联的做法，默认为 true  | boolean | — | true |

### Events

| 事件名称 | 说明                                   | 回调参数                |
| --------| -------------------------------------- | ---------------------- |
| change  | 选中值发生变化时触发                     | { value, data, node }  |
| clear   | 可清空的单选模式下用户点击清空按钮时触发   | —                      |