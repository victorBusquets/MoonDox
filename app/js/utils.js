$(function() {
    window.requestAnimFrame = (function(callback) {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function(callback) {
            window.setTimeout(callback);
        };
    })();

    generarNumeroAleatorio = function (min, max){	
		return parseInt( Math.random() * (max - min) + min );
	};
});