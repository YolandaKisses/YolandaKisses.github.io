# query-from 查询表单 

::: demo

```html
<template>
  <QueryForm
    ref="QueryForm"
    :model="formQuery"
    :formList="formList"
    :rules="rules"
    :buttonList="buttonList"
    labelWidth="auto"
  >
    <template slot="form">
      <el-form-item label="自定义插槽form" >
        <el-input v-model="formQuery.customValue"></el-input>
      </el-form-item>
    </template>
    <template slot="button">
      <el-button size="small">自定义插槽button</el-button>
    </template>
  </QueryForm>
</template>

<script>
export default {
  data() {
    return {
      formQuery: {
        dateVal: "",
        selectVal1: "",
        selectVal2: "",
        inputVal: "",
        customValue: ""
      },
      formList: [
        { prop: "dateVal", label: "日期框", type: "date" },
        {
          prop: "selectVal",
          label: "下拉框",
          type: "select",
          filterable: true,
          clearable: true,
          options: [{ dimCde: "01", dimNme: "选项一" }],
          optionProps: { value: "dimCde", label: "dimNme" }
        },
        {
          prop: "selectVal2",
          label: "下拉框-多选",
          type: "select",
          multiple: true,
          filterable: true,
          clearable: true,
          options: [
            { dimCde: "01", dimNme: "选项一" },
            { dimCde: "02", dimNme: "选项二" }
          ],
          optionProps: { value: "dimCde", label: "dimNme" }
        },
        { prop: "inputVal", label: "input", clearable: true }
      ],
      buttonList: [
        { name: "查询", type: "primary", size: "small", icon: "el-icon-search", loading: false, click: this.onQuery },
        { name: "重置", size: "small", click: this.chongzhi }
      ],
      rules: {
        dateVal: { required: true, message: "请选择日期", trigger: "change" }
      }
    };
  },
  methods: {
    onQuery() {
      this.$refs.QueryForm.Form().validate((valid) => {
        if (valid) {
          console.log(this.formQuery);
          console.log("查询");
          this.buttonList[0].loading = true;
          setTimeout(() => {
            this.buttonList[0].loading = false;
          }, 1000);
        } else {
        }
      });
    },
    chongzhi() {
      this.$refs.QueryForm.Form().resetFields()
    }
  }
};
</script>
```

:::

### Attributes

<div class="special_table">

| 参数           | 说明         | 类型        | 可选值 | 默认值       |
| -------------- | ----------- | ----------- | ------ | ----------- |
| model          | 表单数据对象 | object      |    —   |       —     |
| formList       | 表单数组     | array       |    —   |       —     |
| buttonList     | 按钮组       | array       |    —   |       —     |
| rules          | 表单验证规则 | object      |    —   |       —     |
| label-position | 表单域标签的位置，如果值为 left 或者 right 时，则需要设置 label-width     | string  | right/left/top|      —     |
| label-width    | 表单域标签的宽度，例如 '50px'。作为 Form 直接子元素的 form-item 会继承该值。支持 auto。 | string   |    —   |     —     |

</div>

### formList-item

<div class="special_table">

| 参数             | 说明                   | 类型            | 可选值 | 默认值       |
| ---------------- | ---------------------- | --------------- | ------ | ----------- |
| prop  | 表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的 | string | 传入 Form 组件的 model 中的字段 |   —   |
| label       |  标签文本                     |  string |    —   |       —     |
| labelWidth  |  表单域标签的的宽度，例如 '50px'。支持 auto。 |  string |    —   |      —     |
| type        |  表单项控件类型                |  string |    input/date/select   |      input    |
| clearable   |  是否可清空                    | boolean |    —   |       false     |
| disabled    |  禁用                         |  boolean |    —   |       false     |
| filterable  |  是否可搜索（用于type=select） | boolean  |    —   |       false     |
| multiple    |  是否多选（用于type=select）   | boolean  |    —   |       false     |
| options     | 下拉数据（用于type=select）    |  array   |    —   |       —         |
| optionProps |  { value: "dimCde", label: "dimNme" }（用于type=select） |  object |    —   |    —    |
| size        |  尺寸                         | string   |    medium / small / mini   |     —    |

</div>

### buttonList-item

<div class="special_table">

| 参数      | 说明         | 类型   | 可选值 | 默认值       |
| -------  | ------------ | ------ | ------ | ----------- |
| name     | 按钮名字      | string |   —   |      —     |
| size     | 尺寸          | string |   medium / small / mini   |      —     |
| type     | 类型          | string |   primary / success / warning / danger / info / text   |      —     |
| plain    | 是否朴素按钮   | boolean |   —   |      —     |
| loading  | 是否加载中状态 | boolean |   —   |      false     |
| disabled | 是否禁用状态   | boolean |   —   |      false     |
| icon     | 图标类名       | string |   —   |      false     |
| click    | 点击事件（this.onQuery） | fun |   —   |      —     |

</div>

### Methods

<div class="special_table">

| 方法名            | 说明                |
| ---------------- | ------------------- |
| validate         | 详见 element-ui 文档 |
| validateField    | 详见 element-ui 文档 |
| resetFields      | 详见 element-ui 文档 |
| clearValidate    | 详见 element-ui 文档 |

</div>

例：this.$refs.QueryForm.Methods().resetFields()