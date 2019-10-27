$(document).ready(function () {

    var showMenue = false;


    $(".menu-btn").click(function() {
        if (!showMenue) {
            $(".menu-btn").addClass("close");
            showMenue = true;         
        } else {
            $(".menu-btn").removeClass("close");
            showMenue = false;
        }
    });
});