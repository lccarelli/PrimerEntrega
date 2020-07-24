// Al ingresar una edad menor a 18 años y 
// un estado civil distinto a "Soltero", 
// mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.' 

function mostrar() {

	const constante = "Soltero";
	let edad = parseInt(document.getElementById("txtIdEdad").value);
	let estadoCivil = document.getElementById("estadoCivil").value;

	if (edad < 18 && estadoCivil !== constante) {
		alert("Es muy pequeño para NO ser soltero");
	}
}//FIN DE LA FUNCIÓN