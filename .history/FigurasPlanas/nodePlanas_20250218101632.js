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

function drawTriangle(size) {
    let triangle = '';
    for (let i = 1; i <= size; i++) {
        triangle += '#'.repeat(i) + '\n';
    }
    return triangle;
}
console.log('Triangle:\n' + drawTriangle(5));


console.log('Cuadrado:');
console.log('Perímetro:', cuadradoPerimetro(3));
console.log('Área:', cuadradoArea(3));

console.log('Rectángulo:');
console.log('Perímetro:', rectanguloPerimetro(3, 8));
console.log('Área:', rectanguloArea(3, 8));

console.log('Círculo:');
console.log('Perímetro:', circuloPerimetro(3));
console.log('Área:', circuloArea(3));

function drawSquare(size) {
    let square = '';
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            square += '# ';
        }
        square += '\n';
    }
    return square;
}

function drawRectangle(width, height) {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            rectangle += '# ';
        }
        rectangle += '\n';
    }
    return rectangle;
}


function drawCircle(radius) {
    let circle = '';
    for (let y = -radius; y <= radius; y++) {
        for (let x = -radius; x <= radius; x++) {
            if (x * x + y * y <= radius * radius) {
                circle += '#';
            } else {
                circle += ' ';
            }
        }
        circle += '\n';
    }
    return circle;
}

// Ejemplos de uso:
console.log('Square:\n' + drawSquare(5));
console.log('Rectangle:\n' + drawRectangle(8, 4));

console.log('Circle:\n' + drawCircle(5));
