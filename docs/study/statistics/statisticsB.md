---
title: 数学期望
---

## 离散型随机变量的数学期望

> 定义：设离散型随机变量$X$的概率分布为
> $$
> P\{X=x_{i}\}=p_{i},\;i=1,2,\cdots,
> $$
> 若级数$\displaystyle \sum_{i=1}^{\infty}x_{i}p_{i}$绝对收敛，则定义$X$的数学期望（又称均值）为
> $$
> E(X)=\sum_{i=1}^{\infty}x_{i}p_{i}.
> $$
> 就是计算每个可能的取值用概率求和。

## 连续型随机变量的数学期望

> 类似于离散型的数学期望，通过规定，若$X$是连续型随机变量，其密度函数为$f(x)$，如果$\displaystyle\int_{-\infty}^{+\infty}xf(x)dx$绝对收敛，定义**数学期望**为
> $$
> E(X)=\int_{-\infty}^{+\infty}xf(x)dx.
> $$

## 随机变量函数的数学期望

&emsp;&emsp;下面不加证明的给出随机变量函数的数学期望。

&emsp;&emsp;设$X$是一个随机变量，$Y=g(X)$，且$E(Y)$存在，于是

### 离散型随机变量

&emsp;&emsp;若$X$为离散型随机变量，其概率分布为
$$
P\{X=x_{i}\}=p_{i},i=1,2,\cdots,
$$

则期望为

$$
E(Y)=E[g(X)]=\sum_{i=1}^{\infty}g(x_{i})p_{i}.
$$

### 连续型随机变量

&emsp;&emsp;若$X$为连续型随机变量，其概率密度函数为$f(x)$，则$Y$的数学期望为
$$
E(Y)=E[g(X)]=\int_{-\infty}^{+\infty}g(x)f(x)dx
$$


&emsp;&emsp;该性质对于求期望是十分方便的，因为不需要知道$g(X)$的分布。

---

&emsp;&emsp;以上式子可以推广到二维变量以上。

&emsp;&emsp;设$(X,Y)$是二维随机变量，$Z=g(X,Y)$，且$E(Z)$存在。于是，

&emsp;&emsp;若$(X,Y)$为离散型随机变量，其概率分布为

$$
P\{X=x_{i},Y=y_{j}\}=p_{ij}(i,j=1,2,\cdots),
$$

&emsp;&emsp;则$Z$的数学期望为

$$
E(Z)=E[g(X,Y)]=\sum_{j=1}^{\infty}\sum_{i=1}^{\infty}g(x_{i},y_{j})p_{ij};
$$

&emsp;&emsp;若$(X,Y)$为连续型随机变量，其概率密度为$f(x,y)$则$Z$的数学期望为

$$
E(Z)=E[g(X,Y)]=\int_{-\infty}^{+\infty}\int_{-\infty}^{+\infty}g(x_{i},y_{j})p_{ij};
$$

## 数学期望的性质

&emsp;&emsp;**性质1**   若$C$是常数，则$E(C)=C$.

&emsp;&emsp;**性质2**   若$C$是常数，则$E(CX)=CE(X)$.

&emsp;&emsp;**性质3**   $E(X_{1}+X_{2})=E(X_{1})+E(X_{2})$.

&emsp;&emsp;**性质4**   设$X,Y$相互独立，则$E(XY)=E(X)E(Y)$.

