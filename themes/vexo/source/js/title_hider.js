(function ($) {
    var OriginTitile = document.title;
    var titleTime;
  
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            document.title = '(つェ⊂)看不见我看不见我~ ' + OriginTitile;
            clearTimeout(titleTime);
        }
        else {
            document.title = '(*´∇｀*) 被你发现啦~ ' + OriginTitile;
            titleTime = setTimeout(function() {
                document.title = OriginTitile;
            }, 1500);
        }
    });
})(jQuery)