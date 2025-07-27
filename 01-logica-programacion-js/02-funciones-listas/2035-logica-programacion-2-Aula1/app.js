let numeroSecreto = 0;
let intentos = 0;
let intentosMaximo = 5;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
        if (intentos > intentosMaximo) {
            asignarTextoElemento('p', `Has llegado al numero maximo de intentos que es ${intentos}`);
            document.querySelector('#intentar').setAttribute('disabled', 'true');
            setTimeout(function () {
                condicionesIniciales();
            }, 2000);
        }
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();//recursividad: se vuelve a llamar a si misma
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego de numero secreto');
    asignarTextoElemento('p', `Seleccione un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    document.querySelector('#intentar').removeAttribute('disabled');
    intentos = 1;
    return;
}

function reiniciarJuego() {
    limpiarCaja();//limpiar caja

    //genero el numero secreto
    //mensaje de seleccione un numero 1-10
    //inicializo la variable intento
    condicionesIniciales();

    //deshabilitar el boton nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    return;
}


condicionesIniciales();