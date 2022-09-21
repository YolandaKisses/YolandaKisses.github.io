# dictionaryList 获取数据字典数据

```html
<script>
/**
 * 获取数据字典数据
 * @param {Object} request 请求实例
 * @param {String} dictType 字典类型参数
 */
export function dictionaryList(request, dictType) {
  return request({
    url: "/dictionary/type/" + dictType,
    method: "GET",
  });
}

</script>
```
