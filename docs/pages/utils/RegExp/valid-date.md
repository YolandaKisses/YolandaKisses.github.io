# validDate 验证日期格式是否正确 yyyy-mm-dd

```javascript
/**
 * 验证日期格式是否正确yyyy-mm-dd
 * @param { String } value 待验证的日期格式
 * @returns 验证结果
 */
const res1 = this.$CommonUtils.validDate("2022-2-3");
const res2 = this.$CommonUtils.validDate("2022-12-03");
const res3 = this.$CommonUtils.validDate("2022.12.03");

console.log(res1); // true
console.log(res2); // true
console.log(res3); // false
```
