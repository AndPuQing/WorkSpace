---
title: 切比雪夫不等式的证明
---

> 首先说明该文是从知乎而来，并重述而成
>
> 原文链接[切比雪夫不等式的几何证明](https://www.zhihu.com/question/27821324/answer/69332546)

文中引入了一个指示性函数来进行说明，令$I_{\{A\}}$为事件$A$的指示函数，在事件$A$成立时返回$1$，否则返回$0$，当然这个事件$A$是一种表现形式，如$A=\{X>a\}$时，指示函数的期望可以表示事件发生的概率，即$\mathbb{E}(I_{\{A\}})=\mathbb{P}(A)$.

对于如下事件$\displaystyle I_{\{\mid x-a\mid\ge b\}} \le \frac{(x-a)^{2}}{b^{2}}$，可以画出如下图

![](https://pic1.zhimg.com/80/6694dae6a4c2c4278eb0c2cb78fb87b9_720w.jpg?source=1940ef5c)

对与$I_{\{\mid x-a\mid\ge b\}}$就是下面的直线部分，它的含义是当$\mid x-a\mid\ge b$时为$1$，上述式子是显然成立的。

我们对其两边求期望，即：

$$\mathbb{P}(\mid X-\mu \mid \ge b)\le \frac{\mathrm{Var}(X)}{b^{2}}$$

其中$\mathrm{Var}$是二阶中心距函数，返回方差。具体如下得到

$$\mathrm{Var}(X)=\frac{(x_{1}-a)^{2}+(x_{2}-a)^{2}+\cdots+(x_{n}-a)^{2}}{n}$$

从上面的推导就可以知道，切比雪夫不等式的界非常松弛。

那该不等式的应用就是，**偏离均值的概率越小**。即$b$值越大，右侧越小。
