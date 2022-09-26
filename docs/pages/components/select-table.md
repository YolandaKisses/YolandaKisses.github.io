# select-table 带表格查询的单选下拉框 

::: demo

```html
<template>
  <SelectTable
    ref="SelectTable"
    v-model="formQuery.fundCode"
    :data="fundList"
    :Columns="Columns"
    size="small"
    value-field="vcFundCode"
    label-field="vcFundName"
    placeholder="请选择"
    @change="change"
  />
</template>

<script>
export default {
  data() {
    return {
      formQuery: {
        fundCode: "SSS2",
      },
      Columns: [
        // { label: "产品代码", prop: "vcFundCode" },
        { label: "产品", prop: "vcFundName" },
        { label: "机构", prop: "organization" },
        { label: "成立日期", prop: "creatDate" },
      ],
      fundList: [],
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
            vcFundCode: `SSS${i + 1}`,
            vcFundName: `SSS${i + 1}_产品${i + 1}`,
            organization: `机构${i + 1}`,
            creatDate: "2022-09-23"
          };
          this.fundList.push(obj);
        }
      }, 500);
    },
    change(data){
      console.log(data);
      console.log(this.formQuery.fundCode);
    }
  },
};
</script>
```

:::

### Attributes

<div class="special_table">

| 参数             | 说明                   | 类型            | 可选值 | 默认值       |
| ---------------- | --------------------- | --------------- | ------ | ----------- |
| v-model          | 绑定值                 | array           |    —   |       —     |
| data             | 下拉表格数据           | array           |    —   |       —     |
| Columns          | 下拉表格表头           | array           |    —   |       —     |
| valueField       | v-model 数组保存的字段 | String          |    —   |       —     |
| labelField       | 显示在文本框的字段     | string          |    —   |       —     |
| placeholder      | 输入框占位文本         | string          |    —   |       —     |
| width            | 下拉表格宽度           | string          |    —   | 650px       |
| clearable        | 是否可清空             | boolean         |    —   | false       |
| disabled         | 是否禁用               | boolean         |    —   | false       |

</div>

### Events

<div class="special_table">

| 事件名称      | 说明               | 回调参数 | 
| ------------ | ------------------ | ------  | 
| change       | 选中值发生变化时触发 | row     |
| clear        | 清空                | —       |

</div>