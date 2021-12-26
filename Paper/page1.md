---
title: "Training behavior of deep neural network in frequency domain"
---

# Training behavior of deep neural network in frequency domain 论文阅读

> 原文：[1807.01251.pdf (arxiv.org)](https://arxiv.org/pdf/1807.01251.pdf)

&emsp;&emsp;为什么过拟合的深度神经网络（DNNs）在实践中往往具有很好的泛化能力，这一直是个谜。为了寻找潜在的机制，该片文章着重研究了在 DNNs 训练过程中的隐性偏置。在工作中，对于真实的和合成的数据集，文章发现对于相同的网络 DNN 首先快速捕获主要的高频成分，然后相对缓慢的捕获高频成分。并称这种现象为$Frequency\; Principle(F-Principle)$**频率原理**

## Abstract(摘要)

> Why deep neural networks (DNNs) capable of overfitting often generalize well in practice is a mystery. To find a potential mechanism, we focus on the study of implicit biases underlying the training process of DNNs. In this work, for both real and synthetic datasets, we empirically find that a DNN with common settings first quickly captures the dominant low-frequency components, and then relatively slowly captures the high-frequency ones. We call this phenomenon Frequency Principle (F-Principle). The F-Principle can be observed over DNNs of various structures, activation functions, and training algorithms in our experiments. We also illustrate how the F-Principle helps understand the effect of early-stopping as well as the generalization of DNNs. This F-Principle potentially provides insight into a general principle underlying DNN optimization and generalization.

## Introduction(介绍)

&emsp;&emsp;虽然深度神经网络(DNNs)是完全透明的，即每个节点和每个参数的值是容易获取得到的，但是很难解释信息是如何通过 DNNs 处理的。同时，我们可以很容易记录训练期间的 DNNs 参数优化的轨迹，但是对于高度非凸的 DNN 优化问题背后的一般原理是什么仍然不清楚。因此 DNN 经常被批评为“黑匣子”。

​ 这篇文章提出的**F 原理**提供了一个潜在的机制，解释了为什么 DNNs 过拟合了也经常具有良好的泛化能力。对于一个有限的数据集，存在一个有限的频率范围[<sup>1</sup>](#reference)，超过这个范围，信号的信息就会丢失。

## Reference

[1] [blind multiband signal reconstruction: compressed sens- ing for analog signals.](https://sci-hub.se/10.1063/1.4899204)
