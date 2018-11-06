$(document).ready(function(){
    // 시작시 body, html 잠금
    $("body, html").addClass("lock");
    
    // 페이지 로딩 애니메이션
    setTimeout(function() {
        $(".loader-moving").addClass("end");
        $("body, html").removeClass("lock");
    }, 1000);
});