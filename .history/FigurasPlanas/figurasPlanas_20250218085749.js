const message = 'Hello world' // Try edit me

function trianguloPerimetro(a, b, c)
{
  return a + b + c;
}
var datos1 =trianguloPerimetro(3, 8, 5);
var datos2 = trianguloPerimetro(5,7,9);
console.log("El perimetro del triangulo es de "+ datos1);

function trianguloArea(b, h)
{
  return  b * h /2;
}

var datos1 =trianguloArea(3, 8);

console.log("El Area del triangulo es de "+ datos1);

function cuadradoPerimetro(a)
{
  return  4 * a;
}

var datos1 =cuadradoPerimetro(3);

console.log("El Area del Cuadrado es de "+ datos1);




// Update header text
//document.querySelector('#header').innerHTML = message

// Log to console
console.log(message)
