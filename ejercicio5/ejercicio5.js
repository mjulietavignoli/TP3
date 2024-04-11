//5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

let cadena;

function informacionCadena(cadena) {
  let letrasMayusculas = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
  let letrasMinusculas = "abcdefghijklmnñopqrstuvwxyz";
  let sumadorMayusculas = 0;
  let sumadorMinusculas = 0;

  for (let i = 0; i < cadena.length; i++) {
    if (letrasMayusculas.includes(cadena[i])) {
      sumadorMayusculas++;
    }
    if (letrasMinusculas.includes(cadena[i])) {
      sumadorMinusculas++;
    }
  }

  if (sumadorMayusculas === cadena.length) {
    return "Esta cadena es solo de mayúsculas";
  } else if (sumadorMinusculas === cadena.length) {
    return "Esta cadena es solo de minúsculas";
  } else {
    return "Esta cadena es de mayúsculas y minúsculas";
  }
}

do {
  cadena = prompt("Introduce una cadena de texto:");
} while (cadena === null || cadena.trim() === "");

let resultado = informacionCadena(cadena);
alert(resultado);
