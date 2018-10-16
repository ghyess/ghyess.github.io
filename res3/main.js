$(document).ready(function() {
    $("#hd .nv_area").mouseover(function() {
        $("#gnb").stop().slideDown(600);
    });
    $("#gnb").mouseleave(function() {
        $("#gnb").stop().slideUp(300);
    });
    
    //슬라이드
    var wd = parseInt($("#main ").width());
    var cnt = $("#main .mainBox li").length;
    var intv = setInterval(function() { nAni();},4000);
    
    function nAni() {
        $("#main .mainBox").not(":animated").animate({"margin-left":-wd+"px"},1000, function(){
            $("#main .mainBox li").eq(0).appendTo($("#main .mainBox"));
            $("#main .mainBox").css("margin-left", "0px");
        });
    }
    function pAni() {
        $("#main .mainBox li").eq(cnt-1).prependTo($("#main .mainBox"));
        $("#main .mainBox").css("margin-left", -wd+"px");
        $("#main .mainBox").not(":animated").animate({"margin-left":"0px"}, 1000);
    };
    
    //버튼박스 좌
    $("#main #left").click(function() {
        clearInterval(intv);
        pAni();
        intv = setInterval(function() { nAni(); }, 4000);
    });
    //버튼박스 우
    $("#main #right").click(function() {
        clearInterval(intv);
        nAni();
        intv = setInterval(function() { nAni(); }, 4000);
    });
});