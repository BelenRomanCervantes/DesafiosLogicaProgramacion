/* 
1. Pregunta al usuario qué día de la semana es. 
Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". 
De lo contrario, muestra "¡Buena semana!".
*/
let diaUsuario = prompt('Inserte el dia de la semana');
let nuevoDiaUsuario = diaUsuario.toLowerCase;
if (diaUsuario == 'sabado' || diaUsuario == 'domingo') {
    alert('Buen fin de semana!')
} else {
    alert('Buena semana!')
};

/*
2. Verifica si un número ingresado por el usuario es positivo o negativo. 
Muestra una alerta informativa.
*/
let numUsuario = prompt('Inserta un numero cualquiera');
if (numUsuario >= 0) {
    alert("El numero es positivo")
} else {
    alert("El numero es negativo")
}

/*
3. Crea un sistema de puntuación para un juego. 
Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!".
En caso contrario, muestra "Intentalo nuevamente para ganar.".
*/
let puntuacion = prompt('Inserta tu puntuacion');
if (puntuacion >= 100) {
    alert("¡Felicidades, has ganado!")
} else {
    alert("Intentalo nuevamente para ganar.")
}

/*
4. Crea un mensaje que informe al usuario sobre el saldo de su cuenta, 
utilizando un template string para incluir el valor del saldo.
*/
let saldo = 6348523.26;
alert(`El saldo de tu cuenta es de: ${saldo}`);

/*
5. Pide al usuario que ingrese su nombre mediante un prompt. 
Luego, muestra una alerta de bienvenida usando ese nombre.
*/
let nombre = prompt('Por favor, ingresa tu nombre');
alert(`Bienvenido/a: ${nombre}`)
