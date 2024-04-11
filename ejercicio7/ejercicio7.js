//7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.

function mostrarMultiplicacion(numero){
  document.write(`Tabla de multiplicar del ${numero}`);
  document.write("<table>");
  for(let i = 1; i <= 10; i++){
    document.write("<tr>");
    document.write("<td>" + numero + " x " + i + " = </td>");
    document.write("<td>" + (numero * i) + "</td>");
    document.write("</tr>");
  }
  document.write("</table>");
}

let numero = prompt("Ingrese un número para mostrar su tabla de multiplicar:");

if(!isNaN(numero) && numero !== null && numero !== ""){
  mostrarMultiplicacion(numero);
} else {
  alert("Por favor, ingrese un número válido.");
}