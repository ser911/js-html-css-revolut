$(".main-nav li").mouseenter(function() {
$(this).children(".dropdown-menu").show();

});
$(".main-nav li").click(function() {
$(this).children(".dropdown-menu").slideUp();

});
