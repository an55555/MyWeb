/**
 * Created by Administrator on 2015/11/10.
 */
$(function(){
    var runPage,
        runPage2,
        interval,
        autoPlay;

    autoPlay = function(to) {
        clearTimeout(interval);
        interval = setTimeout(function() {
            runPage.go(to);
        }, 5000);

    }

    runSection = new FullPage({
        id : 'article',                            // id of contain
        slideTime : 800,                               // time of slide
        effect : {                                     // slide effect
            transform : {
                translate : 'Y',					   // 'X'|'Y'|'XY'|'none'
                scale : [1, 1],					   // [scalefrom, scaleto]
                rotate : [0, 0]					   // [rotatefrom, rotateto]
            },
            opacity : [0, 1]                           // [opacityfrom, opacityto]
        },
        mode : 'touch,wheel',               // mode of fullpage
        easing : [0, .93, .39, .98],
        continuous:true,
        beforeChange:function(index,thisPage) {
        },
        callback : function(index, thisPage) {     // callback when pageChange
            //切换对应的小菜单
            $('.sectionNav li i').each(function(){
                $(this).css({'fontSize':'0.7em','color':'#000000'})
            })
            $('.sectionNav li i').eq(index).css({'fontSize':'1.2em','color':'red'});
            //切换对应的小菜单结束
        }
    });
});

$(function(){
    //全滚屏小菜单
    //上下居中
    var client_height=document.body.clientHeight;//窗口可视区域的宽
    $('.sectionNav').css('top',(client_height-$('.sectionNav').height())/2);
    $('.sectionNav li').click(function(){
        runSection.go($(this).index());
    });
    //设置全滚屏小菜单上下居中结束

});
$(function(){
//        点击im出现名字
//        出现个人信息
//        然后改变文字
    var can=0;
    $('.know').click(function(){
        $('.knowBox').animate({
            width:'323px'
        });
        setTimeout(function(){
            can=1;
            $('.knowBox').css({
                transform:'translateZ(-500px) translateX(500px) translateY(0px) rotateY(0deg)',
                '-webkit-transform':'translateZ(-500px) translateX(500px) translateY(0px) rotateY(0deg)',
                width:'383px'
            });
            $('.cue').css({
                transform:'translateZ(-500px) translateX(500px) translateY(0px) rotateY(0deg)',
                '-webkit-transform':'translateZ(-500px) translateX(500px) translateY(0px) rotateY(0deg)'
            });
            $('.skillGo').animate({
                left:'0px'
            },1300);
            $('.know').animate({
                left:'-130px'
            },1300);
            $('.information').css({
                transform:'translateZ(0px) translateX(0px)',
                '-webkit-transform':'translateZ(0px) translateX(0px)'
            });
        },3000);

    });
    $('.skillGo').click(function(e){
        e.stopPropagation();
       if(can==1){
           $('.skill').css({
               opacity:'1',
               filter:'alpha(opacity:100)',
               transition:'2s',
               '-webkit-transition':'2s',
               transform:'rotateY(0deg)',
               '-webkit-transform':'rotateY(0deg)'
           });
           $('.information').css({
               transform:'rotateY(-90deg)',
               '-webkit-transform':'rotateY(-90deg)',
               left:'300px'
           });
           $('.knowBox').css({
               transform:'rotateY(-80deg)',
               '-webkit-transform':'rotateY(-80deg)',
               opacity:'0',
               filter:'alpha(opacity:0)'
           });

           $('.cue').css({
               display:'none'
           });
           $('.mainSoft').css({
               display:'block'
           });
       }
    });

    $('.mainSoftGo').click(function(e){
        e.stopPropagation();
        $('.mainSoft').css({
            opacity:'1',
            filter:'alpha(opacity:100)',
            transform:'rotateX(0deg)',
             '-webkit-transform':'rotateX(0deg)'
        });
        $('.skill').css({
            transform:'rotateX(-90deg)',
            '-webkit-transform':'rotateX(-90deg)'
        });
        $('.information').css({
            display:'none'
        });
        $('.otherSoft').css({
            display:'block'
        });

    });
    $('.otherSoftGO').click(function(e){
        e.stopPropagation();
        $('.otherSoft').css({
            opacity:'1',
            filter:'alpha(opacity:100)',
            transition:'2s',
            '-webkit-transition':'2s',
            transform:'translateZ(0px)',
            '-webkit-transform':'translateZ(0px)'
        });
        $('.mainSoft').css({
            transform:'translateZ(600px)',
            '-webkit-transform':'translateZ(600px)'
        });
        $('.antecedent').css({
            opacity:'1',
            filter:'alpha(opacity:100)',
            transform:' translateZ(500px) translateX(500px) rotateX(0deg)',
            '-webkit-transform':' translateZ(500px) translateX(500px) rotateX(0deg)'
        });
        $('.skill').css({
            display:'none'
        });
        $('.antecedent').css({
            display:'block'
        });
        setTimeout(function(){
            $('.mainSoft').css({
                opacity:'0',
                filter:'alpha(opacity:0)'
            });
        },3000)
    });
    $('.antecedentGo').click(function(e){
        e.stopPropagation();
        $('.otherSoft').css({
            transition:'2s',
            '-webkit-transition':'2s',
            transform:'translateZ(-6000px) translateX(-5000px)',
            '-webkit-transform':'translateZ(-6000px) translateX(-5000px)',
            opacity:'0',
            filter:'alpha(opacity:0)'
        });
        $('.antecedent').css({
            opacity:'1',
            filter:'alpha(opacity:100)',
            transition:'2s',
            '-webkit-transition':'2s',
            display:'block',
            transform:'translateZ(0px) translateX(0px)',
            '-webkit-transform':'translateZ(0px) translateX(0px)'
        });


    });
    $('.back').click(function(e){
        can=0;
//            e.stopPropagation();
        $('.knowBox').css({
            width:'123px',
            transform:'translateZ(0px) translateX(0px) translateY(0px) rotateY(0deg)',
            '-webkit-transform':'translateZ(-0px) translateX(0px) translateY(0px) rotateY(0deg)',
            opacity:'1',
            filter:'alpha(opacity:100)'
        });
        $('.skillGo').css({
            left:'130px'
        });
        $('.know').css({
            left:'0px'
        });
        $('.information').css({
            display:'block',
            transform:'translateZ(500px) translateX(-600px) translateY(-150px) rotateX(0deg)',
            '-webkit-transform':'translateZ(500px) translateX(-600px) translateY(-150px) rotateX(0deg)',
            left:'60px'
        });
        $('.skill').css({
            display:'block',
            opacity:'0',
            filter:'alpha(opacity:0)',
            transform:'rotateX(0deg) rotateY(90deg)',
            '-webkit-transform':'rotateX(0deg) rotateY(90deg)'
        });
        $('.mainSoft').css({
            transform:'translateZ(90px)  rotateX(90deg)',
            '-webkit-transform':'translateZ(90px)  rotateX(90deg)',
            opacity:'0',
            filter:'alpha(opacity:0)'
        });
        $('.otherSoft').css({
            display:'none',
            opacity:'0',
            filter:'alpha(opacity:0)',
            transform:'translateZ(-6000px)',
            '-webkit-transform':'translateZ(-6000px)'
        });
        $('.antecedent').css({
            opacity:'0',
            filter:'alpha(opacity:0)',
            transform:' translateZ(500px) translateX(-500px) rotateX(90deg)',
            '-webkit-transform':' translateZ(500px) translateX(-500px) rotateX(90deg)'
        });
    });
});
$(function(){
    var screenW=document.body.clientWidth;
    var screenH=document.documentElement.clientHeight;
    var centerX=screenW/2;
    var centerY=screenH/2;
    var mouseX,mouseY;
    $(document).mousemove(function(e){
        var resultX,resultY;
        mouseX= e.pageX;
        mouseY= e.pageY;
        resultX=mouseX-centerX;
        resultY=mouseY-centerY;
        $('#page32,#page33').css({
            transform:'translate('+resultX/40+'px,'+resultY/50+'px)',
            webkitTransform:'translate('+resultX/40+'px,'+resultY/50+'px)'
        });
        $('#page34,#page35').css({
            transform:'translate('+resultX/-40+'px,'+resultY/50+'px)',
            webkitTransform:'translate('+resultX/-40+'px,'+resultY/50+'px)'
        })
    })
})

