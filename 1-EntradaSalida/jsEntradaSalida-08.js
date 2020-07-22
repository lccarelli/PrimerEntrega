/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/

function SacarResto() {
	let numOne = parseInt(document.getElementById("txtIdNumeroDividendo").value);
	let numTwo = parseInt(document.getElementById("txtIdNumeroDivisor").value);
	let resto = numOne % numTwo;
	let message = `El resto de la division del dividendo: ${numOne} y divisor: ${numTwo}, es ${resto}`;
	alert(message);
}
