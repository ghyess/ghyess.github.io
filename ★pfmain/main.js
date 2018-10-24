$(document).ready(function(){
    var speed = 800; //스피드 수치로 사용할 변수
    
    function scrolling(obj){
        if(!obj){ //예외처리
            $('html, body').animate({scrollTop:0}, speed);
        } else {
            var posTop = $(obj).offset().top; // posTop = 매개변수로 들어온 컨텐츠 obj의 offset().top - 네비높이
            $('html, body').animate({scrollTop:posTop}, speed) // body의 스크롤 이동 : posTop
        }
    };
    $("#gnb .menu li a").click(function(){
        var direction = $(this).attr("href"); // direction = 클릭한 요소의 href 속성으로이동
        scrolling( direction ); // direction을 인자로 함수 실행
        return false;
    });
});