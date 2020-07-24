// Al ingresar una edad debemos informar 
// si la persona es adolescente, edad entre 13 y 17 años (inclusive) .
function mostrar() {
	let edad;
	edad = parseInt(document.getElementById("txtIdEdad").value);

	//tomo la edad  
	// if (edad > 13 && edad <= 17) {
	// 	alert("la persona es adolescente");
	// }

	//sugar sintax
	(edad >= 13 && edad <= 17) ? alert("es adolescente") : alert("no es adolescente");

}//FIN DE LA FUNCIÓN