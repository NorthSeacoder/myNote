1.  原始类型有哪几种？

    > 在 JS 中，存在着 6 种原始值，分别是：

        boolean
        null
        undefined
        number
        string
        symbol

2.  null 是对象嘛？

    > 在 JS 的最初版本中使用的是 32 位系统，为了性能考虑使用低位存储变量的类型信息，000 开头代表是对象，然而 null 表示为全零，所以将它错误的判断为 object 。虽然现在的内部类型判断代码已经改变了，但是对于这个 Bug 却是一直流传下来。

3.  对象类型和原始类型的不同之处？

    > 对象类型和原始类型不同的是，原始类型存储的是值，对象类型存储的是地址。当你创建了一个对象类型的时候，计算机会在内存中帮我们开辟一个空间来存放值，但是我们需要找到这个空间，这个空间会拥有一个地址。

4.  函数参数是对象会发生什么问题？
5.

```js
function test(person) {
  person.age = 26;
  person = {
    name: 'yyy',
    age: 30
  };

  return person;
}
const p1 = {
  name: 'yck',
  age: 25
};
const p2 = test(p1);
console.log(p1); // -> {name: "yck", age: 26}
console.log(p2); // -> {name: "yyy", age: 30}
```

> 首先，函数传参是传递对象指针的副本  
> 到函数内部修改参数的属性这步， p1 的值也被修改了  
> 但是当我们重新为了 person 分配了一个对象时，person 拥有了一个新的地址，也就和 p1 没有任何关系了，导致了最终两个变量的值是不相同的。
