/*
1. Crea una función que calcule el índice de masa corporal (IMC) de 
una persona a partir de su altura en metros y peso en kilogramos, que 
se recibirán como parámetros.
*/
function IMC(altura, peso) {
    return console.log(peso / (altura * altura))
}
IMC(1.56, 54.5);

/*
2. Crea una función que calcule el valor del factorial de un número 
pasado como parámetro.
*/
function factorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } for (var i = numero - 1; i >= 1; i--) {
        numero *= i;
    }
    return console.log(numero);
}
factorial(5);

/*
3. Crea una función que convierta un valor en dólares, pasado como 
parámetro, y devuelva el valor equivalente en reales(moneda brasileña,
si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, 
considera la cotización del dólar igual a R$4,80.
*/
function dolar(reales) {
    return console.log(reales * 4.80)
}
dolar(20)

/*
4. Crea una función que muestre en pantalla el área y el perímetro de 
una sala rectangular, utilizando la altura y la anchura que se 
proporcionarán como parámetros.
*/
function rectangulo(altura, ancho) {
    let area = altura * ancho
    let perimetro = (altura * 2) + (ancho * 2)
    return console.log(`El area de la sala es de ${area} cm2 y el perimetro es de ${perimetro} cm`)
}
rectangulo(8, 6)

/*
5. Crea una función que muestre en pantalla el área y el perímetro de 
una sala circular, utilizando su radio que se proporcionará como 
parámetro. Considera Pi = 3,14.
*/
function circulo(radio) {
    let area = 3.14 * (radio * radio)
    let perimetro = (3.14 * 2) * radio
    return console.log(`El area de la sala es de ${area} cm2 y el perimetro es de ${perimetro} cm`)
}
circulo(5)


/*
6. Crea una función que muestre en pantalla la tabla de multiplicar de 
un número dado como parámetro.
*/
function tabla(numero) {
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i
        console.log(`${numero} X ${i} = ${resultado}`)
    }
}
tabla(6)

