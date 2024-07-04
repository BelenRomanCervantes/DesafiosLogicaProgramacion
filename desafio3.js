/* 
1. Crea un contador que comience en 1 y 
vaya hasta 10 usando un bucle 'while'. 
Muestra cada número.
*/
let numero = 1;
while (numero < 11) {
    alert(numero)
    numero = numero + 1
};

/*
2. Crea un contador que comience en 10 y vaya hasta 0 
usando un bucle 'while'. Muestra cada número.
*/
let numero2 = 10;
while (numero2 >= 0) {
    alert(numero2)
    numero2 = numero2 - 1
};

/*
3. Crea un programa de cuenta progresiva. 
Pide un número y cuenta desde 0 hasta ese número 
utilizando un bucle 'while' en la consola del navegador.
*/
let numeroInicial = 0;
let numeroUsuario = prompt('Por favor inserta un numero para iniciar la cuenta progresiva')
while (numeroInicial <= numeroUsuario) {
    alert(numeroInicial)
    numeroInicial = numeroInicial + 1
}
/*
4. Crea un programa de cuenta regresiva. 
Pide un número y cuenta desde ese número hasta 0 
utilizando un bucle 'while' en la consola del navegador.
*/
let numeroFinal = 0;
let numeroUsuario2 = prompt('Por favor inserta un numero para iniciar la cuenta regresiva')
while (numeroUsuario2 >= numeroFinal) {
    alert(numeroUsuario2)
    numeroUsuario2 = numeroUsuario2 - 1
}
