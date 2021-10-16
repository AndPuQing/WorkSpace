---
title: 条件概率
---

## 条件概率的定义

&emsp;&emsp;设$A,B$是两个事件，且$P(A)>0$，则
$$
P(B\mid A)=\frac{P(AB)}{P(A)}
$$
&emsp;&emsp;为事件$A$发生的条件下，求事件$B$的概率

::: tip

这里对$P(B\mid A)$的理解是$P(B)$的概率是对于样本空间$S$而言的，而计算$P(B\mid A)$时，局限于$A$事件发生的范围考察的事件$B$发生的概率

:::

**条件概率的性质**

&emsp;&emsp;设$A_{1},A_{2},\cdots,A_{n}$互不相容，则
$$
P(A_{1}\cup\cdots\cup A_{n}\mid A)=P(A_{1}\mid A)+\cdots+P(A_{n}\mid A).
$$
证明：
$$
\begin{aligned}
P(A_{1}\cup\cdots\cup A_{n}\mid A)&=\frac{P((A_{1}\cup\cdots\cup A_{n}) \cap A)}{P(A)}\\
&=\frac{P((A_{1}\cap A)\cup\cdots \cup(A_{n}\cap A))}{P(A)}\\
&=\frac{P(A_{1}\cap A)+\cdots +P(A_{n}\cap A)}{P(A)}\\
&= P(A_{1}\mid A)+\cdots+P(A_{n}\mid A).\\
&Q.E.D.
\end{aligned}
$$

## 乘法公式

&emsp;&emsp;由我们上面得到的条件概率公式立即就可以得到

$$
P(AB)=P(A)P(B\mid A)\quad (P(A)>0)
$$
&emsp;&emsp;注意到$P(AB)=P(BA)$由对称性可知道
$$
P(AB)=P(B)P(A\mid B)\quad (P(A)>0)
$$
&emsp;&emsp;以上两个式子都是乘法公式，可以计算两个事件同时发生的概率

> **例题**：一袋中装$10$个球，其中$3$个黑球，$7$个白球，先后两次从中随意各取一球（不返回），求两次取到的均为黑球的概率

可以用前面的古典概型求解，设$A$为题目所求事件
$$
P(A)=\frac{C_{3}^{2}}{C_{10}^{2}}=\frac{1}{15}
$$
若用条件公式设$A_{i},i=1,\cdots,n$为第$n$次取到黑球的概率，则
$$
P(A_{1})=\frac{3}{10},P(A_{2}\mid A_{1})=\frac{2}{9}
$$
其中$P(A_{2}\mid A_{1})$为已知第一次取到黑球，第二次还是黑球的概率
$$
P(A_{1}A_{2})=P(A_{2}\mid A_{1})P(A_{1})=\frac{1}{15}
$$
当然可以推广到$n$个事件
$$
P(A_{1}A_{2}\cdots A_{n})=P(A_{1})P(A_{2}\mid A_{1})P(A_{3}\mid A_{1}A_{2})\cdots P(A_{n}\mid A_{1}A_{2}\cdots A_{n-1})
$$
**证明**：

先把前$n-1$个事件作为一个整体
$$
P(A_{1}A_{2}\cdots A_{n})=P(A_{1}A_{2}\cdots A_{n-1})P(A_{n}\mid A_{1}A_{2}\cdots A_{n-1})
$$
然后$P(A_{1}A_{2}\cdots A_{n-1})$又可以视为求事件积，这样递推就可以推出上面式子。

## 全概率公式

![](https://pic4.zhimg.com/80/v2-4f8cd1ba68f66a3ccdc53f38e11d6e5b_720w.jpg)

圈起来的部分是$A$事件，则$A$事件可以由如下几个事件得到
$$
P(A)=P(AB_{1})+P(AB_{2})+P(AB_{3})+P(AB_{4})+P(AB_{5})
$$
再根据乘法公式得到
$$
P(AB_{1})=P(A)P(B_{1}\mid A)=P(B)P(A\mid B_{1})
$$
所以
$$
\begin{aligned}
P(A)&=P(AB_{1})+P(AB_{2})+P(AB_{3})+P(AB_{4})+P(AB_{5})\\
&=P(B_{1})P(A\mid B_{1})+P(B_{2})P(A\mid B_{2})+P(B_{3})P(A\mid B_{3})\\
&+P(B_{4})P(A\mid B_{4})+P(B_{5})P(A\mid B_{5})+P(B_{6})P(A\mid B_{6})\\
&=\sum_{i=1}^{n}P(B_{i})P(A\mid B_{i})
\end{aligned}
$$
特殊的若$B_{i}$是对立事件，则变为
$$
P(A)=P(B)P(A\mid B)+P(\bar{B})P(A\mid \bar{B})
$$
:::tip

这个公式还是挺好理解的，$P(B_{i})P(A\mid B_{i})$，其实就是换算为对于总体样本空间的概率

:::

> **全概率公式的意义**：事件$A$的发生是全部引起$A$发生的概率的总和，即为全概率公式。因此可以形象的把全概率看成是“**由原因推结果**”公式，每个原因对结果的发生有一定作用。

## 贝叶斯公式

上面的全概率公式描述了一个事件的概率可以由一系列的“小事件”组成。那我们可以由一事件发生的概率求得其因素发生的概率的吗
$$
P(B\mid A)=\frac{P(AB)}{P(A)}=\frac{P(BA)}{P(A)}=\frac{P(B)P(A\mid B)}{\sum_{j=1}^{n}P(B_{i})P(A\mid B_{j})}
$$
emmm,可能跳的有点快，$P(BA)=P(B)P(A\mid B)$由乘法公式得到，下面的由全概率得到。

所以
$$
P(B_{i}\mid A)=\frac{P(B_{i})P(A\mid B_{i})}{\sum_{j=1}^{n}P(B_{i})P(A\mid B_{j})}\quad(i=1,2,3,\cdots,n)
$$
若固定下面的$P(A)$不展开，则
$$
P(B_{i}\mid A)=\frac{P(B_{i})P(A\mid B_{i})}{P(A)}
$$
$P(B_{i}\mid A)$可以视为$P(B_{i})P(A\mid B_{i})$在$P(A)$中的权重

::: tip
**贝叶斯公式的意义**：在事件$A$已经发生的条件下，贝叶斯公式可以来寻找导致$A$发生各种原因的$B_{i}$的概率。
:::



> **例题**：设机器调整得良好时，产品的合格率是$95\%$，而当机器发生某种故障时，其合格率为$50\%$。设机器调整良好的概率为$90\%$，已知某日生产的第一件产品是合格品，求机器调整良好的概率。

因已知结果产品合格，其实就是求原因的概率

设$A$为“产品合格”，$B$表示“机器调整良好”，则
$$
\begin{aligned}
P(B)=90\%\quad P(\bar{B})=1-90\%=10\%\\
P(A\mid B)=95\% \quad P(A\mid \bar{B})=50\%
\end{aligned}
$$
欲求$P(B\mid A)$，
$$
P(B\mid A)=\frac{P(BA)}{P(A)}=\frac{P(B)P(A\mid B)}{P(A)}=\frac{P(B)P(A\mid B)}{P(B)P(A\mid B)+P(\bar{B})P(A\mid \bar{B})}\approx 0.945
$$
经过这个题，发现重要的是学会描述事件，然后判断题目所给事件的构成。

学到贝叶斯公式不得不说先验概率与后验概率

在上一题中机器调整良好的概率$P(B)=0.9$是由以往的数据分析得到的，称为**先验概率**

而条件概率$P(B\mid A)=0.945$是在得到产品合格后再重新加以修正的概率，称为**后验概率**

