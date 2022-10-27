# validPwd 验证密码格式

```javascript
/**
 * 验证以字母开头，长度在6~18之间，只能包含字母、数字和下划线
 * @param { String } value 待验证的密码格式
 * @returns 验证结果
 */

const res1 = this.$CommonUtils.validPwd("abc123");
const res2 = this.$CommonUtils.validPwd("abc12");
const res3 = this.$CommonUtils.validPwd("abc1231@");

console.log(res1); // true
console.log(res2); // false
console.log(res3); // false
```
