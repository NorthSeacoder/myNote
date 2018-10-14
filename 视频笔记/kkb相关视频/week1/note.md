### 数组方法

map 映射 [31, 56, 89, 67] => [不及格, 不及格, 及格, 及格]  
reduce 汇总 [..., ..., ...] => xx  
filter 过滤 [x, x, x, x, x, x] => [x, x, x...]  
forEach 迭代、遍历

### http 状态码

1xx 消息  
2xx 成功  
3xx 重定向  
▪ 301 Moved Permanently 永久重定向——下回不会再找他了  
▪ 302 Move temporarily 临时重定向——下回依然会请求服务器  
▪ 304 Not Modified 缓存  
4xx 请求错误  
5xx 服务端错误  
6xx+ 自定义

### JSON

JSON.stringify {a: 12, b: 5} => "{\"a\": 12, \"b\": 5}"  
JSON.parse "{\"a\": 12, \"b\": 5}" => {a: 12, b: 5}

### 类型判断

```js
let a = '';
if (!a && typeof a == 'object') {
  alert('是个null');
} else if (!a && typeof a == 'undefined') {
  alert('是个undefined');
} else if (!a && typeof a == 'string') {
  alert('是个空字符串');
} else {
  alert('其他');
}
```
