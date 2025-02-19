const readlineSync = require('readline-sync');
    let edades = [];
    for (let i = 0; i < 10; i++) {
        let edad;
        while (true)
        {
            let input = readlineSync.question('Introduce una edad:');
            edad = parseInt(input,9);
            if (isNaN(edad)) {
                console.log('No has introducido un número. Intentalo de nuevo');            
        } 
        else if (edad < 0 || edad > 120) 
            {
            console.log('Edad no válida. pon una edad en el rango de 1 - 120. Intentalo de nuevo');

        }
        else

        {
            break;
        }
        edades.push(edad);
    }
    
}
console.log(edades[0]);