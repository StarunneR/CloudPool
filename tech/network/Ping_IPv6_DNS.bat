@echo off
echo # DNS Ping -6 Test
echo.
echo ## China
echo.
echo ### Aliyun
ping -6 2400:3200::1 -w 1000
ping -6 2400:3200:baba::1 -w 1000
echo.
echo ### Baidu
ping -6 2400:da00::6666 -w 1000
echo.
echo ###ChinaPublic (Yeti)
ping -6 240C::6666 -w 1000
ping -6 240C::6644 -w 1000
echo.
echo ### ChinaTelecom
ping -6 240e:4c:4008::1 -w 1000
ping -6 240e:4c:4808::1 -w 1000
echo.
echo ### CNNIC
ping -6 2001:dc7:1000::1 -w 1000
echo.
echo ## China Education
echo.
echo ### Beijing University of Posts and Telecommunications
ping -6 2001:da8:202:10::36 -w 1000
ping -6 2001:da8:202:10::37 -w 1000
echo.
echo ### Beijing Jiaotong University
ping -6 2001:da8:205:2060::188 -w 1000
echo.
echo ### University Of Science \& Technology Beijing
ping -6 2001:da8:208:10::6 -w 1000
echo.
echo ### Chinese Academy of Sciences (Yeti)
ping -6 2001:cc0:2fff:1::6666 -w 1000
echo.
echo ### CSTNET
ping -6 2001:cc0:2fff:2::6 -w 1000
echo.
echo ### SJTU
ping -6 2001:da8:8000:1:202:120:2:100 -w 1000
ping -6 2001:da8:8000:1:202:120:2:101 -w 1000
echo.
echo ### TSinghua (Yeti)
ping -6 2001:da8:ff:305:20c:29ff:fe1f:a92a -w 1000
echo.
echo ### TSinghua(Tuna)
ping -6 2001:da8::666 -w 1000
echo.
echo ## International
echo.
echo ### Google
ping -6 2001:4860:4860::8888 -w 1000
ping -6 2001:4860:4860::8844 -w 1000
echo.
echo ### Cloudflare
ping -6 2606:4700:4700::1111 -w 1000
ping -6 2606:4700:4700::1001 -w 1000
echo.
echo ### OpenDNS
ping -6 2620:0:ccc::2 -w 1000
ping -6 2620:0:ccd::2 -w 1000
echo.
echo ### Quad9 IPv6 DNS
ping -6 2620:fe::fe -w 1000
ping -6 2620:fe::9 -w 1000
echo.
echo ### Neustar UltraDNS IPv6
ping -6 2610:a1:1018::1 -w 1000
ping -6 2610:a1:1018::5 -w 1000
ping -6 2610:a1:1019::1 -w 1000
echo.
pause
