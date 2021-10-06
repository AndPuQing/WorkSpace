---
title: diff
---

算子支持文档：

- paddle.erf

  实现逻辑：利用onnx算子Erf

  版本支持：version 9及以上

- paddle.floor_mod

  实现逻辑：调用elementwise_mod，已支持，仅添加单测

  版本支持：version 10及以上

- paddle.floor

  已支持

- paddle.isinf

  实现逻辑：利用onnx 算子 IsInf

  版本支持：version 10及以上

-  paddle.has_nan

   实现逻辑：先用isnan算子，再将布尔值转化为FLOAT值，最后寻找到最大值进行返回
   
   版本支持：version 9及以上
   
- paddle.isnan(x, name=None)

  实现逻辑：使用isnan算子

  版本支持：version 9及以上

- paddle.less_than(x, y, name=None)

  实现逻辑：使用Less算子

  版本支持：version 7及以上

- paddle.log2(x, name=None)

  实现逻辑：使用Log算子，计算$\frac{lnx}{ln2}$得到$log2$

  版本支持：version 7及以上

- paddle.logical_not(x, out=None, name=None)

  实现逻辑：使用Not算子

  版本支持：version 6及以上

- paddle.logical_or(x, y, out=None, name=None)

  实现逻辑：使用Or算子

  版本支持：version 6及以上

- paddle.logsumexp(x, axis=None, keepdim=False, name=None)

  实现逻辑：使用EXP算子，计算$e^{x}$，再利用Sum算子求和$\sum e^{x}$，最后利用Log算子求$ln\sum e^{x}$

  版本支持：version 6及以上

