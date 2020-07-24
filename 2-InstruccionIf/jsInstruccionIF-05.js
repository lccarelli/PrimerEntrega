// Al ingresar una edad solo debemos informar si la persona
// NO es adolescente.

function mostrar() {
	let edad;
	//tomo la edad  
	edad = parseInt(document.getElementById("txtIdEdad").value);
	//condiccion descartando a los adolescentes
	if (edad < 13 || edad > 18) {
		alert("No es adolescente");
	}
	alert("ok");

}//FIN DE LA FUNCIÓN