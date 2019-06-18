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

# kata-5

1. 'ed4g'.match(/\d/) // 结果为类数组  
   数组或类数组中只有一个值的时候数学运算才能隐式类型转换成功;
2. +可以将后面参数转换为数字
