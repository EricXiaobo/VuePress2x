# 函数的 call 方法

- 函数本身就是一种对象，就能够有自己的属性和方法
- call 方法本身是一种执行函数的方法
- call 方法在调用函数的时候，有两个功能
  - 1. 更改函数内部的 this 指向
  - 2. 调用函数执行内部代码
- 参数：第一个参数用来指定 this，第二个及以后，就是传的实参

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
      // call
      // 函数本身就是一种对象，就能够有自己的属性和方法
      // call 方法本身是一种执行函数的方法
      function fn(a, b) {
        console.log(this);
        console.log(a + b);
      }
      var o = {
        name: "zs",
      };
      // 普通函数调用
      // fn(2,3);
      // call 方法在调用函数的时候，有两个功能
      // 1.更改函数内部的 this 指向
      // 2.调用函数执行内部代码
      // 参数： 第一个参数用来指定 this，第二个及以后，就是传的实参
      fn.call(o, 3, 4);
    </script>
  </body>
</html>
```
