$(document).ready(function(){
    //메뉴 활성화
   $("#hd #menu_bt").click(function(){
      $("#gnb").addClass("act");
       $(".gnb_bg").addClass("act").fadeIn(500);
   });
    $("#gnb #close").click(function(){
       $("#gnb").removeClass("act");
        $(".gnb_bg").removeClass("act").fadeOut(250);
    });
    
    //메뉴 선택
    $("#gnb .menu>li>a").removeAttr("href");
    $("#gnb .menu>li").click(function(){
        $(this).addClass("on");
       $(this).find(".sub").stop().slideDown(600);
        $(this).siblings().find(".sub").stop().slideUp(300);
        $(this).siblings().removeClass("on");
    });
    
    //메인 슬라이딩
    var mWd = parseInt($("#main .mainBox").width());
    var mCnt = $('#main .mainBox li').length;
    
    $('#main .btn').click(function(){
       var mBtn = $(this).index()*-1;
        
        $(this).siblings("button").removeClass("on");
        $(this).addClass("on");
        $('#main .mainBox').not(":animated").animate({"margin-left":mWd*mBtn+"px"},600);
    });
});