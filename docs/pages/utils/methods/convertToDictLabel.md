# convertToDictLabel 根据指定值从字典数据中转换label

```html
<script>
/**
 * 根据指定值从字典数据中转换label
 * @param {*} datas 字典数据
 * @param {*} value 编码
 * @returns
 */
export function convertToDictLabel(datas, value) {
  var actions = [];
  Object.keys(datas).some((key) => {
    if (datas[key].value == "" + value) {
      actions.push(datas[key].label);
      return true;
    }
  });
  return actions.join("");
}
</script>
```
