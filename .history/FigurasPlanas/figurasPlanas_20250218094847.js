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

console.log("Siendo a = "+ 3 + " El Perimetro del Cuadrado es de "+  datos1);

function cuadradoArea(a)
{
  return  a * a;
  
}
var datos1 =cuadradoArea(3);

console.log("Siendo a = "+ 3 + " El Area del Cuadrado es de "+  datos1);

function rectanguloPerimetro(a, b)
{
  return  2 *(b + a);  
}
function rectanguloArea(a, b)
{
  return  a * b;
}
console.log("Siendo a = "+ 3 + " y b = "+ 8 + " El Perimetro del Rectangulo es de "+  rectanguloPerimetro(3, 8));
console.log("Siendo a = "+ 3 + " y b = "+ 8 + " El Area del Rectangulo es de "+  rectanguloArea(3, 8));

function circuloPerimetro(r)
{
  return 2 * Math.PI * Math.pow(r,2);
}

function circuloArea(r)
{
  return Math.PI * Math.pow(r,2);
}
var datos1 =circuloPerimetro(3);
var datos2 =circuloArea(3);
console.log("Siendo r = "+ 3 + " El Perimetro del Circulo es de "+  datos1);
console.log("Siendo r = "+ 3 + " El Area del Circulo es de "+  datos2);

// Update header text
//document.querySelector('#header').innerHTML = message

// Log to console
console.log(message)
