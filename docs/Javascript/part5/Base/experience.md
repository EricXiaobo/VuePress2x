# jQuery 体验

jQuery 确实极大的简化了 DOM 操作，让编程变得更加简单高效。

<img src="/images/Javascript/JQ/experience.gif" style="width: 50%; display:inline-block; margin: 0 ;">

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      * {
        margin: 0;
        padding: 0;
      }
      .box {
        width: 100px;
        height: 100px;
        background-color: pink;
      }
    </style>
  </head>
  <body>
    <div class="box" id="box"></div>
    <script src="js/jquery-1.12.4.min.js"></script>
    <script>
      // 获取元素
      // var box = document.getElementById("#box")
      // var box = document.getElementsByTagName("div")[0]

      // JQ 中获取元素
      // $(".box")
      // $("#box")

      // 获取 css 样式，并设置
      // console.log($("#box").css("width"))
      // $(".box").css("width",200)

      // 事件简化
      // $(".box").click(function () {
      //   $(this).css("background-color","skyblue")
      // })

      // 运动方法
      $(".box").animate({ width: 500 }, 1000);
    </script>
  </body>
</html>
```

<!-- ## jQuery 常见操作

### $() 方法

### jQuery 应用

### 插件的使用

### SUMMARY -->
