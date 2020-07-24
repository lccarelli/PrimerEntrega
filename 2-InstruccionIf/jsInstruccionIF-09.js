//Al presionar el Boton, mostrar un numero Random del 1 al 10 inclusive 

function mostrar() {
	//Genero el número RANDOM entre 1 y 10 
	let vMinnimo = 1;
	let vMaximo = 10;
	let vNum;

	vNum = Math.round(Math.random() * (vMaximo - vMinnimo) + vMinnimo);

	alert(vNum);


}//FIN DE LA FUNCIÓN