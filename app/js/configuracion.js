$(function(){
	activarDesactivarBoton = function(selectorPadre){		
		if( selectorPadre.hasClass("activo") ){
			selectorPadre.removeClass("activo");
		}else{
			selectorPadre.addClass("activo");
		}
	};

	ajustarCapaNave = function(){
		selectorCapaNave.css("margin-top", selectorCapaVisible.height()/2);
		selectorCapaNave.css("margin-left", selectorCapaVisible.width()/2);
	};

	ajustarCapaVisible = function(){
		selectorCapaVisible.height( window.innerHeight );
		selectorCapaVisible.width( window.innerWidth );
	};


	abrirCerrarMenu = function(){
		if($(".menu").hasClass("abierto")){
			$(".menu").removeClass("abierto");		
		}else{	
			$(".menu").addClass("abierto");		
		}
	};

	teclaPulsada = function(tecla){
		switch(tecla){
			case 27:
				abrirCerrarMenu();
			break;
		}
	};

	ajustarCapaVisible();
	ajustarCapaNave();

	//ASIGNACIONES DE EVENTOS 
	$(".menu").click(function(e){
		var clase = $(e.target).attr("class");

		if(clase == "menu abierto"){
			abrirCerrarMenu();			
		}
	});

	$(".menuOpciones .nombrePlanetas").on("click", function(){
		var selectorPadre = $(this).parent();
		mostrarNombresPlanetas = $(this).prop('checked');

		activarDesactivarBoton(selectorPadre);		
	});
	
	$(".menuOpciones .nombreSatelites").on("click", function(){
		var selectorPadre = $(this).parent();
		mostrarNombresSatelites = $(this).prop('checked');

		activarDesactivarBoton(selectorPadre);		
	});

	$(".menuOpciones .fijarMovimiento").on("click", function(){
		var selectorPadre = $(this).parent();
		fijarMovimiento = $(this).prop('checked');

		activarDesactivarBoton(selectorPadre);		
	});

	$(".menuOpciones .centrarSistema").on("click", function(){
		centrarCapasAnimaciones();
	});

	$(window).resize(function(){
		ajustarCapaVisible();
		ajustarCapaNave();
	});

	$(".botonCheckbox").click(function(){
	   	$(this).find("input").trigger("click");
	});

	$(".menu .cerrarMenu").click(function(){
		abrirCerrarMenu();
	});

	$("body").keydown(function(event){
  		teclaPulsada(event.keyCode);
	});


});