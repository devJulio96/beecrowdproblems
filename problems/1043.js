export function problem(lines) {
    let [A, B, C] = lines[0].split(" ").map(Number);
    let perimetro;
    let area;

    const calcularPouA = (a, b, c) => {
        if (  c < (a + b)  &&  a < (b + c)  && b < (c + a) ){
            perimetro = a + b + c;
            return console.log(`Perimetro = ${perimetro.toFixed(1)}`);
        } else {
            area = ((a + b)*c)/2;
            return console.log(`Area = ${area.toFixed(1)}`);
        }
    }

    calcularPouA(A, B, C);
}