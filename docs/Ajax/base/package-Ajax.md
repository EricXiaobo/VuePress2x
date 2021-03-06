# 封装 AJAX 库

自己封装一个 AJAX 函数

- 这里主要是为了了解封装的过程，一般情况在开发中都是使用第三方提供的 AJAX 库，因为它们可能更加严谨。
- 为了在后续的开发过程中可以更方便的使用这套 API，一般的做法都是将其封装到一个函数中以便调用。

## 提取参数

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script>
      // 封装自己的 Ajax 函数
      /**
       * 参数1：{string}    method  请求方法
       * 参数2：{string}    url     请求地址
       * 参数3：{Object}    params  请求参数
       * 参数4：{function}  done    请求完成后执行的回调函数
       */
    </script>
  </head>
  <body></body>
</html>
```

### 封装函数步骤

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script>
      // 封装自己的 Ajax 函数
      /**
       * 参数1：{string}    method  请求方法
       * 参数2：{string}    url     请求地址
       * 参数3：{Object}    params  请求参数
       * 参数4：{function}  done    请求完成后执行的回调函数
       */

      function ajax(method, url, params, done) {
        // 统一将方法中的字母转大写，便于后面判断
        method = method.toUpperCase();
        // 书写 IE 6 的兼容
        var xhr = window.XMLHttpRequest
          ? new XMLHttpRequest()
          : new ActiveXObject("Microsoft.XMLHTTP");
        // 将对象格式的参数转为 urlencoded的格式
        var pairs = [];
        for (var k in params) {
          pairs.push(k + "=" + params[k]);
        }
        var str = pairs.join("&");
        // 判断是否是 get 方法，需要更改 url 的值
        if (method === "GET") {
          url += "?" + str;
        }
        // 创建打开一个连接
        xhr.open(method, url);
        var data = null;
        // 如果是 post 方法，需要设置请求头，还有请求体
        if (method === "POST") {
          xhr.setRequestHeader(
            "Content-Type",
            "application/x-www-form-urlencoded"
          );
          data = str;
        }
        xhr.send(data);
        // 执行回调函数
        xhr.onreadystatechange = function() {
          if (this.readyState !== 4) return;
          // 执行外部传进来的回调函数即可
          // 需要用到响应体
          done(JSON.parse(this.responseText));
        };
      }
    </script>
  </head>
  <body></body>
</html>
```

### 检测 Ajax 函数

- 提取出来，制作单独文件 ajax.js

```js
// 封装自己的 Ajax 函数
/**
 * 参数1：{string}    method  请求方法
 * 参数2：{string}    url     请求地址
 * 参数3：{Object}    params  请求参数
 * 参数4：{function}  done    请求完成后执行的回调函数
 */

function ajax(method, url, params, done) {
  // 统一将方法中的字母转大写，便于后面判断
  method = method.toUpperCase();
  // 书写 IE 6 的兼容
  var xhr = window.XMLHttpRequest
    ? new XMLHttpRequest()
    : new ActiveXObject("Microsoft.XMLHTTP");
  // 将对象格式的参数转为 urlencoded的格式
  var pairs = [];
  for (var k in params) {
    pairs.push(k + "=" + params[k]);
  }
  var str = pairs.join("&");
  // 判断是否是 get 方法，需要更改 url 的值
  if (method === "GET") {
    url += "?" + str;
  }
  // 创建打开一个连接
  xhr.open(method, url);
  var data = null;
  // 如果是 post 方法，需要设置请求头，还有请求体
  if (method === "POST") {
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    data = str;
  }
  xhr.send(data);
  // 执行回调函数
  xhr.onreadystatechange = function() {
    if (this.readyState !== 4) return;
    // 执行外部传进来的回调函数即可
    // 需要用到响应体
    done(JSON.parse(this.responseText));
  };
}
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="../02-06-01-Ajax 基础/ajax.js"></script>
    <script>
      // 调用函数
      ajax("GET", "http://localhost:3000/users", { id: 1 }, function(data) {
        console.log(data);
      });
      ajax(
        "POST",
        "http://localhost:3000/users",
        { name: "john", age: 19, class: 2 },
        function(data) {
          console.log(data);
        }
      );
    </script>
  </head>
  <body></body>
</html>
```
