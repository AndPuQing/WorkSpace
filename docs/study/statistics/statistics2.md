---
title: 条件概率
---

## 条件概率的定义

​		设$A,B$是两个事件，且$P(A)>0$，则
$$
P(B\mid A)=\frac{P(AB)}{P(A)}
$$
​		为事件$A$发生的条件下，求事件$B$的概率

::: tip

这里对$P(B\mid A)$的理解是$P(B)$的概率是对于样本空间$S$而言的，而计算$P(B\mid A)$时，局限于$A$事件发生的范围考察的事件$B$发生的概率

:::

**条件概率的性质**

​		设$A_{1},A_{2},\cdots,A_{n}$互不相容，则
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

