/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar() {
	var numberOne = parseInt(document.getElementById("txtIdNumeroUno").value);
	var numberTwo = parseInt(document.getElementById("txtIdNumeroDos").value);
	var sum = numberOne + numberTwo;
	var message = `la suma del numero 1 es: ${numberOne} y numero 2 es ${numberTwo}, es ${sum}`;
	alert(message);
}

