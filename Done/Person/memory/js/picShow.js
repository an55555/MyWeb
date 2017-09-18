/**
 * Created by Administrator on 2015/11/28.
 */
//瀑布流
$(document).ready(function(){
    $(window).on('load',function(){
        imgLoad();
    })
});
function imgLoad(){
    var boxWid=$('.picContain').outerWidth(true);
    var oneBox=$('.unitBox').eq(0).outerWidth(true);
    var lineNum=Math.floor(boxWid/oneBox);
    var boxArr=[];
    $('.unitBox').each(function(index,value){
        var boxHei=$('.unitBox').eq(index).outerHeight(true);
        if(index<lineNum){
            boxArr[index]=boxHei;
        }else{
            var minHei=Math.min.apply(null,boxArr);
            var minIndex= $.inArray(minHei,boxArr);
            $(value).css({
                'position':'absolute',
                'width':oneBox,
                'top':minHei+20,
                'left': $('.unitBox').eq(minIndex).position().left
            });
            boxArr[minIndex]+=$('.unitBox').eq(index).height()+20;
            $('.picContain').css("height",Math.max.apply(null,boxArr));
        }
    });
}

$(function(){
  $(window).scroll(function(){
    if($(window).scrollTop()>=1200){
        $('.workNavFlo').slideDown('slow');
    }else{
        $('.workNavFlo').slideUp('slow');
    }
  });
    $('.workNavFlo').click(function (e) {
        e.stopPropagation();
    });
})