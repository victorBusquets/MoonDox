Satelite = function( nombre, puntoX, puntoY, radio, radioOrbita, velocidad, color, puntoInicio ){
	puntoInicio = puntoInicio * 100000000000;

	var piDoble  = Math.PI*2,
		rotacion = 0,
		oldTime  = 0 + puntoInicio;

	this.nombre 	 		= nombre;
	this.radioOrbita 		= radioOrbita;
	this.velocidad 	 		= piDoble/velocidad;
	this.radio 		 		= radio;
	this.posicionPlanetaX	= puntoX;
	this.posicionPlanetaY 	= puntoY;
	this.posicionX		 	= puntoX ;
	this.posicionY 	 		= puntoY + radioOrbita;
	this.color 		 		= color;

	this.pintar = function( canvas, time ){
		this.actualizar( time );
		if(mostrarNombresSatelites){
		    canvas.context.font = "bold 12px arial";
	        canvas.context.textAlign="center"; 
	        canvas.context.fillStyle = "white";
	        canvas.context.fillText( this.nombre, this.posicionX, this.posicionY + this.radio + 10 );
		}
		
		canvas.context.fillStyle = this.color;
        canvas.context.beginPath();
        canvas.context.arc( this.posicionX, this.posicionY, this.radio, 0, Math.PI*2, true);
        canvas.context.closePath();
        canvas.context.fill();
	};

	this.actualizar = function( time ){
		var delta = time - oldTime;
	
	    oldTime   = time;
	    rotacion += this.velocidad * delta/1000;
		
	    if( rotacion > piDoble ){
	        rotacion -= piDoble;
		}
		
		this.posicionX = this.posicionPlanetaX + this.radioOrbita * Math.sin( rotacion );
		this.posicionY = this.posicionPlanetaY + this.radioOrbita * Math.cos( rotacion );
	};
};