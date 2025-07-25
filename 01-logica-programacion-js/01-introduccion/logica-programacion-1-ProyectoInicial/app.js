//Hola mundo - pop-up
let numeroMaximoSecreto = parseInt(prompt("Ingrese el tamaño maximo del numero secreto: "));
let numeroSecreto = Math.floor(Math.random() * numeroMaximoSecreto) + 1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 5;

console.log(numeroSecreto);

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Ingrese un numero entre 1-${numeroMaximoSecreto}: `));

    console.log(typeof(numeroUsuario));

    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste, el número es: ${numeroSecreto}, lo hiciste en: ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El numero secreto es menor');
        } else {
            alert('El numero secreto es mayor');
        }
        intentos++;
        //palabraVeces = 'veces';
        if (intentos > maximosIntentos) {
            alert(`Llegastes al numero ${maximosIntentos} de intentos`);
            break;
        }
        // alert('El numero secreto era ' + numeroSecreto + ', pero elegiste ' + numeroUsuario);
        // alert('Lo siento, no acertaste el numero');
    }
}   