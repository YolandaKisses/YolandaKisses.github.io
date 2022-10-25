# isNull 判断是否为空

```javascript
/**
 * 判断是否为空
 * @param {*} val 待验证内容
 * @returns 验证结果
 */
const res1 = this.$CommonUtils.isNull();
const res2 = this.$CommonUtils.isNull("");
const res3 = this.$CommonUtils.isNull({});
const res4 = this.$CommonUtils.isNull([]);
const res5 = this.$CommonUtils.isNull("211");

console.log(res1); // true
console.log(res2); // true
console.log(res3); // true
console.log(res4); // true
console.log(res5); // false
```
