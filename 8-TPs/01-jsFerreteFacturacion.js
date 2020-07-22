/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar() {
    let precioUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
    let precioDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
    let precioTres = parseFloat(document.getElementById("txtIdPrecioTres").value);

    let suma = (precioUno + precioDos + precioTres);

    alert(`La suma del precio de los productos es: ${suma}`);

}
function Promedio() {
    let precioUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
    let precioDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
    let precioTres = parseFloat(document.getElementById("txtIdPrecioTres").value);
    let suma = (precioUno + precioDos + precioTres);

    let prom = (suma) / 3;

    alert(`El promedio de la suma del precio de los productos es: ${prom}`);
}
function PrecioFinal() {
    let precioUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
    let precioDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
    let precioTres = parseFloat(document.getElementById("txtIdPrecioTres").value);
    let suma = (precioUno + precioDos + precioTres);

    let precioFinal = (suma * 0.21) + suma;

    alert(`El precio final (+21%) de los productos es: ${precioFinal}`);
}