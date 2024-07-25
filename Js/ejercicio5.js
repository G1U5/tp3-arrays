function analisisCadena(cadena){
    if (cadena === cadena.toUpperCase()){
        return 'tiene solo letras mayúsculas'
    }else if (cadena === cadena.toLowerCase()){
        return 'tiene solo letras minúsculas'
    }else{
        return 'tiene mayúsculas y minúsculas'
    }
}
const cadena1 = 'HOLA MUNDO'
const cadena2 = 'hola mundo'
const cadena3 = 'hOlA MunDo'

document.write(`<p>la cadena: ${cadena1} ${analisisCadena(cadena1)}</p>`)
document.write(`<p>la cadena: ${cadena2} ${analisisCadena(cadena2)}</p>`)
document.write(`<p>la cadena: ${cadena3} ${analisisCadena(cadena3)}</p>`)