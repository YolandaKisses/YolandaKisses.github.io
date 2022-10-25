# validEmail 验证电子邮箱格式是否正确

```javascript
/**
 * 验证电子邮箱格式是否正确
 * @param { String } value 待验证的电子邮箱
 * @returns 验证结果
 */
const res1 = this.$CommonUtils.validEmail("abc@qq.com");
const res2 = this.$CommonUtils.validEmail("111@qq.commd");

console.log(res1); // true
console.log(res2); // false
```
