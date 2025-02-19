function trianguloPerimetro(a, b, c) {
    return a + b + c;
}
function trianguloArea(b, h) {
    return b * h / 2;
}

function cuadradoPerimetro(a) {
    return 4 * a;
}
function cuadradoArea(a) {
    return a * a;
}

function rectanguloPerimetro(a, b) {
    return 2 * (b + a);
}
function rectanguloArea(a, b) {
    return a * b;
}

function circuloPerimetro(r) {
    return 2 * Math.PI * r;
}
function circuloArea(r) {
    return Math.PI * Math.pow(r, 2);
}

// Calcular y mostrar resultados en la terminal
console.log('Triángulo:');
console.log('Perímetro:', trianguloPerimetro(3, 8, 5));
console.log('Área:', trianguloArea(3, 8));

console.log('Cuadrado:');
console.log('Perímetro:', cuadradoPerimetro(3));
console.log('Área:', cuadradoArea(3));

console.log('Rectángulo:');
console.log('Perímetro:', rectanguloPerimetro(3, 8));
console.log('Área:', rectanguloArea(3, 8));

console.log('Círculo:');
console.log('Perímetro:', circuloPerimetro(3));
console.log('Área:', circuloArea(3));
