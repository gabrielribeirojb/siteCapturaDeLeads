$(window).on('load',function(){

	$('nav a').click(function(){
		var href = $(this).attr('href');
		var elementoTop = $(href).offset().top;

		$('body,html').animate({'scrollTop':elementoTop});

		return false;
	})
})