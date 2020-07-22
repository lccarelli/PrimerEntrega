/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/

function sumar() {
	let numOne = parseFloat(document.getElementById("txtIdNumeroUno").value);
	let numTwo = parseFloat(document.getElementById("txtIdNumeroDos").value);
	let sum = numOne + numTwo;
	let message = `la suma de ${numOne} y ${numTwo} es ${sum}`;
	alert(message);
}

function restar() {
	let numOne = parseInt(document.getElementById("txtIdNumeroUno").value);
	let numTwo = parseInt(document.getElementById("txtIdNumeroDos").value);
	let rest = numOne - numTwo;
	let message = `la resta de ${numOne} y ${numTwo} es ${rest}`;
	alert(message);
}

function multiplicar() {
	let numOne = parseInt(document.getElementById("txtIdNumeroUno").value);
	let numTwo = parseInt(document.getElementById("txtIdNumeroDos").value);
	let mult = numOne * numTwo;
	let message = `la multiplicacion de ${numOne} y ${numTwo} es ${mult}`;
	alert(message);
}

function dividir() {
	let numOne = parseFloat(document.getElementById("txtIdNumeroUno").value);
	let numTwo = parseFloat(document.getElementById("txtIdNumeroDos").value);
	let div = (numOne / numTwo);
	let message = `la division de ${numOne} y ${numTwo} es ${div}`;
	alert(message);
}

function bienvenida() {
	var saludo;
	var usuario;
	saludo = "Bienvenido, ";
	usuario = "laura";
	alert(saludo + usuario);

}
function despedir() {
	saludo = "Chau";
	alert(saludo + usuario);
}
