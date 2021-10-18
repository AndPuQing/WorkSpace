---
title: 随机事件及其概率
---

**随机试验**的特征：

1. 可重复性
2. 可观察性
3. 不确定性

&emsp;&emsp;把**随机试验**的每一种结果称为一个**样本点**，它们全体称为一个**样本空间**，记为$S(\Omega)$。

## 事件关系与表述

1. $A\subset B$，这称事件$B$包含事件$A$，具体含义为:若事件$A$发生则必然导致$B$事件发生
2. $A= B$，这称事件$A$等于事件$B$，具体含义为:若$A$发生必然$B$发生，且$B$发生$A$必然发生。
3. $A\cup B$称为事件$A$与事件$B$的和，含义为当且仅当事件$A,B$其中一个发生时，事件$A\cup B$发生，也写做$A+B$。
4. 事件$A\cap B$称为事件的积，其含义是当且仅当事件$A,B$同时发生时，事件$A\cap$发生，也写作$AB$。
5. 事件$A-B$称为事件$A$与$B$的差，含义是当事件$A$发生，且事件$B$不发生，事件$A-B$发生。
6. 若$A\cap B=\phi$，则称事件$A$与事件$B$是互不相容的，或者是互斥的，其含义是$A,B$不能同时发生
7. 若$A\cup B=S$且$A\cap B=\phi$，称事件$A$与事件$B$互为对立事件。其含义是：对于一次实验，事件有且仅有一个发生，若$A$的对立事件记为$\bar{A}$。于是，$\bar{A}=S-A$。

::: tip
对立一定互斥，互斥不一定对立。
:::

## 事件运算及公式推导

1. $A-B=A\bar{B}=A-AB$

该公式从含义上理解是当事件$A$发生，且事件$B$不发生，事件$A-B$发生。就是$A\bar{B}$，同时反过来就是$A$发生，减去同时发生的部分。

2. 交换律，$A\cap B=B\cap A,A\cup B=B\cup A$

3. 结合律，$(A\cap B)\cap C=A\cap (B\cap C),(A\cup B)\cup C=A\cup (B\cup C)$

4. 分配律，$A \cap(B \cup C)=(A \cap B) \cup(A \cap C), A \cup(B \cap C)=(A \cup B) \cap(A \cup C)$

5. 对偶律，$\overline{A \cup B}=\bar{A} \cap \bar{B}, \overline{A \cap b}=\bar{A} \cup \bar{B}$

## 练习题

**题 1**，若 $A, B$ 互斥，且 $A = B$，则 $A =$ ？

答：互斥想到$AB=\phi$,则$AA=\phi$,所以$A=\phi$.

**题 2**，设随机事件 $A$ 与 $B$ 是对立事件，证 $\bar{A}$ 与 $\bar{B}$ 仍为对立事件。

答：

$$
\begin{aligned}
AB=\phi\\
(AB)'=S\\
A'+B'=S\\
(A+B)=S\\
(A+B)'=\phi\\
A'B'=\phi
\end{aligned}
$$

所以$A',B'$对立。

**题 3**，设 $A, B$ 为两事件，则 $(A \cup B)(\bar{A} \cup B)(A \cup \bar{B})(\bar{A} \cup \bar{B})=$?

&emsp;&emsp;要我说这题直接卡诺图化简就可以了，但是不行啊，老老实实写方程吧

$$
\begin{aligned}
(A \cup B)(\bar{A} \cup B)&=(A\cap \bar{A})\cup B\\
&=0\cup B\\
&= B
\end{aligned}
$$

$$
\begin{aligned}
(A \cup \bar{B})(\bar{A} \cup \bar{B})&=(A\cap \bar{A})\cup \bar{B}\\
&=0\cup \bar{B}\\
&=\bar{B}
\end{aligned}
$$

&emsp;&emsp;所以最后为$\phi$

::: warning
注意这里使用的分配律：类似于$a(b+c)=ab+ac$,找相同的
:::

&emsp;&emsp;设随机事件 A，B 满足 $AB=\bar{A}\bar{B}$ , 则$A\cup B$ =?

&emsp;&emsp;两边都乘以$B$
$$
\begin{aligned}
AB(B)=\bar{A}\bar{B}B\\
AB(B)=\phi
\end{aligned}
$$
::: tip

这里特别注意不要直接将$B$合入$AB$，因为这里需要分情况讨论

:::

&emsp;&emsp;若$B=\phi$，则$AB$也是空集，若$AB=\phi$，$B$不为$\phi$

&emsp;&emsp;无论上面那种情况$AB=\phi$

&emsp;&emsp;又用对偶律
$$
\begin{aligned}
A'B'=\phi\\
(A'B')'=S\\
A+B=S
\end{aligned}
$$
&emsp;&emsp;所以$A\cup B=\Omega$



## 随机事件的概率

> 若在相同条件下进行$n$次试验，其中事件$A$发生的次数为$r_{n}(A)$，则称$\displaystyle f_{n}(A)=\frac{r_{n}(A)}{n}$，为事件$A$发生的概率。

**概率的基本条件**

1. 非负性：对每个事件$A$，有$P(A)\ge 0$
2. 完备性：$P(S)=1$
3. **可列可加性**：设$A_{1},A_{2},\cdots$是两两互不相容的事件，则有

$$
P\left (\bigcup_{i=1}^{\infty}A_{i} \right)=\sum_{i=1}^{\infty}P(A_{i})
$$

**概率的性质**

1. $P(\phi)=0$

2. (有限可加)设$A_{1},A_{2},\cdots,A_{n}$是两两互不相容的事件，则有

$$
P(A_{1}\cup A_{2}\cup \cdots \cup A_{n} )=P(A_{1})+P(A_{2})+\cdots+P(A_{n})
$$

&emsp;&emsp;这里的疑惑是可列可加性和有限可加的关系参见维基百科([Sigma-additive set function - Wikipedia](https://en.wikipedia.org/wiki/Sigma-additive_set_function))

3. $P(A-B)=P(A)-P(AB)$

::: tip 

别记错，并且当$B\subset A$时，$P(AB)=P(B)$，所以$P(A-B)=P(A)-P(B)$

:::

4. 对于任意两个事件$A,B$则有

$$
P(A\cup B)=P(A)+P(B)-P(AB)
$$

&emsp;&emsp;并且可以进行推广，当有三个事件时
$$
P(A\cup B\cup C)=P(A)+P(B)+P(C)-P(AB)-P(BC)-P(AC)+P(ABC)
$$
&emsp;&emsp;推广到$n$个事件
$$
\begin{aligned}
P(\bigcup_{i=1}^{n}A_{i})=\sum_{i=1}^{n}P(A_{i})-\sum_{i<j}^{n}P(A_{i}A_{j})+\sum_{i<j<k}^{n}P(A_{i}A_{j}P_{k})+\cdots\\
+(-1)^{n-1}P(A_{1}A_{2}\cdots A_{n})
\end{aligned}
$$

## 练习集

**题 1**：设$P(A)=0.1,P(A\cup B)=0.3$，且$A$与$B$互不相容，求$P(B)$
$$
\begin{aligned}
P(A\cup B)&=P(A)+P(B)-P(AB)\\
&=0.1+P(B)-0\\
P(B)=0.2
\end{aligned}
$$
::: tip

注意$A$与$B$互不相容条件

:::

**题 2**：设事件$A,B,C$两两互不相容，$P(A)=0.2,P(B)=0.3,P(C)=0.4$，求$P[(A\cup B)-C]$
$$
\begin{aligned}
P[(A\cup B)-C]&=P[(A\cap\bar{C})\cup (B\cap \bar{C})]\\
&=[P(A)-P(AC)]+[P(B)-P(BC)]
\end{aligned}
$$
&emsp;&emsp;又两两互不相容，所以$P[(A\cup B)-C]=P(A)+P(B)$

