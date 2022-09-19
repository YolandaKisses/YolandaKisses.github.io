# Web Storage使用

```html
<script>
/**
 * 前端工程全局唯一Web Storage使用,类似前端Session存值，但请谨慎选择和使用合适的方式存储
 * window.localStorage - 永久存储，需要程序控制清理数据,在同域同端口请求下可跨浏览器标签使用
 * window.sessionStorage - 在浏览器单一卡标签的会话期间内有效，浏览器卡标签关闭即自动清除数据
 */

const tokenKey = "datadriver-ui-token";

export function getToken() {
  return localStorage.getItem(tokenKey);
}

export function setToken(token) {
  return localStorage.setItem(tokenKey, token);
}

export function removeToken() {
  return localStorage.removeItem(tokenKey);
}

</script>
```
