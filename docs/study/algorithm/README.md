---
title: OJ刷题纪
---


::: tip 
记录写Oj过程中的小tips.
:::

## 数据输入

部分题目会要求多行输入，那可以采用如下方法：

### 有多个case输入，一行一个结果

例：

```c
int main()
{
    int a,b;
    while( scanf("%d %d", &a, &b) != EOF )   //输入直到文件结尾
    {
        printf( "%d\n" , a+b );   //一行一个结果
    }
    return 0;
}
```

### 先有输入case数，再依次输入每个case

例：

```c
#include

int main()
{   
    int n,a,b;
    scanf("%d", &n);   //输入的case数
    while(n--)     //控制输入
    {   
        scanf("%d %d", &a , &b );
        printf( "%d\n" , a+b );     //一行一个结果
    }
    return 0;
}
```

一般来说上面就够了，参考[C语言多行输入问题集锦](https://blog.csdn.net/fgszdgbzdb/article/details/84879365)。

## 多维动态数组

很多情况需要我们使用多维动态数组，动态多维数组有很多种方式，这里讲三种。

### 利用二级指针申请一个二维数组

```c
#include <stdio.h>
#include <stdlib.h>

int main()
{
    int **a; //用二级指针动态申请二维数组
    int m, n;
    printf("请输入行数\n");
    scanf("%d", &m);
    printf("请输入列数\n");
    scanf("%d", &n);
    a = (int **)malloc(sizeof(int *) * m);
    for (int i = 0; i < m; i++)
        a[i] = (int *)malloc(sizeof(int) * n);
    for (int i = 0; i < m; i++)
    {
        for (int j = 0; j < n; j++)
        {
            printf("%p\n", &a[i][j]); //输出每个元素地址，每行的列与列之间的地址时连续的，行与行之间的地址不连续
        }
    }
    for (int i = 0; i < m; i++)
        free(a[i]);
    free(a);
    return 0;
}
```

其道理是先创建指向一个指针的数组二级指针，再分别让指针指向数组开辟空间。

### 用数组指针形式申请一个二维数组

```c
#include <stdio.h>
#include <stdlib.h>

int main()
{
    int i, j;
    //申请一个3行2列的整型数组
    int(*a)[2] = (int(*)[2])malloc(sizeof(int) * 3 * 2);
    for (i = 0; i < 3; i++)
    {
        for (j = 0; j < 2; j++)
        {
            printf("%p\n", &a[i][j]); //输出数组每个元素地址，每个元素的地址是连续的
        }
    }
    free(a);
    return 0;
}
```

这里要谈一下经典的指针数组与数组指针的区别：

::: tip 注意！
**指针数组**：首先它是一个数组，数组的元素都是指针，数组占多少个字节由数组本身的大小决定，每一个元素都是一个指针，在32 位系统下任何类型的指针永远是占4 个字节。它是“储存指针的数组”的简称。

**数组指针**：首先它是一个指针，它指向一个数组。在32 位系统下任何类型的指针永远是占4 个字节，至于它指向的数组占多少字节，不知道，具体要看数组大小。它是“指向数组的指针”的简称。
:::

### 模拟二维数组

```c
#include <stdio.h>
#include <stdlib.h>
 
 
int main()
{
    int nrows,ncolumns;
    int *Array;
    int i,j;
    printf("please input nrows&ncolumns:\n");
    scanf("%d%d",&nrows,&ncolumns);
    Array=(int *)malloc(nrows*ncolumns*sizeof(int));   //申请内存空间
    for(i=0;i<nrows;i++)
    {
        for(j=0;j<ncolumns;j++)
        {
            Array[i*ncolumns+j]=1;
            printf("%d ",Array[i*ncolumns+j]);   //用Array[i*ncolumns+j] 访问第i,j个成员
        }
        printf("\n");
    }
    free(Array);
    return 0;
}
```
