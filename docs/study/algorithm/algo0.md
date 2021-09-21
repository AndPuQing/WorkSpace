---
title: 顺序线性表实现
---


## 顺序表结构体与创建函数

```c
#include <stdio.h>
#include <stdlib.h>

/*此处是顺序线性表数据结构定义*/
typedef int DataType;
/*结构体模板*/
struct seqList
{                      //有3个数据成员
    int MAXNUM;        //用于记录顺序线性表中能存放的最大元素个数的 整型 MAXNUM
    int curNum;        //用于存放顺序线性表中数据元素的个数 整型 curNum
    DataType *element; //用于存放顺序线性表数据元素的连续空间的起始地址
};

typedef struct seqList *PseqList;

//创建一个空的顺序线性表，能存放的最大元素个数为 m
PseqList createNullList_seq(int m)
{ 
    //若m=0，则返回NULL
    if (m > 0)
    {
        //初始化一个顺序表并指向结构体
        PseqList L = (void *)malloc(sizeof(struct seqList));
        L->MAXNUM = m;
        L->element = (DataType *)malloc(sizeof(DataType) * m);
        L->curNum = 0;
        return L;
    }
    else
    {
        return NULL;
    }
}
```

## 顺序线性表判满

```c
int isFullList_seq(PseqList L)
{
    //判断顺序线性表是否已满，若已满，返回值为1，否则返回值为0
    return L->curNum == L->MAXNUM ? 1 : 0;
}
```

::: tip
这里特别说明，curNum为顺序表中的元素个数，从0开始（即无元素）。
:::

## 顺序线性表插入元素

三种插入，区别如下图

![](./algo0/insert.png#w90)

### 在下标位置插入
```c
// 在线性表L中下标为p的位置插入数据元素x，若下标p非法或线性表已满无法插入数据，返回0；插入成功返回值为1
int insertP_seq(PseqList L, int p, int x)
{ 
    //如果线性表满了， 输出"list is full"的提示
    //如果插入位置非法，需输出提示"position is illegel"
    if (isFullList_seq(L))
    {
        printf("list is full");
        return 0;
    }
    if (p < 0 || p > L->curNum)
    {
        printf("position is illegel");
        return 0;
    }
    for (int i = L->curNum; i > p; i--)
    {
        //后移
        L->element[i] = L->element[i - 1];
    }
    L->element[p] = x;
    L->curNum++;
}
```

::: tip 
:bulb:这里是下标p是从0开始的下标，

且要对索引p后的数据后移一位
:::

即如下关系：

![索引图](./algo0/index_p.png#w60)


### 在下标位置前插入
```c
int insertPre_seq(PseqList L, int p, int x)
{
    // 在线性表L中下标为p的位置的前面插入数据元素x，若下标p非法或线性表已满无法插入数据，返回0；插入成功返回值为1
    //提示：直接调用insertP函数实现即可
    insertP_seq(L, p - 1, x);
}
```

### 在下标位置后插入

```c
int insertPost_seq(PseqList L, int p, int x)
{
    // 在线性表L中下标为p的位置的后面插入数据元素x，若下标p非法或线性表已满无法插入数据，返回0；插入成功返回值为1
    //提示：直接调用insertP函数实现即可
    insertP_seq(L, p + 1, x);
}
```

## 打印线性表
```c
void printList_seq(PseqList L)
{ //逐个输出线性表的元素，相邻的两个数据元素之间以一个空格为分隔符隔开
    for (int i = 0; i < L->curNum; i++)
    {
        printf("%d ", L->element[i]);
    }
}
```

## 销毁线性表

```c
//返回值为销毁的线性表中现有数据元素的个数，若待销毁的线性表不存在，则返回0
int destroyList_seq(PseqList L)
{
    int len=0;
    if(!L){
        return 0;
    }
    len=L->curNum;
    if(!L->curNum){
        return 0;
    }else{
        free(L->element);
        free(L);
        return len;
    }
}
```

## 查询数据位置

```c
int locate_seq(PseqList L, int x)
{ //在顺序表L中查找给定值x首次出现的位置，若不存在给定值，则返回-1
    for(int i=0;i<L->curNum;i++){
        if(L->element[i]==x){
            return i;
        }
    }
    return -1;
}

DataType locatePos_seq(PseqList L, int pos)
{ // 在顺序表L中查找指定位置pos处的数据元素，若位置非法，则返回第0个数据元素
    if(pos < 0 || pos >= L->curNum){
        return L->element[0];
    }else{
        return L->element[pos];
    }
}
```

## 删除指定位置元素

```c
int deletePos_seq(PseqList L, int pos)
{ //在顺序表L中删除与下标pos处的数据元素，若pos非法，则返回-1；否则返回1
    if(pos<0||pos>L->curNum){
        return -1;
    }else{
        for(int i = pos;i < L->curNum;i++){
            L->element[i]=L->element[i+1];
        }
        L->curNum-=1;
        return 1;
    }

}

int delete_seq(PseqList L, int x)
{ //在顺序表L中删除与参数x值相同的数据元素，返回删除数据元素的个数
    //可以使用之前已完成的操作
    int num=0;
    for(int i=0;i<L->curNum;i++){
        if(L->element[i]==x){
            deletePos_seq(L,i);
            i--;
            num++;
        }
    }
    return num;
}
```

## 替换元素

```c
void replace_seq(PseqList L, int x, int y)
{ //将顺序表L中值为x的数据元素替换为y
    for(int i=0;i<L->curNum;i++){
        if(L->element[i]==x){
            L->element[i]=y;
        }
    }
}
```

## 移除重复元素

```c
void delDuplicate_seq(PseqList L)
{ //移除线性表中的所有重复元素；不要使用额外的数组空间，必须在原地修改输入数组 并在使用 O(1) 额外空间的条件下完成
    //使用常规删除即可，已修改测试用例
    // for(int i=0;i<L->curNum;i++){
    //     printf("%d ",L->element[i]);
    // }
    for(int i=0;i<L->curNum;i++){
        for(int j=i+1;j<L->curNum;j++){
            if(L->element[i]==L->element[j]){
                delete_seq(L,L->element[i]);
            }
        }
    }
}
```