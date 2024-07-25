let resultadosLanzamientos = [];
let conteoApariciones = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let resultadosPosibles = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
for (let lanzamiento = 0; lanzamiento < 50; lanzamiento++) {
  let dado1 = Math.floor(Math.random() * 6 + 1);
  let dado2 = Math.floor(Math.random() * 6 + 1);
  let sumaDados = dado1 + dado2;
  resultadosLanzamientos.push(sumaDados);
}
for (
  let valorPosible = 0;
  valorPosible < resultadosPosibles.length;
  valorPosible++
) {
  for (
    let valorLanzamiento = 0;
    valorLanzamiento < resultadosLanzamientos.length;
    valorLanzamiento++
  ) {
    if (
      resultadosLanzamientos[valorLanzamiento] ===
      resultadosPosibles[valorPosible]
    ) {
      conteoApariciones[valorPosible]++;
    }
  }
}

document.write("<table>");
document.write("<thead>");
document.write("<tr><th>Suma🎲🎲</th><th>Apariciones</th></tr>");
document.write("</thead>");
document.write("<tbody>");
for (let i = 0; i < resultadosPosibles.length; i++) {
  document.write(`<tr>`);
  document.write(`<td>${resultadosPosibles[i]}</td>`);
  document.write(`<td>${conteoApariciones[i]}</td>`);
  document.write("</tr>");
}
document.write("</tbody>");
document.write("</table>");
