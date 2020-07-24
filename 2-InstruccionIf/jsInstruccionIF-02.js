// Al ingresar una edad debemos informar solo si la persona es mayor de edad

function mostrar() {
	let edad;
	//tomo la edad  
	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad > 17) {
		alert("Sos mayor de edad");
	}

	alert("ok");


}//FIN DE LA FUNCIÓN