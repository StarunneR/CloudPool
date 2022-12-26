---
title: 网络相关笔记
author: m1
date: 2021-01-29
tags: 网络
categories: 浊技术
main: 有用
sub: 1
---
<!--## 带宽提速（提高最大网速）（不可用）

1. [上传提速1](https://www.speedtest.cn/tisu/kuandai)
    20Mbps(实测约3.5MB/s) 30min = 约6GB
2. [上传提速2](https://www.speedtest.cn/tisu/zhibo)
    50Mbps 30min
3. [上传提速3](https://detail.tmall.com/item.htm?spm=a230r.1.14.6.7c0e4a37WSiQqC&id=580030068191)
    20Mbps 30min
4. [下载提速1](https://www.speedtest.cn/tisu/kuandai)
    ￥15/1月 ￥80/6月 ￥158/12月 500Mbps (老线路导致自用只有90M，每天需重新打开一次上述网页)
5. [下载提速2](https://detail.tmall.com/item.htm?spm=a230r.1.14.6.7c0e4a37WSiQqC&id=580030068191)
    ￥17/1月 ￥40/3月 ￥75/6月 ￥140/12月 100Mbps
    ￥18/1月 ￥42/3月 ￥80/6月 ￥150/12月 200Mbps
* 上述所有**免费服务**为1次/月
-->
---
## 缩短网页延迟（优化DNS）

#### DNS 测速

1. [IPv4 DNS Ping 测试](DNSJumper.zip)
2. [IPv6 DNS Ping 测试](Ping_IPv6_DNS.bat)
---
## dig命令
用途：显示详细的DNS查询过程（加强的ping/nslookup）

1. 下载 <https://www.isc.org/download/>
2. 管理员权限安装 bindinstall.exe
    Target Directory = C:\Program Files\dig 
    Options = Tools Only
    若安装过程中安装Visual C++报错，忽略即可
3. 添加环境变量
    右键此电脑 - 属性 - 高级系统设置 - 环境变量 - 用户变量.双击Path - 新建添加环境变量 C:\Program Files\dig\bin

之后在cmd/powershell中即可使用命令
    dig website.com
or
    dig website.com +short
