$(".main-nav li").mouseenter(function() {
$(this).children(".dropdown-menu").slideDown(400);

});

$(".main-nav li").click(function() {
$(this).children(".dropdown-menu").slideUp(400);

});

// $(".main-nav li").mouseenter(function(){
//   $(this).children("dropdown-menu").removeClass("dropdown-menu");
//   $(this).children("dropdown-menu").addClass("dropdown-visible");
// });
