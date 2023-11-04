(function ($) {
  console.log('© Theme-Vexo | https://github.com/yanm1ng/hexo-theme-vexo')
  var app = $('.app-body')
  var header = $('.header')
  var banner = document.getElementById('article-banner') || false
  var catalog = document.getElementById('catalog') || false
  var front = document.getElementById('front-parent') || false
  var about = document.getElementById('about-banner') || false
  var top = $('.scroll-top') || false
  var catalog_toc = $('.catalog-container .toc-main') || false
  var headerH = header.height()
  var isOpen = false

  $(document).ready(function () {
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

    NProgress.start()
    $('#nprogress .bar').css({
      'background': '#42b983'
    })
    $('#nprogress .spinner').hide()
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
    var name = $(this).data('name').replace(/[\ \'\/\+\#]/gi, "\\$&")
    var maoH = list.find('#' + name).offset().top
    $('html,body').animate({
      scrollTop: maoH - headerH
    }, 500)
  })

  $('#category-cloud a').on('click', function () {
    var list = $('.category-list')
    var name = $(this).data('name').replace(/[\ \'\/\+\#]/gi, "\\$&")
    var maoH = list.find('#' + name).offset().top
    $('html,body').animate({
      scrollTop: maoH - headerH
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
      scrollTop: banner.offsetHeight - headerH + front.offsetHeight
      //scrollTop: banner.offsetHeight - header.height()
    }, 500)
  })

  $('.toc-nav a').on('click', function (e) {
    e.preventDefault()
    var catalogTarget = e.currentTarget
    var scrollTarget = $(decodeURIComponent(catalogTarget.getAttribute('href')))
    var top = scrollTarget.offset().top
    if (top > 0) {
      $('html,body').animate({
        scrollTop: top - headerH
      }, 600)
    }
  })

  top.on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 600)
  })

  document.addEventListener('scroll', function () {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    if (banner) {
      if (scrollTop > headerH) {
        header.addClass('fixed-header')
      } else if (scrollTop === 0) {
        header.removeClass('fixed-header')
      }
    }
    /*
    if (scrollTop > 100) {
      top_button.addClass('opacity')
    } else {
      top_button.removeClass('opacity')
    }
    */
    if (catalog) {
      let catalog_top = $('#catalog').offset().top
      if (scrollTop > catalog_top) {
        catalog_toc.addClass('fixed-toc')
      } else {
        catalog_toc.removeClass('fixed-toc')
      }
    }
  })

  //fold_action.js
  $(document).ready(function () {
    $('.fold_hider').on('click', function () {
      $('>.fold_content', this.parentNode).slideToggle();
      $('>:first', this).toggleClass('open');
    });
    //默认情况下折叠
    $("div.fold_content").css("display", "none");
  })

  $("a[href*='<emoji>']").attr({href: "//emoji."+window.location.hostname, target: "_blank",}).addClass("emoji")

  /*
  var toggle = document.getElementById('toggle');

  toggle.addEventListener('change', function() {
    if (this.checked) {
      $("https://cp-bitiful1.s3.bitiful.net").replaceAll("https://cps3storage.s3.ap-southeast-1.amazonaws.com");
      console.log('开关已打开');
    } else {
      $("#aplayerJS").replaceAll('https://cp-bitiful1.s3.bitiful.net','https://cps3storage.s3.ap-southeast-1.amazonaws.com');
      console.log('开关已关闭');
    }
  });
  */
})(jQuery)