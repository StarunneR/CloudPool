hexo clean
hexo g
read -t 1 -p "输入端口号："  port 
hexo s -p $port
