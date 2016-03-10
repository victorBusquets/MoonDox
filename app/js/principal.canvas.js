$(function() {
	repintarContenido = function(time){
		capaEstrellas.limpiarCanvas();
		constelacionUno.pintar();

		capaPlanetas.limpiarCanvas();
		sistemaUno.pintar(time);
	};

	botonMovimientoPulsado = function(){
		return $(".capaVisible .botonesMovimiento span").hasClass("mov");
	};
	
	var contador = 0;

	moverSiBotonPulsado = function(time){
		if( botonMovimientoPulsado() > 0 ){
			var botonPulsado = $(".capaVisible .botonesMovimiento span.mov").attr("data-dir");
			moverCapasFondo(botonPulsado);
		}
	};

	loop = function(time) {
		repintarContenido(time);
	    requestAnimationFrame( loop );
		moverSiBotonPulsado(time);
	};
	
	eventoObtenerPosicionPuntero = function(){
		$("body").on("click", function(e){
			capaPlanetas.obtenerPosicionPuntero(e);
		});
	};
	
	eventoObtenerPosicionPuntero();
	loop(0);
});