/* 4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar.
 Mostrar por pantalla el resultado devuelto por la función. */
function parOImpar(numero) {
  if (numero % 2 === 0) {
    return `par`;
  } else {
    return `impar`;
  }
}

const numero = parseInt(prompt("Ingrese un número"));
if (!isNaN(numero)) {
  let resultado = parOImpar(numero);
  document.write(`El número ${numero} es ${resultado}`);
} else {
  document.write("No ha ingresado un número válido");
}
