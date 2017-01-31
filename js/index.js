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
