$(function(){
    var ua = window.navigator.userAgent.toLowerCase();  //判断设备
    var iPhone =ua.match(/iPhone/i);
    var iPod = ua.match(/iPod/i);
    var iPad = ua.match(/iPad/i);
    var Android = ua.match(/Android/i);//toLowerCase() 方法用于把字符串转换为小写
    if(Android ||iPhone ||iPod||iPad){         //判断设备为   Android ||iPhone ||iPod||iPad 时宽度为当前屏宽
        $width($(window).width());
    }else{                //否则当前宽度大于640时，设置宽度为640 否则时当前屏宽
        if($(window).width()>640)  {
            $width(640);
        }else{
            $width($(window).width());
        }
    }
    //   $(".comic_app")   $(".comic_load_top")     $(".comic_load_bottom")宽度的提取到          $width
    function $width($widths){
        $(".comic_app").css({"width":$widths});
        $(".comic_load_top").css({"left":($widths-$(".comic_load_top").width())/2});
        $(".comic_load_bottom").css({"left":($widths-$(".comic_load_bottom").width())/2});
    }
})