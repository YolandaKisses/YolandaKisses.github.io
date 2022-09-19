# multiple-select-table 带表格查询的下拉框 

## 完整用法

::: demo

```html
<template>
  <MultipleSelectTable
    ref="multipleSelectTable"
    v-model="formQuery.vcFundCodes"
    :data="fundList"
    :Columns="Columns"
    id-field="vcFundCode"
    name-field="vcFundName"
    placeholder="请选择"
  />
</template>
<script>
  export default {
    data() {
      return {
        formQuery: {
          vcFundCodes: ["S1", "S3"]
        },
        Columns: [
          { label: "产品代码", prop: "vcFundCode" },
          { label: "产品名称", prop: "vcFundName" },
          { label: "机构", prop: "organization" }
        ],
        fundList: []
      };
    },
    created() {
      this.init();
    },
    methods: {
      init() {
        setTimeout(() => {
          for (let i = 0; i < 100; i++) {
            let obj = {
              vcFundCode: `S${i + 1}`,
              vcFundName: `产品${i + 1}`,
              organization: `机构${i + 1}`
            };
            this.fundList.push(obj);
          }
        }, 500);
      }
    }
  };
</script>
```

:::

### Attributes

| 参数             | 说明                   | 类型            | 可选值 | 默认值       |
| ---------------- | ---------------------- | --------------- | ------ | ----------- |
| v-model          | 绑定值                 | array           |    —   |       —     |
| data             | 下拉表格数据           | array           |    —   |       —     |
| Columns          | 下拉表格表头           | array           |    —   |       —     |
| idField          | v-model 数组保存的字段 | String          |    —   |       —     |
| nameField        | 显示在文本框的字段     | string          |    —   |       —     |
| placeholder      | 输入框占位文本         | string          |    —   |       —     |
| checkStrictly    | 是否不展示全选Checkbox | boolean         |    —   | false       |
| width            | 下拉表格宽度           | string          |    —   | 650px       |
| checCheckboxkMethod  | 禁止勾选设置       | fun({ row })    |    —   |       —     |

### Events

| 事件名称         | 说明               | 回调参数 | 
| ------------     | ------------------ | ------   | 
| checkboxAll      | 当手动勾选全选时触发的事件 | checked, records |
| checkboxChange   | 当手动勾选并且值发生改变时触发的事件  | checked, records |
