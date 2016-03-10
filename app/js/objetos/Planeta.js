Planeta = function ( nombre, puntoX, puntoY, radio, radioOrbita, velocidad, color, canvas ){
    var piDoble  = Math.PI*2,
        rotacion = 0,
        oldTime  = 0;

    this.nombre = nombre;
    this.posicionSolX   = puntoX;
    this.posicionSolY   = puntoY;
    this.puntoX         = puntoX;
    this.puntoY         = puntoY + radioOrbita;
    this.radio          = radio;
    this.color          = color;
    this.canvas         = canvas;
    this.velocidad      = piDoble/velocidad;
    this.radioOrbita    = radioOrbita;
    this.satelites      = new Array();
    this.civilizacion   = null;

    this.nuevaCivilizacion = function(civilizacion){
        this.civilizacion = civilizacion;
    };

    this.pintar = function( time ){
        this.actualizar( time );

        canvas.context.fillStyle = this.color;
        canvas.context.beginPath();
        canvas.context.arc( this.puntoX, this.puntoY, this.radio, 0, Math.PI*2, true);
        canvas.context.closePath();
        canvas.context.fill();

        if(mostrarNombresPlanetas){
            canvas.context.font = "bold 15px arial";
            canvas.context.textAlign="center"; 
            canvas.context.fillStyle = "white";
            canvas.context.fillText( this.nombre, this.puntoX, this.puntoY+this.radio+10 );
        }
        
        if( this.satelites.length >= 1 ){
            for(var i=0; i<this.satelites.length; i++){
                this.satelites[i].pintar( this.canvas, time);
            }
        }

        this.comprobarCursorHover();
    }

    this.comprobarCursorHover = function(){
        if(((this.canvas.posicionCursorX > (this.puntoX - this.radio))&&
        (this.canvas.posicionCursorX < (this.puntoX + this.radio)))&&
        ((this.canvas.posicionCursorY > (this.puntoY - this.radio))&&
        (this.canvas.posicionCursorY < (this.puntoY + this.radio)))){
            console.log("Click en el planeta "+this.nombre);
        }
    };


    this.actualizar = function( time ){

        var delta = time - oldTime;
    
        oldTime   = time;
        rotacion += this.velocidad * delta/1000;
        
        if( rotacion > piDoble ){
            rotacion -= piDoble;
        }
        
        this.puntoX = this.posicionSolX + this.radioOrbita * Math.sin( rotacion );
        this.puntoY = this.posicionSolY + this.radioOrbita * Math.cos( rotacion );

        if( this.satelites.length >= 1 ){
            for(var i=0; i<this.satelites.length; i++){
                this.satelites[i].posicionPlanetaX = this.puntoX;
                this.satelites[i].posicionPlanetaY = this.puntoY;
            }
        }
    };

    this.nuevoSatelite = function( nombre, radio, radioOrbita, velocidad, color, puntoInicio){
        var satelite = new Satelite(nombre, this.puntoX, this.puntoY, radio, radioOrbita, velocidad, color, puntoInicio);
        this.satelites.push(satelite);
    };
};