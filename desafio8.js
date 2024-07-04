/*
1. Crea una lista vacía llamada "listaGenerica".
*/
let listaGenerica = [];
console.log(listaGenerica);

/*
2. Crea una lista de lenguajes de programación llamada 
"lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 
'C', 'C++', 'Kotlin' y 'Python'.
*/
let lenguajesProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
console.log(lenguajesProgramacion);

/*
3. Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 
'Java', 'Ruby' y 'GoLang'.
*/
lenguajesProgramacion.push('Java');
lenguajesProgramacion.push('Ruby');
lenguajesProgramacion.push('GoLang');
console.log(lenguajesProgramacion);

/*
4. Crea una función que muestre en la consola todos los elementos de la 
lista "lenguagesDeProgramacion.
*/
function mostrarLista() {
    return console.log(lenguajesProgramacion);
}
mostrarLista()

/*
5. Crea una función que muestre en la consola todos los elementos de la 
lista "lenguagesDeProgramacion en orden inverso.
*/
function mostrarListaInversa() {
    return console.log(lenguajesProgramacion.reverse());
}
mostrarListaInversa()

/*
6. Crea una función que calcule el promedio de los elementos en una lista 
de números.
*/
let numeros = [2, 3, 6, 8];
function promedio(lista) {
    let suma = 0;
    for (let n of lista) {
        suma += n;
    }
    return console.log(suma / numeros.length)
}
promedio(numeros)

/* 
7. Crea una función que muestre en la consola el número más grande y 
el número más pequeño en una lista.
*/
function grandePequeño(lista) {
    let grande = 0;
    for (let numero of lista) {
        if (grande < numero) {
            grande = numero;
        }
    }
    let pequeño = lista[0];
    for (let index = 0; index < lista.length; index++) {
        if (lista[index] < pequeño) {
            pequeño = lista[index]
        }
    }
    return console.log(`El numero mayor de la lista es ${grande} y el menor es ${pequeño}`)
}
grandePequeño(numeros)

/* 
8. Crea una función que devuelva la suma de todos los elementos en una 
lista.
*/
function suma(lista) {
    let suma = 0;
    for (let n of lista) {
        suma += n;
    }
    return console.log(suma)
}
suma(numeros)

/* 
9. Crea una función que devuelva la posición en la lista donde se 
encuentra un elemento pasado como parámetro, o -1 si no existe en la 
lista.
*/
function posicion(lista) {
    return console.log(lista.indexOf(3))
}
posicion(numeros)

/* 
10. Crea una función que reciba dos listas de números del mismo tamaño 
y devuelva una nueva lista con la suma de los elementos uno a uno.
*/
let numeros1 = [3, 8, 5, 6]
let numeros2 = [3, 4, 7, 9]
function union(lista1, lista2) {
    let union = [];
    for (index = 0; index < lista1.length; index++) {
        union[index] = lista1[index] + lista2[index];
    }
    return console.log(union)
}
union(numeros1, numeros2)

/* 
11. Crea una función que reciba una lista de números y devuelva una nueva 
lista con el cuadrado de cada número.
*/
function cuadrados(lista) {
    let nueva = [];
    for (index = 0; index < lista.length; index++) {
        nueva[index] = lista[index] * lista[index];
    }
    return console.log(nueva)
}
cuadrados(numeros1)
