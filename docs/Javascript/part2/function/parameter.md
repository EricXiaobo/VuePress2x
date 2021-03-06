# 函数的参数

## 函数的参数 1

- 我们希望函数执行结果不是一成不变的，可以根据自定义的内容发生一些变化。
- 函数预留了一个接口，专门用于让用户自定义内容，使函数发生一些执行效果变化。
- 接口：就是函数的参数，函数参数的本质就是变量 ，可以接收任意类型的数据，导致函数执行结果根据参数不同，结果也不同 。
- 一个函数可以设置 0 个或者多个参数，参数之间用逗号分隔。
- 一个函数可以设置 0 个或者多个参数，参数之间用逗号分隔。

```js
// 定义一个求和函数，传入两个数据
// 参数：传两个参数，数据类型为数字
// 功能：得到两个数字之和
function sum(a, b) {
  console.log(a + b);
}
// 调用函数中，给小括号内部添加数据
sum(3, 4);
sum("3", 4);
```

## 函数的参数2
- 函数的参数根据书写位置不同，名称也不同：
- 形式参数：定义的 () 内部的参数，叫做形式参数，本质是变量，可以接收实际参数传递过来的数据。简称形参。
- 实际参数：调用的 () 内部的参数，叫做实际参数，本质就是传递的各种类型的数据，传递给每个形参，简称实参。
- 函数执行过程，伴随着传参的过程：

<img src="/images/Javascript/022.jpg" style="width: 100%; display:inline-block; margin: 0 auto;">

## 函数的参数优点
- 不论使用自己封装的函数，还是其他人封装的函数，只需要知道传递什么参数，执行什么功能，没必要知道内部的结构什么。
- 一般自己封装的函数或者其他人封装的函数需要有一个 API 接口说明，告诉用户参数需要传递什么类型的数据，实现什么功能。

