// ======= java script =======
// ======= jquery ===========
$(function(){

    // preloader strat
    $(window).load(function () {
        $("#loading").fadeOut(400);
      });
    // preloader end
    //   mixitup
    var mixer = mixitup('#mixUp', {
        animation: {
            duration: 300
        }
    });
})