//Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.
function mostrar() {
	let edad;
	edad = parseInt(document.getElementById("txtIdEdad").value);
	//tomo la edad  
	// if (edad >= 18) {
	// 	alert("es mayor de edad");
	// } else {
	// 	alert("es menor de edad");
	// }
	//sugar sintax
	(edad >= 18) ? alert("Mayor de edad") : alert("Menor de edad");

}//FIN DE LA FUNCIÓN