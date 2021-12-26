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

1. **求分布函数$F_{Z}(z)$**

$$
F_{Z}(z)=P\{Z\le z\}=P\{g(X,Y)\le z\}=P\{(X,Y)\in D_{Z}\}=\iint_{D_{Z}}f(x,y)dxdy.
$$

其中，$D_{Z}=\{(x,y)\mid g(x,y)\le z\}$

2. **求其概率密度函数$f_{Z}(z)$，对几乎所有的$z$，有**

$$
f_{Z}(z)=F'_{Z}(z).
$$

> 其关键是将$Z=g(X,Y)$转化为$(X,Y)$在一定范围取值的形式，从而根据已知$(X,Y)$的分布求出$Z=g(X,Y)$的分布。

几种特殊函数的分布：

### **Z=X+Y型**

&emsp;&emsp;设$(X,Y)$是二维连续型随机变量，其概率密度函数为$f(x,y)$，求$Z=X+Y$的概率密度函数$f_{Z}(z)$

&emsp;&emsp;设$Z$的分布函数为$F_{Z}(z)$，则
$$
F_{Z}(z)=P\{Z\le z\}=P\{X+Y\le z\}=\iint_{D}f(x,y)dxdy.
$$
&emsp;&emsp;这里的积分区域$D=\{(x,y)\mid x+y\le z\}$是直线$x+y=z$左下方的区域
$$
F_{Z}(z)=\iint_{x+y\le z}f(x,y)dxdy.
$$
&emsp;&emsp;累次积分，得
$$
F_{Z}(z)=\int_{-\infty}^{+\infty}\left[\int_{-\infty}^{z-y}f(x,y)dx \right]dy.
$$
&emsp;&emsp;固定$z$和$y$，对括号内的积分变量代换，令$x=u-y$，得
$$
F_{Z}(z)=\int_{-\infty}^{+\infty}\left[\int_{-\infty}^{z}f(u-y,y)du \right]dy=\int_{-\infty}^{z}\left[\int_{-\infty}^{\infty}f(u-y,y)dy\right]du.
$$
&emsp;&emsp;由概率密度与分布函数的关系，即得$Z=X+Y$的概率密度
$$
f_{Z}(z)=F'_{Z}(z)=\int_{-\infty}^{+\infty}f(z-y,y)dy,
$$
&emsp;&emsp;由对称性
$$
f_{Z}(z)=F'_{Z}(z)=\int_{-\infty}^{+\infty}f(x,z-x)dx,
$$
&emsp;&emsp;上两个式子即是**两个随机变量和的概率密度的一般公式**

::: tip

特别的：若$X$和$Y$是独立的，设$(X,Y)$关于$X,Y$的边缘密度函数分别为$f_{X}(x),f_{Y}(y)$，则上述两式化为
$$
\begin{aligned}
f_{Z}(z)=\int_{-\infty}^{+\infty}f_{X}(z-y)f_{Y}(y)dy,\\
f_{Z}(z)=\int_{-\infty}^{+\infty}f_{X}(x)f_{Y}(z-x)dx
\end{aligned}
$$
而以上两个式子被称为**卷积公式**

:::

### M=max{X,Y}及N=min{X,Y}的分布

&emsp;&emsp;设随机变量$X,Y$相互独立，其分布函数分别为$F_{X}(x)$和$F_{Y}(y)$，由于$M=\max\{X,Y\}$，则有
$$
\begin{aligned}
F_{M}(z)=P\{M\le z\}&=P\{X\le z,Y\le z\}\\
&=P\{X\le z\}P\{Y\le z\}=F_{X}(z)F_{Y}(z);
\end{aligned}
$$
&emsp;&emsp;类似的，可以得到$N=\min\{X,Y\}$的分布函数
$$
\begin{aligned}
F_{N}(z)=P\{N\le z\}&=1-P\{N>z\}=1-P\{X>z,Y>z\}\\
&=1-P\{X>z\}P\{Y>z\}=1-[1-F_{X}(z)][1-F_{Y}(z)].
\end{aligned}
$$

> 这里特殊说明，关于离散型的最大值最小值书上没写，所以这里简单推导一下离散型的最大值最小值的概率分布。
>
> 首先设有$X,Y$的联合分布$P\{X=x_{i},Y=y_{i}\}=p_{ij},i,j=1,2,\cdots$
>
> 对于$Z=\max(X,Y)$
> $$
> \begin{aligned}
> \because \{Z=z\}&=\{\max{(X,Y)}=z\}\\
> &=\{Y\le X,X=z\}\cup\{X<Y,Y=z\}\\
> &=\{X=x_{i},Y=y_{j},y_{j}\le x_{i}=z\}\cup\{X=x_{i},Y=y_{j},x_{i}< y_{j}=z\}\\
> & and \quad \{X=x_{i},Y=y_{j},y_{j}\le x_{i}=z\}\cap\{X=x_{i},Y=y_{j},x_{i}< y_{j}=z\}=\phi\\
> 
> \end{aligned}
> $$
>
> $$
> \begin{aligned}
> \therefore P\{Z=z\}&=P\{X=x_{i},Y=y_{j},y_{j}\le x_{i}=z\}+P\{X=x_{i},Y=y_{j},x_{i}< y_{j}=z\}\\
> &=\sum_{y_{j}\le x_{i}=z}p_{ij}+\sum_{x_{i}<y_{j}=z}p_{ij}
> \end{aligned}
> $$
>
> 可以简单李姐为：**固定行（列），对列（行）取小求和**
>
> 对于$U=\min(X,Y)$，类似得
> $$
> P\{U=u\}=\sum_{y_{j}\ge x_{i}=u}p_{ij}+\sum_{x_{i}>y_{j}=u}p_{ij}
> $$
> 即：**固定行（列），对列（行）取大求和**

&emsp;&emsp;这样可能比较难懂，举个栗子

<div align=center>
<img src="https://ss.im5i.com/2021/10/29/BYdSt.png" style="width:20%" />
</div>

<div align=center>
<img src="https://ss.im5i.com/2021/10/29/BYfuq.png" style="width:60%" />
</div>

&emsp;&emsp;简单来说，就是看若是$\max$则看等于$Z$的行或者列，将该列或者行小于等于的概率求和；若是$\min$则看等于$Z$的行或者列，将该列或者行大于等于的概率求和。（去除重复项）

