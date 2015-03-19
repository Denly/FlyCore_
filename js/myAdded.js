
$(document).ready(function(){
  

//$('body').css('color','blue');
//$('.big_post').hide();
//$('h1').text('<h1>juuu</h1>');
	
	$('h2').append($('.flyLogo'));
	
//$('.big_post1').hide(); 
var hid=true;
/*      $('.grid_3').click(function(){
        if(hid){
        //$('.big_post1').text('欲向國外進口果蠅，您必須確定 <br> \n：okokok	');
        //$( ".big_post1" ).replaceWith($('.big_post4'));
        $('.big_post1').show(); hid=false;
      }else{
        $('.big_post1').hide(); hid=true;
      }
      });
*/
$('#i_1').click(function(){
  $('.big_post2').slideUp();$('.big_post3').slideUp();$('.big_post4').slideUp();
  $('.big_post1').slideToggle();
	/*if(hid){
        $( ".R_big_post" ).children().remove();
        $( ".R_big_post" ).append($('.big_post1').clone());
        $('.R_big_post').show(); hid=false;
      }else{
        $('.R_big_post').hide(); hid=true;
      }*/
});

$('#i_2').click(function(){
	$('.big_post1').slideUp();$('.big_post3').slideUp();$('.big_post4').slideUp();
  $('.big_post2').slideToggle();
});

$('#i_3').click(function(){
	$('.big_post2').slideUp();$('.big_post1').slideUp();$('.big_post4').slideUp();
  $('.big_post3').slideToggle();
});

$('#i_4').click(function(){
  $('.big_post2').slideUp();$('.big_post3').slideUp();$('.big_post1').slideUp();
  $('.big_post4').slideToggle();
});
//$(".R_big_post").slideUp();
  //$( ".big_post5" ).slideDown( "slow", function() {
$( "#i_5" ).click(function() {
  $(".big_post6").slideUp();$(".big_post7").slideUp();$(".big_post8").slideUp();
  $( ".big_post5" ).slideToggle( "slow", function() {
    // Animation complete.
  });
});
$( "#i_6" ).click(function() {
  $(".big_post5").slideUp();$(".big_post7").slideUp();$(".big_post8").slideUp();
  $( ".big_post6" ).slideToggle( "slow", function() {
    // Animation complete.
  });
});
$( "#i_7" ).click(function() {
  $(".big_post6").slideUp();$(".big_post5").slideUp();$(".big_post8").slideUp();
  $( ".big_post7" ).slideToggle( "slow", function() {
    // Animation complete.
  });
});
$( "#i_8" ).click(function() {
  $(".big_post6").slideUp();$(".big_post7").slideUp();$(".big_post5").slideUp();
  $( ".big_post8" ).slideToggle( "slow", function() {
    // Animation complete.
  });
});

});
