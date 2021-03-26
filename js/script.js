// on js after download style/html
$(document).ready(function(){
	$('.mobile-button').on( 'click', function() {
		$('.navigation').slideToggle();
		$(this).toggleClass('opened');
	})
});