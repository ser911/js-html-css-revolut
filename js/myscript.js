$(".main-nav li").mouseenter(function() {
$(this).children(".dropdown-menu").show(400);

});
$(".main-nav li").mouseleave(function() {
$(this).children(".dropdown-menu").slideUp(400);

});
