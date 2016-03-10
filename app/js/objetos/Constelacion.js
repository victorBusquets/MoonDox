Constelacion = function( nombre, numeroEstrellas, canvas ){
	this.nombre 		 = nombre;
	this.numeroEstrellas = numeroEstrellas;
	this.estrellas 		 = new Array(); 

	this.generar = function(){
		for(var i=0; i < this.numeroEstrellas; i++){
			var puntoX 	  = generarNumeroAleatorio(0, canvas.ancho),
				puntoY 	  = generarNumeroAleatorio(0, canvas.alto),
				velocidad = generarNumeroAleatorio(5, 10),
		        estrella  = new Estrella(i, puntoX, puntoY, canvas, velocidad);

			this.estrellas.push( estrella );
		}
	};

	this.pintar = function(){
		for(var i=0; i < this.estrellas.length; i++){
			this.estrellas[i].pintar();
		};
	};

	this.generar();
};