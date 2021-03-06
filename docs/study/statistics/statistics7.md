---
title: 随机变量函数的分布
---

> 我们在讨论随机变量时，更多的是研究**随机变量函数**的随机性特性，即由自变量$X$的统计规律出发研究$Y$的统计规律性

&emsp;&emsp;即存在一个函数$g(x)$，使得随机变量$X$，$Y$满足：
$$
Y=g(X)
$$
&emsp;&emsp;即称随机变量$Y$是随机变量$X$的函数。

## 离散型随机变量函数的分布

&emsp;&emsp;设离散型随机变量$X$的概率分布为
$$
P\{X=x_{i}\}=p_{i},\quad i=1,2,\cdots,
$$
&emsp;&emsp;显而易见的$Y=g(X)$依然还是离散型随机变量。

&emsp;&emsp;关键是如何由$X$的概率分布出发推导出$Y$的概率分布。一般方法是根据自变量$X$所有可能取得的值计算得到$Y$所有可能的值，然后合并相同的值。

&emsp;&emsp;来个例子吧！

>设随机变量$X$具有以下分布律，试求$Y=(X-1)^{2}$的分布律。
>
>|    X    |  -1  |  0   |  1   |  2   |
>| :-----: | :--: | :--: | :--: | :--: |
>| $p_{i}$ | 0.2  | 0.3  | 0.1  | 0.4  |

&emsp;&emsp;即可写出如下分布律

|    Y    |  4   |  1   |  0   |  1   |
| :-----: | :--: | :--: | :--: | :--: |
| $p_{i}$ | 0.2  | 0.3  | 0.1  | 0.4  |

&emsp;&emsp;合并相同的元素
|    Y    |  4   |  1   |  0   |
| :-----: | :--: | :--: | :--: |
| $p_{i}$ | 0.2  | 0.7  | 0.1  |

## 连续型随机变量函数的分布

&emsp;&emsp;一般情况下连续随机变量的函数不一定是连续随机变量，但是我们默认讨论的是连续型随机变量的函数还是连续型随机变量的情形。并可以用如下方式求得：
$$
\begin{aligned}
F_{Y}(y)=P\{Y\le y\}=&P\{g(X)\le y\}=P\{X\in C_{y}\},\\
C_{y}&=\{x\mid g(x)\le y\}.
\end{aligned}
$$
&emsp;&emsp;上面公式还是挺好理解的，就是将所有能满足$g(X)\le y$的$x$放入集合$C_{y}$中，然后对集合$C_{y}$概率，具体表现为用$F_{X}(x)$表达，或对概率密度函数求积分
$$
F_{Y}(y)=P\{X\in C_{y}\}=\int_{C_{y}}f_{X}(x)dx,
$$
&emsp;&emsp;进而可通过$Y$的分布函数$F_{Y}(y)$，求出$Y$的密度函数。

&emsp;&emsp;来个例题：

>设随机变量$X\sim N(0,1),Y=e^{X}$，求$Y$的密度函数。

&emsp;&emsp;可得到
$$
F_{Y}(y)=P\{Y\le y\}=P\{e^{X}\le y\}=P\{X\le \ln y\}
$$
&emsp;&emsp;已知$X$的概率密度函数$\displaystyle f_{X}(x)=\frac{1}{\sqrt{2\pi}\sigma}e^{-\frac{(x-\mu)^{2}}{2\sigma^{2}}}$

&emsp;&emsp;则求
$$
\begin{aligned}
P\{X\le \ln y\}&=\int_{-\infty}^{\ln y}\frac{1}{\sqrt{2\pi}\sigma}e^{-\frac{(x-\mu)^{2}}{2\sigma^{2}}}dx\\
&=\frac{1}{\sqrt{2\pi}}\int_{-\infty}^{\ln y}e^{-\frac{x^{2}}{2}}dx\\
\end{aligned}
$$
&emsp;&emsp;而我们知道$f_{Y}(y)=F'_{Y}(y)$

&emsp;&emsp;所以
$$
f_{Y}(y)=F'_{Y}(y)=\frac{1}{\sqrt{2\pi}}e^{-\frac{\ln^{2}{y}}{2}}\frac{1}{y}
$$
::: warning

注意，$P\{e^{X}\le y\}\to P\{x\le \ln{y}\}$时$y>0$

:::

&emsp;&emsp;所以总体来说
$$
f_{Y}(y)=\begin{cases}
\frac{1}{\sqrt{2\pi}y}e^{-\frac{\ln^{2}{y}}{2}},\quad y>0\\
0,\quad y\le 0.
\end{cases}
$$
&emsp;&emsp;通常称上面式子$Y$服从对数正态分布，也是一种常用的寿命分布。

> 再来个例题：设$X\sim f_{X}(x)=\begin{cases}x/8,\quad 0<x<4\\0,\quad else\end{cases}$，求$Y=2X+8$的概率密度。

&emsp;&emsp;设$Y$的分布函数为$F_{Y}(y)$，有如下关系
$$
\begin{aligned}
F_{Y}(y)=P\{Y\le y\}=P\{2X+8\le y\}=P\{X\le \frac{y-8}{2}\}=F_{X}(\frac{y-8}{2})\\
\end{aligned}
$$
&emsp;&emsp;所以概率密度函数为
$$
f_{Y}(y)=F'_{Y}(y)=\begin{cases}
\frac{y-8}{32},\quad 8<y<16\\
0,\quad else.
\end{cases}
$$
::: tip

这里直接使用分布函数是十分方便的，上面一道题正态分布和分布函数是未定的，所以求积分，而这里给了分布函数可以直接求。

:::

&emsp;&emsp;同时关于分布函数有如下定理。

> 设随机变量$X$具有概率密度$f_{X}(x),x\in (-\infty,+\infty)$，又设$y=g(x)$处处可导且恒有$g'(x)>0\;or \; g'(x)<0$。则$Y=g(X)$是一个连续型随机变量，其概率密度函数为
> $$
> f_{Y}(y)=\begin{cases}
> f_{X}[h(y)]|h'(y)|,\quad \alpha<y<\beta\\
> 0,\quad else.
> \end{cases}
> $$
> 其中$x=h(y)$是$y=g(x)$的反函数，且
> $$
> \alpha =\min(g(-\infty),g(+\infty)),\quad \beta=\max{(g(-\infty),g(+\infty))}.
> $$

&emsp;&emsp;关于该式的证明这里不证明，是比较好证明。这里主要是说明如何用。

>例题：设随机变量$X\sim N(\mu,\sigma^{2})$，证明$X$的线性函数
>$$
>Y=aX+b\quad (a\ne 0)
>$$
>也服从正态分布

&emsp;&emsp;因为正态分布的概率密度函数是连续的（指没有分段），所以直接套用公式即可$h(y)=\frac{Y-b}{a}$以及$h'(y)=\frac{1}{a}$

$$
f_{Y}(y)=\frac{1}{\sqrt{2\pi}\sigma}e^{-\frac{(\frac{Y-b}{a}-u)^2}{2\sigma^{2}}}\frac{1}{|a|}=\frac{1}{|a|\sigma\sqrt{2\pi}}e^{-\frac{[y-(b+a\mu)]^{2}}{2(a\sigma)^2}},\quad -\infty<y<+\infty
$$
&emsp;&emsp;即有$Y=aX+b\sim N(a\mu+b,(a\sigma)^{2})$

&emsp;&emsp;下面来个不连续的，即分布函数是分段的

> 设随机变量$X$在$(0,1)$上服从均匀分布 ，求$Y=-2\ln X$

&emsp;&emsp;因为$X$在$(0,1)$是均匀分布，即在其他区间是为零的，所以只考察区间$(0,1)$即可。

$h(y)=e^{-\frac{Y}{2}}$，$h'(y)=-\frac{1}{2}e^{-\frac{Y}{2}}$
$$
f_{Y}(y)=
\begin{cases}
\frac{1}{2}e^{-\frac{y}{2}},\quad y>0\\
0,\quad else.
\end{cases}
$$
::: warning 警告

1. 这里特别要注意$g(x)$的单调性，即要验证$g'(x)$是否恒为零。
2. 以及注意$h'(x)$，要取绝对值

:::

