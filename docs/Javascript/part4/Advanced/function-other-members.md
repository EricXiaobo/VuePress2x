# 函数的其他成员

- arguments 实参集合
- arguments.callee 函数本身，arguments 的一个属性
- fn.caller 函数的调用者,如果在全局调用，返回的调用者为 null。
- fn.length 形参的个数
- fn.name 函数的名称

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      // 自己打印输出一个函数
      // function fun() {
      //   console.log(1);
      // }
      // console.dir(fun);

      // 看一下函数内部的成员
      function fn(a, b) {
        // 实际应用中，会在函数内部直接使用 一个 arguments 的关键字
        console.log(arguments);//简写
        console.log(arguments.callee);// arguments.callee存储的是函数在调用时，传入的所有 实参 组成的一个类数组对象
        console.log(fn.arguments);
        // 函数的调用者，函数在哪个作用域调用，caller 就是谁，如果在全局调用，值就是 null
        console.log(fn.caller);
        // length 指的是形参的个数
        console.log(fn.length);
        // 函数的名字
        console.log(fn.name);
      }
      function test() {
        fn(1, 2, 3, 4);
      }
      test();
    </script>
  </body>
</html>
```
<img src="/images/Javascript/object/13.jpg" style="width: 100%; display:inline-block; margin: 0 ;">

## 模仿制作一个 max 方法

- 灵活使用 arguments 类数组对象，可以记录所有的实参

```js
// 灵活使用 arguments 类数组对象，可以记录所有的实参
// 模仿制作一个max方法
function max() {
  // 判断实参中最大的数
  var nowMax = arguments[0];
  for (var i = 1; i < arguments.length; i++) {
    if (arguments[i] > nowMax) {
      nowMax = arguments[i];
    }
  }
  return nowMax;
}
console.log(max(1, 4, 7, 9));
```
