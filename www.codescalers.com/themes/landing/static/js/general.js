$(document).ready(function(){



$('.panel-collapse').on('show.bs.collapse',function(){
    $(this).prev('.panel-heading').addClass("active");
});

$('.panel-collapse').on('hide.bs.collapse',function(){
    $(this).prev('.panel-heading').removeClass("active");
});

var str2 = window.location.hash;
$(str2).children(".panel-collapse").addClass('in').removeClass('collapse').prev(".panel-heading").toggleClass('active');




var str=location.href.toLowerCase();
    $('li.active').removeClass("active");
  $('.nav li a').filter(function() {return this.href.toLowerCase() == str; }).parents('li').addClass('active');
     






function reduceMenu() {
$('#mainMenu').addClass('scroll');
}

function expandMenu() {
$('#mainMenu').removeClass('scroll');
}

$(window).on('scroll', function(){
if ($(window).scrollTop() > 81) {
  reduceMenu();
} else {
  expandMenu();
}
});

          
});