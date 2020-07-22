/*2.Para el departamento de Construcción:
A.mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo() {
    //Inicializacion
    let idLargo = parseFloat(document.getElementById("txtIdLargo").value);
    let idAncho = parseFloat(document.getElementById("txtIdAncho").value);
    const vueltasAlambre = 3;

    //Instrucciones
    let diametro = (2 * idLargo) + (2 * idAncho)
    let total = (diametro * vueltasAlambre).toFixed(2);

    //Mostrar por pantalla
    alert(`La cantidad de alambre a comprar es de ${total} metros.`)
}
function Circulo() {
    //Inicializacion
    let idRadio = parseFloat(document.getElementById("txtIdRadio").value);
    const pi = 3.14;
    const vueltasAlambre = 3;

    //Instrucciones
    let radio = (idRadio) * (2 * pi);
    let total = (radio * vueltasAlambre).toFixed(2);

    //Mostrar por pantalla
    alert(`La cantidad de alambre a comprar es de ${total} metros.`)
}
function Materiales() {

    //Inicializacion
    let idLargo = parseFloat(document.getElementById("txtIdLargo").value);
    let idAncho = parseFloat(document.getElementById("txtIdAncho").value);
    let idRadio = parseFloat(document.getElementById("txtIdRadio").value);
    const pi = 3.14;
    const cemento = 2;
    const cal = 3;
    //Formulas matemáticas
    let area = (idAncho * idLargo);
    let radio = (idRadio) * (2 * pi);
    //Operaciones totales
    let totalDiametroCemento = (area / cemento).toFixed(2);
    let totalDiametroCal = (area / cal).toFixed(2);
    let totalRadioCemento = (radio / cemento).toFixed(2);
    let totalRadioCal = (radio / cal).toFixed(2);
    //Mostrar por pantalla
    alert(
        `
            Medidas para diametro de ${diametro} metros:\n
            - Cemento: ${totalDiametroCemento} bolsas.\n
            - Cal: ${totalDiametroCal} bolsas\n
            Medidas para radio de ${radio}\n
            - Cemento: ${totalRadioCemento}\n
            - Cal: ${totalRadioCal}
            `);

}