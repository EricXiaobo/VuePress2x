# 其他方法

## \$.ajaxSetup()

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="js/jquery-1.12.4.min.js"></script>
  <script>
    // ajaxSetup() 方法，设置默认的参数
    $.ajaxSetup({
      url: "http://localhost:3000/users",
      type: "post"
    })
    // 发送 ajax请求
    $.ajax({
      data: {"name": "polly", "age": 17, "class": 4}
    })
    $.ajax({
      data: {"name": "james", "age": 18, "class": 4}
    })
  </script>
</head>
<body>
  
</body>
</html>
```

## 更多Ajax方法请查询手册