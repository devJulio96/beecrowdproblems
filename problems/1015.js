export function problem(lines){
let [p1,p2] = lines;

let [x1,y1] = p1.split(" ");
let [x2,y2] = p2.split(" ");

let dif1 = x2 - x1;
let dif2 = y2 - y1;

const distancia = (a,b) => {
    let somaQuad = (a**2 + b**2);
    return Math.sqrt(somaQuad).toFixed(4);
} //Math.sqrt(A) tira raiz quadrada de a.

console.log(`${distancia(dif1,dif2)}`);
}