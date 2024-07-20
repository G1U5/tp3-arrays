const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

function mostrarMeses() {
  document.write("<h1>Lista de Meses</h1>");
  for (let i = 0; i < meses.length; i++) {
    document.write(`<ul>`);
    document.write(`<li>${meses[i]}</li>`);
    document.write("</ul>");
  }
}

mostrarMeses()
