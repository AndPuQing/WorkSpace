---
title: 链表栈的构建与应用
---

## 栈

栈是一个挺常见的数据结构，特点是“先入后出，后入先出”。在前面的文章已经实现了栈的结构，这篇主要是使用栈完成中后缀与后后缀的转化。

### 前缀表达式（波兰表达式）

前缀表达式又称为波兰式，前缀表达式的运算符位于操作数之前

举例：$(3+4)*5-6$ 对应的波兰式是$-*+3\ 4\ 5\ 6$

### 中缀表达式

就是常见的运算表达式，人最熟悉中缀表达式，但计算机最难处理中缀表达式，所以往往将中缀表达式改为后缀表达式

例如$(3+4)*5-6$就是一个中缀表达式

### 后缀表达式（逆波兰表达式）

与前缀表达式类似，只是运算符位于操作数之后

例如$(3+4)*5-6$的逆波兰表达式是$3\ 4\ +\ 5\ *\ 6\ -$

::: tip 提示
将中缀表达式转化为后缀表达式是为了让计算机便于计算，毕竟从左向右或从右向左扫描即可。
:::

## 中缀向后缀的转化

转化过程中遵循以下规则

从左到右遍历中缀表达式的每个数字和符号，若是数字，则输出，成为后缀表达式的一部分，若是符号：

1. 若是左括号，直接压入栈；

2. 若是右括号，则从符号栈弹栈输出，直至弹出左括号（左右括号不输出）

3. 如果遇到任何其他的操作符，从栈中弹出元素直到遇到更低优先级的元素(或者为空)为止。弹出这些元素后，再将遇到的操作符压入到栈中。

4. 如果我们读到了中缀表达式输入的末尾，且栈中不为空则弹出栈中所有元素，并依次输出。

## 代码部分

首先需要读取一个字符串，从左至右扫描，同时创建一个链表栈用于储存符号。

```c
Stack s = createStack();
int i = 0;
while (expression[i] != '\0')
{
    //TODO
    i++;
}
```

::: tip 提示
下面为`//TODO`内容
:::

这样我们便可以依次读取字符串并对每个字符分别处理了。

如果是数字，直接打印
```c
if (expression[i] >= '0' && expression[i] <= '9')
{
    printf("%c", expression[i]);
}
```

如果是`(`压入栈
```c
else if (expression[i] == '(') 
{
    push(expression[i], s);
}
```

如果是`)`将`(`之前的出栈，并将`(`出栈
```c
else if (expression[i] == ')') 
{
    while (top(s) != '(')
    {
        printf(" %c", pop(s));
    }
    pop(s);
}
```

如果是运算符号
```c
else
{
    //将大于等于符号的运算符出栈：退出条件为空栈或者遇到(
    while (top(s) != '(' && s->next != NULL)
    {
        //如果输入是+ -，则出栈
        if (expression[i] == '+' || expression[i] == '-')
        {
            printf("%c ", pop(s));
            continue;
        }
        //如果是乘除，则需要去除加减的情况
        if ((expression[i] == '*' || expression[i] == '/') && top(s) != '-' && top(s) != '+')
        {
            printf("%c ", pop(s));
        }
        else //倘若是乘除但是栈顶又是加减，这时也是退出条件
        {
            break;
        }
    }
    push(expression[i], s); //将符号压入栈顶
}
```

将输入字符串结束，栈中还有数据，输出栈中所有符号

```c
while (s->next != NULL)
{
    printf(" %c", pop(s));
}
```

完整的代码

```c
#include <stdio.h>
#include <stdlib.h>

typedef char DataType;

//采用链式栈
struct node
{
    DataType element;  //数据元素
    struct node *next; //指向下一个数据元素的指针
};

typedef struct node *PtrToNode;
typedef PtrToNode Stack;

/*
   函数名：isEmpty 
   函数功能：判定栈是否为空 
   函数参数：栈头结点指针 
   返回值：若栈为空，则返回1，否则返回0
*/
int isEmpty(Stack s)
{
    return s->next == NULL;
}

/*
   函数名：createStack 
   函数功能：创建一个空栈，实际上只需要初始化栈头结点 
   函数参数：无 
   返回值：栈头结点指针 
*/
Stack createStack(void)
{
    Stack s;
    s = (Stack)malloc(sizeof(struct node));
    s->next = NULL;
    s->element = 0;
    return s;
}

/*
   函数名：push 
   函数功能：向栈中压人一个数据元素值为x 
   函数参数：待压栈的数据元素，栈头结点指针 
   返回值：无
*/
void push(DataType x, Stack s)
{
    //表头作为栈顶
    PtrToNode temp;
    temp = (Stack)malloc(sizeof(struct node));
    temp->element = x;
    temp->next = s->next;
    s->next = temp;
}

/*
   函数名：pop 
   函数功能：弹出栈顶元素并返回元素值 
   函数参数：栈头结点指针 
   返回值：栈顶元素的值 
*/
DataType pop(Stack s)
{
    PtrToNode temp;
    int t;
    if (isEmpty(s) == 0)
    {
        temp = s->next;
        t = temp->element;
        s->next = temp->next;
        free(temp);
        return t;
    }
}

DataType top(Stack s)
{
    if (isEmpty(s) == 0)
    {
        return s->next->element;
    }
}

/*
   函数名：inToPost
   函数功能：将中缀表达式转换为后缀表达式输出 
   函数参数：中缀表达式，放在字符数组中 
   返回值：无 
*/
void inToPost(char *expression)
{
    //在此处填写代码，完成中缀表达式转换为后缀表达式并输出
    /**********  Begin  **********/
    Stack s = createStack();
    int i = 0;
    int forwardisNumber = 0;
    while (expression[i] != '\0')
    {
        //如果是数字，直接打印
        if (expression[i] >= '0' && expression[i] <= '9')
        {
            printf("%c", expression[i]);
            forwardisNumber = 1;
        }
        else if (expression[i] == '(') //如果是(压入栈
        {
            push(expression[i], s);
        }
        else if (expression[i] == ')') //如果是)将(之前的出栈
        {
            while (top(s) != '(')
            {
                printf(" %c", pop(s));
            }
            pop(s);
        }
        else
        {
            //如果是符号
            if (forwardisNumber == 1)
            {
                forwardisNumber = 0;
                printf(" ");
            }
            while (top(s) != '(' && s->next != NULL) //出栈(之前的
            {
                if (expression[i] == '+' || expression[i] == '-')
                {
                    printf("%c ", pop(s));
                    continue;
                }
                if ((expression[i] == '*' || expression[i] == '/') && top(s) != '-' && top(s) != '+')
                {
                    printf("%c ", pop(s));
                }
                else
                {
                    break;
                }
            }
            push(expression[i], s);
        }
        i++;
    }

    while (s->next != NULL)
    {
        printf(" %c", pop(s));
    }

    /**********  End  **********/
}

int main()
{
    inToPost("52+3*21-32/2");
}

```