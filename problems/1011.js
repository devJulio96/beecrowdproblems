export function problem(lines) {
let raio = parseFloat(lines[0]);
const PI = 3.14159;

let volEsf = (4/3.0)*PI*raio**3;
console.log(`VOLUME = ${volEsf.toFixed(3)}`);
}