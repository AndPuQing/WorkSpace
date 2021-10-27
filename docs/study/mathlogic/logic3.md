---
title: 译码器
---

&emsp;&emsp;译码器是编码器的相反操作，即将二进制的编码翻译成单独的一个变量（形象化体现在输出变量的下标等于二进制对应的十进制）。

### 二极管与门阵列组成的3-8译码器

<div align=center>
<img src="./logic3/bin38.jpg" style="width:40%" />
</div>

如图是使用二极管与门阵列组成的$3-8$译码器，其逻辑图很好懂。

<div align=center>
<img src="./logic3/bin38zhen.jpg" style="width:80%" />
</div>

如图是上述译码器的真值表，其与编码器的输出不一样的是高电平有效(注意观察芯片上端口名有无$'$符号)

其具体实现这里要解释一下，因为在后面有用。

<div align=center>
<img src="./logic3/bin38logic.jpg" style="width:60%" />
</div>

如图是一个用二极管**与门**阵列组成的$3$线-$8$线译码器，但是实现逻辑还是挺朴素的。

首先需要补充一个知识：

<div align=center>
<img src="./logic3/test.svg" style="width:50%" />
</div>

如上图是该结构核心原理，

注意到译码器的逻辑函数可以写为
$$
\begin{aligned}
Y_{0}=A_{2}'A_{1}'A_{0}'\\
Y_{1}=A_{2}'A_{1}'A_{0}\\
\vdots \qquad \quad  \\
Y_{7}=A_{2}A_{1}A_{0}
\end{aligned}
$$
