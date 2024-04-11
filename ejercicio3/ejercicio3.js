// 3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.
function numeroSeleccionado() {
    return Math.floor(Math.random() * 6) + 1;
  }
  
  function lanzarDados() {
    let sumas = new Array(11).fill(0);
    
    for (let i = 0; i < 50; i++) {
      let dado1 = numeroSeleccionado();
      let dado2 = numeroSeleccionado();
      let suma = dado1 + dado2;
      sumas[suma - 2]++;
    }
    
    return sumas;
  }
  
  let resultados = lanzarDados();

  document.write("<table>");
  document.write("<tr><th>Suma</th><th>Veces</th></tr>");
  for (let i = 0; i < resultados.length; i++) {
    document.write("<tr>");
    document.write("<td>" + (i + 2) + "</td>");
    document.write("<td>" + resultados[i] + " veces</td>");
    document.write("</tr>");
  }
  document.write("</table>");
  
  