/*
6- Solicitar por pantalla al usuario ingresar
 el valor de los lados de un rectángulo,
luego crear una función para calcular su perímetro y mostrarlo por pantalla.
● La fórmula del perímetro es p = 2*(a +b)
*/
let ladoA = parseInt(prompt('Ingrese el valor del lado A del rectangulo'));
let ladoB = parseInt(prompt('Ingrese el valor del lado B del rectangulo'));
function mostrarPerimetro(){
    let perimetro = 2 * (ladoA + ladoB)
  if (!isNaN(ladoA) && !isNaN(ladoB)){
    return document.write(`<p>El perimetro es: ${perimetro}</p>`);
  }else{
    return alert('No ha ingresado un valor valido')
  }
}
mostrarPerimetro()