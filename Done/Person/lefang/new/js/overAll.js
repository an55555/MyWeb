/**
 * Created by Administrator on 2015/10/9.
 */
$(function(){
    $(document.body) .css('width',window.screen.availWidth);
    $('.top,.top2').css('width',window.screen.availWidth);


    //顶部下拉菜单
    $('#DrowA').mousemove(function(){
        $('.liDrow').stop().slideDown('fast');
    })
    $('#DrowA').mouseleave(function(){
        $('.liDrow').stop().slideUp('fast');
    });
    //子页头部
    $('#DrowA2').mousemove(function(){
        $('.liDrow2').stop().slideDown('fast');
    })
    $('#DrowA2').mouseleave(function(){
        $('.liDrow2').stop().slideUp('fast');
    });

    //主页菜单的背景移动
    $('.pageOne .nav .menu li').mousemove(function(){
        $('.pageOne .nav .menu .scoBG').stop().animate({'left':($(this).index()-1)*150},20);
    });
    $('.pageOne .nav .menu li').mouseleave(function() {
        $('.pageOne .nav .menu .scoBG').stop().animate({'left':0},20)
    });

    //返回顶部
    $("#toTop").click(function(){
        $(window).scrollTop(0);
    });

    //弹出层部分
    $('.markFLO').css('width',(window.screen.availWidth));
    $('.imgBox').click(function(){
        $('html').css('overflow','hidden');
        $('.markFLO').css('display','block');
        $('img',this).clone(true).appendTo($('.markFLO .markImg'));
        $(this).siblings('p').clone(true).appendTo($('.markFLO h1'));
    });
    $(".closeMark").click(function(e){
        e.stopPropagation();
        $('.markFLO h1').empty();
        $('.markFLO .markImg').empty();
        $('html').css("overflow","auto");
        $('.markFLO').css("display","none");
    });
    $(".markFLO .markImg").click(function(e){
        return false;
    });
    $(".markFLO").click(function(e){
        return false;
    });


});