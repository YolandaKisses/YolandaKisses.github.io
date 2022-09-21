# getSqlDataBySqlCode 通用sqlCode接口

```html
<script>
/**
 * 通用sqlCode接口
 * @param { Object } request 请求实例
 * @param { Object } data 查询条件
 * @returns
 */
const getSqlDataBySqlCode = (request, data) => {
  return request({
    url: 'rest/report/getSqlDataBySqlCode.do',
    method: 'GET',
    params: {
      ...data
    }
  })
}
</script>
```
