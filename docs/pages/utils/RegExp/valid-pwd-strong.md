# validStrongPwd 必须包含大小写字母和数字的组合，不能使用特殊字符，长度在 8-10 之间

```javascript
/**
 * 必须包含大小写字母和数字的组合，不能使用特殊字符，长度在8-10之间
 * @param { String } value 待验证的密码格式
 * @returns 验证结果
 */

const res1 = this.$CommonUtils.validStrongPwd("abc123112");
const res2 = this.$CommonUtils.validStrongPwd("Abc122123");
const res3 = this.$CommonUtils.validStrongPwd("abc1_31@12");

console.log(res1); // false
console.log(res2); // true
console.log(res3); // false
```
