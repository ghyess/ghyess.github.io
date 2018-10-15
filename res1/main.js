$(document).ready(function(){
    // 메뉴
    $("#gnb .menu>li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown(600);
    });
    $("#gnb .menu>li").mouseleave(function(){
        $(this).find(".submenu").stop().slideUp(400);
    });
    
    //슬라이드
    var wd = parseInt($("#vs").width());
    var intv = setInterval(function() { nAni(); },4000);
    
    function nAni() {
        $("#vs .imgBox").not(":animated").animate({"margin-left" : -wd+"px"}, 1000, function(){
            $("#vs .imgBox li").eq(0).appendTo($("#vs .imgBox"));
            $("#vs .imgBox").css("margin-left", "0px");
            $("#vs .btn_list .btn").removeClass("on");
            $("#vs .btn_list .btn").eq(0).appendTo($("#vs .btn_list"));
            $("#vs .btn_list .btn").eq(0).addClass("on");
        });
    }
    
    $("#vs .btn_list .btn").click(function() {
        clearInterval(intv);
        var idx = $(this).index();
        for (var i = 0; i < idx-2; i++) {
            $("#vs .imgBox li").eq(0).appendTo($("#vs .imgBox"));
            $("#vs .btn_list .btn").eq(0).appendTo($("#vs .btn_list"));
        }
        nAni();
        intv = setInterval(function() { nAni(); }, 4000);
    });
    
    //컨텐츠1 탭버튼
    $("#con1 .pro_btn").click(function(){
       $(this).siblings().removeClass("act"); 
        $(this).addClass("act");
    });
    
    $("#con1 #fp").click(function(){
       $("#con1 #list1").css('display', '');
        $('#con1 #list2, #con1 #list3').css('display', 'none');
    });
    $("#con1 #pick").click(function(){
       $("#con1 #list2").css('display', 'block');
        $('#con1 #list1, #con1 #list3').css('display', 'none');
    });
    $("#con1 #wnew").click(function(){
       $("#con1 #list3").css('display', 'block');
        $('#con1 #list1, #con1 #list2').css('display', 'none');
    });
});