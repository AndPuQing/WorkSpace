---
title: 杨辉三角
---

&emsp;&emsp;杨辉三角，是二项式系数在三角形中的一种几何排列，中国南宋数学家杨辉 1261 年所著的《详解九章算法》一书中出现。

&emsp;&emsp;简单来说就是这样一个三角形：

<div align=center>
<img src="https://bkimg.cdn.bcebos.com/pic/023b5bb5c9ea15cef847a88cbb003af33b87b28e?x-bce-process=image/resize,m_lfit,w_220,h_220,limit_1/format,f_auto" style="width:50%" />
</div>

## 代码实现

### 第一种实现

&emsp;&emsp;根据性质，每行行首是$1$，每行行尾也是$1$，除此之外其余数都为其上一列的数加上上一列数的前一个数。

&emsp;&emsp;所以可以写出程序

### 第二种实现

&emsp;&emsp;上面说了杨辉三角其实是一个二项式系数的排列，所以可以用二项式系数的排列来表示。

&emsp;&emsp;即第$n$行的第$k$个数为：

$$C_{n}^{k}=\frac{n\times (n-1)\times (n-2)\times \cdots \times (n-k+1)}{1\times 2\times 3\times \cdots \times k}=\frac{n}{1}\times \frac{n-1}{2}\cdots \frac{n-k+1}{k}$$
