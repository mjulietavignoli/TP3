//4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

function esPar(numero){
  if (numero % 2 === 0) {
    return "El numero es par";
  } else {
    return "El numero es impar";
  }
}

let correcto=true;
do{
  numero = prompt('Ingrese un numero entero');
  while(isNaN(numero) || numero%1!==0 || numero===null || numero.trim()===""){
    numero = prompt('Por favor, ingrese un numero entero');
    correcto=false;
  }
  numero=parseInt(numero);
  correcto=true;
} while(correcto===false)

let resultado = esPar(numero);
alert(resultado);