---
title: 二维随机变量函数的分布
---

&emsp;&emsp;有时候我们想知道多个随机变量组合得到随机变量的分布，即随机变量$Z$有如下关系式
$$
Z=X+Y
$$
&emsp;&emsp;以及
$$
Z=\max\{X,Y\},Z=\min\{X,Y\}
$$
&emsp;&emsp;其中$X$与$Y$是独立的。

## 离散型随机变量的函数的分布

&emsp;&emsp;设$(X,Y)$是二维随机离散型随机变量，$g(x,y)$是一个二元函数，则$g(X,Y)$作为$(X,Y)$的函数是一个随机变量，如果$(X,Y)$的概率分布为
$$
P\{X=x_{i},Y=y_{j}\}=p_{ij}\quad (i,j=1,2,\cdots)
$$
&emsp;&emsp;设$Z=g(X,Y)$的所有可能的取值为$z_{k},k=1,2,\cdots,$则$Z$的概率分布为
$$
\begin{aligned}
P\{Z=z_{k}\}=P\{g(X,Y)=z_{k}\}&=\sum_{g(x_{i},y_{j})=z_{k}}P\{X=x_{i},Y=y_{j}\} \\
&=\sum_{g(x_{i},y_{j})=z_{k}}p_{ij},k=1,2,\cdots,
\end{aligned}
$$
&emsp;&emsp;例如，若$X,Y$独立的，且
$$
P\{X=k\}=a_{k},\quad P\{Y=k\}=b_{k},\quad k=0,1,2,\cdots,
$$
&emsp;&emsp;则$Z=X+Y$的概率分布为
$$
\begin{aligned}
P\{Z=r\}=P\{X+Y=r\}&=\sum_{i=0}^{r}P\{X=i,Y=r-i\}=\sum_{i=0}^{r}P\{X=i\}P\{Y=r-i\}\\
&=a_{0}b_{r}+a_{1}b_{r-1}+\cdots+a_{r}b_{0},\quad r=0,1,2,\cdots,
\end{aligned}
$$
&emsp;&emsp;即
$$
P\{Z=r\}=\sum_{i=0}^{r}a_{i}b_{r-i}.
$$
上述公式被称为**离散型卷积公式**。

## 连续型随机变量的函数的分布

&emsp;&emsp;设$(X,Y)$是二维连续型随机变量，其概率密度函数为$f(x,y)$，令$g(x,y)$为一个二元函数，则$g(X,Y)$是$(X,Y)$的函数。

&emsp;&emsp;可以用类似与求一元随机变量的函数分布来求$Z=g(X,Y)$的分布。

1. 求分布函数$F_{Z}(z)$

$$
F_{Z}(z)=P\{Z\le z\}=P\{g(X,Y)\le z\}=P\{(X,Y)\in D_{Z}\}=\iint_{D_{Z}}f(x,y)dxdy.
$$

其中，$D_{Z}=\{(x,y)\mid g(x,y)\le z\}$

2. 求其概率密度函数$f_{Z}(z)$，对几乎所有的$z$，有

$$
f_{Z}(z)=F'_{Z}(z).
$$

> 其关键是将$Z=g(X,Y)$转化为$(X,Y)$在一定范围取值的形式，从而根据已知$(X,Y)$的分布求出$Z=g(X,Y)$的分布。

