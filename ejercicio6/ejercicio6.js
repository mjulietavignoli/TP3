//6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

let resultado = 0;
function calcularPerimetro(lado1, lado2, resultado) {
  resultado = 2 * (lado1 + lado2);
  return resultado;
}

let lado1 = prompt("Ingrese un lado del rectangulo");
while (isNaN(lado1) || lado1===null) {
  lado1 = prompt("Por favor, ingrese un lado del rectangulo");
}
lado1 = Number(lado1);

let lado2 = prompt("Ingrese otro lado del rectangulo");
while (isNaN(lado2) || lado2===null) {
  lado2 = prompt("Por favor, ingrese un lado del rectangulo");
}
lado2 = Number(lado2);

let perimetro = calcularPerimetro(lado1, lado2, resultado);
alert(`El perimetro del rectangulo es ${perimetro}`);
