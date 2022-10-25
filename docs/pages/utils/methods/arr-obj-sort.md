# arrObjSort 数组对象排序

```javascript
/**
 * @desc 数组对象排序
 * @param { Array } 需要排序数据
 * @param { String } 参与排序字段
 * @param { String } 正序asc，倒序desc
 * @return sort会改变原数据，无需return
 */
this.$CommonUtils.arrObjSort(list, "age", "desc");
```

# 使用举例

```javascript
// 定义数据
const list = [
  {
    name: "张四",
    age: "19"
  },
  {
    name: "张三",
    age: "20"
  },
  {
    name: "张一",
    age: "25"
  },
  {
    name: "张二",
    age: "24"
  }
];

// 通过排序后结果如下
result = [
  {
    name: "张一",
    age: "25"
  },
  {
    name: "张二",
    age: "24"
  },
  {
    name: "张三",
    age: "20"
  },
  {
    name: "张四",
    age: "19"
  }
];
```
