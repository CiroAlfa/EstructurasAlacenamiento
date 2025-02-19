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

// Log to console
console.log(message);
