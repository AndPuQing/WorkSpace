---
title: 事件的独立性
---

## 两个事件的独立性

>若两事件$A,B$满足
>$$
>P(AB)=P(A)P(B)
>$$
>则称$A,B$独立，或称$A,B$相互独立

&emsp;&emsp;关于独立与互斥的关系，下面的一张图能很好的反映其关系。

![](https://pic1.zhimg.com/v2-4a5398b58b525a30c8ce445c8d5a3ede_r.jpg?source=1940ef5c#w40)

:::tip		

概而言之，互斥描述的是二者能不能同时发生，独立描述的是二者同时发生时是否是有关联的

:::

&emsp;&emsp;当然，以上是在$A,B$事件概率不为$0$的前提进行讨论的。若$A,B$有一事件为零概率事件，则有如下结论:

> **零概率事件与任何事件独立，1概率事件与任何事件独立**
>
> 证明：
>
> 设$P(A)=0$，那么对于任何事件$B$，有$A\cap B\le A$，那么$P(AB)\le P(A)$，得到$P(AB)=0$。于是有$P(AB)=P(A)P(B)=0$，即$A,B$独立。$1$概率事件类似。

&emsp;&emsp;既然这里提到零概率事件的问题，这里讨论一下**零概率事件与不可能事件**。

&emsp;&emsp;着**不可能事件的定义**是：若$A=\phi$，则$A$是不可能事件；**零概率事件的定义**是，若$P(A)=0$，则$A$是零概率事件。

&emsp;&emsp;在离散情况下，二者是等价的，但是在连续情况下，零概率事件是有可能发生的，比如$X$服从$(0,1)$上的均匀分布，那么事件$\{X=0.5\}$发生的概率是$0$，但是事件$\{X=0.5\}$是有可能发生的。

## 相关定理

1. 设事件$A,B$相互独立，则事件$A$与$\bar{B}$，$\bar{A}$与$B$，$\bar{A}$与$\bar B$也相互独立

   ​	证明：

   ​	由$A=A(B\cup\bar{B})=AB\cup A\bar{B}$，得

$$
\begin{aligned}
P(A)&=P(AB\cup A\bar{B})=P(AB)+P(A\bar{B})=P(A)P(B)+P(A\bar{B})\\
P(A\bar{B})&=P(A)[1-P(B)]=P(A)P(\bar{B})
\end{aligned}
$$



​		其根本原因是$B,\bar{B}$不独立，$P(B\bar{B})=P(B)P(\bar{B})\neq 0$

## 有限个事件的独立性

​		设$A,B,C$为三个事件，若满足等式
$$
\begin{aligned}
\left\{\begin{matrix}
P(AB)=P(A)P(B) \\
P(AC)=P(A)P(C) \\
P(BC)=P(B)P(C) \\
P(ABC)=P(A)P(B)P(C)
\end{matrix}\right.
\end{aligned}
$$
​		则称事件$A,B,C$相互独立的。

​		对于$n$个事件，可以类似定义，若满足
$$
P(A_{i_{1}}A_{i_{2}}\cdots A_{i_{k}})=P(A_{i_{1}})P(A_{i_{2}})\cdots P(A_{i_{k}})
$$
​		则称事件$A_{1},A_{2},\cdots,A_{n}$相互独立的

