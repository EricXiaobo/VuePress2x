# 节点判断方法：三种

## 1.判断有没有子节点,不区分节点类型

### Node.hasChildNodes()

Node.hasChildNodes()：没有参数，返回一个 Boolean 布尔值，来表示该元素是否包含有子节点。

### Node.contains(child)

Node.contains(child)：返回一个 Boolean 布尔值，来表示传入的节点是否为该节点的后代节点。

## 2.判断节点内部第一个子节点是否不为空

## 3.判断子节点的数组对象的长度是否为 0

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="box">
      <p>段落内容 1</p>
      <div>
        <p id="p2">段落内容 2</p>
      </div>
      <p>段落内容 3</p>
      <p>段落内容 4</p>
    </div>
    <div id="demo"></div>
    <script src="common.js"></script>
    <script>
      // 获取元素
      var box = my$("box");
      var p2 = my$("p2");
      var demo = my$("demo");

      // 判断内部有子节点的方法有三种
      // 1.判断有没有子节点,不区分节点类型
      // console.log(box.hasChildNodes());
      // console.log(demo.hasChildNodes());

      // 补充：判断节点内部是否有某个后代节点
      // console.log(box.contains(p2));


      // 2.判断节点内部第一个子节点是否不为空
      // console.log(box.firstChild !== null);
      // console.log(demo.firstChild !== null);


      // 3.判断子节点的数组对象的长度是否为0
      console.log(box.childNodes.length > 0);
      console.log(demo.childNodes.length > 0);
      // 补充：子元素节点是否存在
      console.log(box.children.length > 0);
      console.log(demo.children.length > 0);

    </script>
  </body>
</html>
```
