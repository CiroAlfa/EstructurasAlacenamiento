const message = 'Hello world'; // Try edit me

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
    return 2 * Math.PI * r; // Corregido para calcular la circunferencia
}
function circuloArea(r) {
    return Math.PI * Math.pow(r, 2);
}

// Calcular y mostrar resultados
document.addEventListener("DOMContentLoaded", () => {
    // Triángulo
    const areaTriangulo = trianguloArea(3, 8);
    const perimetroTriangulo = trianguloPerimetro(3, 8, 5);
    document.getElementById("areaTriangulo").innerText = areaTriangulo;
    document.getElementById("perimetroTriangulo").innerText = perimetroTriangulo;
    
    // Rectángulo
    const areaRectangulo = rectanguloArea(3, 8);
    const perimetroRectangulo = rectanguloPerimetro(3, 8);
    document.getElementById("areaRectangulo").innerText = areaRectangulo;
    document.getElementById("perimetroRectangulo").innerText = perimetroRectangulo;

    // Cuadrado
    const areaCuadrado = cuadradoArea(3);
    const perimetroCuadrado = cuadradoPerimetro(3);
    document.getElementById("areaCuadrado").innerText = areaCuadrado;
    document.getElementById("perimetroCuadrado").innerText = perimetroCuadrado;

    // Círculo
    const areaCirculo = circuloArea(3);
    const perimetroCirculo = circuloPerimetro(3);
    document.getElementById("areaCirculo").innerText = areaCirculo;
    document.getElementById("perimetroCirculo").innerText = perimetroCirculo;
});
function drawSquare(size) {
    let square = '';
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            square += '#';
        }
        square += '\n';
    }
    return square;
}

function drawRectangle(width, height) {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            rectangle += '#';
        }
        rectangle += '\n';
    }
    return rectangle;
}

function drawTriangle(size) {
    let triangle = '';
    for (let i = 1; i <= size; i++) {
        triangle += '#'.repeat(i) + '\n';
    }
    return triangle;
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
console.log('Triangle:\n' + drawTriangle(5));
console.log('Circle:\n' + drawCircle(5));

// Log to console
console.log(message);
