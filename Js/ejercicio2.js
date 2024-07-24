// Mostrar la longitud del arreglo.
// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// Añade en última posición la ciudad de París.
// Escribe por pantalla el elemento que ocupa la segunda posición.
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
let ciudades = [];

while (true) {
  let input = prompt("Ingrese el nombre de una ciudad:");

  if (input === null) {
    console.log(ciudades);
    break;
  } else if (input !== "") {
    ciudades.push(input);
  }
}

function mostrarCiudades() {
  document.write("<h2>Arreglo de ciudades</h2>");
  document.write("<ul>");
  for (let i = 0; i < ciudades.length; i++) {
    document.write(`<li>Elemento: ${ciudades[i]}</li>`);
  }
  document.write("</ul>");
}

document.write(
  `<p>El arreglo de ciudades tiene ${ciudades.length} elementos</p>`
);
document.write("<ul>");
document.write(`<li>Elemento 1er posicion: ${ciudades[0]}</li>`);
document.write(`<li>Elemento 3er posicion: ${ciudades[2]}</li>`);
document.write(
  `<li>Elemento ultima posicion: ${ciudades[ciudades.length - 1]}</li>`
);
document.write("</ul>");
ciudades.push("Paris");
document.write(
  `<li>Elemento ultima posicion: ${ciudades[ciudades.length - 1]}</li>`
);
ciudades.splice(1, 0, "Barcelona");
mostrarCiudades();
