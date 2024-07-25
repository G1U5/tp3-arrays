function analisisCadena(cadena){
    if (cadena === cadena.toUpperCase()){
        return 'La cadena tiene solo letras mayúsculas'
    }else if (cadena === cadena.toLowerCase()){
        return 'La cadena tiene solo letras minúsculas'
    }else{
        return 'La cadena tiene mayúsculas y minúsculas'
    }
}
const cadena1 = 'HOLA MUNDO'
const cadena2 = 'hola mundo'
const cadena3 = 'hOlA MunDo'

document.write(`<p>${analisisCadena(cadena1)}</p>`)
document.write(`<p>${analisisCadena(cadena2)}</p>`)
document.write(`<p>${analisisCadena(cadena3)}</p>`)