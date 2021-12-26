---
title: 数值比较器
---

## 一位数值比较器

<div align=center>
<img src="./logic6/then.jpg" style="width:80%" />
</div>

​		如图就是一个比较器，输出为高电平为有效

## 74HC85

<div align=center>
<img src="./logic6/74hc85.jpg" style="width:70%" />
</div>

多位比较器，其中$I.$为来自低位的比较结果。

这里一个考点是如何扩展的问题

<div align=center>
<img src="https://ss.im5i.com/2021/10/31/Bo9zZ.png" style="width:80%" />
</div>

::: tip

对$I.$是低位的理解问题，一开始以为是先考虑低位的结果，原来是若“前位”的比较结果是相等，才会去参考低位($I.$)的结果，然后再输出。

:::

