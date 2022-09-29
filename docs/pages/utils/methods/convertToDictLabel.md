# convertToDictLabel 根据指定值从字典数据中转换 label

```javascript
  /**
   * 根据指定值从字典数据中转换label
   * @param {*} datas 字典数据
   * @param {*} value 编码
   * @returns
   */
  const result = this.$CommonUtils.convertToDictLabel(list, '1')
```

# 使用举例
```javascript
// 定义数据
const list = [{
  value: '1',
  label: '黄金糕'
}, {
  value: '2',
  label: '双皮奶'
}, {
  value: '3',
  label: '蚵仔煎'
}, {
  value: '4',
  label: '龙须面'
}, {
  value: '5',
  label: '北京烤鸭'
}],

// 通过转换后数据结构如下
result = '黄金糕'
```