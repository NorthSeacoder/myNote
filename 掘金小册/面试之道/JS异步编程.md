1. 并发与并行的区别？

   > 并发是宏观概念，我分别有任务 A 和任务 B，在一段时间内通过任务间的切换完成了这两个任务，这种情况就可以称之为并发。  
   > 并行是微观概念，假设 CPU 中存在两个核心，那么我就可以同时完成任务 A、B。同时完成多个任务的情况就可以称之为并行。

2. 什么是回调函数？
3. 回调函数有什么缺点？
   - 容易写出回调地狱
   - 不能使用 try catch 捕获错误
   - 不能直接 return
4. 回调地狱问题？
   - 嵌套函数存在耦合性，一旦有所改动，就会牵一发而动全身
   - 嵌套函数一多，就很难处理错误
   - 不利于阅读和维护
5.
