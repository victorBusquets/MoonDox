$(function(){
	mostrarNombresPlanetas 		= false;
	mostrarNombresSatelites 	= false;
	fijarMovimiento				= false;
	proporciones				= 2;
	moverCapasFondo 			= "";
	canvasCapaEstrellas 		= "estrellas";
	canvasCapaPlanetas 			= "planetas";
	canvasCapaNave 				= "nave";
	selectorCapaEstrellas 		= $("#"+canvasCapaEstrellas);
	selectorCapaPlanetas  		= $("#"+canvasCapaPlanetas);
	selectorCapaNave  			= $("#"+canvasCapaNave);
	selectorCapaVisible			= $(".capaVisible");
	capaEstrellas 	 			= new Canvas( canvasCapaEstrellas );
	capaPlanetas 				= new Canvas( canvasCapaPlanetas );
	capaNave                    = new Canvas( canvasCapaNave );
});