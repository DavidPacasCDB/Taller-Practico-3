function iniciar(){
var boton = document.getElementById("validar");
if(boton.addEventListener){
boton.addEventListener("click", validar, false);
}
else if(boton.attachEvent){
boton.attachEvent("onclick", validar);
}

function validar(){
	dui2 = document.getElementById('DUI');
	NIT2 = document.getElementByID('NIT');
	var valido = false;
	var valido2 = false;
	var re = null;
	var re1 = /^\d{8}-\d{1}$/;
	var re2 = /^[0-9]{4}-[0-9]{6}-[0-9]{3}-[0-9]{1}$/;


	if (dui2 == null || NIT2 == null){
		alert("Ingrese un dato valido");
		return 0;
	}	

	if (dui2 = re1){
		valido = true;
	}

	if (NIT2 = re2){
		valido2 = true;
	}

	if(valido == true || valido2 == true){
		alert("Los valores fueron ingresados correctamente");
	}



