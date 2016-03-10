Estrella = function( id, puntoX, puntoY, canvas, velocidad){
    this.id     = id;
    this.puntoX = puntoX;
    this.puntoY = puntoY;
    this.canvas = canvas;

    this.radio  = 0.5;
    this.radioInicial  = 0.5;
    this.brillo = 0.4;
    this.color  = "#FFFFD7";

    var indice = velocidad;

    this.especial = function( radio, brillo, color ){
        this.radio  = radio;
        this.radioInicial = radio;
        this.brillo = brillo;
        this.color  = color;
    };

    this.pintar = function(){
        this.canvas.context.fillStyle = this.color;
        this.canvas.context.beginPath();
        this.canvas.context.arc( this.puntoX, this.puntoY, this.radio, 0, Math.PI*2, true);
        this.canvas.context.closePath();
        this.canvas.context.fill();

        if(indice == 5){
            if(this.radio == this.radioInicial){
                this.radio += this.brillo;
            }else{
                this.radio -= this.brillo;
                indice = 0;
            }
        }else{
            indice++;
        }

    };
};