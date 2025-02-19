const readlineSync = require('readline-sync');

function obtenerLista(nombreLista, cantidadNumeros = 5) {
    let lista = [];
    console.log(`Introduce ${cantidadNumeros} números consecutivos para ${nombreLista}:`);
    
    // Solicitar el primer número
    let primerNumero = parseInt(readlineSync.question('Número 1: '));
    if (isNaN(primerNumero)) {
        console.log('Debes ingresar un número válido.');
        return obtenerLista(nombreLista, cantidadNumeros); // Reintento completo en caso de error
    }
    lista.push(primerNumero);
    
    // Solicitar el resto de números
    for (let i = 1; i < cantidadNumeros; i++) {
        let input = parseInt(readlineSync.question(`Número ${i + 1}: `));
        if (isNaN(input)) {
            console.log('No has introducido un número. Inténtalo de nuevo.');
            i--; // Se repite la iteración actual
        } else if (input <= lista[i - 1]) {
            console.log('Tu número debe ser mayor al anterior. Inténtalo de nuevo.');
            i--; // Se repite la iteración actual
        } else {
            lista.push(input);
        }
    }
    return lista;
}

function introduceListas() {
    // Llamamos a la función obtenerLista para cada una de las listas
    let lista1 = obtenerLista('lista 1');
    let lista2 = obtenerLista('lista 2');
    
    // Retornamos ambas listas (puede ser en un objeto o array)
    return { lista1, lista2 };
}

// Ejemplo de uso
const { lista1, lista2 } = introduceListas();
console.log('Lista 1:', lista1);
console.log('Lista 2:', lista2);
function unirListasOrdenadas(lista1, lista2) {
    let listaUnida = [];
    let i = 0;
    let j = 0;
    
    // Mientras haya elementos en ambas listas
    while (i < lista1.length && j < lista2.length) {
        // Agregar el menor de los dos elementos
        if (lista1[i] < lista2[j]) {
            listaUnida.push(lista1[i]);
            i++;
        } else {
            listaUnida.push(lista2[j]);
            j++;
        }
    }
    
    // Agregar los elementos restantes de la lista que no se haya completado
    while (i < lista1.length) {
        listaUnida.push(lista1[i]);
        i++;
    }
    while (j < lista2.length) {
        listaUnida.push(lista2[j]);
        j++;
    }
    
    return listaUnida;
}
unirListasOrdenadas(lista1, lista2);