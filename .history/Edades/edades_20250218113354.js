const readlineSync = require('readline-sync');

let edades = [];

for (let i = 0; i < 10; i++) {
  let edad;
  // Bucle interno para asegurarse de que la entrada es válida
  while (true) {
    let input = readlineSync.question('Introduce una edad: ');
    edad = parseInt(input, 10);

    if (isNaN(edad)) {
      console.log('No has introducido un número. Inténtalo de nuevo.');
    } else if (edad < 1 || edad > 120) {
      console.log('Edad no válida. Pon una edad en el rango de 1 - 120. Inténtalo de nuevo.');
    } else {
      // Si llegamos aquí, la edad es válida
      break;
    }
  }
  // Solo se almacena la edad válida
  edades.push(edad);
}

console.log("Edades ingresadas:", edades);
