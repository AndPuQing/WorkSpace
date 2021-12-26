---
title: 队列构建与应用
---

## 队列

<p align=center>
<img src='https://oi-wiki.org/ds/images/queue.svg'>
</p>

队列（queue）是一种具有[先进入队列的元素一定先出队列]性质的表。由于该性质，队列也被称为先进先出（first in first out）表，简称FIFO表。

下面简单使用`C`语义构建队列结构

### 数据结构定义

```c
#include <stdio.h>

/*此处是顺序队列数据结构定义*/
typedef int DataType;
struct seqQueue
{
   int MAXNUM;
   int front,rear;
   DataType *element;
};
typedef struct seqQueue *PseqQueue;
```

### 队列的创建

```c
//创建一个空的顺序队列，能存放的最大元素个数为 m
PseqQueue createNullQueue_seq(int m)
{
  //若非法，则返回NULL 
  if(m<=0)
    return NULL;
  PseqQueue new_node=(void*)malloc(sizeof(struct seqQueue));
  new_node->MAXNUM=m;
  new_node->front=new_node->rear=0;
  new_node->element=(void*)malloc(sizeof(DataType)*m);
  return new_node;
}
```

### 判空
```c
//判断顺序（环形）队列是否为空，若为空，返回值为1，否则返回值为0,若队列不存在，则返回-1
int isNullQueue_seq(PseqQueue Q)
{ 
  if(Q==NULL)
    return -1;
  return Q->front==Q->rear?1:0;
}
```

### 判满
```c
//判断环形队列是否已满，若已满，返回值为1，否则返回值为0
int isFullQueue_seq(PseqQueue Q)
{
  return (Q->rear+1)%Q->MAXNUM == Q->front?1:0;
}
```

::: tip 提示
注意这里是对最大值取余，是循环队列
:::

```c
//在环形队列中插入数据元素x，若插入不成功，返回0；插入成功返回值为1
int enQueue_seq(PseqQueue Q ,DataType x)
{
  if(!isFullQueue_seq(Q)){
    Q->element[Q->rear]=x;
    Q->rear++;
    return 1;
  }
  return 0;
}
```

### 删除元素
```c
//出队并返回删除元素，若队列为空，则返回-1
DataType delQueue_seq(PseqQueue Q)
{
    if(Q->element==NULL)
      return -1;
    Q->front++;
    return Q->element[Q->front-1];
}
```

### 取首元素
```c
//第六关
DataType front_seq(PseqQueue Q)
{// 取队首元素返回，若队列为空，则返回-1
    if(isNullQueue_seq(Q))
      return -1;
    return Q->element[Q->front];
}
```

```c
//销毁顺序队列，释放队列所占存储空间
int destroyQueue_seq(PseqQueue Q)
{
    //返回值为销毁的栈中现有数据元素的个数，若待销毁的线性表不存在，则返回0
    if(Q==NULL)
      return 0;
    int output=Q->rear-Q->front;
    free(Q->element);
    free(Q);
    return output;
}
```


## 队列的使用

队列十分适合等待等问题，这里有一道银行处理的问题


>银行业务队列简单模拟
>设某银行有A、B两个业务窗口，且处理业务的速度不一样，其中A窗口处理速度是B窗口的2倍 —— 即当A窗口每处理完2个顾客时，B窗口处理完1个顾客。给定到达银行的顾客序列，请按业务完成的顺序输出顾客序列。假定不考虑顾客先后到达的时间间隔，并且当不同窗口同时处理完2个顾客时，A窗口顾客优先输出。

**输入格式:**

输入为一行正整数，其中第1个数字$N(≤1000)$为顾客总数，后面跟着N位顾客的编号。编号为奇数的顾客需要到A窗口办理业务，为偶数的顾客则去B窗口。数字间以空格分隔。

**输出格式:**

按业务处理完成的顺序输出顾客的编号。数字间以空格分隔，但最后一个编号后不能有多余的空格。

### 思路

考虑使用一个队列求解，但是一个队列无法表达不同窗口受理速度的问题。所以需要用两个表

一个队列A储存奇数的编号，一个队列B储存偶数的编号。首先将输入的编号表从左到右进行读取,按照奇偶分配A、B队列

然后按照A队列两个，B队列一个的顺序进行输出。