

$(window).resize(function(){
	var lineHeight = 60;
	var windowHeight = $(window).height();
	
	var numLines = Math.floor(windowHeight/lineHeight);
	var newHeight = (numLines * lineHeight) - 420;
	
  $('#tweet').css({
    height: newHeight,
  });
	

	$('#listener').css({
    left: ($(window).width() - $('#listener').outerWidth())/2,
    top: ($(window).height() + 120 - $('#listener').outerHeight())/2		
	});





	//console.log(newHeight);


/*
  $('#tweet').css({
    height: ($(window).height() - $('.title').outerWidth())/2,
  });
*/
});



  function init() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  draw(ctx);
}
function draw(ctx) {
  // layer1/Path
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(88.5, 161.0);
  ctx.bezierCurveTo(45.7, 161.0, 11.0, 126.3, 11.0, 83.5);
  ctx.bezierCurveTo(11.0, 40.7, 45.7, 6.0, 88.5, 6.0);
  ctx.bezierCurveTo(131.3, 6.0, 166.0, 40.7, 166.0, 83.5);
  ctx.bezierCurveTo(166.0, 126.3, 131.3, 161.0, 88.5, 161.0);
  ctx.closePath();
  ctx.lineWidth = 2.0;
  ctx.strokeStyle = "rgb(255, 255, 255)";
  ctx.stroke();
  // layer1/Path
  ctx.beginPath();
  ctx.moveTo(78.5, 156.0);
  ctx.bezierCurveTo(35.7, 156.0, 1.0, 121.3, 1.0, 78.5);
  ctx.bezierCurveTo(1.0, 35.7, 35.7, 1.0, 78.5, 1.0);
  ctx.bezierCurveTo(121.3, 1.0, 156.0, 35.7, 156.0, 78.5);
  ctx.bezierCurveTo(156.0, 121.3, 121.3, 156.0, 78.5, 156.0);
  ctx.closePath();
  ctx.stroke();
  ctx.restore();
}




$(document).ready(function() {
  $(window).resize();

	// draw logo
	init();


  // stratus init
  $.stratus({
    links: 'http://soundcloud.com/roteproductions/sets/kutsal_sumuk-tape_01/',
    color: '000'
  });

  // superslides init
  $('#slides').superslides({
    play: false,
    slide_easing: 'easeInOutCubic',
    slide_speed: 800
  });
  // hook up nav
  $("#navId00").click(function() { 
    if ($(this).hasClass('selected')) {
      return false; 
    } else {
      $('#slides').superslides('animate', 0); 
      $('#nav a').removeClass('selected');
      $('#navId00').addClass('selected');
    }
  });
  $("#navId01").click(function() { 
    if ($(this).hasClass('selected')) {
      return false; 
    } else {
      $('#slides').superslides('animate', 1); 
      $('#nav a').removeClass('selected');
      $('#navId01').addClass('selected');
    }
  });
  $("#navId02").click(function() { 
    if ($(this).hasClass('selected')) {
      return false; 
    } else {
      $('#slides').superslides('animate', 2); 
      $('#nav a').removeClass('selected');
      $('#navId02').addClass('selected');
    }
  });
  $("#navId03").click(function() { 
    if ($(this).hasClass('selected')) {
      return false; 
    } else {
      $('#slides').superslides('animate', 3); 
      $('#nav a').removeClass('selected');
      $('#navId03').addClass('selected');
    }
  });
  $("#navId04").click(function() { 
    if ($(this).hasClass('selected')) {
      return false; 
    } else {
      $('#slides').superslides('animate', 4); 
      $('#nav a').removeClass('selected');
      $('#navId04').addClass('selected');
    }
  });
  $("#navId05").click(function() { 
    if ($(this).hasClass('selected')) {
      return false; 
    } else {
      $('#slides').superslides('animate', 5); 
      $('#nav a').removeClass('selected');
      $('#navId05').addClass('selected');
    }
  });

  // hyphenate body text
  Hyphenator.config({
    classname : 'hyphenate',
    minwordlength : 8
  });
  Hyphenator.run();





	//convert external hrefs
	  $('a').each(function() {
	    var a = new RegExp('/' + window.location.host + '/');
	    if(!a.test(this.href)) {
	       $(this).click(function(event) {
	         event.preventDefault();
	         event.stopPropagation();
	         window.open(this.href, '_new');
	       });
	    }
	  });


});