/**
 * Created by Administrator on 2015/9/11.
 */
$(document).ready(function(){

    $(window).on('load',function(){
        imgLoad();
        var lastHeight=$('.box').last().get(0).offsetTop+Math.floor($('.box').last().outerHeight(true));
        $(".container").css('height',lastHeight);
    })
});

function imgLoad(){
    var creenWid=$(window).width();
    var oneBox=$('.box').eq(0).outerWidth(true);//获取一个盒子的宽度
    var boxNum=Math.floor(window.screen.availWidth/oneBox);//获取一行可容许盒子的数量
    var boxArr=[];
    $('.box').each(function(index,value){
        var boxHeight=$('.box').eq(index).outerHeight(true);
        if(index<boxNum){
            boxArr[index]=boxHeight;//将第一行图片的高度存入数组
        }else{
            var minHei=Math.min.apply(null,boxArr);//获取数组中高度最小的
            var minIndex= $.inArray(minHei,boxArr);
            $(value).css({
                'position':'absolute',
                'width':oneBox,
                'top':minHei+20,
                'left': $('.box').eq(minIndex).position().left
            });
           boxArr[minIndex]+=$('.box').eq(index).height()+20;
        };
    });
}
