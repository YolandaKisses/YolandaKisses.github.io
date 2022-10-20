# ConvertUnit 转换为百分位/千分位/万分位

```javascript
/**
 * 转换为百分位
 * @param { String } value 待验证的数值
 * @returns 验证结果
 */
const result = this.$CommonUtils.ConvertPercentile("10000");

console.log(result); // 1,00,00
```

```javascript
/**
 * 转换为千分位
 * @param { String } value 待验证的数值
 * @returns 验证结果
 */
const result = this.$CommonUtils.ConvertThousands("10000");

console.log(result); // 10,000
```

```javascript
/**
 * 转换为万分位
 * @param { String } value 待验证的数值
 * @returns 验证结果
 */
const result = this.$CommonUtils.ConvertWan("10000");

console.log(result); // 1,0000
```
