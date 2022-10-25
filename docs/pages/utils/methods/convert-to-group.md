# convertToGroup 根据 pkey 进行分组归类

```javascript
/**
 * @desc 根据pkey进行分组归类 => 只支持二级归类
 * @param {*} list 数据列表
 * @param {*} options 参数如下
 * @param {*} pkey 父级的key
 * @param {*} pname 父级的name
 * @param {*} ckey 子级的key
 * @param {*} cname 子级的name
 */
const result = this.$CommonUtils.convertToGroup(list, {
  pkey: "pid",
  pname: "pname",
  ckey: "cid",
  cname: "cname"
});
```

# 使用举例

```javascript
// 定义数据
const list = [
  {
    pid: "r-01",
    pname: "系统管理员",
    cid: "u-01-01",
    cname: "员工r-01-1"
  },
  {
    pid: "r-01",
    pname: "超级管理员1",
    cid: "u-01-02",
    cname: "员工r-01-2"
  },
  {
    pid: "r-02",
    pname: "系统管理员",
    cid: "u-02-01",
    cname: "员工r-02-1"
  }
];

// 通过转换后数据结构如下
result = [
  {
    pkey: "r-01",
    pname: "系统管理员",
    children: [
      { ckey: "u-01-01", cname: "员工r-01-1" },
      { ckey: "u-01-02", cname: "员工r-01-2" }
    ]
  },
  {
    pkey: "r-02",
    pname: "系统管理员",
    children: [{ ckey: "u-02-01", cname: "员工r-02-1" }]
  }
];
```
