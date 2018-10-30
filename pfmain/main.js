$(document).ready(function(){
    //페이지 스크롤링
   var ht = parseInt($(window).height());
    $(window).on("mousewheel", function (e) {
        if (e.originalEvent.wheelDelta < 0) {
            $("html,body").not(":animated").animate({
                scrollTop: "+=" + ht + "px"
            }, 700);
        } else {
            $("html, body").not(":animated").animate({
                scrollTop: "-=" + ht + "px"
            }, 700);
        }
        return false;
    }); 
    
    $("#gnb a").click(function(){
       var pgscroll = $($(this).attr("href")).offset().top;
        
        $("html,body").not(":animated").animate({
           scrollTop:pgscroll 
        }, 700);
    });
    
     // 이미지 마우스 오버시
    $("#pro2 .img-inner").on("mouseover", function(){
        $(this).stop().animate({"width":"24%"},900);
        //$(this).find('img').stop().animate({"width":"105%"},800);
    });
    // 마우스 아웃시
    $("#pro2 .img-inner").on("mouseout", function(){
        $(this).stop().animate({"width":"270px"},900);
    });
    
    // 이미지 마우스 오버시
    $("#pro3 .img-inner").on("mouseover", function(){
        $(this).stop().animate({"width":"35%"},900);
        //$(this).find('img').stop().animate({"width":"105%"},800);
    });
    // 마우스 아웃시
    $("#pro3 .img-inner").on("mouseout", function(){
        $(this).stop().animate({"width":"360px"},900);
    });
});