---
title: 冒泡排序
---

## 简介

&emsp;&emsp;冒泡排序（英语：Bubble sort）是一种简单的排序算法。由于在算法的执行过程中，较小的元素像是气泡般慢慢「浮」到数列的顶端，故叫做冒泡排序。

## 工作原理

&emsp;&emsp;它的工作原理是每次检查相邻两个元素，如果前面的元素与后面的元素满足给定的排序条件，就将相邻两个元素交换。当没有相邻的元素需要交换时，排序就完成了。

&emsp;&emsp;经过$i$次扫描后，数列的末尾$i$项必然是最大的$i$项，因此冒泡排序最多需要扫描$n-1$遍数组就能完成排序。

## 性质

### 稳定性

&emsp;&emsp;冒泡排序是一种稳定性的排序算法

### 时间复杂度

&emsp;&emsp;在序列完全有序时，冒泡排序只需遍历一遍数组，不用执行任何交换操作，时间复杂度为$O(n)$。

&emsp;&emsp;在最坏情况下，冒泡排序要执行$\frac{(n-1)n}{2}$次交换操作，时间复杂度为$O(n^{2})$。

&emsp;&emsp;冒泡排序的平均时间复杂度为$O(n^2)$

## 代码实现

### C

容易实现版

```C
// 输出数组
void print(int data[], int n)
{
    for (int i = 0; i < n; i++)
        printf("%d ", data[i]);
    printf("\n");
}

// 冒泡排序
void bubbleSort(int data[], int n)
{
    for (int i = 1; i <= n-1; i++)
    {
        for (int j = 0; j <= n - i - 1; j++)
        {
            if (data[j] > data[j + 1])
            {
                int temp = data[j];
                data[j] = data[j + 1];
                data[j + 1] = temp;
            }
        }
        print(data, n);
    }
}
```

&emsp;&emsp;上面$i,\;j$的范围来源于，第一趟遍历$n-1$次，从$1$开始，而对于$j$来说，需要$n-i-1$次，$n-1$是数组的下标区间，$-i$是对于已经排好的最大区间不用排了。

&emsp;&emsp;下面的写法使用了$flag$，可以早停，因为若某一遍历没有发生交换，则说明已经排好了，直接退出。

```C
// 输出数组元素
void print(int data[], int n)
{
    for (int i = 0; i < n; i++)
        printf("%d ", data[i]);
    printf("\n");
}

// 冒泡排序
void bubbleSort(int data[], int n)
{
    int flag = 1;
    while (flag)
    {
        flag = 0;
        for (int i = 0; i < n; ++i)
        {
            if (data[i] > data[i + 1])
            {
                flag = 1;
                int t = data[i];
                data[i] = data[i + 1];
                data[i + 1] = t;
            }
        }
    }
    print(data, n);
}
```
