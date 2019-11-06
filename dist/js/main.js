$(document).ready(function () {

    var showMenue = false;


    $(".menu-btn").click(function() {
        if (!showMenue) {
            $(".menu-btn").addClass("close");
            showMenue = true;
            //$(".menu-nav").show();         
            $(".menu-nav").slideDown("slow");
        } else {
            $(".menu-btn").removeClass("close");
            showMenue = false;
            //$(".menu-nav").hide();
            $(".menu-nav").slideUp("slow");
        }
    });
});