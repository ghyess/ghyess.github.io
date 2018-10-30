$(document).ready(function(){
   var intv = setInterval(function() { nextAni(); }, 3000);
    var wd = parseInt($("#vs").width()) * -1;
    
    //슬라이드
    function nextAni() {
		$(".imgFrame").animate({"margin-left" : wd }, 800, function() {
			$(".imgFrame li").eq(0).appendTo($(".imgFrame"));
			$(".imgFrame").css("margin-left", "0px");
		});
	};
	function prevAni() {
		$(".imgFrame li").eq(4).prependTo($(".imgFrame"));
		$(".imgFrame").css("margin-left", wd);
		$(".imgFrame").animate({"margin-left" : "0px" }, 800);	
	};
    
    //좌우 버튼
	$(".sliderBtn .slider.right").click(function() {
		clearInterval(intv);
		nextAni();
		intv = setInterval(function () { nextAni(); }, 3000);	
	});
    
	$(".sliderBtn .slider.left").click(function() {
		clearInterval(intv);
		prevAni();
		intv = setInterval(function () { nextAni(); }, 3000);	
	});
    
    //버튼 목록
    $(".sliderNumFrame label").click(function(){
       var this_btn = parseInt($(this).attr("data-value")) - 1;
        $(".imgFrame").animate({"margin-left" : wd*this_btn }, 800);
        $(".sliderNumBtn label").removeClass("on");
        $(this).addClass("on");
    });
});