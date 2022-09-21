# convertToOptions 转换成下拉数据

```html
<script>
/**
 * 转换成下拉数据
 * @param {Object} data 参数
 * @param {String} valueKey 属性键
 * @param {String} labelKey 属性键
 * @param {String} selectedKey 属性键
 * @param {String} groupValueKey 属性键
 * @param {String} groupLabelKey 属性键
 */
export function convertToOptions(
  data,
  valueKey = "value",
  labelKey = "label",
  selectedKey = "selected",
  groupValueKey = "groupValue",
  groupLabelKey = "groupLabel"
) {
  const _result = [];
  if (data && data instanceof Array) {
    data.forEach((item) => {
      const value = item[valueKey] || "";
      const label = item[labelKey] || "";
      const selected = item[selectedKey] || "";
      const groupValue = item[groupValueKey] || "";
      const groupLabel = item[groupLabelKey] || "";
      let flag = true;
      if (!value && !label && !selected && !groupValue && !groupLabel) {
        flag = false;
      }
      if (flag) {
        _result.push({
          value,
          label,
          selected,
          groupValue,
          groupLabel,
        });
      }
    });
  }
  return _result;
}
</script>
```
