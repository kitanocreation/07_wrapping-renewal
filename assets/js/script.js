$(function() {

    // console.log('test');

    $('.wrap-detail nav ul li').on('click', function(){
        $('.wrap-detail nav ul li').removeClass('wrap-on');
        $(this).addClass('wrap-on');
        let index = $(this).index();
        switch(index){
            case 0:
            $("html, body").animate({ scrollTop: $(".wrap-detail article").eq(0).offset().top - 250 }, 750);
            break;
            case 1:
            $("html, body").animate({ scrollTop: $(".wrap-detail article").eq(1).offset().top - 250 }, 750);
            break;
            default:
            $("html, body").animate({ scrollTop: $(".wrap-detail article").eq(2).offset().top - 250 }, 750);
        }
    });

    $(window).on('scroll', function() {
        let scrollPosition = $(window).scrollTop();
        $('.wrap-detail article').each(function(index) {
            let articleTop = $(this).offset().top - 300; // 300は調整値
            let articleBottom = articleTop + $(this).outerHeight();
            if (scrollPosition >= articleTop && scrollPosition < articleBottom) {
                $('.wrap-detail nav ul li').removeClass('wrap-on');
                $('.wrap-detail nav ul li').eq(index).addClass('wrap-on');
            }
        });
    });
    function scrollToArticle(index) {
        let targetPosition = $(".wrap-detail article").eq(index).offset().top - 250;
        $("html, body").animate({ scrollTop: targetPosition }, 750);
    }
});
