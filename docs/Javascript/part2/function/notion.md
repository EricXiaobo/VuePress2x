# 函数的概念

## 为什么要有函数？

- 如果要在多个地方求某个数的约数个数，应该怎么做？

## 函数概念

- 函数（ function ），也叫作功能、方法，函数可以将一段代码一起封装起来，被封装起来的
  函数具备某一项特殊的功能，内部封装的一段代码作为一个完整的结构体，要执行就都执
  行，要不执行就都不执行。
- 函数的作用就是封装一段代码，将来可以重复使用。

```js
// 定义函数
function fun() {
  console.log(1);
  console.log(2);
  console.log(3);
  console.log(4);
}
// 调用函数
fun();
fun();
fun();
fun();
```

