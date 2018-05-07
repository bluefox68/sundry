# 概述：
 一个基于POSIX和UNIX的多用户、多任务、支持多线程和多CPU的操作系统。

 参见：
  http://www.runoob.com/linux/linux-filesystem.html
  https://blog.csdn.net/u010668495/article/details/47086165

# 待解决问题
 1.常用linux命令的理解和使用：
  (1)ps:
  (2)grep:
  (3)netstat:

# linux忘记密码的处理办法：
  进入单用户模式更改root密码。

## 进入单用户模式的方法:有两种
  (1)重启linux系统，然后层层进入
  (2)使用系统安装光盘的救援模式

 详见：http://www.runoob.com/linux/linux-forget-password.html

## 常见目录
/usr/bin/passwd : 包含passwd命令
/etc/passwd: linux系统所有的用户ID、用户名、主目录、登录 shell 和 finger 的信息 
/etc/security/passwd : 包含加密的密码和安全性信息
/etc/shdow : 用户加密后的口令存放位置

## /etc/passwd

用户名:口令:用户标识号:组标识号:注释性描述:主目录:登录Shell 