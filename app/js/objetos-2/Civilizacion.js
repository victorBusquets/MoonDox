Civilizacion = function( nombre, poblacion, especie, vehiculos ){
	this.nombre 	= nombre;
	this.poblacion 	= poblacion;
	this.vehiculos 	= new Array();
	this.especie	= especie;
	
	if( vehiculos!= null ) this.vehiculos = vehiculos;
}