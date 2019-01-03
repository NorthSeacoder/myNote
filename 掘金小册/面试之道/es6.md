1. 什么是暂时性死区？
   > 代码中，存在全局变量 tmp，但是块级作用域内 let 又声明了一个局部变量 tmp，导致后者绑定这个块级作用域，所以在 let 声明变量前，对 tmp 赋值会报错。  
   > ES6 明确规定，如果区块中存在 let 和 const 命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。  
   > 总之，在代码块内，使用 let 命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”（temporal dead zone，简称 TDZ）。

```
var tmp = 123;

if (true) {
   tmp = 'abc'; // ReferenceError
   let tmp;
}
```

2. 原型如何实现继承？
   > 组合继承是最常用的继承方式

```js
function Parent(value) {
  this.val = value;
}
Parent.prototype.getValue = function() {
  console.log(this.val);
};
function Child(value) {
  Parent.call(this, value);
}
Child.prototype = new Parent();

const child = new Child(1);
child.getValue(); //1
child instanceof Parent; //true
```

该继承方式的核心是在子类的构造函数中通过 Parent.call(this) 继承父类的属性，然后改变子类的原型为 new Parent() 来继承父类的函数。

3. Class 如何实现继承？

```js
class Parent {
  constructor(value) {
    this.val = value;
  }
  getValue() {
    console.log(this.val);
  }
}
class Child extends Parent {
  constructor(value) {
    super(value);
    this.val = value;
  }
}
let child = new Child(1);
child.getValue(); // 1
child instanceof Parent; // true
```

class 实现继承的核心在于使用 extends 表明继承自哪个父类，并且在子类构造函数中必须调用 super，因为这段代码可以看成 Parent.call(this, value)。

4. 为什么要使用模块化？
   - 解决命名冲突
   - 提供复用性
   - 提高代码可维护性
5. 都有哪几种方式可以实现模块化，各有什么特点？
   - 立即执行函数
   - AMD 和 CMD
   - CommonJS
   - ES Module
