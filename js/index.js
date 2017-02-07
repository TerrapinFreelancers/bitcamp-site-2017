$(document).ready(function(){
  adjustLogo();
	$('#nav-icon2').click(function(){
		$(this).toggleClass('open');
    $( ".menu" ).slideToggle( "slow");
	});
  $( ".menu" ).hide();
});
$(window).on('resize', adjustLogo);
function adjustLogo(){
  var half = window.innerHeight/2;
  half = half - (document.getElementById("logo").height/2);
  document.getElementById("logo").style.marginTop = half.toString() + "px";
}

$(document).ready(function(){
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
        window.location.hash = hash;
      });
    }
  });
});

var backgroundArray = ["#1","#2","#3","#4","#5","#6"];

window.onscroll = function(){
  var section = $(document).height()/5;
  var index = Math.floor(document.body.scrollTop/section);
  var opacity = Math.round((1-((document.body.scrollTop/section) - index))*100)/100;
  $(backgroundArray[index]).css({'opacity': opacity});
}
