SistemaPlanetario = function( nombre, sol ){
    this.nombre  	= nombre;
    this.planetas 	= new Array();
    this.sol = sol;

    this.nuevoPlaneta = function( planeta ){
    	this.planetas.push( planeta );
    };

    this.pintar = function(time){
        this.sol.pintar();
        
    	for(var i=0; i < this.planetas.length; i++){
    		this.planetas[i].pintar(time);
    	}
    };
};