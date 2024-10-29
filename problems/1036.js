export function problem(lines) {
let [A, B, C] = lines[0].split(" ").map(Number); 

let delta = (Math.pow(B,2)) - (4*A*C);
let raizDelta = Math.sqrt(delta);
let baskP1R1 = (-B) + raizDelta;
let baskP1R2 = (-B) - raizDelta; 
let baskP2 = A*2;

let R1 = (baskP1R1/baskP2).toFixed(5);
let R2 = (baskP1R2/baskP2).toFixed(5);

if (A == 0 || delta < 0) {
    console.log(`Impossivel calcular`);
} else {
    console.log(`R1 = ${R1}\nR2 = ${R2}`);
}
}