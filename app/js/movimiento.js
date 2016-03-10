$(function() {
	centrarCapasAnimaciones = function(){
		var	capaVisible = $(".capaVisible"),
			anchoCapa 	= capaVisible.width(),
			altoCapa 	= capaVisible.height();

		selectorCapaEstrellas.css("left", -(capaEstrellas.ancho -anchoCapa) /2 + "px" );
		selectorCapaEstrellas.css("top",  -(capaEstrellas.alto -altoCapa)   /2 + "px" );
		selectorCapaPlanetas.css("left", -(capaPlanetas.ancho -anchoCapa) /2 + "px" );
		selectorCapaPlanetas.css("top",  -(capaPlanetas.alto -altoCapa)   /2 + "px" );
	};

	moverCapasFondo  = function(botonPulsado){
		var capaEstrellasX 	= parseInt( selectorCapaEstrellas.css("left") ),
			capaEstrellasY 	= parseInt( selectorCapaEstrellas.css("top") ),
			capaPlanetasX 	= parseInt( selectorCapaPlanetas.css("left") ),
			capaPlanetasY 	= parseInt( selectorCapaPlanetas.css("top") );

			moverAbajo = function(){
				selectorCapaEstrellas.css("top", capaEstrellasY -1);
				selectorCapaPlanetas.css("top", capaPlanetasY -3);
			};

			moverArriba = function(){
				selectorCapaEstrellas.css("top", capaEstrellasY +1);
				selectorCapaPlanetas.css("top", capaPlanetasY +3);
			};

			moverDerecha = function(){
				selectorCapaEstrellas.css("left", capaEstrellasX -1);
				selectorCapaPlanetas.css("left", capaPlanetasX -3);
			};

			moverIzquierda = function(){
				selectorCapaEstrellas.css("left", capaEstrellasX +1);
				selectorCapaPlanetas.css("left", capaPlanetasX +3);
			};
		if(!fijarMovimiento){
			selectorCapaNave.removeAttr("class").addClass(botonPulsado);

			switch(botonPulsado){
				case "r-d":
					moverAbajo();
					moverDerecha();
				break;
				case "l-d":
					moverIzquierda();
					moverAbajo();
				break;			
				case "r-u":
					moverArriba();
					moverDerecha();
				break;
				case "l-u":
					moverIzquierda();
					moverArriba();
				break;
				case "d":
					moverAbajo();
				break;
				case "u":
					moverArriba();
				break;
				case "l":
					moverIzquierda();
				break;
				case "r":
					moverDerecha();
				break;
			}
		}
	};

	$(".capaVisible .botonesMovimiento span").on("mouseenter", function(){
		$(this).addClass("mov");

		var botonPulsado 	= $(this).attr("data-dir");

		moverCapasFondo(botonPulsado);
	});

	$(".capaVisible .botonesMovimiento span").on("mouseleave", function(){
		$(this).removeClass("mov");
	});

	centrarCapasAnimaciones();
});