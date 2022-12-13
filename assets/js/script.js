// loading
$(function () {
    $('#loading img').addClass('display');
    $('#loading').delay(3500).queue(function(next) {
        $(this).addClass('loaded');
        next();
    });

    $("main").css({opacity:'0'});
    setTimeout(function(){
    $("main").css("display", "block");
    $("main").stop().animate({opacity:'1'},500);//1秒かけてコンテンツを表示
    },3500);//約4秒後に
});

// header hamburgerBtn
$(function() {
    var $nav   = $('.nav__header');
    var $btn   = $('.toggle_btn');
    var open   = 'open'; // class
    // menu open close
    $btn.on( 'click', function() {
      if ( ! $nav.hasClass( open ) ) {
        $nav.addClass( open );
      } else {
        $nav.removeClass( open );
      }
      if ( ! $btn.hasClass( open ) ) {
        $btn.addClass( open );
      } else {
        $btn.removeClass( open );
      }
    });
    //　外側クリックでclose
    $(document).on('click touchstart', function(event) {
        if (!$(event.target).closest('.toggle_btn').length) {
            $nav.removeClass('open');
            $btn.removeClass('open');
        }
    });
});

//　link header高さ調整
$(function() {
    if (window.matchMedia('(min-width: 768px)').matches) {
    var headerHeight = $('header').outerHeight();
    } else {
        var headerHeight = $('.site__header').outerHeight();
    }
    var urlHash = location.hash;
    if(urlHash) {
    $('body,html').stop().scrollTop(0);
    setTimeout(function(){
        var target = $(urlHash);
        var position = target.offset().top - headerHeight;
        $('body,html').stop().animate({scrollTop:position}, 500);
    }, 100);
    }
    $('.nav__header__list a[href^="#"]').click(function(){
    var href= $(this).attr("href");
    var target = $(href);
    var position = target.offset().top - headerHeight;
    $('body,html').stop().animate({scrollTop:position}, 500);
    return false;
    });
});

//　link footer高さ調整
$(function() {
    if (window.matchMedia('(min-width: 768px)').matches) {
    var headerHeight = $('header').outerHeight();
    } else {
        var headerHeight = $('.site__header').outerHeight();
    }
    var urlHash = location.hash;
    if(urlHash) {
    $('body,html').stop().scrollTop(0);
    setTimeout(function(){
        var target = $(urlHash);
        var position = target.offset().top - headerHeight;
        $('body,html').stop().animate({scrollTop:position}, 500);
    }, 100);
    }
    $('.nav__footer__list a[href^="#"]').click(function(){
    var href= $(this).attr("href");
    var target = $(href);
    var position = target.offset().top - headerHeight;
    $('body,html').stop().animate({scrollTop:position}, 500);
    return false;
    });
});

// page top　スクロール表示
$(function() {
    var topBtn = $('.page__top__btn');    
    topBtn.hide();
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
        scrollHeight = $(document).height();
        scrollPosition = $(window).height() + $(window).scrollTop();
        footHeight = $(".copyright").innerHeight(); //footerの高さ（＝止めたい位置）
        if ( scrollHeight - scrollPosition  <= footHeight ) {
            topBtn.css({
                "position":"absolute", 
                "bottom": footHeight
            });
        } else { 
            topBtn.css({
                "position":"fixed",
                "bottom": "0" 
            });
        }
    });
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

// animation
$(function () {
    $('.js-animation-l').delay(3800).queue(function(next) {
        $(this).addClass('fadeIn');
        next();
    });

    $(window).scroll(function () {
        const wHeight = $(window).height();
        const scrollAmount = $(window).scrollTop();
        // $('.js-animation-l').each(function () {
        //     const targetPosition = $(this).offset().top;
        //     if(scrollAmount > targetPosition - wHeight) {
        //         $(this).addClass("fadeIn");
        //     }
        // });
        $('.js-animation-r').each(function () {
            const targetPosition = $(this).offset().top;
            if(scrollAmount > targetPosition - wHeight + 60) {
                $(this).addClass("fadeIn");
            }
        });
    });

    //アコーディオンをクリックした時の動作
    $('.accordion-btn').on('click', function() {//タイトル要素をクリックしたら
        var findElm = $(this).next(".perform__comment__box");//直後のアコーディオンを行うエリアを取得し
        $(findElm).slideToggle();
    });
});
