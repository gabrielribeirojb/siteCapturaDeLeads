$(window).on('load',function(){

	var tempoSlider = 3000;
	var indiceAtual = 0;
	var indiceMaximo;

	iniciaSlider();

	function iniciaSlider(){
		indiceMaximo = $('.sobre-equipe').length;
		var sizeContainer = 100 * indiceMaximo;
		var sizeBoxSingle = 100 / indiceMaximo;

		$('.sobre-equipe').css('width',sizeBoxSingle+'%');
		$('.scroll-wraper').css('width',sizeContainer+'%');

		for(var i = 0; i < indiceMaximo; i++){
			if(i == 0){
				$('.slider-bolinha').append('<span style="background-color: rgb(160,160,160);"></span>');
			} else{
				$('.slider-bolinha').append('<span></span>');
			}
		}
	}


	autoPlay();

	function autoPlay(){
		setInterval(function(){
			indiceAtual++;

			if(indiceAtual == indiceMaximo)
				indiceAtual = 0;
			goToSlider(indiceAtual);

		},tempoSlider)
	}

	

	function goToSlider(indiceAtual){
		var posicaoXdoEle = $('.sobre-equipe').eq(indiceAtual).offset().left - $('.scroll-wraper').offset().left;
		$('.slider-bolinha span').css('background-color','rgb(210,210,210)');
		$('.slider-bolinha span').eq(indiceAtual).css('background-color','rgb(170,170,170)');
		$('.scrollEquipe').stop().animate({'scrollLeft':posicaoXdoEle+'px'});
	}

	
	$(window).resize(function(){
		$('.scrollEquipe').stop().animate({'scrollLeft':0});	
	})
	

})