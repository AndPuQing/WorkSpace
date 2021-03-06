---
title: 二叉树
---

&emsp;&emsp;首先是二叉树的结构问题

> **二叉树**是$n(n\ge 0)$个结点的有限集合，该集合或者为空集（称为空二叉树），或者由一个根结点和两棵互不相交的、分别称为根结点的左子树和右子树组成。

<div align=center>
<img src="https://ss.im5i.com/2021/10/19/r7cel.png" style="width:60%;" />
</div>

&emsp;&emsp;如上图是一个常见的二叉树的结构图

## 二叉树的若干名词与属性

### 结点的度

<div align=center>
<img src="https://ss.im5i.com/2021/10/19/r7Ev7.png" style="width:60%;" />
</div>

&emsp;&emsp;结点拥有的子树目称为结点的**度**

### 结点的关系

&emsp;&emsp;结点子树的根结点为该结点的**孩子结点**。相应该结点称为孩子结点的**双亲结点**。

&emsp;&emsp;上图中，A为B的双亲结点，B为A的孩子结点。

&emsp;&emsp;同一个双亲结点的孩子结点之间互称**兄弟结点**。

&emsp;&emsp;上图中，结点B与结点C互为兄弟结点。

### 结点层次

&emsp;&emsp;从根开始定义起，根为第零层，根的孩子为第一层，以此类推。

<div align=center>
<img src="https://ss.im5i.com/2021/10/19/r7UU2.png" style="width:60%;" />
</div>

::: warning
这图有点问题，可能不同教程定义不同吧。
:::

### 性质

**性质1**&emsp;在二叉树的第i层上最多有$2^{i}$个结点 。$(i\ge 0)$

:::tip
通过归纳法，我们知道第$0$层最多有$1$个结点，第$1$层最多有$2^{1}$个结点，依次下去第$n$层便有$2^{n}$个结点。
:::

---

**性质2**&emsp;二叉树中如果深度（高度）为$k$,那么最多有$2^{k+1}-1$个结点。$(k\ge 0)$

::: tip
根据上面的关系，第$k$层最多有结点$2^{k}$，则只需要累加前$k$层即可，即
$$
M=\sum_{i=0}^{k}m_{i}=\sum_{i=0}^{k}2^{i}=2^{k+1}-1
$$
:::

---

**性质3**&emsp;对于任何一颗非空的二叉树，如果叶结点个数为$n_{0}$，度数为$2$的结点个数为$n_{2}$，则有$n_{0}=n_{2}+1$。

::: tip
证明方法：设一颗非空的二叉树中有$n$个结点，度为$1$的结点的个数为$n_{1}$，因为二叉树中的度均不大于$2$，所以

$$
n=n_{0}+n_{1}+n_{2}
$$

在二叉树中，除根结点以外，其余的结点都有并且仅有一个前驱（即从父结点指向的边）。假设边的总数为$B$。则

$$
B=n-1
$$

而边都是二叉树中度为$1,2$的结点产生的，所以

$$
B=n_{1}+2\times n_{2}
$$

综合上述式子，可得

$$
n_{0}=n_{2}+1
$$
:::

---

**性质4**&emsp;在完全二叉树中，具有$n$个结点的完全二叉树的深度（高度）为$\left \lfloor \log_{2}n \right \rfloor$，其中$\left \lfloor  \right \rfloor$是向下取整符号。

::: tip
证明：根据**性质2**和完全二叉树的定义可知

$$
2^{k}-1<n\le 2^{k+1}-1
$$

> 左边$2^{k}-1<n$，是根据完全二叉树除最后一层的结点以外的结点的度都是$2$，而来，第$k-1$层的结点数为$2^{k}-1$，而设为是$k$层的二叉树，所以是大于$2^{k}-1$，而右边$n\le 2^{k+1}-1$是根据高度为$k$的二叉树最多有$2^{k+1}-1$个结点而来。

即
$$
2^{k}\le n<2^{k+1}
$$

对不等式两边取对数有

$$
k\le \log_{2}n < k+1
$$

由于$k$是整数，所以$k$一定是不大于$\log_{2}n$的最大整数，记为$\left \lfloor \log_{2}n \right \rfloor$。
:::

---

**性质5**&emsp;对于具有$n$个结点的完全二叉树，如果按照从上到下和从左往右的顺序对二叉树中的所有结点从$0$开始到$n-1$进行编号，则有如下结论：

1. 如果$i=0$,则是根结点，若$i>0$，则它的父结点的下标为$\left \lfloor (i-1)/2 \right \rfloor$；
2. 如果$2i+1\le n-1$，则下标为$i$的结点的左子结点的下标为$2i+1$，否则下标为$i$的结点没有左子结点。
3. 如果$2i+2\le n-1$，则下标为$i$的结点的右子结点的下标为$2i+2$，否则下标为$i$的结点没有右子结点。

:::tip
这个性质最大的用处就是使用线性表做二叉树。如下图，

<div align=center>
<img src="./algo7/list.jpg" style="width:50%;" />
</div>

就是我们可以通过这个性质在线性表中恢复二叉树的逻辑结构。

推导：

#TODO
:::
### 几种特殊的二叉树
------

#### 满二叉树
------

> 在一棵二叉树中。如果所有分支结点都存在左子树和右子树，并且所有叶子都在同一层上，这样的二叉树称为满二叉树。

**满二叉树的特点**有：

1. 叶子只能出现在最下一层。出现在其它层就不可能达成平衡。
2. 非叶子结点的度一定是2。
3. 在同样深度的二叉树中，满二叉树的结点个数最多，叶子数最多

<div align=center>
<img src="https://ss.im5i.com/2021/10/19/r7biP.png" style="width:50%;" />
</div>

#### 完全二叉树
------
> 对一颗具有n个结点的二叉树按层编号，如果编号为i(1<=i<=n)的结点与同样深度的满二叉树中编号为i的结点在二叉树中位置完全相同，则这棵二叉树称为完全二叉树。

<div align=center>
<img src="https://ss.im5i.com/2021/10/19/r75yj.png" style="width:50%;" />
</div>

**特点**：

1. 叶子结点只能出现在最下层和次下层。

2. 最下层的叶子结点集中在树的左部。

3. 倒数第二层若存在叶子结点，一定在右部连续位置。

4. 如果结点度为1，则该结点只有左孩子，即没有右子树。

5. 同样结点数目的二叉树，完全二叉树深度最小。

::: tip
**注**：满二叉树一定是完全二叉树，但反过来不一定成立。
:::

## 二叉树的遍历

&emsp;&emsp;建议看[二叉树LeetBook](https://leetcode-cn.com/leetbook/read/data-structure-binary-tree/xe17x7/)。比较清楚看到不同的区别。

&emsp;&emsp;若将树抽象为$D,L,R$即根、左子树和右子树。周游遍历即可表述为$DLR,LDR,LRD$中文就是先序遍历，中序遍历，后序遍历。


>一道题：
>
>已知先序周游序列为$A,B,D,E,G,C,F,H,I,J$，对称周游序列为$D,B,G,E,A,H,F,I,J,C$

&emsp;&emsp;求解该题，需要了解二叉树的周游的基本式，先序为$NLR$；对称为$LNR$。所以这里需要用整体思想

例如：

&emsp;&emsp;在先序周游序列中$A$为根，所以在对称周游序列中$D,B,G,E$为左子树，$H,F,I,J,C$为右子树。

&emsp;&emsp;所以可以看为如下树。

<div align=center>
<img src="./algo7/center.png" style="width:60%;" />
</div>


&emsp;&emsp;然后又将左边视为一个树，右边视为一个树，继续如上操作即可

