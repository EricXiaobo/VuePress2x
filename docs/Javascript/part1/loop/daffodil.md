# 水仙花数案例

水仙花数是一种特殊的三位数，它的特点就是，每个数位的三次方和，等于它本身。
请编程找出来。

```js
// 穷举思想，列举所有的三位数
for (var i = 100; i <= 999; i++) {
  // i 的三个数位的三次方的和，等于 i 自己
  // 找到个位、十位、百位的数字
  var ge = i % 10,
    shi = parseInt(i / 10) % 10,
    bai = parseInt(i / 100);
  // 计算三个数位的三次方的和
  var sum = ge * ge * ge + shi * shi * shi + bai * bai * bai;
  // 判断 sum 是否等于 i 自己，如果是，就是水仙花数，需要输出
  if (sum == i) {
    console.log(i);
  }
}
```

```js
//输出
//153
//370
//371
//407
```