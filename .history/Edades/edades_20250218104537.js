let edades = [];
for (let i = 0; i < 10; i++) {
    let edad = parseInt(prompt('Introduce una edad:'));
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