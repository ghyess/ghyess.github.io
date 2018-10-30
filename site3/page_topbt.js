$(document).ready(function(){
            // 페이지 스크롤링
            var ht = parseInt($(window).height());
            $(window).on("mousewheel", function(e){
                if(e.originalEvent.wheelDelta < 0){
                    $("html, body").not(":animated").animate({scrollTop:"+="+ht+"px"},800);
                } else {
                    $("html, body").not(":animated").animate({scrollTop:"-="+ht+"px"})
                }
                return false;
            });
            
            //탑버튼
            $("#toTop").hide;
                $(function(){
                    $(window).scroll(function(){
                    if ($(this).scrollTop() > 500) {
                        $('#toTop').fadeIn();
                    } else {
                        $('#toTop').fadeOut();
                    }
                });
            });
            $('#toTop').click(function(){
                $('body, html').animate({
                    scrollTop: 0
                }, 800);
                return false;
            });
        });