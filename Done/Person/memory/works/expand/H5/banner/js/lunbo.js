
$(document).ready(function(){
    //$(document.body).css("width", window.screen.availWidth);

    var t_img; // 定时器
    var isLoad = true; // 控制变量
// 判断图片加载状况，加载完成后回调
    isImgLoad(function(){
        lunboBox();
    });
// 判断图片加载的函数
    function isImgLoad(callback){
        $(".banner_img img").each(function(){
            // 找到为0就将isLoad设为false，并退出each
            if(this.height === 0){
                isLoad = false;
                return false;
            }
        });
        // 为true，没有发现为0的。加载完毕
        if(isLoad){
            clearTimeout(t_img); // 清除定时器
            // 回调函数
            callback();
            // 为false，因为找到了没有加载完成的图，将调用定时器递归
        }else{
            isLoad = true;
            t_img = setTimeout(function(){
                isImgLoad(callback); // 递归扫描
            },500); // 我这里设置的是500毫秒就扫描一次，可以自己调整
        }
    }

    //$(".banner_img img").eq(1).load(function(){ //等图片加载完之后执行，要不然不稳定
    //
    //});
    function lunboBox(){
        $(".banner_img img").each(function(){
            $(this).css('display','block');
        })
        //            动态创建小图，数量等于图片的数量
        $(".banner_img li").each(function(){
            $(".smallImg").append("<li></li>");
        });
//           设置小图片的颜色
        $(".smallImg li").first().css("background-color","#ec5210");

        //设置小图的总长度和高度，为了居中
        $(".smallImg").css("width",$(".smallImg li").length* $(".smallImg li").outerWidth(true));//true:计算边距在内
        $(".smallImg").css("height",$(".smallImg li").outerHeight(true));//true:计算边距在内
        $(".smallImg").css("left",($(".banner").outerWidth(true)-$(".smallImg").outerWidth(true))/2);//小图部分居中


        var bannerFist=$(".banner_img li").first().clone(true);//克隆第一张图片
        var bannerLast=$(".banner_img li").last().clone(true);//克隆最后一张图片
        $(".banner_img").append(bannerFist);//在图片最后插入克隆的第一张图片
        $(".banner_img").prepend(bannerLast);//在图片最前插入克隆的第后一张图片

        $(".banner_img img").css("width", $(".banner").outerWidth(true));//把图片宽度为外围DIV的宽度，启到自适应的效果
        var banner_mun=$(".banner_img li").length;//获取图片的数量
        var banner_li_wid=$(".banner_img li").outerWidth();//获取一张图片的长度
        $(".banner_img").css("width",banner_mun*banner_li_wid);//设置大图ul的长度为全部图片的长度和
        $(".banner_img").css("left",-banner_li_wid);//设置一开始显示第一张图片，因为默认第一张为克隆的第后一张。

        var banStart_x,banEnd_x,banMove_x;
        var nowMove=-banner_li_wid;
        var vv=1;//初始化索引值vv等于1
        var touchMove=false;
        $('.banner_img').on('touchstart',function(e){
            e.stopPropagation();
            nowMove= $('.banner_img').position().left;
            banStart_x= e.originalEvent.targetTouches[0].clientX;
        });
        $('.banner_img').on("touchmove",function(e){
            touchMove=true;
            clearInterval(timer);
            e.preventDefault();
            e.stopPropagation();
            banEnd_x = e.originalEvent.targetTouches[0].clientX;
            banMove_x=banEnd_x-banStart_x;
            $('.banner_img').css('left',nowMove+banMove_x);
        });
        $('.banner_img').on('touchend',function(e){
            if(touchMove){
                if(Math.abs(banMove_x)<banner_li_wid/2){
                    bannerMove();
                }else{
                    if(banMove_x>0){
                        vv--;
                        bannerMove();
                    }else{
                        vv++;
                        bannerMove();
                    };
                };
                touchMove=false;
            }else{
                autoRun();
            }

        });

        //            点击上一张
        $(".bannerNex").click(function(){
            if(!$(".banner_img").is(":animated")){//判断banner_img是否正处于动画状态
                vv++;
                bannerMove();
            }
        });

//            点击上一张
        $(".bannerPre").click(function(){
            if(!$(".banner_img").is(":animated")){//判断banner_img是否正处于动画状态
                vv--;
                bannerMove();
            }
        });

//            点击小图片，切换对应的大图
        $(".smallImg li").click(function(){
            vv=$(this).index()+1;
            bannerMove();
        })

        //banner动画函数
        var bannerMove=function(){
            clearInterval(timer);
            $(".banner_img").animate({left:-vv*banner_li_wid},"slow",function(){//banner_img开始动画

                if(vv==banner_mun-1){                            //如果已经是最后一张图片
                    $(".banner_img").css("left",-banner_li_wid);//将整体图片left跳回第一张。
                    vv=1;                                          //索引值返回1
                };
                if(vv==0){                            //如果已经是第一张图片
                    $(".banner_img").css("left",-(banner_mun-2)*banner_li_wid);//将整体图片left跳回第一张。
                    vv=banner_mun-2;                                          //索引值返回1
                }
                autoRun();
//                    大图切换完成，执行小图变化  先将所以小图的颜色恢复，然后再给对应的小图颜色
                $(".smallImg li").each(function(){
                    $(this).css("background-color","#eeeeee");
                });
                $(".smallImg li").eq(vv-1).css("background-color","#ec5210");
            });
        }
        //    自动切换
        autoRun();
        var timer;
        function autoRun() {
            clearInterval(timer);
            timer = setInterval(function() {
                vv++;
                bannerMove();
            }, 5000);
        };
        $(".banner").mouseover(function(){

            clearInterval(timer);
        });
        $(".banner").mouseleave(function(){
            autoRun();
        })
    }

});