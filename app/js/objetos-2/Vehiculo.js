	Vehiculo = function( nombre, aspecto, tipo ){
		this.nombre 	 = nombre;
		this.aspecto	 = aspecto; 	//Imagen o sprite de la nave
		this.tipo 		 = tipo;		//Tipo de nave (pequeña)1-4(grande)
		this.tripulacion = null;
		this.parametros  = null;		

		this.configurarVehiculo = function(){
			this.configurarTipoValido();
			this.configurarTripulacion(this.tipo);
			this.configurarParametrosVehiculo(this.tipo);
		}

		this.configurarTipoValido = function(){
			if(! (this.tipo<=4)&&(this.tipo>=1) ){
				this.tipo = 1;
			}
		};

		this.configurarTripulacion = function( tipoNave ){
			var tripulacion = {
				minima: "2",
				maxima: "10"
			};

			switch(tipoNave){
				case 2:
					tripulacion = {
						minima: "5",
						maxima: "20"
					};
				break;
				case 3:
					tripulacion = {
						minima: "10",
						maxima: "50"
					};
				break;
				case 4:
					tripulacion = {
						minima: "50",
						maxima: "200"
					};
				break;
				default:
					console.log("Tripulacion invalida.");
				break;
			}

			this.tripulacion = tripulacion;
		};

		this.configurarParametrosVehiculo = function( tipoNave ){
			var parametros = {
				energia:   100,
				salud: 	   100,
				municion:  10,
				danyo: 	   1,
				precision: 0.6
			};

			switch(tipoNave){
				case 2:
					parametros = {
						energia:   300,
						salud: 	   250,
						municion:  150,
						danyo: 	   5,
						precision: 0.5
					};
				break;
				case 3:
					parametros = {
						energia:   500,
						salud: 	   400,
						municion:  250,
						danyo: 	   10,
						precision: 0.4
					};
				break;
				case 4:
					parametros = {
						energia:   1000,
						salud: 	   1200,
						municion:  700,
						danyo: 	   25,
						precision: 0.3
					};
				break;
				default:
					console.log("Parametros invalidos.");
				break;
			}

			this.parametros = parametros;
		};

		this.disparar = function(){
			var municion = this.parametros.municion;

			if( municion>=1 ){
				this.parametros.municion--;
			}else{
				console.log("Municion insuficiente");
			}
		};

		this.configurarVehiculo();
	}