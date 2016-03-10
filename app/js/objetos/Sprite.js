Sprite = function(options) {          
    var frameIndex = 0,
        tickCount = 0,
        ticksPerFrame = options.ticksPerFrame || 0,
        numberOfFrames = options.numberOfFrames || 1,
        enMovimiento = true;

    this.loop = options.loop;
    this.context = options.context;
    this.width = options.width;
    this.height = options.height;
    this.image = options.image;

    // Pintamos la animacion
    this.pintar = function() {
        this.context.clearRect(0, 0, this.width*2, this.height*2);

        this.context.drawImage(
           this.image,
           frameIndex * this.width / numberOfFrames,
           0,
           this.width / numberOfFrames,
           this.height,
           0,
           0,
           this.width / numberOfFrames,
           this.height);
    };

    this.update = function() {
        tickCount++;
            
        if (tickCount > ticksPerFrame) {

            if (frameIndex < numberOfFrames - 1) {
                frameIndex += 1; 
            } else if (this.loop) {
                frameIndex = 0;
            }
            this.pintar();

            tickCount = 0;
        }
    }; 

    this.parar = function(){
        enMovimiento = false;
    };

    this.iniciar = function(){
        enMovimiento = true;
    };

    this.gameLoop = function() {
        if(enMovimiento){
            window.requestAnimationFrame(this.gameLoop);
        }
        this.update();
    };

    return this;
};