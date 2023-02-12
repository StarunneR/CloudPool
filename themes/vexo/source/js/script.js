(function ($) {
  console.log('© Theme-Vexo | https://github.com/yanm1ng/hexo-theme-vexo')
  var app = $('.app-body')
  var header = $('.header')
  var banner = document.getElementById('article-banner') || false
  var about = document.getElementById('about-banner') || false
  var top = $('.scroll-top')
  var catalog = $('.catalog-container .toc-main')
  var isOpen = false

  $(document).ready(function () {
    NProgress.start()
    $('#nprogress .bar').css({
      'background': '#42b983'
    })
    $('#nprogress .spinner').hide()

    var fade = {
      transform: 'translateY(0)',
      opacity: 1
    }
    if (banner) {
      app.css('transition-delay', '0.15s')
      $('#article-banner').children().css(fade)
    }
    if (about) {
      $('.author').children().css(fade)
    }
    app.css(fade)
  })

  window.onload = function () {
    setTimeout(function () {
      NProgress.done()
    }, 200)
  }

  $('.menu').on('click', function () {
    if (!header.hasClass('fixed-header') || isOpen) {
      header.toggleClass('fixed-header')
      isOpen = !isOpen
    }
    $('.menu-mask').toggleClass('open')
    $('.chn_mark').toggleClass('nomask')
  })

  $('#tag-cloud a').on('click', function () {
    var list = $('.tag-list')
    var name = $(this).data('name')
    var maoH = list.find('#' + name).offset().top


    $('html,body').animate({
      scrollTop: maoH - header.height()
    }, 500)
  })

  $('#category-cloud a').on('click', function () {
    var list = $('.category-list')
    var name = $(this).data('name')
    var maoH = list.find('#' + name).offset().top

    $('html,body').animate({
      scrollTop: maoH - header.height()
    }, 500)
  })

  $('.author-logo').on('click', function () {
    $('.author-contact').fadeToggle()
  })

  $('.reward-btn').on('click', function () {
    $('.money-code').fadeToggle()
  })

  $('.arrow-down').on('click', function () {
    $('html, body').animate({
      scrollTop: banner.offsetHeight - header.height()
    }, 500)
  })

  $('.toc-nav a').on('click', function (e) {
    e.preventDefault()
    var catalogTarget = e.currentTarget
    var scrollTarget = $(catalogTarget.getAttribute('href'))
    var top = scrollTarget.offset().top
    if (top > 0) {
      $('html,body').animate({
        scrollTop: top - 65
      }, 500)
    }
  })

  top.on('click', function () {
    $('html, body').animate({
      scrollTop: 0
    }, 300)
  })

  //fold_action.js
  $(document).ready(function () {
    $(document).on('click', '.fold_hider', function () {
      $('>.fold_content', this.parentNode).slideToggle();
      $('>:first', this).toggleClass('open');
    });
    //默认情况下折叠
    $("div.fold_content").css("display", "none");
  })

  //tag.js
  function tag() {
    var tag = location.hash.replace('#', '');
    if (tag) {
        var tagId = "#tag-" + tag;
        $("html, body").animate({
            scrollTop: $(tagId).offset().top
        }, 400);
    }
}
})(jQuery)