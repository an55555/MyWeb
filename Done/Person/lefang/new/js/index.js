/**
 * Created by Administrator on 2015/9/7.
 */
//                $(".banner_img").animate({left:"-="+banner_li_wid},"slow");  //连续触发动画


$(function(){
    var client_width=$(document.body).outerWidth(true);//窗口高
    var client_height=$(document.body).outerHeight(true);//窗口宽
    $('.bannerOneLi').css('background-size',client_width)
//            动态创建小图，数量等于图片的数量
    $(".banner_img li").each(function(){
        $(".smallImg").append("<li></li>");
    });
//           设置小图片的颜色
    $(".smallImg li").first().css("background-image","url("+"./new/images/banner/smallLi.png"+")");

    //设置小图的总长度和高度，为了居中
    $(".smallImg").css("width",$(".smallImg li").length* $(".smallImg li").outerWidth(true));//true:计算边距在内
    $(".smallImg").css("height",$(".smallImg li").outerHeight(true));//true:计算边距在内
    $(".smallImg").css("left",(window.screen.width-$(".smallImg").outerWidth(true))/2);//小图部分居中

    //左右按钮上下居中
    //$(".banner_img img").eq(1).load(function(){ //等图片加载完之后 执行，要不然不稳定
    //    $(".bannerBtn").css("top",($(".banner").outerHeight(true)-$(".bannerPre").outerWidth(true))/2);
    //})

    var bannerFist=$(".banner_img li").first().clone(true);//克隆第一张图片
    var bannerLast=$(".banner_img li").last().clone(true);//克隆最后一张图片
    $(".banner_img").append(bannerFist);//在图片最后插入克隆的第一张图片
    $(".banner_img").prepend(bannerLast);//在图片最前插入克隆的第后一张图片


    $(".banner_img li").css("width",client_width);//把图片宽度为外围DIV的宽度，启到自适应的效果
    var banner_mun=$(".banner_img li").length;//获取图片的数量
    $(".banner_img").css("width",banner_mun*client_width);//设置大图ul的长度为全部图片的长度和
    $(".banner_img").css("left",-client_width);//设置一开始显示第一张图片，因为默认第一张为克隆的第后一张。

    firstBanner();

//            点击下一张
    var vv=1;//初始化索引值vv等于1
    var nowVV;
    $(".bannerNex").click(function(){
        if(!$("*").is(":animated")){//判断banner_img是否正处于动画状态
            nowVV=vv;
            vv++;
            bannerMoveBefore();
        }
    })
//            点击上一张
    $(".bannerPre").click(function(){
        if(!$("*").is(":animated")){//判断banner_img是否正处于动画状态
            nowVV=vv;
            vv--;
            bannerMoveBefore();
        }
    });
//            点击小图片，切换对应的大图
    $(".smallImg li").click(function(){
        nowVV=vv;
        vv=$(this).index()+1;
        if(nowVV==vv){
            return
        }
        bannerMoveBefore();
    })

    //banner动画函数
    var bannerMove=function(){
        $(".banner_img").animate({left:-vv*client_width},"slow",function(){//banner_img开始动画
            switch(vv){
                case 0:
                    fourBanner();
                    break;
                case 1:
                    firstBanner();
                    break;
                case 2:
                    twoBanner();
                    break;
                case 3:
                    threeBanner();
                    break;
                case 4:
                    fourBanner();
                    break;
                case 5:
                    firstBanner();
                    break;
            }

//        大图切换完成，执行小图变化  先将所以小图的颜色恢复，然后再给对应的小图颜色
            $(".smallImg li").each(function(){
                $(this).css("background-image","url(./new/images/banner/smallLi2.png)");
            });
            $(".smallImg li").eq(vv-1).css("background-image","url(./new/images/banner/smallLi.png)");
        })
    }
    function tabBan(){
        if(vv==banner_mun-1){                            //如果已经是最后一张图片
            $(".banner_img").css("left",-client_width);//将整体图片left跳回第一张。
            vv=1;                                          //索引值返回1
        };
        if(vv==0){                            //如果已经是第一张图片
            $(".banner_img").css("left",-(banner_mun-2)*client_width);//将整体图片left跳回第一张。
            vv=banner_mun-2;                                          //索引值返回1
        }
    }
    function bannerMoveBefore(){

        switch(nowVV){
            case 0:
                fourBannerBefore();
                break;
            case 1:
                firstBannerBefore();
                break;
            case 2:
                twoBannerBefore();
                break;
            case 3:
                threeBannerBefore();
                break;
            case 4:
                fourBannerBefore();
                break;
            case 5:
                firstBannerBefore();
                break;
        }
    }
    //    自动切换
    autoRun();
    function autoRun() {
        timer = setInterval(function() {
            $(".bannerNex").click();
        }, 10000);
    };
    //$(".banner").mouseover(function(){
    //    clearInterval(timer);
    //});
    //$(".banner").mouseleave(function(){
    //    autoRun();
    //})
    //第一张Banner动画

    //头尾切换
    //每个BANNNER的切换函数
    function firstBanner(){
        $('.bannerOneLi .imgBorder img').animate({'margin':0,'opacity':1},'slow',function(){
            tabBan()
        })
    }

    function twoBanner(){
        $('.bannerTwoLi #twoImg').animate({'top':70,'opacity':1,'left':20},'slow')
        $('.bannerTwoLi h1').animate({'right':100},'slow',function(){
            tabBan()
        });
    }

    function threeBanner(){
        $('.bannerThreeLi .text').animate({'left':100,'opacity':1},'slow',function(){
            tabBan()
        });
    }

    function fourBanner(){
        $('.bannerFourLi #bannerFourLiImg1').animate({'left':0,'opacity':1},'slow',function(){
            $('.bannerFourLi #bannerFourLiImg2').animate({'left':500,'opacity':1},'slow',function(){
                tabBan()
            });
        });
    }
    //每个BANNNER的切换之前的函数
    function firstBannerBefore(){
        $('.bannerOneLi .imgBorder img').animate({'margin-top':20,'opacity':0},'slow',function(){
            bannerMove();
        })
    }
    function twoBannerBefore(){
        $('.bannerTwoLi h1').animate({'right':-400},function(){
            $('.bannerTwoLi #twoImg').animate({'top':80,'opacity':0,'left':10},'slow',function(){
                bannerMove();
            });
        });
    }

    function threeBannerBefore(){
        $('.bannerThreeLi .text').animate({'left':-400,'opacity':0},'slow',function(){
            bannerMove();
        });
    }

    function fourBannerBefore(){
        $('.bannerFourLi #bannerFourLiImg2').animate({'left':-400,'opacity':0},'slow',function(){
            $('.bannerFourLi #bannerFourLiImg1').animate({'left':-400,'opacity':0},'slow',function(){
                bannerMove();
            })
        });
    }
});
