$(function() {
	constelacionUno = new Constelacion( "Constelacion uno", 100, capaEstrellas );
		constelacionUno.pintar();

	var sistemaUnoCentroX = capaPlanetas.ancho / 2-100;
		sistemaUnoCentroY = capaPlanetas.alto / 2-100;

	var sol = new Estrella( 0, sistemaUnoCentroX, sistemaUnoCentroY, capaPlanetas , 1);
		sol.especial( 70, 0.4, "yellow" );
		
	sistemaUno = new SistemaPlanetario( "sistemaUno", sol );

	var planeta = new Planeta( "Planeta tierra", sistemaUnoCentroX, sistemaUnoCentroY, 20, 700, 6, "blue", capaPlanetas );
		planeta.nuevoSatelite("Luna", 5, 90, 2, "gray", 1);
		planeta.nuevoSatelite("Luna 2", 5, 70, 4, "green", 0);
		sistemaUno.nuevoPlaneta(planeta);

		planeta = new Planeta( "Jupiter", sistemaUnoCentroX, sistemaUnoCentroY, 20, 200, 10, "fuchsia", capaPlanetas );
		planeta.nuevoSatelite("Luna", 5, 90, 2, "red", -1000);
		planeta.nuevoSatelite("Luna 2", 5, 70, 3, "green", 0);
		sistemaUno.nuevoPlaneta(planeta);

		planeta = new Planeta( "Lolo", sistemaUnoCentroX, sistemaUnoCentroY, 30, 300, 50, "red", capaPlanetas );
		planeta.nuevoSatelite("Sasa", 5, 70, 5, "Yellow", 0);
		sistemaUno.nuevoPlaneta(planeta);

		planeta = new Planeta( "Lala", sistemaUnoCentroX, sistemaUnoCentroY, 30, 500, 50, "#as7667", capaPlanetas );
		planeta.nuevoSatelite("Soos", 10, 70, 5, "#123456", 0);
		sistemaUno.nuevoPlaneta(planeta);

		sistemaUno.pintar(0);



		var naveSprite = new Image();
		
		naveSprite.src = 'css/media/naveSprite.png';

		var naveMovimiento = Sprite({
			context: capaNave.context,
			width:263,
			height:70,
			image:naveSprite,
			loop: 1,
			ticksPerFrame: 1,
			numberOfFrames: 5
		});

		naveMovimiento.gameLoop();

girarNave = function(grados){
	capaNave.context.rotate(grados*Math.PI/360);
}

});