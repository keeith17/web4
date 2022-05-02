(function($){

    // 네비게이션
    $('.main-btn').mouseenter(function(){
        $('.sub').stop().slideUp(0);
        $(this).next().stop().slideDown(300);

        $('.main-btn').removeClass('on');
        $(this).addClass('on');
    });
    //내비게이션 접근성
    $('.main-btn').focusin(function(){
        $('.sub').stop().slideUp(0);
        $(this).next().stop().slideDown(300);

        $('.main-btn').removeClass('on');
        $(this).addClass('on');
    });

    // $('main-btn').on({
    //     mouseenter: function(){
    //         $('.sub').stop().slideUp(0);
    //         $(this).next().stop().slideDown(300);
    
    //         $('.main-btn').removeClass('on');
    //         $(this).addClass('on');    
    //     },
    //     focusin: function(){
    //         $('.sub').stop().slideUp(0);
    //         $(this).next().stop().slideDown(300);
    
    //         $('.main-btn').removeClass('on');
    //         $(this).addClass('on');    
    //     }
    // });



    $('#nav').mouseleave(function(){
        $('.sub').stop().slideUp(300);
        $('.main-btn').delay(300).removeClass('on');
    });

    //부드럽게 보이고(fadeIn(300))
    //부드럽게 사라지고(fadeOut(0))

    // $('.main-btn').mouseenter(function(){
    //     $('.sub').stop().fadeOut(0);
    //     $(this).next().stop().fadeIn(300);

    //     $('.main-btn').removeClass('on');
    //     $(this).addClass('on');
    // });

    // $('#nav').mouseleave(function(){
    //     $('.sub').stop().fadeOut(300);
    //     $('.main-btn').delay(300).removeClass('on');
    // });





    //메인슬라이드
    // let cnt=0;
    // const slideWrap = $('.slide-wrap');
    // const n = 3; //전체 슬라이드 개수

    //1.메인슬라이드 함수
    // function mainSlide(){
    //     slideWrap.animate({left:`${-100*cnt}%`}, 600, function(){
    //         cnt>n-1?cnt=0:cnt;
    //         slideWrap.animate({left:`${-100*cnt}%`}, 0);
    //     })
    // }

    //1-2. 메인슬라이드 페이드인아웃

    let cnt=0;

    function mainSlide(){
        console.log(cnt);
        console.log(cnt===0?2:cnt-1);
        $('.slide').css({zIndex:1}).animate({opacity:1},0);
        $('.slide').eq(cnt).css({zIndex:2});
        $('.slide').eq(cnt===0?2:cnt-1).css({zIndex:3}).animate({opacity:0},600);
    }
    //보이는 1 2 0 1 2 0
    //사라져 0 1 2 0 1 2

    //2.다음카운트 함수
    function nextCount(){
        cnt++;
        cnt>2?cnt=0:cnt;
        mainSlide();
    }


    //3.자동타이머 함수
    function autoTimer(){
        setInterval(nextCount, 3000);
    }

    autoTimer();




    //공지사항 갤러리 탭메뉴 클릭이벤트
    $('.gallery-btn').click(function(){
        $('.notice-btn').addClass('on');
        $('.gallery-btn').addClass('on');

        $('.notice-box').addClass('on');
        $('.gallery-box').addClass('on');

    });

    $('.notice-btn').click(function(){
        $('.notice-btn').removeClass('on');
        $('.gallery-btn').removeClass('on');

        $('.notice-box').removeClass('on');
        $('.gallery-box').removeClass('on');
    });
    



    //팝업메뉴
    $('.link-btn').click(function(){
        $('#modal').stop().fadeIn(300);
    });
    $('.close-btn').click(function(){
        $('#modal').stop().fadeOut(300);
        

    });



})(jQuery);