$(document).ready(function () {

    var showMenue = false;


    $(".menu-btn").click(function() {
        if (!showMenue) {
            $(".menu-btn").addClass("close");
            showMenue = true;
            //$(".menu-nav").show();
            $(".menu-branding").slideDown("slow");         
            $(".menu-nav").slideDown("slow");            
        } else {
            $(".menu-btn").removeClass("close");
            showMenue = false;
            //$(".menu-nav").hide();
            $(".menu-branding").slideUp("slow");
            $(".menu-nav").slideUp("slow");            
        }
    });
});