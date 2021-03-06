/*3.Para el departamento de Pinturas:
A.Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados() {
    let temperatura = parseFloat(document.getElementById("txtIdTemperatura").value);
    let calculo = ((temperatura - 32) * 5 / 9).toFixed(2);

    let message = `${temperatura} Fahrenheit son ${calculo} centigrados`;

    alert(message);
}

function CentigradosFahrenheit() {
    let temperatura = parseFloat(document.getElementById("txtIdTemperatura").value);
    let calculo = ((temperatura * 9) / 5 + 32).toFixed(2);

    let message = `${temperatura} centigrados son ${calculo} Fahrenheit`;

    alert(message);
}
