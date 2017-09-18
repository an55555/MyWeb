/**
 * Created by Administrator on 2015/11/24.
 */

$(function(){
    var screenW=document.body.clientWidth;
    var screenH=document.documentElement.clientHeight;
    var centerW=screenW/2;
    var centerH=screenH/2;
    var mouseX,mouseY;
    function getAngle(x1, y1,  x2, y2){
        var x = Math.abs(x1 - x2);
        var y = Math.abs(y1 - y2);
        var z = Math.sqrt(x*x + y*y);
        return Math.round((Math.asin(y / z) / Math.PI*180));

    }

    $(document).mousemove(function(){
        mouseX=event.x;
        mouseY=event.y;
        var result=getAngle(event.x,event.y,centerW,centerH);
        if(mouseX<centerW){
            if(mouseY>centerH){
                result=(90-result)+90;
            }else{
                result=-((90-result)+90);
            }
        }else{
            if(mouseY<centerH){
                result=-result;
            }
        }
       $('.man').css('transform',' rotate('+result+'deg)');
        $('.man').css('-webkit-transform','rotate('+result+'deg)');
        $('.man #manPho').css('transform',' rotate('+(-result)+'deg)');
        $('.man #manPho').css('-webkit-transform',' rotate('+(-result)+'deg)');
    })
});
$(function(){
    $('.go').css({'animation-play-state':'running','-webkit-animation-play-state':'running'});
    $('.go').each(function(){
        $(this).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){
            $(this).removeClass('go');
            //console.log(1);
        })
    })

})
