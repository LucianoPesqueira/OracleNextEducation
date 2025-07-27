// Desafíos - 01

//1- Descarga otro proyecto haciendo clic en este enlace y ábrelo en Visual Studio Code.
//2- Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".
document.querySelector('h1').innerHTML = "Hora del Desafio";
//3- Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".
function clickConsole() {
    console.log("El botón fue clicado");
}
//4- Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil. Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".
function clickPrompt() {
    nombreCiudad = prompt('Ingrese el nombre de una ciudad de brasil: ');
    alert(`Estuve en ${nombreCiudad} y me acorde de ti`);
}
//5- Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".
function cliclAlerta() {
    alert('Yo amo JS');
}
//6- Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.
function clickSuma() {
    numero1 = parseInt(prompt("Ingrese el primer numero: "));
    numero2 = parseInt(prompt("Ingrese el segundo numero: "));
    alert(`La suma es: ${numero1 + numero2}`);
}
//----------------------------------------------------------------------
// Desafíos - 02

//1- Crear una función que muestre "¡Hola, mundo!" en la consola.
function mensaje() {
    console.log("¡Hola, mundo!");
    return;
}
mensaje();
//2- Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
function mensajeNombre(nombre) {
    console.log(`¡Hola, ${nombre}!`);
    return;
}
mensajeNombre("Luciano");
//3- Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function numeroDoble(numero) {
    console.log(`${numero * 2}`);
    return;
}
numeroDoble(2);
//4- Crear una función que reciba tres números como parámetros y devuelva su promedio.
function promedio(num1, num2, num3) {
    console.log(`${(num1 + num2 + num3) / 3}`);
    return;
}
promedio(2, 5, 2);
//5- Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function mayor(num1, num2) {
    if (num1 > num2) {
        console.log(`${num1}`);
    } else {
        console.log(`${num2}`);
    }
    return;
}
mayor(2, 5);
//6- Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo
function multiplicarASiMismo(num1) {
    console.log(`${num1 * num1}`);
    return;
}
multiplicarASiMismo(12);
//----------------------------------------------------------------------
// Desafíos - 03
console.log('Desafio numero 3');

//1- Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
function indiceMasaCorporal(altura, peso) {
    let resultado = peso / (altura ** 2);
    return `el IMC es: ${resultado.toFixed(2)}`;
}

console.log(indiceMasaCorporal(1.75, 87));
//2- Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function factorial(numero) {
    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
        resultado = resultado * i;
    }
    return resultado;
}
console.log(factorial(6));
//3- Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
function conversion(valor) {
    return valor * 4.80;
}
console.log(`US$100 equivale a R$${conversion(100)}`);
//4- Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
function calcularRectangulo(altura, ancho) {
    rectangulo = {};
    rectangulo['area'] = altura * ancho;
    rectangulo['perimetro'] = (altura ** 2) + (ancho ** 2);
    return rectangulo;
}
resultado = calcularRectangulo(100, 80);
console.log(`El area es: ${resultado['area']} y el perimetro es: ${resultado['perimetro']}`);
//5- Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
function calcularCirculo(radio) {
    const PI = Math.PI;
    circulo = {};
    circulo['area'] = PI * (radio ** 2);
    circulo['perimetro'] = 2 * PI * radio;
    return circulo;
}
resultado = calcularCirculo(25);
console.log(`El area es: ${resultado['area'].toFixed(3)} y el perimetro es: ${resultado['perimetro'].toFixed(3)}`);
//6- Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
function tablaMultiplicar(numero) {
    for (let i = 0; i <= 10; i++) {
        console.log(`${i}*${numero} : ${i * numero}`);
    }
}
tablaMultiplicar(9);
//----------------------------------------------------------------------
// Desafíos - 03
console.log('Desafio numero 4');
//1- Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];
//2- Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
//3- Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');
//4- Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function mostrarLista(lista) {
    for (let i = 0; i < lista.length; i++) {
        console.log(lista[i]);
    }
}
mostrarLista(lenguagesDeProgramacion);
//5- Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
function mostrarListaReversa(lista) {
    for (let i = lista.length - 1; i >= 0; i--) {
        console.log(lista[i]);
    }
}
mostrarListaReversa(lenguagesDeProgramacion);
//6- Crea una función que calcule el promedio de los elementos en una lista de números.
function promedioLista(lista) {
    let promedio = 0;
    for (let i = 0; i < lista.length; i++) {
        promedio += lista[i];
    }
    return promedio / lista.length;
}
console.log(promedioLista([1, 4, 5, 8, 32, 50]));
//7- Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
let max = 0;
let min = 0;
function listaMinMax(lista) {
    min = Math.min(...lista);
    max = Math.max(...lista);
    return `Minimo: ${min}, Maximo: ${max}`;
}
console.log(listaMinMax([44, 65, 122, 645,1111, 50]));
//8- Crea una función que devuelva la suma de todos los elementos en una lista.
function totalLista(lista) {
    let total = 0;
    for (let i = 0; i < lista.length; i++) {
        total += lista[i];
    }
    return total;
}
console.log(totalLista([1, 4, 5, 8, 32, 50]));
//9- Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
function posicionLista(elemento) {
    let lista = [7, 4, 5, 8, 32, 50];

    return lista.indexOf(elemento);
}
console.log(posicionLista(7));
//10- Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
function sumarListas(lista1, lista2) {
    let nuevaLista = [];
    for(let i = 0; i < lista1.length; i++) {
        nuevaLista[i] = lista1[i] + lista2[i];
    }

    return nuevaLista;
}
console.log(sumarListas([2, 4, 6, 8, 10], [2, 4, 6, 8, 10]));
//11- Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
function cuadradoLista(lista) {
    let nuevaLista = [];
    for(let i = 0; i < lista.length; i++) {
        nuevaLista[i] = lista[i] ** 2;
    }
    return nuevaLista;
}
console.log(cuadradoLista([2, 4, 12, 5]));