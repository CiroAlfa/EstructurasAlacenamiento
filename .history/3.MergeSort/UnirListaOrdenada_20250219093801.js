const readlinesSync = require('readline-sync');

const readlineSync = require('readline-sync');

function introduceListas() {
    let lista1 = [];
    
    console.log('Introduce cinco números consecutivos para la lista 1:');
    
    // Pedir el primer número
    let input1 = parseInt(readlineSync.question('Número 1: '));

    if (isNaN(input1)) {
        console.log('Debes ingresar un número válido.');
        return;
    }

    lista1.push(input1);

    for (let i = 1; i < 5; i++) {
        let input = parseInt(readlineSync.question(`Número ${i + 1}: `));

        if (isNaN(input)) {
            console.log('No has introducido un número. Inténtalo de nuevo.');
            i--; // Repetir la iteración
        } else if (input <= lista1[i - 1]) {
            console.log('Tu número debe ser mayor al anterior. Inténtalo de nuevo.');
            i--; // Repetir la iteración
        } else {
            lista1.push(input);
        }
    }

    console.log('Lista 1 ingresada correctamente:', lista1);
}

introduceListas();

function unirListasOrdenadas(lista1, lista2)
{
    let lista1 = [];
    let lista2 = [];


}
