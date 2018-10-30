$(document).ready(function(){
    //사이트맵
  $(".sitemap_icon").click(function(){
      $(".collap").fadeIn(500);
  });
    $(".closeBtn2").click(function(){
       $(".collap").fadeOut(300); 
    });
    
    //메뉴
    $("#gnb .menu").mouseover(function(){
        $(this).find(".MenuGuid").stop().slideDown(600);
        $(this).siblings().find(".MenuGuid").stop().slideUp(600);
    });
    
    $("#gnb .menu").mouseout(function(){
        $(this).find(".MenuGuid").stop().slideUp(600);
    })
});