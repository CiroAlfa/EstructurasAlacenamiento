const readlineSync = require('readline-sync');
function pedirEdad() {
let edades = [];

for (let i = 0; i < 4; i++) {
  let edad; 
  while (true) 
    {
    let input = readlineSync.question('Introduce una edad: ');
    edad = parseInt(input, 4);

    if (isNaN(edad)) {
      console.log('No has introducido un número. Inténtalo de nuevo.');
    } else if (edad < 1 || edad > 120) {
      console.log('Edad no válida. Pon una edad en el rango de 1 - 120. Inténtalo de nuevo.');
    } else {
      
      break;
    }
  }
  
  edades.push(edad);
}



console.log("Edades ingresadas:", edades);
return edades;
}

function resultadosEdades() {

    let edades = pedirEdad();
    let menorDeEdad =[] ;
    for (let i = 0; i < edades.length; i++) {
        if (edades[i] < 18) {
            
            menorDeEdad.push(menorDeEdad[i]);
        }    
        else if (edades[i] >= 18 && edades[i] < 60) {
            console.log('Adulto:', edades[i]);
        }
        else {
            console.log('Adulto Mayor:', edades[i]);
        }
        
    }
    console.log('Menores de edad:', menorDeEdad);5
    console.log('Menor de edad:', edades[i]);


}
resultadosEdades();