$(document).ready(function () {

    var showMenue = false;


    $(".menu-btn").click(function() {
        if (!showMenue) {
            $(".menu-btn").addClass("close");
            showMenue = true;
            $(".menu-branding").slideDown("slow");          
            $(".menu-nav").slideDown("slow");
            $(".menu-branding").show();
            $(".menu-nav").show();
        } else {
            $(".menu-btn").removeClass("close");
            showMenue = false;
            $(".menu-branding").slideUp("slow");
            $(".menu-nav").slideUp("slow"); 
            $(".menu-branding").hide();
            $(".menu-nav").hide();
        }
    });
});