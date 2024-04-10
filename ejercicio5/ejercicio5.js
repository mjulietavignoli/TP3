//5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

let cadena;
function informacionCadena(cadena) {
  let letrasMayusculas = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  let letrasMinusculas = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  let sumadorMayusculas = 0;
  let sumadorMinusculas = 0;
  for(let i=0;i<cadena.length;i++) {
    for(let j=0;j<letrasMayusculas.length;j++) {
      if(cadena[i]===letrasMayusculas[j]) {
        sumadorMayusculas+=1;
      }
    }
    for(let k=0;k<letrasMinusculas.length;k++) {
      if(cadena[i]===letrasMinusculas[k]) {
        sumadorMinusculas+=1;
      }
    }
  }
  if(sumadorMayusculas===cadena.length){
    return "Esta cadena es solo de mayusculas";
  } else if(sumadorMinusculas===cadena.length){
    return "Esta cadena es solo de minusculas";
  } else{
    return "Esta cadena es de mayusculas y minusculas";
  }
}

do{
 
}while(cadena!==null)
let resultado=informacionCadena(cadena); 
alert(resultado);