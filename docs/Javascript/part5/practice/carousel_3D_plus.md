# 轮播图-3D-升级版

<img src="/images/Javascript/JQ/calculator-plus.gif" style="width: 100%; display:inline-block; margin: 0 ;">

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>轮播图</title>
  <style>
    * {
      margin: 0;
      padding: 0;
    }
    .carousel {
      position: relative;
      width: 600px;
      height: 360px;
      border: 1px solid #ddd;
      margin: 100px auto;
    }
    ul {
      list-style: none;
    }

    .carousel ul li {
      position: absolute;
      top: 0;
      width: 150px;
      height: 360px;
      transform-style: preserve-3d;
      perspective: 50000px;
      transition: all 1s ease 0s;
    }
    /* .carousel ul li:nth-child(1) {
      left: 0;
      transition-delay: 0s;
    }
    .carousel ul li:nth-child(2) {
      left: 150px;
      transition-delay: .1s;
    }
    .carousel ul li:nth-child(3) {
      left: 300px;
      transition-delay: .2s;
    }
    .carousel ul li:nth-child(4) {
      left: 450px;
      transition-delay: .3s;
    } */

    .carousel ul li div {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 360px;
      background-size: 600px 360px;
    }

    .carousel ul li div:nth-child(1) {
      background-image: url(images/pic1.jpg);
      /* transform: translateZ(180deg); */
      transform: rotateX(0deg) translateZ(180px);
    }
    .carousel ul li div:nth-child(2) {
      background-image: url(images/pic2.jpg);
      transform: rotateX(90deg) translateZ(180px);
    }
    .carousel ul li div:nth-child(3) {
      background-image: url(images/pic3.jpg);
      transform: rotateX(180deg) translateZ(180px);
    }
    .carousel ul li div:nth-child(4) {
      background-image: url(images/pic4.jpg);
      transform: rotateX(270deg) translateZ(180px);
    }

    /* 设置每个 li 标签中所有的 div 的背景图片定位 */
    /* .carousel ul li:nth-child(1) div {
      background-position: 0 0;
    }
    .carousel ul li:nth-child(2) div {
      background-position: -150px 0;
    }
    .carousel ul li:nth-child(3) div {
      background-position: -300px 0;
    }
    .carousel ul li:nth-child(4) div {
      background-position: -450px 0;
    } */

    .btn {
      display: block;
      width: 100px;
      height: 50px;
      border: 1px solid #000;
      margin: 0 auto;
    }
  </style>
</head>
<body>

  <div class="carousel">
    <ul>

    </ul>

  </div>
  <input type="button" value="下一张" class="btn">

  <script src="js/jquery-1.12.4.js"></script>
  <script>
    // @todo: 将图片地址写成数组的形式
    // @todo：将图片数量，写成动态的形式

    var carousel = $(".carousel")
    var ul = $('.carousel ul')
    
    var len = 300 // 声明细分的个数（li 标签的数量）
    var duration = 1 // 延迟事件，单位 秒
    var delay = 0.01 // 声明延迟事件
    var width = carousel.width()
    var liWidth = width / len
    // 通过遍历，生成 ul 中的内容
    for (let index = 0; index < len; index++) {
      var li = $("<li><div></div><div></div><div></div><div></div></li>")
      li.css({
        "width": liWidth,
        "left": index * liWidth + "px",
        "transition-delay": index * delay + "s",
        "transition-duration": duration+ 's',
      }).children().css('background-position', - index * liWidth + "px 0")
      ul.append(li)
    }

    var btn = $('.btn')
    var lis = $('.carousel ul li')
    var sem = 0
    // 给事件添加一把锁，用于防抖
    var lock = false

    btn.click(function() {
      // 先判断锁的状态
      if (lock) return
      // 一旦动画开始，就上锁
      lock = true
      sem -= 90

      lis.css({
        "transform": "rotateX("+sem+"deg)"
      })
      // 动画执行完成时，释放锁
      var timeout = (duration + delay * len) * 1000
      setTimeout(function() {
        lock = false
      }, timeout)
    })
  </script>
  
</body>
</html>
```
