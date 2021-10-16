---
title: 古典概型与几何概型
---

## 古典概型

&emsp;&emsp;古典概型是等可能概型的，对于公理化描述为

&emsp;&emsp;对于每一个基本事件$A_{i}=\{\omega_{i}\}(i=1,2,\cdots,n)$
$$
P(A_{1})=P(A_{2})=\cdots=P(A_{n})
$$

​		由概率的公理化定义可知
$$
1=P(S)=P(\bigcup_{i=1}^{n}A_{i})=\sum_{i=1}^{n}P(A_{i})=nP(A_{i})
$$
​		于是
$$
P(A_{i})=\frac{1}{n},i=1,2,\cdots,n
$$
​		那在古典概型的事件的概率，设事件$A$包含其样本的空间$S$中$k$个基本事件，即
$$
A=A_{i1}\cup A_{i2}\cup \cdots\cup A_{ik}
$$
​		则事件$A$发生的概率
$$
P(A)=P(\bigcup_{j=1}^{k}A_{ij})=\frac{k}{n}
$$
**排列公式**

​		从$n$个不同元素中任取$k$个不同的排列总数为
$$
A_{n}^{k}=n(n-1)(n-2)\cdots(n-k+1)=\frac{n!}{(n-k)!}
$$
**组合公式**

​		从$n$个不同元素中任取$k$个不同的组合总数为
$$
C_{n}^{k}=\frac{A_{n}^{k}}{k!}=\frac{n!}{(n-k)!k!}
$$
​		其关系是
$$
\begin{aligned}
C_{n}^{k}=\frac{A_{n}^{k}}{k!},\\
A_{n}^{k}=C_{n}^{k}k!.
\end{aligned}
$$

## 几何概型

​		几何概型将讨论范围拓展至一线段、平面区域、空间等结果

