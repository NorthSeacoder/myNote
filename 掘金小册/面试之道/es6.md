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

     > 在早期，使用立即执行函数实现模块化是常见的手段，通过函数作用域解决了命名冲突、污染全局作用域的问题

   - AMD 和 CMD
   - CommonJS
   - ES Module

   1. CommonJS 支持动态导入，也就是 require(\${path}/xx.js)，后者目前不支持，但是已有提案
   2. CommonJS 是同步导入，因为用于服务端，文件都在本地，同步导入即使卡住主线程影响也不大。而后者是异步导入，因为用于浏览器，需要下载文件，如果也采用同步导入会对渲染有很大影响
   3. CommonJS 在导出时都是值拷贝，就算导出的值变了，导入的值也不会改变，所以如果想更新值，必须重新导入一次。但是 ES Module 采用实时绑定的方式，导入导出的值都指向同一个内存地址，所以导入值会跟随导出值变化
   4. ES Module 会编译成 require/exports 来执行的

6. Proxy
7. reduce
