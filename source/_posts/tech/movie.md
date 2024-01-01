---
title: 电影搜索网站
date: 2023-01-02
author: m1
tags: [下载,资源,电影,娱乐]
categories: 浊技术
main: 授人以渔
catalog: on
---

#### [豆瓣电影](https://movie.douban.com/)

---

## 找资源

* [种子搜](https://www.zhongzidi9.com/) [种子搜导航](https://www.zhongzidizhi.com/) （推荐）
* [BThub 地址发布 GitHub](https://github.com/fwonggh/Bthub) [GitLab](https://gitlab.com/fwonggh/Bthub/-/blob/master/README.md) （推荐）
* [BT4G](https://bt4g.org/)（推荐）

---

* [磁力狗地址发布页](https://磁力狗.com/)或[磁力狗2](http://clg88.cc)
* [雨花阁 地址发布1](https://github.com/yuhuage/dizhi)或[地址发布2](https://bitbucket.org/yuhuage/yuhuage/src/master/)
* [磁力熊搜素](https://www.cilixiong.com/search/)
* [巴士搜索](http://bashi5.com)
~~* [片源网](https://pianyuan.org)~~

不可用：
磁力蜘蛛，磁力熊猫，磁力柠檬 ，老王磁力，BT1207，SkrBT
**建议搜索电影英文名**
~~可能需要科学上网~~

{% fold >电影文件名称说明 %}
1.片源（画质） ：
BluRay(蓝光原盘)＞Remux(蓝光无损提取)＞BluRay/BRRip/BD/BDRip(蓝光压缩)＞WEB-DL(iTunes等网络正版购买)＞KORSUB(韩版)＞＞TC(胶片版)＞TS（准枪版）＞CAM（枪版），推荐WEB-DL及其之前的，不用在意HD/HDRip/DVDRip
2.分辨率：   4K=2160P=UHD＞1080P=FHD=全高清＞720P=HD=高清
3.编码：     x265/h265/HEVC 优于 x264/h264/AVC(主流)
4.体积：     推荐至少4G左右的
5.其他说明 建议使用*种子搜*、*BThub*或*雨花阁*搜索**影片英文名**，根据*下载量*/*下载热度*排序，寻找2G以上，mkv格式影片
    Ref: [知乎：陕北老汉-网络影视资源下载指南](https://zhuanlan.zhihu.com/p/28715214)
{% endfold %}

### 字幕下载

[字幕库](http://zimuku.org)
[射手网](https://assrt.net/)
[SubHD](https://subhd.tv)

<!--
[字幕天堂](http://www.zmtiantang.cc/)
[字幕下载](http://www.zmxiazai.com/)
-->
---

### 下载工具

* [Motrix](https://motrix.app/) 一款高颜值的下载工具
* [FDM – Free Download Manager](https://www.freedownloadmanager.org/zh/)
* [qbittorrent](https://www.qbittorrent.org/)
* [uTottent](https://www.qbittorrent.org/)
* [Bitcomet 比特彗星](https://www.bitcomet.com)

### 离线下载工具

#### 国内

* 某度盘
* [微云](https://www.weiyun.com)
* [115](https://115.com)
* [比特球](https://pan.bitqiu.com/)

#### 国外

* [SonicBit](https://dash.sonicbit.net/)
* [LoadBt](https://www.loadbt.com/files)
* [Furk.net](https://www.furk.net/)

    Reference: <https://zhuanlan.zhihu.com/p/153555873>

---

## 网页视频下载

### Internet Download Manager (IDM)

{% fold 说明 %}
非常好用的下载工具，有浏览器视频嗅探与一键下载功能
收费软件，30天试用期，虽然网上有破解版，但还是建议购买，因为更新频繁

淘宝搜素 Internet Download Manager 即可，哪家便宜买哪家。一年许可：约35元，三年更新+永久使用许可：约100元
{% endfold %}

### You-Get

{% fold 说明 %}
使用方法：

1. 安装[Python3](https://www.python.org/downloads/)
2. [Download from GitHub](https://github.com/soimort/you-get/releases) you-get.tar.gz 或 Source code (zip)
3. 解压，Add to **PATH**
   右键此电脑 *属性* - 窗口左侧 *高级系统设置* - 窗口下方 *环境变量* - 用户变量下方 *编辑* - *新建* 输入解压后文件夹地址

常用功能：
    $ you-get [url]  # 下载视频 (自动下载字幕/弹幕)
    -i [url]  # 查看可用的品质和格式
    -o  # 设置保存路径
    -O  # 设置保存名称
{% endfold %}

### Youtube-dl

{% fold 说明 %}
使用方法：

1. 安装[Python3](https://www.python.org/downloads/)
2. [Download from GitHub](https://github.com/ytdl-org/youtube-dl/releases)) youtube-dl.exe 或 youtube-dl.tar.gz
3. 解压，Add to **PATH**
    右键此电脑 *属性* - 窗口左侧 *高级系统设置* - 窗口下方 *环境变量* - 用户变量下方 *编辑* - *新建* 输入exe文件地址 或 解压后文件夹地址

常用功能：
    $ youtube-dl [url]  # 下载视频
    $ youtube-dl -F [url]  # 查看视频可用格式
    $ youtube-dl --write-sub [url]  # 下载字幕文件
    $ youtube-dl --write-auto-sub [url]  # 下载自动生成的字幕文件 (Youtube only)
{% endfold %}
