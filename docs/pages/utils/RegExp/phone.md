# phone 验证手机号格式是否正确

```javascript
/**
 * 验证手机号格式是否正确
 * @param { String | Number } value 待验证的手机号
 * @returns 验证结果
 */
const res1 = this.$CommonUtils.phone("12345678910");
const res2 = this.$CommonUtils.phone(13412353192);
const res3 = this.$CommonUtils.phone("13412353192");

console.log(res1); // false
console.log(res2); // true
console.log(res3); // true
```
