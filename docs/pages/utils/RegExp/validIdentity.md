# validIdentity 验证身份证号

```javascript
/**
 * 验证身份证号
 * @param { String | Number } value 待验证的身份证
 * @returns 验证结果
 */
const res1 = this.$CommonUtils.validIdentity("310105199612311316");
const res2 = this.$CommonUtils.validIdentity(310105199612311316);
const res3 = this.$CommonUtils.validIdentity("31010519961231131x");
const res4 = this.$CommonUtils.validIdentity("123456");

console.log(res1); // true
console.log(res2); // true
console.log(res3); // true
console.log(res4); // false
```
