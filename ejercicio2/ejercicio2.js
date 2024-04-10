/*2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.*/

let ciudades = [];
let ciudad = prompt("Ingrese el nombre de una ciudad");
while (ciudad !== null) {
  while (ciudad.trim() === "") {
    ciudad = prompt("Por favor, ingrese el nombre de una ciudad");
  }
  ciudades.push(ciudad);
  ciudad = prompt("Ingrese el nombre de una ciudad");
}

//Mostrar la longitud del arreglo
let longitudArreglo = ciudades.length;
document.write(
  "El arreglo de ciudades tiene " + longitudArreglo + " elementos"
);

//Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
document.write("<ul>");
for (let i = 0; i < longitudArreglo; i++) {
  if (i === 0) {
    document.write("<li>" + "Elemento 1er posicion: " + ciudades[i] + "</li>");
  } else if (i === 2) {
    document.write("<li>" + "Elemento 3er posicion: " + ciudades[i] + "</li>");
  }
}
let ultElemento = ciudades.length - 1;
document.write(
  "<li>" + "Elemento ultima posicion: " + ciudades[ultElemento] + "</li>"
);
document.write("</ul>");

//Añade en última posición la ciudad de París.
ciudades.push("Paris");
ultElemento = ciudades.length - 1;
document.write("<ul>");
document.write(
  "<li>" + "El elemento en la ultima posicion es: " + ciudades[ultElemento] + "</li>"
);
document.write("</ul>");

//Escribe por pantalla el elemento que ocupa la segunda posición.
document.write("<ul>");
for (let i = 0; i < longitudArreglo; i++) {
  if (i === 1) {
    document.write("<li>" + "Elemento 2da posicion: " + ciudades[i] + "</li>");
  }
}
document.write("</ul>");

//Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
ciudades.splice(1, 1, "Barcelona");
document.write("Arreglo de ciudades: ")
document.write("<ul>");
for (let i = 0; i < longitudArreglo; i++) {
  document.write("<li>" + ciudades[i] +"</li>");
}
document.write("</ul>");