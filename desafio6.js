/*
1. Crear una función que muestre "¡Hola, mundo!" en la consola.
*/
function hola() {
    return console.log("¡Hola, mundo!")
}
hola()

/*
2. Crear una función que reciba un nombre como parámetro y muestre 
"¡Hola, [nombre]!" en la consola.
*/
function holaNombre(nombre) {
    return console.log(`¡Hola, ${nombre}!`)
}
holaNombre("belen")

/*
3. Crear una función que reciba un número como parámetro y devuelva el 
doble de ese número.
*/
function doble(numero) {
    return console.log(numero * 2)
}
doble(23)

/*
4. Crear una función que reciba tres números como parámetros y devuelva 
su promedio.
*/
function promedio(num1, num2, num3) {
    return console.log((num1 + num2 + num3) / 3)
}
promedio(6, 8, 4)

/*
5. Crear una función que reciba dos números como parámetros y devuelva 
el mayor de ellos.
*/
function mayor(num1, num2) {
    return console.log(num1 > num2 ? num1 : num2)
}
mayor(9, 4)


/*
6. Crear una función que reciba un número como parámetro y devuelva 
el resultado de multiplicar ese número por sí mismo.
*/
function multi(numero) {
    return console.log(numero * numero)
}
multi(6)

