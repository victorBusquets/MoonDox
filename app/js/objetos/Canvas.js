Canvas = function(id) {
    this.canvas   = document.getElementById( id );
    this.context  = this.canvas.getContext('2d');

    //Valores textuales por defecto 
    this.context.font           = '30px Calibri';
    this.context.fillStyle      = 'white';
    this.context.textAlign      = 'right';
    this.context.textBaseline   = 'middle';
    this.puntoInicioX           = 1;
    this.puntoInicioY           = 1;

    this.alto     = this.canvas.height;
    this.ancho    = this.canvas.width;
    this.posicionCursorX = 0;
    this.posicionCursorY = 0;

    this.obtenerPosicionPuntero = function(e) {
        var rect = this.canvas.getBoundingClientRect();
        this.posicionCursorX= e.clientX - rect.left;
        this.posicionCursorY= e.clientY - rect.top;
    };

    this.pintarCanvasFull = function(color){
      this.context.fillStyle = color;
      this.context.rect(0, 0, this.ancho, this.alto);
      this.context.fill();
    };

    this.limpiarCanvas = function(){
        this.context.clearRect(0, 0, this.ancho, this.alto);   
    };
};