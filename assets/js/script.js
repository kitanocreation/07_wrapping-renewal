$(function() {

    console.log('test');

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
});
