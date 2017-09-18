/**
 * Created by Administrator on 2015/9/7.
 */
//                $(".banner_img").animate({left:"-="+banner_li_wid},"slow");  //连续触发动画


$(function(){
//            动态创建小图，数量等于图片的数量
    $(".banner_img li").each(function(){
        $(".smallImg").append("<li></li>");
    });
//           设置小图片的颜色
    $(".smallImg li").first().css("background-color","#189ae6");

    //设置小图的总长度和高度，为了居中
    $(".smallImg").css("width",$(".smallImg li").length* $(".smallImg li").outerWidth(true));//true:计算边距在内
    $(".smallImg").css("height",$(".smallImg li").outerHeight(true));//true:计算边距在内
    //$(".smallImg").css("left",($(".banner").outerWidth(true)-$(".smallImg").outerWidth(true))/2);//小图部分居中
    $(".smallImg").css("right",50);//小图部分居中

    //左右按钮上下居中
    $(".banner_img img").eq(1).load(function(){ //等图片加载完之后 执行，要不然不稳定
        $(".banner").css("height",$(".banner_img img").outerHeight());
        $(".bannerBtn").css("top",($(".banner").outerHeight(true)-$(".bannerPre").outerWidth(true))/2);
    })


    $(".banner_img li").eq(0).css("z-index",1);
    $(".banner_img img").css("width", $(".banner").outerWidth(true));//把图片宽度为外围DIV的宽度，启到自适应的效果


//            点击下一张
    var vv=0;//初始化索引值vv等于1
    var nowZ=1;
    $(".bannerNex").click(function(){
        if(!$(".banner_img").is(":animated")){//判断banner_img是否正处于动画状态
            vv++;
            nowZ++;
            bannerMove();
        }
    })
//            点击上一张
    $(".bannerPre").click(function(){
        if(!$(".banner_img").is(":animated")){//判断banner_img是否正处于动画状态
            vv--;
            nowZ++;
            bannerMove();
        }
    });
//            点击小图片，切换对应的大图
    $(".smallImg li").click(function(){
        vv=$(this).index();
        nowZ++;
        bannerMove();
    })

    //banner动画函数
    var bannerMove=function(){
        if(vv==$(".banner_img li").length){
            vv=0;
        }
        if(vv==-1){
            vv=$(".banner_img li").length-1;
        }
        $(".bannerBtn,.smallImg").css("z-index",nowZ+1);//按钮和底部小图的层级永远比图片多1;
        $(".banner_img li").eq(vv).css({"z-index":nowZ,"display":"none"});//将对应的图片层级提到最前
        $(".banner_img li").eq(vv).fadeIn();
//    大图切换完成，执行小图变化  先将所以小图的颜色恢复，然后再给对应的小图颜色
        $(".smallImg li").each(function(){
            $(this).css("background-color","#eeeeee");
        });
        $(".smallImg li").eq(vv).css("background-color","#189ae6");
    }

    //    自动切换
    autoRun();
    function autoRun() {
        timer = setInterval(function() {
            if(!$(".banner_img").is(":animated")){//判断banner_img是否正处于动画状态
                vv++;
                nowZ++;
                bannerMove();
            }
            //$(".bannerNex").click();
        }, 8000);
    };
    $(".banner").mouseover(function(){
        clearInterval(timer);
    });
    $(".banner").mouseleave(function(){
        autoRun();
    })

})
