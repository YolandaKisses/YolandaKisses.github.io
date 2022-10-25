# timeStamp2String 时间戳转换为不同的日期格式

```javascript
/**
 * @desc 时间戳转换为不同的日期格式
 * @param { String | Number } 时间戳
 * @param { String | Number } type1 => yyyy年mm月dd日
 * @param { String | Number } type2 => yyyy-mm-dd
 * @param { String | Number } type3 => mm-dd
 * @param { String | Number } type4 => mm
 * @param { String | Number } type5 => dd
 * @param { String | Number } type6 => yyyy.mm.dd hh:mm:ss
 * @param { String | Number } type7 => yyyy-mm-dd hh:mm:ss
 * @param { String | Number } type8 => yyyy-mm-dd hh:mm
 * @param { String | Number } type9 => mm-dd hh:mm
 */
const res1 = this.$CommonUtils.timeStamp2String("1652508000000", 1);
const res2 = this.$CommonUtils.timeStamp2String("1652508000000", 2);
const res3 = this.$CommonUtils.timeStamp2String("1652508000000", 3);
const res4 = this.$CommonUtils.timeStamp2String("1652508000000", 4);
const res5 = this.$CommonUtils.timeStamp2String("1652508000000", 5);
const res6 = this.$CommonUtils.timeStamp2String("1652508000000", 6);
const res7 = this.$CommonUtils.timeStamp2String("1652508000000", 7);
const res8 = this.$CommonUtils.timeStamp2String("1652508000000", 8);
const res9 = this.$CommonUtils.timeStamp2String("1652508000000", 9);

console.log(res1); // 2022年05月14日
console.log(res2); // 2022-05-14
console.log(res3); // 05-14
console.log(res4); // 05
console.log(res5); // 14
console.log(res6); // 2022.05.14 14:00:00
console.log(res7); // 2022-05-14 14:00:00
console.log(res8); // 2022-05-14 14:00
console.log(res9); // 05-14 14:00
```
