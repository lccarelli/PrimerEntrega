/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar() {

	var name = document.getElementById("txtIdNombre").value;
	var age = document.getElementById("txtIdEdad").value;
	var message = `Usted se llama ${name} y tiene ${age} años.`
	alert(message);
}

