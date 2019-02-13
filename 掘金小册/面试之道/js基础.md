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

5. typeof 是否能正确判断类型？
   > typeof 对于原始类型来说，除了 null 都可以显示正确的类型

```js
typeof 1; // 'number'
typeof '1'; // 'string'
typeof undefined; // 'undefined'
typeof true; // 'boolean'
typeof Symbol(); // 'symbol'
typeof null; // 'object'
```

> typeof 对于对象来说，除了函数都会显示 object，所以说 typeof 并不能准确判断变量到底是什么类型

6. instanceof 能正确判断对象的原理是什么？

   > 内部机制是通过原型链来判断的,但原始类型无法通过 instanceof 来判断

7. 如何正确判断 this？
   > 直接调用函数=>this=window  
   >  obj.foo()=>谁调用函数，谁就是 this  
   > new => this 被绑定在 new 出的对象中

![image](https://user-gold-cdn.xitu.io/2018/11/15/16717eaf3383aae8?imageslim)

8. 什么是闭包？

   > 函数 A 内部有一个函数 B，函数 B 可以访问到函数 A 中的变量，那么函数 B 就是闭包。  
   > 闭包存在的意义就是让我们可以间接访问函数内部的变量。

9. 浅拷贝与深拷贝

   > 浅拷贝只会拷贝所有的属性值到新的对象中（Object.assign,展开运算符 ...）

10. 原型与原型链
    > 在 JavaScript 中，每当定义一个对象（函数也是对象）时候，对象中都会包含一些预定义的属性。其中每个函数对象都有一个 prototype 属性，这个属性指向函数的原型对象。

> 对象 person1 有一个 **proto**属性，创建它的构造函数是 Person，构造函数的原型对象是 Person.prototype ，所以：
> person1.**proto** == Person.prototype
