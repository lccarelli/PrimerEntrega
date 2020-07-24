// Al presionar el Bot&oacute;n, 
// asignar una nota RANDOM al examen y mostrar:<br>
// "EXCELENTE" para notas igual a 9 o 10,<br>
// "APROB&Oacute;" para notas mayores a 4,<br>
// "Vamos, la proxima se puede" para notas menores a 4

function mostrar() {
	let vMinnimo = 1;
	let vMaximo = 10;
	//Genero el número RANDOM entre 1 y 10 
	let random = Math.round(Math.random() * (vMaximo - vMinnimo) + vMinnimo);

	if (random >= 9) {
		alert("numero random: " + random + " Nota: Excelente");
	}
	else if (random >= 4) {
		alert("numero random: " + random + " Nota: Aprobaste");
	}
	else if (random < 4) {
		alert("numero random: " + random + " Nota: Vamos, la proxima se puede");
	}
}//FIN DE LA FUNCIÓN