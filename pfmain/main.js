
$(document).ready(function(){
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
    
});