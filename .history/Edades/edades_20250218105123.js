const readlineSync = require('readline-sync');
    let edades = [];
    for (let i = 0; i < 10; i++) {
        let input = readlineSync.question('Introduce una edad:');
        let edad = parseInt(input,10);
        if (isNaN(edad)) {
            alert('No has introducido un número');
            i--;
        } 
        else if (edad < 0 || edad > 120) {
            alert('Edad no válida');
            i--;
        }
        else

        {
            edades.push(edad);
        }

    }
    console.log(edades);