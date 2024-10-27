export function problem(lines) {
let [A, B, C] = lines[0].split(" ");

A = parseFloat(A);
B = parseFloat(B);
C = parseFloat(C);

const areaTriangulo = (a,c) => {
    return ((a*c)/2).toFixed(3);
}

const areaCirculo = (c) => {
    const PI = 3.14159;
    return (PI*c**2).toFixed(3);
} 

const areaTrapezio = (a,b,c) => {
    return (((a+b)*c)/2).toFixed(3);
}

const areaQuadrado = (b) => {
    return (b**2).toFixed(3);
}

const areaRetangulo = (a,b) => {
    return (a*b).toFixed(3);
}

console.log(`TRIANGULO: ${areaTriangulo(A,C)}`);
console.log(`CIRCULO: ${areaCirculo(C)}`);
console.log(`TRAPEZIO: ${areaTrapezio(A,B,C)}`);
console.log(`QUADRADO: ${areaQuadrado(B)}`);
console.log(`RETANGULO: ${areaRetangulo(A,B)}`);
}