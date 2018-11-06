$(document).ready(function(){
    //페이지 스크롤링
   var ht = parseInt($(window).height());
    $(window).on("mousewheel", function (e) {
        if (e.originalEvent.wheelDelta < 0) {
            $("html,body").not(":animated").animate({
                scrollTop: "+=" + ht + "px"
            }, 600);
        } else {
            $("html, body").not(":animated").animate({
                scrollTop: "-=" + ht + "px"
            }, 600);
        }
        return false;
    }); 
    
    $("#gnb a").click(function(){
       var pgscroll = $($(this).attr("href")).offset().top;
        
        $("html,body").not(":animated").animate({
           scrollTop:pgscroll 
        }, 600);
    });
    
     // 프로2 이미지 마우스 오버시
    var pro2img =  $("#pro2 > .pro-img > div");
    $("#pro2 > .pro-img > div").mouseover(function() {
        $(this).siblings().css("width", "20%");
        $(this).css("width", "40%");
    });
    // 프로2 이미지 마우스 아웃시
    $("#pro2 .img-inner").mouseleave(function() {
       $(pro2img).css("width", "25%"); 
    });
    
    //프로3 이미지 마우스 오버시
    var pro3img =  $("#pro3 > .pro-img > div");
    $("#pro3 > .pro-img > div").mouseover(function() {
        $(this).siblings().css("width", "25%");
        $(this).css("width", "50%");
    });
    //프로3 이미지 마우스 아웃시
    $("#pro3 .img-inner").mouseleave(function() {
       $(pro3img).css("width", "33.3333%"); 
    });
});