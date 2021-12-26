---
title: 将字符串原地左右移
---

&emsp;&emsp;今天在写王老师$OJ$的时候，有一道将字符串向左移动 2 位的题目。题意很简单，输入一个字符串和一个向做左移动的位数，如果字符串长度不够，则从头开始移动。

&emsp;&emsp;即

$$\{how,2\}\to \{owh,2\}$$

&emsp;&emsp;我一开始的想法是直接复制新的，然后向原数组赋值，但是这样太粗糙了。

&emsp;&emsp;更好的写法是先构造一个将**头元素**放到**尾部**的函数，向左移动$n$位就是上述过程进行多少次。

```cpp
#include <string.h>

void HeadShiftone(char *data)
{
    int key = data[0];
    for (int i = 0; i < strlen(data) - 1; i++)
    {
        data[i] = data[i + 1];
    }
    data[strlen(data) - 1] = key;
}
```

&emsp;&emsp;再加上循环。

```cpp
#include <string.h>
#include <stdio.h>
void HeadShiftone(char *data)
{
    int key = data[0];
    for (int i = 0; i < strlen(data) - 1; i++)
    {
        data[i] = data[i + 1];
    }
    data[strlen(data) - 1] = key;
}
int main()
{
    char data[100];
    scanf("%s", data);
    int m;
    scanf("%d", &m);
    while (m--)
    {
        HeadShiftone(data);
    }
    printf("%s\n", data);
    return 0;
}
```

