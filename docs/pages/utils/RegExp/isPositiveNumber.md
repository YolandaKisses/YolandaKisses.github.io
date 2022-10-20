# isPositiveNumber 是否是正数，可以是整数，也可以是浮点数

```javascript
/**
 * 是否是正数，可以是整数，也可以是浮点数
 * @param { String | Number } value 待验证的数值
 * @returns 验证结果
 */
const res1 = this.$CommonUtils.isPositiveNumber("10000");
const res2 = this.$CommonUtils.isPositiveNumber(2000);
const res3 = this.$CommonUtils.isPositiveNumber(-20);

console.log(res1); // true
console.log(res2); // true
console.log(res3); // false
```
