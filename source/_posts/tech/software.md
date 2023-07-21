---
title: 常用软件推荐
author: m1
date: 2023-06-12
date6: 2023-05-29
date5: 2022-12-12
date4: 2022-10-16 
date3: 2022-09-01
date2: 2022-03-23
date1: 2021-08-03
tags: [实用, 软件, 安装]
categories: 浊技术
catalog:  
main: Windows软件
qrcode: 
---
## Windows

{% fold %}
> 软件包名称后缀说明：
> AMD64 = x86_64 = x86-64 = x64 : 常见64位处理器（Windows）（兼容32位程序）
> IA-32 = x86 : 32位处理器
> ARM64 = AArch64 = ARMv8/ARMv9 : 常见64位移动端处理器
> ARM = ARM32 = ARMv7 : 32位移动端处理器
{% endfold %}

### 浏览器

* [Chrome 浏览器 google.cn](https://www.google.cn/intl/zh-CN/chrome/) 或 [google.com](https://www.google.com/intl/zh-CN/chrome/)

    优点：1.使用流畅，用户体较好；2.兼容性极好(万物基于Chrome)
    缺点：1.占用后台资源较多；2.附加组件功能与同步功能 可 能 无法使用。

* [火狐浏览器](https://www.mozilla.org/zh-CN/firefox/new/?redirect_source=firefox-com)

    优点：1.较轻便，占用后台资源较少；2.附加组件多，可添加许多扩展功能；3.右键--查看元素功能很好用
    缺点：1.后台服务不如Chrome完全，偶尔可能出现轻微卡顿；2.非谷歌浏览器内核，访问设计不合格的旧网站时可能出现问题

* [Vivaldi 浏览器](https://vivaldi.com/zh-hans/)

    优点：1.耐看；2.Chromium(谷歌浏览器)内核，附加组件齐全；3.同步设置功能可用
    缺点：同Chrome,更新比Chrome慢

> 附加组件：
1.广告过滤：[uBlock Origin](https://ublockorigin.com/)
2.查词/翻译：[沙拉查词](https://saladict.crimx.com/)
3.减少网页跟踪：[隐私獾PrivacyBadger](https://privacybadger.org/)
4.右键解锁：Firefox - [快乐右键](https://addons.mozilla.org/zh-CN/firefox/addon/%E5%BF%AB%E4%B9%90%E5%8F%B3%E9%94%AE/)  Chrome - [启用右键](https://chrome.google.com/webstore/detail/enable-right-click-for-go/ofgdcdohlhjfdhbnfkikfeakhpojhpgm)
5.购物比价：[守候购物小助手](https://exzs.cn/extension/ShoppingAssistant.html) 或 [购物党自动比价工具](https://www.gwdang.com/app/extension)

### 工具软件

#### [火绒](https://www.huorong.cn/)

很不错的一款~~杀毒软件~~**安全软件**
~~曾经看到有小道消息说最早是金山(?)的某员工看不惯母公司的行为，一气之下跑出来做了一个良心杀软~~

#### [视频播放器 PotPlayer](http://potplayer.daum.net/?lang=zh_CN) + [皮肤](modern_x_for_potplayer_update_by_illequal_d9a1sdy.zip)

官网若打不开可尝试~~科学上网~~或[PotPlayer中文网](https://potplayer.org/)

#### [音乐播放器 Foobox](https://github.com/dream7180/foobox-cn/)

@Dreamawake 大神制作的 Foobar2000 美化优化版本。支持多平台搜索歌曲、自动匹配歌词与[WASAPI音乐输出](https://baike.baidu.com/item/WASAPI/8114771?fr=aladdin)功能。

    兼容性软件WASAPI输出插件：[组件下载](https://www.foobar2000.org/components/view/foo_out_wasapis)

    WASAPI输出若提示 error: endpoint creation failed 解决方法：
    DSP管理器 - 激活 重采样器 (PPHS) - 配置 目标采样 48000 Hz　　[参考来源](https://tieba.baidu.com/p/5431845992)

    音乐排序方式可选择：右键播放列表标题 - 列 - 专辑艺术家

#### 压缩软件

1. **[7-zip](https://sparanoid.com/lab/7z/)** (推荐)

    老牌开源压缩软件。Windows操作系统请下载x64版本。

    **[7-Zip zstd](https://github.com/mcmilk/7-Zip-zstd/releases)** (推荐)

    7-zip增强版，更多的压缩算法，增加了MD5及更多的校验功能。Windows操作系统请下载x64.exe版本。

2. **WinRAR**

    老牌压缩软件，下载地址以及激活方法左转[百度WinRAR吧](https://tieba.baidu.com/f?kw=winrar)置顶帖。
    请先卸载之前安装的WinRAR(如果有)
    [激活文件备份](rarkey.rar)

3. **[Bandizip](http://www.bandisoft.com/bandizip/)** & [v6.x旧版本](http://www.bandisoft.com/bandizip/old/6/)

    老牌压缩软件。可使用 v6.x 版本，最新版本 v7.x 含有广告。

#### 下载工具

1. **[Internet Download Manager (IDM)](https://www.internetdownloadmanager.com/)**

    非常好用的下载工具，有浏览器网页视频嗅探与一键下载功能
    收费软件，30天试用期，虽然网上有破解版，但还是建议购买，因为更新频繁，若不及时更新，部分功能可能失效

    淘宝搜素 Internet Download Manager 即可，哪家便宜买哪家。一年许可：约35元，三年更新+永久使用：约80元

2. **[Motrix](https://motrix.app/)**

    另一款非常好用的下载工具，可用于下载磁力链接，替代渣雷，还免费

#### [截图工具 Snipaste](https://zh.snipaste.com/)

F1 截图大法好

#### [爱思助手](https://www.i4.cn/)

不是它多好用，是iTunes太难用

### 学术软件

<!--
#### [冰点文库下载器](http://www.bingdian001.com/?p=832)  [备份下载](https://dawn-shadow-a17b.cloudpool.workers.dev/CloudShare/Software/Fish-v3214-0914(%E5%86%B0%E7%82%B9%E4%B8%8B%E8%BD%BD%E5%99%A8).zip)

下载**百度文库**的文档

#### [豆丁当当](https://www.52pojie.cn/thread-1185880-1-1.html)  [备份下载](https://dawn-shadow-a17b.cloudpool.workers.dev/CloudShare/Software/%E8%B1%86%E4%B8%81%E5%BD%93%E5%BD%93V2.7.zip)

下载**豆丁网、book118等网站**的文档
-->

#### [SumatraPDF](https://www.sumatrapdfreader.org/download-free-pdf-viewer)

轻量、简洁、多功能PDF阅读器

#### [EndNote](https://endnote.com/)

可以在[知乎 - 柴柴的科研分享](https://zhuanlan.zhihu.com/p/87749797)内找到Endnote 20 Win版下载地址，安装后可升级至最新版本（抱Tsinghua大佬大腿）

#### [Zotero](https://www.zotero.org/)

EndNote免费替代品

#### [caj2pdf-qt](https://caj2pdf-qt.sainnhe.dev/)

CAJ 转 PDF 转换器，写论文必备

#### [PandaOCR](https://github.com/miaomiaosoft/PandaOCR.Pro)

[OCR](https://baike.baidu.com/item/%E5%85%89%E5%AD%A6%E5%AD%97%E7%AC%A6%E8%AF%86%E5%88%AB)侬晓得伐啦

#### Office 365

可以尝试在某宝上搜索'Office 365'

### 专业设计软件

#### FL Studio

可在[AppNee](https://appnee.com/fl-studio/)找到下载链接。
[百度云（提取码: 6s23）](https://pan.baidu.com/s/15oGsTDCGO4VbDzgAdLa7aQ?pwd=6s23)

#### Adobe全家桶

1. Windows
可前往[@vposy - 新浪微博](https://www.weibo.com/vposy)关注查看置顶帖获得船新版本下载链接。
也可在[电报群](https://t.me/s/adobe_vposy)中获取
2. Mac
可前往[Adobe ZII官网](https://www.adobezii.com) 或 [Appnee - ADOBE ZII](https://free.appnee.com/adobe-zii/)下载

~~已废弃：CCMaker, Adobe Deluxe Patcher~~

### 其他工具

[Dism++](https://github.com/Chuyu-Team/Dism-Multi-language/releases) 实用系统管理小工具集合

[图吧工具箱](http://www.tbtool.cn/) DIY爱好者的必备工具合集

[卡硬工具箱](http://www.kbtool.cn/) 硬件检测、管理、性能测试工具以及各种实用软件。但已有两年未更新

[AppNee Freeware Group.](https://appnee.com) 一个各类破解版软件非常多的网站

[waifu2x-caffe](https://github.com/lltcggie/waifu2x-caffe/releases) 更好地放大图片

<!-- - [AgentNEO](https://neoladder.org/) + [Clash for Windows](https://github.com/Fndroid/clash_for_windows_pkg)-->

[ChipGenius v4.20.1107](ChipGenius_v4_20_1107_fix.rar)  可用于查看各接口协议版本（如判断是否正常运行USB3.1）  
Ref: <https://www.mydigit.cn/forum.php?mod=viewthread&tid=209287>

[垃圾清理工具 CCleaner](https://www.ccleaner.com/ccleaner/download)
~~可在[AppNee](https://appnee.com/ccleaner-professional/)找到破解版下载链接。~~
注册机：[CCleaner Pro 6 crack](CCleaner_Patch22.exe)  来自 [rsload.net](https://rsload.net/soft/cleaner-disk/8306-ccleaner.html) [备份](https://pan.zhuochi.org/CloudShare/Software/cc612Patch22.rar)
注册机需放置在软件安装目录下，安装CCleaner后请直接使用注册机注册，不要点击开始试用许可证。

[驱动更新工具Driver Booster](https://www.iobit.com/en/driver-booster.php) [下载直链](https://cdn.iobit.com/dl/driver_booster_setup.exe)

    Driver Booster（驱动加速器）是IObit公司推出的一款针对Windows操作系统的电脑的驱动程序更新工具。更新驱动可以提升电脑硬件性能，减少系统崩溃降低硬件冲突。该驱动加速器软件可以通过智能的检测引擎有效识别电脑上过期的驱动程式（如，显卡驱动，声卡驱动，网卡驱动，打印机驱动等），并将结果呈现出来供查看。您可以选择要更新的驱动，然后点击更新按钮，程序就会自动下载安装最新驱动。 —— Driver Booster  百度百科

    注册码：
    7A4A7-27FA2-BBDDB-CBE40 (328 Days) [OR] 3326C-4EAD0-A9290-EB740 (328 Days) [OR] EC714-E8FD8-CCB79-19140 (328 Days) [OR] 19AF0-E05BA-7613D-A2F40 (328 Days) [OR] 07CB7-C38C6-5B122-05440 (335 Days) [OR] 75B6C-62FB7-3A9A3-69740 (285 Days) [OR] 633AE-5926A-BB504-ED840 (256 Days) [OR] N5EB2-985MQ-WKPAU-PFKVS 

    若下载驱动无网速，三种解决办法：
    1. 设置本地代理服务器：菜单-设置-网络-自定义代{过}{滤}理设置-主机：填入 140.227.10.189 端口：3128
    2. 改hosts：
      127.0.0.1 asc55.iobit.com
      127.0.0.1 is360.iobit.com
      127.0.0.1 asc.iobit.com
      127.0.0.1 pf.iobit.com
    3. (推荐)修改DNS：1.0.0.1、1.1.1.1

    Ref: https://theipfire.com/driver-booster-pro-9-free-license-key/
         https://www.52pojie.cn/thread-1756715-1-1.html

[Wi-Fi Scanner](https://lizardsystems.com/wi-fi-scanner/)  一款功能强大的WIFI扫描工具，能够帮助用户轻松完成各种信号的扫描。可用于获取WiFi详细参数、信号强度等信息
注册名：任意
注册码：000GQ8-2BC30B-YF5W1N-K0Q3Q8-4MZ2N5-R88EKC

---

### 手机App

#### 安卓应用市场

[腾讯应用宝](https://sj.qq.com/myapp/)
[豌豆荚](https://www.wandoujia.com)
[应用汇](http://www.appchina.com)
[华为应用市场](https://appgallery.huawei.com/)
[酷安](https://www.coolapk.com)

[Apkpure](https://apkpure.com)
[APKMirror](https://www.apkmirror.com)
[Aptoide](https://cn.aptoide.com/)
[apkmonk](https://www.apkmonk.com)

{% fold %}

#### 生活

几何天气
高德地图
摩拜单车 & 哈啰出行
Microsoft To Do

Airbnb
大众点评
12306
快递100

#### 日常

Tim
Some Bao & Dog Dong
Alipay & WeChat
历史价格查询
Via (Android)
Kiwi Browser

#### 学习

欧路词典
Forest
Onenote
Clash
CamScanner & 白描
Mathlab
Radio.net
百度云 + fulivip.com

#### 技术

Coolapk
Mix
一个木函
Cellular-Z

### IOS

* 海贝音乐
iOS上最后一个支持直接从Windows电脑导入音乐文件的APP

* 导入方法：

1. 电脑上安装爱思助手，iPhone/iPad上安装海贝音乐
2. iPhone/iPad连接电脑，打开爱思助手 - 我的设备 - 应用游戏，找到海贝音乐
3. 点击浏览
4. 拖拽文件放入Documents文件夹 或 点击 导入 - 选择文件夹
5. iPhone/iPad打开海贝音乐，划出左栏，点击文件扫描

{% endfold %}
