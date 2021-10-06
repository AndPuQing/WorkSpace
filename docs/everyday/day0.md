---
title: 修改markdown图片大小
---

VuePress是将Markdowm转变为html渲染的，而有的图片显示太宽，所以需要一种方式不改变原图而改变图片大小的方法。

## CSS attribute selector

可以通过CSS attribute selector实现，

```css
img[src*="#width-full"] {
 width: 100%;
}
```

Markdowm写法

```markdown
![trump.jpg](https://view.moezx.cc/images/2018/05/27/trump.jpg#width-full)
```

通过预设很多尺寸即可

```css
img[src*="#w100"] {
  width: 100%;
}

img[src*="#w80"] {
  width: 80%;
}

img[src*="#w60"] {
  width: 60%;
}

img[src*="#w50"] {
  width: 50%;
}

img[src*="#w30"] {
  width: 30%;
}

img[src*="#w20"] {
  width: 20%;
}

img[src*="#w10"] {
  width: 10%;
}

img[src*="#w5"] {
  width: 5%;
}

img[src*="#w2"] {
  width: 2%;
}

img[src*="#w1"] {
  width: 1%;
}

img[src*="#w0.1"] {
  width: 0.1%;
}
```
