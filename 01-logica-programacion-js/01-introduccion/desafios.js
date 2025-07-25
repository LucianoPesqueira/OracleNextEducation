// // ------------------------------------- Desafíos-------------------------------------

let flag = prompt("Eliga una etapa: 1-4: ")
if (flag == 1) {
    //-----------------------------------------Etapa 1-----------------------------------------
    //1 - Muestra una alerta con el mensaje "¡Bienvenida y bienvenido a nuestro sitio web!".
    alert("¡Bienvenida y bienvenido a nuestro sitio web!");

    //2 - Declara una variable llamada nombre y asígnale el valor "Lua".
    let nombre = "Lua";

    //3 - Crea una variable llamada edad y asígnale el valor 25.
    let edad = 25;

    //4 - Establece una variable numeroDeVentas y asígnale el valor 50.
    let numeroDeVentas = 50;

    //5 - Establece una variable saldoDisponible y asígnale el valor 1000.
    let saldoDisponible = 1000;

    //6 - Muestra una alerta con el texto "¡Error! Completa todos los campos".
    alert("¡Error! Completa todos los campos");

    //7 - Declara una variable llamada mensajeDeError y asígnale el valor "¡Error! Completa todos los campos". Ahora muestra una alerta con el valor de la variable mensajeDeError .
    let mensajeDeError = "¡Error! Completa todos los campos";

    //8- Utiliza un prompt para preguntar el nombre del usuario y almacénalo en la variable nombre.
    nombre = prompt("Ingrese su nombre");

    //9 - Pide al usuario que ingrese su edad usando un prompt y almacénala en la variable edad.
    edad = prompt("Ingrese su edad");

    //10 - Ahora, si la edad es mayor o igual a 18, muestra una alerta con el mensaje "¡Puedes obtener tu licencia de conducir!".
    // Si necesitas ayuda, las soluciones a las actividades estarán disponibles en la sección
    if (edad >= 18) {
        alert('¡Puedes obtener tu licencia de conducir!')
    }
} else if (flag == 2) {
    // -----------------------------------------Etapa 2-----------------------------------------
    //1 - Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". 
    // De lo contrario, muestra "¡Buena semana!".
    let diaSemana = prompt("Ingrese el dia de la semana: ");

    if (diaSemana == "sabado" || diaSemana == "domingo") {
        alert('¡Buen fin de semana!');
    } else {
        alert('¡Buena semana!');
    }

    //2 - Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
    let numero = prompt("Ingrese un numero: ");

    if (numero > 0) {
        alert("¡Positivo!");
    } else {
        alert("¡Negativo!");
    }

    //3 - Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". 
    // En caso contrario, muestra "Intentalo nuevamente para ganar.".
    let puntuacion = prompt("Ingrese su puntuacion: ");

    if (puntuacion >= 100) {
        alert("¡Felicidades, has ganado!");
    } else {
        alert("Intentalo nuevamente para ganar.");
    }

    //4 - Crea un mensaje que informe al usuario sobre el saldo de su cuenta, 
    // utilizando un template string para incluir el valor del saldo.
    let saldo = 12.500;

    alert(`Su saldo actual es: $${saldo}`);

    //5 - Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
    let usuario = prompt("Ingrese su nombre: ");

    alert(`¡Bienvenido!, ${usuario}`);

} else if (flag == 3) {
    //-----------------------------------------Etapa 3-----------------------------------------
    //1 - Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
    let contador = 1;

    while (contador <= 10) {
        alert(contador);
        contador++;
    }

    //2 - Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
    contador = 10;
    while (contador >= 0) {
        alert(contador);
        contador--;
    }

    //3 - Crea un programa de cuenta regresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
    let numero = prompt('Ingrese un numero: ');
    while (numero >= 0) {
        alert(numero);
        numero++;
    }

    //4 - Crea un programa de cuenta progresiva. Pide un número y cuenta desde ese número hasta 0 utilizando un bucle 'while' en la consola del navegador.
    numero = prompt('Ingrese un numero: ');

    while (numero >= 0) {
        alert(numero);
        numero--;
    }
} else if (flag == 4) {
//-----------------------------------------Etapa 3-----------------------------------------
//1 - Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.
console.log("¡Bienvenido a el curso introductorio con JavaScript!");

//2 - Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.
let nombre = "Luciano";
console.log(`¡Hola, ${nombre}!`);

//3 - Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".
alert(`¡Hola, ${nombre}!`);

//4 - Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.
let lenguaje = prompt("¿Cuál es el lenguaje de programación que más te gusta?: ");
console.log(lenguaje);

//5 - Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.
let valor1 = 12;
let valor2 = 5;
let resultado = valor1 + valor2;
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}.`)

//6 - Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.
resultado = valor1 - valor2;
console.log(`La diferencia entre ${valor1} y ${valor2} es igual a ${resultado}.`)
//7 - Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.
let edad = prompt("Ingrese su edad: ");

if (edad > 18) {
    console.log("Sos mayor de edad");
} else {
    console.log("No sos mayor de edad");
}

//8 - Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.
let numero = prompt("Ingrese un numero: ");

if (numero == 0 ) {
    console.log("El numero ingresado es igual a cero(0)");
} else if (numero > 0) {
    console.log("El numero ingresado es mayor a cero(0)");
} else {
    console.log("El numero ingresado es menor a cero(0)");
}

//9 - Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.
numero = 1;
while (numero <= 10) {
    console.log(numero);
    numero++;
}

//10 - Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.
let nota = 6;

if (nota >= 7) {
    console.log("Aprobado");
} else {
    console.log("Desaprobado");
}

//11 - Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.
console.log(Math.random());

//12 - Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.
console.log(Math.floor(Math.random() * 10) + 1);

//13 - Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.
console.log(Math.floor(Math.random() * 1000) + 1);

}