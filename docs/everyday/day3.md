---
title="Linux 奇奇怪怪的变量"
---

# [Linux中变量#,#,@,0,0,1,2,2,*,$$,$?的含义](https://www.cnblogs.com/kaituorensheng/p/4002697.html)

> ``$#`` 是传给脚本的参数个数
> ``$0``是脚本本身的名字
> ``$1``是传递给该shell脚本的第一个参数
> ``$2``是传递给该shell脚本的第二个参数
> ``$@``是传给脚本的所有参数的列表
> ``$*``是以一个单字符串显示所有向脚本传递的参数，与位置变量不同，参数可超过``9``个
> ``$$`` 是脚本运行的当前进程ID号
> ``$?`` 是显示最后命令的退出状态，``0``表示没有错误，其他表示有错误

区别：``@``   ``*``

- 相同点：都是引用所有参数
- 不同点：只有在双引号中体现出来。假设在脚本运行时写了三个参数（分别存储在112 3）则"3）则"*" 等价于 “112 3"（传递了一个参数）；而“3"（传递了一个参数）；而“@" 等价于 "1""1""2" "$3"（传递了三个参数）

```shell
##dels.shecho "number:$#"
echo "scname:$0"
echo "first :$1"
echo "second:$2"
echo "argume:$@"
echo "show parm list:$*"
echo "show process id:$$"
echo "show precomm stat: $?"
```

结果：

```
[@jihite]$ sh del.sh ``1` `2` `3
number:``3
scname:del.sh
first: ``1
second:``2
argume:``1` `2` `3
show` `parm list:``1` `2` `3
show` `process id:``21057
show` `precomm stat: ``0
```

