$(document).ready(function() {
    $("#hd .nv_area").mouseover(function() {
        $("#gnb").stop().slideDown(600);
    });
    $("#gnb").mouseleave(function() {
        $("#gnb").stop().slideUp(300);
    });
});