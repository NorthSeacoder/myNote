# kata-2

~操作符（按位取反运算符 (~)）

# kata-3

1. Array.from()第二个参数类似于 map
2. {length:n}转换成数组可以设置数组长度

```js
Array.from(
  {
    length: n
  },
  (_, i) => n - i
);
```
