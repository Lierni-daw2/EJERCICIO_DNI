"use strict";
/*
Se pide hacer una aplicación web con Javascript que pida al usuario un número de DNI con letra y determine si la letra es correcta. 
Para ello crea un index.html que llame al archivo Javascript con tu código, y utiliza las funciones prompt() y alert() para comunicarte con 
el usuario.
Haz este ejercicio en un repositorio git nuevo y súbelo a GitHub.
Para marcar esta tarea como entregada, indica la URL del repositorio GitHub donde está el código.
*/

function confirmaDniUsuario(dniUsuario = prompt("Introduce tu dni y letra")) {
    const letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

    if (!dniUsuario || dniUsuario.length < 8 || dniUsuario.length > 9) {
        alert("El DNI no es válido. por longitud");
        return;
    }
    // TENEMOS QUE SEPARAR EL NUMERO DEL DNI DE LA LETRA. funcion slice(1,2) coge los elementos entre los dos parametros desde el primero hasta el ultimo menos 1.
    let numero = dniUsuario.slice(0, 8); //el ultimo numero no lo coge
    let letra = dniUsuario.slice(8).toUpperCase();

    if (isNaN(numero)) {
        alert("El número de DNI no es válido");
        return;
    }

    let resto = (numero % 23);
    //Mirar a partir de aqui
    let letraResto = "";
    for (let i = 0; i < letras.length; i++) {
        if (resto === i) {
            letraResto = letras[i];
        }
    }

    if (letra === letraResto) {//Comparamos letra que nos han dado, con letraDNI la letra correcta despues de hallar el resto
        alert("El DNI es correcto.");
        return;
    } else {
        alert("La letra del DNI no es correcta. La letra correcta es: " + letraResto);
        return;
    }
}

confirmaDniUsuario();






