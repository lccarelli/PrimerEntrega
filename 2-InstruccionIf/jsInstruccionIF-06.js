// Al ingresar una edad debemos informar si la persona es 
// mayor de edad (mas de 18 años) o 
// adolescente (entre 13 y 17 años) o 
// niño (menor a 13 años).

function mostrar() {
	let edad;
	//tomo la edad  
	edad = parseInt(document.getElementById("txtIdEdad").value);
	//condicion
	if (edad < 13) {
		alert("niño");
	}
	else if (edad < 18) {
		alert("adolescente");
	}
	else {
		alert("mayor edad");
	}
}//FIN DE LA FUNCIÓN